# Exposia — صفحة هبوط تعريفية

صفحة هبوط لمؤسسة **Exposia** المتخصصة في تصميم العروض التقديمية: عروض مؤسسية،
عروض مستثمرين (Pitch Decks)، هوية بصرية للشرائح، وتصميم حركي. صفحة واحدة ثابتة
بلا خادم وبلا مفاتيح — RTL أولًا (عربي مع لمسات إنجليزية)، بجماليات Aurora الداكنة.

```bash
npm install        # الحزم مثبتة في package.json
npm run dev        # http://localhost:5173
npm run typecheck  # tsc --noEmit
npm run build      # حزمة ثابتة في dist/
```

## أقسام الصفحة

| القسم | الملف | المحتوى |
|---|---|---|
| الترويسة | `src/landing/Header.tsx` | شعار Exposia + تنقّل بالمراسي + زر «تواصل معنا» |
| الواجهة | `src/landing/Hero.tsx` + `EditorMockup.tsx` | عنوان «نصنع عروضًا تقديمية تُقنع قبل أن تُشرح» + معاينة عرض عائمة |
| الخدمات | `src/landing/ServicesStrip.tsx` | Presentation Design · Pitch Decks · Visual Identity · Motion Design |
| أعمالنا | `src/landing/WorkShowcase.tsx` | أربع بطاقات معاينة (Corporate / Pitch / Education / Marketing) |
| كيف نعمل | `src/landing/ProcessSection.tsx` | أربع خطوات + بطاقة «اطلب عرض سعر» |
| لماذا Exposia | `src/landing/WhyUs.tsx` + `Stats.tsx` | عرض توضيحي + أرقام (مشاريع/عملاء/رضا/خبرة) |
| الخاتمة | `src/landing/FinalCTA.tsx` | مشهد Aurora السينمائي + «اطلب عرض سعر» عبر البريد |
| التذييل | `src/landing/Footer.tsx` | روابط + بريد التواصل + حقوق |

## البيانات القابلة للتغيير

- **قنوات التواصل**: `src/landing/contact.ts` (البريد وsubject الرسالة) — حدّثها قبل النشر.
- **الأرقام في `Stats.tsx`** و**أسماء الأعمال في `WorkShowcase.tsx`**: نصوص تسويقية
  أولية تُستبدل بأرقام وأعمال حقيقية عند توفّرها.
- **الهوية اللونية**: مأخوذة من Brand Kit المؤسسة — بنفسجي حيوي `#6A0DFF`، بنفسجي عميق
  `#4B088E`، وردي `#E23C8A`، لافندر `#EAD9FF`؛ مع خط Poppins للنصوص اللاتينية وTajawal /
  IBM Plex Sans Arabic للعربية وGreat Vibes لتوقيع *Ideas into Slides* — محدَّدة في
  `index.html`، والمتغيرات في `src/styles/global.css`، والأنماط في `src/landing/landing.css`
  (بادئة `slf-`). الحركات وتموجات الشفق كما هي.

## البنية

```
index.html            ← RTL، عنوان ووصف Exposia، خطوط Google
src/main.tsx          ← نقطة الدخول
src/App.tsx           ← يعرض LandingPage مباشرة (صفحة واحدة، بلا موجّه)
src/landing/          ← الصفحة وأقسامها (المكوّنات + landing.css)
src/styles/global.css ← إعدادات Tailwind 4 والمتغيرات الأساسية
public/               ← favicon (نجمة Exposia)
```

## النشر

- **Vercel (مباشر الآن)**: [exposia-landing.vercel.app](https://exposia-landing.vercel.app) — مشروع
  `exposia-landing` من فرع `main`. للتحديث التلقائي عند كل دفعة: ثبّت تطبيق GitHub الخاص بـ Vercel
  على حساب `exposiaservices-dot` من لوحة Vercel (Settings → Integrations → GitHub) واربط المستودع،
  أو اطلب نشرًا يدويًا عبر الـ connector.
- **GitHub Pages**: `.github/workflows/deploy-pages.yml` يبني الصفحة (typecheck + vite build) وينشرها
  عند أي دفع إلى `main` — يلزم تفعيلها **مرة واحدة يدويًا**: **Settings → Pages → Build and deployment
  → Source: GitHub Actions** (إنشاء الموقع عبر API غير مسموح لتوكن الـ workflow؛ الخطأ المعروف
  `Resource not accessible by integration`). بعد التفعيل تُشغَّل أي دفعة إلى `main` النشر تلقائيًا.
- `.github/workflows/ci.yml` يشغّل typecheck + build على كل دفعة وطلب دمج.

## الترخيص

رخصة هذا المشروع لم تُحدَّد بعد — قرار المؤسسة (MIT مقابل خاص).
