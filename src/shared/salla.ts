/** Thin, defensive wrappers over the storefront `Salla` SDK (shapes differ slightly between themes/versions). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const S = (): any => (window as any).Salla;
export const ready = async () => { try { await S()?.onReady?.(); } catch { /* preview without SDK */ } };
export const isRtl = () => (document.documentElement.dir || 'rtl') === 'rtl';
export const t = (ar: string, en: string) => ((document.documentElement.lang || 'ar').startsWith('en') ? en : ar);

export interface Prod { id: number; name: string; url: string; image: string; price: number; regular: number; rating: number; ratingCount: number; qty: number | null; available: boolean }
const num = (v: unknown): number => { const x = typeof v === 'object' && v ? (v as { amount?: unknown }).amount : v; const n = Number(x); return Number.isFinite(n) ? n : 0; };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function normalize(p: any): Prod {
  const price = num(p?.sale_price) && num(p?.sale_price) < num(p?.regular_price ?? p?.price) ? num(p?.sale_price) : num(p?.price);
  const regular = Math.max(num(p?.regular_price), num(p?.price), price);
  return {
    id: Number(p?.id), name: String(p?.name ?? ''), url: String(p?.url ?? '#'),
    image: String(p?.image?.url ?? p?.main_image ?? p?.thumbnail ?? p?.images?.[0]?.url ?? ''),
    price, regular, rating: num(p?.rating?.stars ?? p?.rating?.rate ?? p?.rating), ratingCount: num(p?.rating?.count),
    qty: p?.quantity == null || p?.unlimited_quantity ? null : num(p?.quantity), available: p?.is_available !== false && p?.status !== 'out',
  };
}
/** Products picked by the merchant: field value is [{value, label}] or ids. */
export const ids = (sel: unknown): number[] => (Array.isArray(sel) ? sel : []).map((x) => Number(typeof x === 'object' && x ? (x as { value?: unknown }).value : x)).filter((n) => Number.isFinite(n) && n > 0);
export async function products(sel: unknown): Promise<Prod[]> {
  await ready();
  const out = await Promise.all(ids(sel).map((id) => S()?.product?.api?.getDetails?.(id).then((r: { data: unknown }) => normalize(r?.data)).catch(() => null)));
  return out.filter((p): p is Prod => !!p && !!p.name);
}
export const money = (n: number) => { try { return S()?.money?.(n) ?? `${n} ${t('ر.س', 'SAR')}`; } catch { return `${n} ${t('ر.س', 'SAR')}`; } };
export async function addToCart(id: number) {
  await ready();
  try { await S()?.cart?.addItem?.({ id, quantity: 1 }); } catch { location.href = `${location.origin}/p${id}`; }
}
export function toast(msg: string) { try { S()?.success?.(msg); } catch { /* no SDK */ } }
/** The store language: Salla's own setting first, then the page's lang attribute. */
export const storeLocale = (): string => {
  try { const l = S()?.lang?.locale ?? S()?.config?.get?.('user.language_code'); if (typeof l === 'string' && l) return l.slice(0, 2); } catch { /* no SDK */ }
  return (document.documentElement.lang || 'ar').slice(0, 2);
};
/**
 * Every merchant text field goes through this before it is rendered. A field
 * declared `multilanguage: true` arrives as `{ ar, en }` (or a JSON string of
 * it); a plain field arrives as a string. Always returns one string in the
 * store language, falling back to Arabic, then to any language that has text.
 */
export const localizedString = (v: unknown): string => {
  if (v == null) return '';
  if (typeof v === 'string') {
    const s = v.trim();
    if (s.startsWith('{') && s.endsWith('}')) { try { return localizedString(JSON.parse(s)); } catch { /* plain text */ } }
    return v;
  }
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (typeof v === 'object') {
    const o = v as Record<string, unknown>;
    const pick = o[storeLocale()] ?? o.ar ?? o.en ?? Object.values(o).find((x) => typeof x === 'string' && x);
    return typeof pick === 'string' ? pick : '';
  }
  return '';
};
export const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
