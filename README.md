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
- **الخطوط**: Google Fonts (Tajawal · IBM Plex Sans Arabic · Inter · Space Grotesk · Great Vibes)
  محدَّدة في `index.html`، والأنماط في `src/landing/landing.css` (بادئة `slf-`).

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

`.github/workflows/deploy-pages.yml` يبني الصفحة (typecheck + vite build) وينشرها على
GitHub Pages عند أي دفع إلى `main`، مع `base` تلقائي من اسم المستودع. يلزم مرة واحدة
فقط: **Settings → Pages → Source: GitHub Actions**.

`.github/workflows/ci.yml` يشغّل typecheck + build على كل دفعة وطلب دمج.

## الترخيص

رخصة هذا المشروع لم تُحدَّد بعد — قرار المؤسسة (MIT مقابل خاص).
