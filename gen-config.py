import json, uuid
IMG = "https://raw.githubusercontent.com/fooz1980k-sudo/tw-tuhfa/main/previews/{}.jpg"
U = lambda n: str(uuid.uuid5(uuid.NAMESPACE_URL, f"tuhfa/{n}"))
def T(id, label, value="", ml=True, fmt="text", req=False, mx=120, ph=""):
    f = {"id": id, "icon": "sicon-format-text-alt", "type": "string", "label": label, "format": fmt, "required": req, "maxLength": mx, "value": value, "placeholder": ph}
    if ml: f["multilanguage"] = True
    return f
IMGF = lambda id, label, value="": {"id": id, "icon": "sicon-image-landscape", "type": "string", "format": "image", "label": label, "required": False, "value": value}
URL = lambda id, label, value="": {"id": id, "icon": "sicon-link", "type": "string", "format": "url", "label": label, "required": False, "value": value, "placeholder": "https://"}
COLOR = {"id": "color", "icon": "sicon-color-palette", "type": "string", "format": "color", "inputType": "color", "label": "لون مميز (اختياري — الافتراضي لون متجرك)", "required": False, "value": ""}
SW = lambda id, label, v=False: {"id": id, "icon": "sicon-toggle-off", "type": "boolean", "format": "switch", "label": label, "required": False, "value": v}
NUM = lambda id, label, v, mn, mx, fmt="slider": {"id": id, "icon": "sicon-hashtag", "type": "number", "format": fmt, "label": label, "required": False, "value": v, "minimum": mn, "maximum": mx}
PROD = lambda mn, mx: {"id": "products", "icon": "sicon-box", "type": "items", "label": "اختر المنتجات", "placeholder": "ابحث في منتجاتك...", "format": "dropdown-list", "source": "products", "options": [], "required": True, "selected": [], "searchable": True, "multichoice": True, "minLength": mn, "maxLength": mx}
def COLL(id, label, fields, value, mx=12):
    return {"id": id, "icon": "sicon-list", "type": "collection", "format": "collection", "required": True, "minLength": 1, "maxLength": mx, "item_label": label, "fields": fields, "value": value}

comps = [
 dict(title="تُحفة · عرض سينمائي", icon="sicon-image-carousel", name="tuhfa-hero", fields=[
   COLL("slides", "شريحة", [IMGF("image", "الصورة (يفضّل 1920×1080)"), T("title", "العنوان", mx=80), T("subtitle", "الوصف", fmt="textarea", mx=200), T("button", "نص الزر", mx=30), URL("link", "رابط الزر")],
        [{"image": "", "title": "مجموعة الشتاء الفاخرة", "subtitle": "قطع مختارة بعناية، بخامات تليق بك", "button": "تسوّق الآن", "link": "/"}], mx=8),
   NUM("height", "الارتفاع (% من الشاشة)", 78, 50, 100), NUM("seconds", "مدة كل شريحة (ثانية)", 7, 3, 20), NUM("overlay", "تعتيم الصورة (%)", 55, 0, 85),
   {"id": "align", "icon": "sicon-align-center", "type": "items", "format": "radio-list", "label": "محاذاة النص", "required": False,
    "options": [{"label": "جانبي", "value": "start", "key": "start"}, {"label": "في المنتصف", "value": "center", "key": "center"}], "selected": [{"label": "جانبي", "value": "start", "key": "start"}]},
   COLOR]),
 dict(title="تُحفة · منتجات ذكية", icon="sicon-star", name="tuhfa-smart-products", fields=[
   T("title", "العنوان", "اختياراتنا لك"), T("subtitle", "الوصف", "شارات ذكية تُحسب تلقائياً: خصم، آخر القطع، الأعلى تقييماً، الأوفر", fmt="textarea", mx=200), PROD(1, 12), SW("dark", "خلفية داكنة فاخرة"), COLOR]),
 dict(title="تُحفة · عرض بعدّاد", icon="sicon-time", name="tuhfa-countdown", fields=[
   T("title", "العنوان", "عرض نهاية الأسبوع"), T("subtitle", "الوصف", "خصم على كل المجموعة لفترة محدودة", fmt="textarea", mx=200),
   {"id": "end", "icon": "sicon-calendar-time", "type": "string", "format": "datetime", "inputType": "date", "label": "ينتهي العرض في", "required": True, "value": ""},
   T("coupon", "كود الخصم (اختياري)", "", ml=False, mx=30), IMGF("image", "صورة العرض"), T("button", "نص الزر", "تسوّق العرض", mx=30), URL("link", "رابط الزر"),
   SW("hide_after", "إخفاء العنصر تلقائياً بعد انتهاء العرض", True), COLOR]),
 dict(title="تُحفة · متجرنا بالأرقام", icon="sicon-chart-bar", name="tuhfa-numbers", fields=[
   T("title", "العنوان", "متجرنا بالأرقام"), T("subtitle", "الوصف", "", fmt="textarea", mx=200),
   COLL("items", "رقم", [T("icon", "رمز تعبيري", "⭐", ml=False, mx=4, ph="مثلاً ⭐"), {"id": "number", "icon": "sicon-hashtag", "type": "number", "format": "number", "label": "الرقم", "required": True, "value": 0},
        T("suffix", "بعد الرقم", "+", mx=8, ph="+ أو ٪ أو ألف"), T("label", "الوصف", mx=40)],
        [{"icon": "😊", "number": 12000, "suffix": "+", "label": "عميل سعيد"}, {"icon": "📦", "number": 25000, "suffix": "+", "label": "طلب وصل"}, {"icon": "⭐", "number": 98, "suffix": "٪", "label": "تقييمات إيجابية"}, {"icon": "🚚", "number": 48, "suffix": " ساعة", "label": "متوسط التوصيل"}], mx=6),
   SW("light", "خلفية فاتحة"), COLOR]),
 dict(title="تُحفة · قارن قبل ما تشتري", icon="sicon-swap-horizontal", name="tuhfa-compare", fields=[
   T("title", "العنوان", "أيهم يناسبك؟"), T("subtitle", "الوصف", "نقارن لك السعر والتوفير والتقييم والتوفر، ونرشّح الاختيار الذكي", fmt="textarea", mx=200), PROD(2, 4), SW("dark", "خلفية داكنة فاخرة"), COLOR]),
 dict(title="تُحفة · جدار الثقة", icon="sicon-chat-bubbles", name="tuhfa-reviews", fields=[
   T("title", "العنوان", "وش يقولون عنا"),
   COLL("reviews", "رأي عميل", [T("name", "اسم العميل", mx=40), T("city", "المدينة", mx=30), T("text", "الرأي", fmt="textarea", mx=300), NUM("stars", "النجوم", 5, 1, 5)],
        [{"name": "نورة", "city": "الرياض", "text": "التغليف فخم والتوصيل سريع، تجربة تستاهل", "stars": 5}, {"name": "فهد", "city": "جدة", "text": "الجودة أعلى من المتوقع وخدمة العملاء محترمة", "stars": 5}, {"name": "سارة", "city": "الدمام", "text": "ثاني طلب لي ومستحيل يكون الأخير", "stars": 5}], mx=20),
   {"id": "badges", "icon": "sicon-shield-check", "type": "collection", "format": "collection", "required": False, "minLength": 0, "maxLength": 6, "item_label": "شارة ثقة",
    "fields": [T("emoji", "رمز", "✓", ml=False, mx=4), T("text", "النص", mx=40)], "value": [{"emoji": "🔒", "text": "دفع آمن"}, {"emoji": "🚚", "text": "توصيل سريع"}, {"emoji": "↩️", "text": "استرجاع سهل"}]},
   SW("dark", "خلفية داكنة فاخرة"), COLOR]),
 dict(title="تُحفة · أقسام سينمائية", icon="sicon-layout-grid-rearrange", name="tuhfa-categories", fields=[
   T("title", "العنوان", "تسوّق حسب القسم"), T("subtitle", "الوصف", "", fmt="textarea", mx=200),
   COLL("tiles", "قسم", [IMGF("image", "الصورة"), T("title", "اسم القسم", mx=40), T("caption", "سطر صغير", mx=40, ph="مثلاً: اكتشف المجموعة"), URL("link", "رابط القسم")],
        [{"image": "", "title": "عبايات", "caption": "اكتشف المجموعة", "link": "/"}], mx=12), COLOR]),
]
for c in comps: c["key"] = U(c["name"]); c["image"] = IMG.format(c["name"])
out = {"name": {"ar": "تُحفة — عناصر فاخرة ذكية", "en": "Tuhfa — Smart Luxury Components"},
       "description": {"ar": "7 عناصر سينمائية فاخرة تعمل على أي ثيم في سلة: عرض سينمائي، منتجات بشارات ذكية، عرض بعدّاد، متجرنا بالأرقام، قارن قبل ما تشتري، جدار الثقة، وأقسام سينمائية. تأخذ لون متجرك تلقائياً.",
                       "en": "7 cinematic, data-smart components for any Salla theme: hero, smart products, countdown offer, numbers, compare, trust wall and editorial categories. They adopt your store colour automatically."},
       "author": {"name": "Khaled Alshamrani", "email": "fooz1980k@gmail.com", "url": "https://github.com/fooz1980k-sudo/tw-tuhfa"},
       "repository": "https://github.com/fooz1980k-sudo/tw-tuhfa", "components": comps}
json.dump(out, open("twilight-bundle.json", "w"), ensure_ascii=False, indent=2)
print(len(comps), "components")
