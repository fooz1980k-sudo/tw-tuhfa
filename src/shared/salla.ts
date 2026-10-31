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
/** Merchant text fields may be plain strings or {ar, en} when multilanguage. */
export const txt = (v: unknown): string => (v && typeof v === 'object' ? String((v as Record<string, string>)[(document.documentElement.lang || 'ar').slice(0, 2)] ?? (v as Record<string, string>).ar ?? '') : String(v ?? ''));
export const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
