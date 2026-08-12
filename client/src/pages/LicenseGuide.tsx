import { ArrowRight, CheckCircle2, Clock3, FileText, ExternalLink, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import SiteNav from "../components/SiteNav";

const phone = "0612160626";
const whatsapp = `https://wa.me/212${phone.slice(1)}`;

const documents = [
  "المطبوع الخاص (طلب اجتياز الامتحان) معبأ وموقع.",
  "نسخة من بطاقة التعريف الوطنية أو جواز السفر ساري الصلاحية.",
  "شهادة طبية لا تتعدى 3 أشهر من طرف طبيب معتمد.",
  "صورتان فوتوغرافيتان حديثتان (35x45 ملم).",
  "وصل أداء الواجبات (حوالي 450 درهم شاملة للتمبر).",
];

const renewal = [
  "مطبوع طلب تجديد رخصة السياقة.",
  "نسخة من بطاقة التعريف الوطنية.",
  "رخصة السياقة القديمة (الأصلية).",
  "شهادة طبية (في حالة التجديد الدوري أو بلوغ سن معينة).",
  "واجبات التجديد (400 درهم للرخصة الإلكترونية).",
];

export default function LicenseGuide() {
  return <div dir="rtl" className="guide-page original-guide"><SiteNav active="license" /><header className="guide-header"><div className="container guide-title"><span className="guide-overline">دليل عملي · المملكة المغربية</span><h1>دليل رخصة السياقة<br /><em>بالمغرب</em></h1><p>كل ما تحتاجه من وثائق ومعلومات لاجتياز الامتحان بنجاح.</p></div></header><main><section className="guide-welcome"><div className="container welcome-inner"><div><span className="welcome-icon"><CheckCircle2 size={18} /></span><div><strong>مواكبة واضحة من أول خطوة</strong><p>نساعدك على فهم الوثائق ومراحل الامتحان.</p></div></div><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> اسألنا الآن</a></div></section><section className="original-guide-section container"><div className="section-kicker"><span>01</span><div /><p>الوثائق المطلوبة</p></div><h2>جهّز ملفك<br /><span>بلا تعقيد.</span></h2><div className="original-guide-grid"><GuideCard number="01" title="وثائق الحصول على رخصة السياقة لأول مرة" items={documents} image="assets/license-application-form.png" imageAlt="نموذج طلب الحصول على رخصة السياقة" /><GuideCard number="02" title="وثائق تجديد رخصة السياقة" items={renewal} image="assets/license-renewal-form.png" imageAlt="نموذج تجديد رخصة السياقة" /></div></section><section className="exam-section"><div className="container"><div className="section-kicker light"><span>02</span><div /><p>مراحل الامتحان</p></div><h2>اعرف الطريق<br /><span>قبل يوم الاختبار.</span></h2><div className="exam-block"><div className="exam-copy"><span className="exam-number">01</span><h3>الامتحان النظري <em>(الكود)</em></h3><p>يتم اجتياز الامتحان النظري عبر نظام معلوماتي متطور. يتكون الاختبار من أسئلة متعددة الاختيارات تغطي قانون السير، الإشارات الطرقية، والميكانيك البسيطة.</p><p className="exam-note"><b>مستجدات 2024:</b> تم تحديث بنك الأسئلة ليشمل 1000 سؤال جديد لتعزيز السلامة الطرقية. يجب الحصول على 32/40 كحد أدنى للنجاح في صنف «ب».</p></div><img src="assets/driving-theory-test.jpg" alt="اختبار نظري لإشارات وقانون السير" /></div><div className="exam-block exam-block-reverse"><div className="exam-copy"><span className="exam-number">02</span><h3>الامتحان التطبيقي <em>(السياقة)</em></h3><p>بعد النجاح في «الكود»، ينتقل المترشح للمرحلة التطبيقية التي تنقسم إلى مناورات داخل الحلبة وسياقة في الطريق العام.</p><div className="exam-points"><p><CheckCircle2 size={17} /><b>المناورات:</b> ركن السيارة، الرجوع للخلف، والدوران.</p><p><CheckCircle2 size={17} /><b>السياقة في الطريق العام:</b> التعامل مع حركة المرور والالتزام بالقوانين.</p></div></div><div className="exam-quote"><ShieldCheck size={27} /><p>النجاح في الامتحان يتطلب التركيز العالي، التدريب المستمر، والالتزام التام بقواعد السلامة الطرقية.</p></div><figure className="practical-exam-visual"><img src="assets/practical-driving-instructor.jpg" alt="متدرب يتعلم القيادة داخل سيارة مع المدرب" loading="lazy" /><figcaption>الشق التطبيقي: تركيز، احترام للأولوية، وتحكم آمن في السيارة.</figcaption></figure></div></div></section><section className="guide-cta"><div className="container guide-cta-inner"><div><span>هل تحتاج إلى مساعدة؟</span><h2>رسالة واحدة<br /><em>تكفي للبدء.</em></h2></div><div className="guide-cta-actions"><a href={whatsapp} target="_blank" rel="noreferrer" className="button button-gold"><MessageCircle size={18} /> راسلنا على واتساب</a><a href="https://www.google.com/maps/search/?api=1&query=Auto+Ecole+Koutoubia+Marrakech" target="_blank" rel="noreferrer" className="button button-light"><MapPin size={17} /> موقعنا على الخريطة</a></div></div></section></main><footer className="site-footer"><div className="container footer-inner"><Link href="/" className="guide-logo"><img src="assets/koutoubia-mark.svg" alt="" /> مؤسسة <b>الكتبية</b></Link><p>© {new Date().getFullYear()} مؤسسة الكتبية لتعليم السياقة · جميع الحقوق محفوظة</p></div></footer></div>;
}

function GuideCard({ number, title, items, image, imageAlt }: { number: string; title: string; items: string[]; image: string; imageAlt: string }) {
  return <article className="guide-document-card"><div className="guide-document-head"><span>{number}</span><FileText size={21} /></div><h3>{title}</h3><ul>{items.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul><div className="guide-document-image"><img src={image} alt={imageAlt} loading="lazy" /></div><div className="document-foot"><Clock3 size={15} /> راجع الوثائق قبل موعدك</div></article>;
}
