// Style reminder: «طريق الثقة» — RTL editorial layout, navy/gold wayfinding, generous whitespace, road-line motif, and restrained motion.
import { ArrowLeft, ArrowUpLeft, BookOpen, Check, ChevronLeft, Clock3, ExternalLink, MapPin, Menu, MessageCircle, Phone, Play, ShieldCheck, Sparkles, Target, Trophy, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const phone = "0612160626";
const whatsapp = "https://wa.me/212612160626";
const mapUrl = "https://maps.app.goo.gl/3cbD1uLNynhpyvvp7";
const youtube = "https://www.youtube.com/@utokoutoubia";

const categories = [
  { code: "A", label: "الدراجات النارية", detail: "توازن، تحكم، وثقة على الطريق.", image: "/manus-storage/koutoubia-motorcycle_654a5fd3.jpg", tone: "gold" },
  { code: "B", label: "السيارات الخفيفة", detail: "التكوين الأكثر طلباً للقيادة اليومية والعمل.", image: "/manus-storage/koutoubia-training_4182bc8f.jpg", tone: "green" },
  { code: "C / D / EC", label: "الشاحنات والحافلات", detail: "تأهيل مهني للمسؤوليات الكبيرة.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=900&auto=format&fit=crop", tone: "navy" },
];

const benefits = [
  { icon: BookOpen, title: "تأطير نظري محيّن", text: "شرح مبسط لقواعد السير والإشارات والمفاهيم الأساسية، مع مواكبة بنك الأسئلة." },
  { icon: ShieldCheck, title: "تدريب تطبيقي آمن", text: "ممارسة ميدانية في مختلف ظروف السير لبناء الثقة وتجاوز الخوف بهدوء." },
  { icon: Target, title: "متابعة فردية", text: "مرافقة خطوة بخطوة واختبارات تجريبية قبل الامتحان الرسمي لضمان الجاهزية." },
];

function Logo() {
  return <span className="brand-mark"><img src="/manus-storage/koutoubia-mark_0750bdec.png" alt="" /><span>مؤسسة <b>الكتبية</b><small>لتعليم السياقة</small></span></span>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div dir="rtl" className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand-link" onClick={() => setOpen(false)}><Logo /></Link>
          <button className="mobile-menu" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          <nav className={open ? "main-nav is-open" : "main-nav"}>
            <a href="#about" onClick={() => setOpen(false)}>لماذا الكتبية؟</a>
            <a href="#method" onClick={() => setOpen(false)}>منهجيتنا</a>
            <a href="#categories" onClick={() => setOpen(false)}>أصناف السياقة</a>
            <Link href="/page3.html" onClick={() => setOpen(false)}>دليل الرخصة</Link>
            <Link href="/quiz" onClick={() => setOpen(false)}>اختبارات السياقة</Link>
            <Link href="/infractions" onClick={() => setOpen(false)}>المخالفات</Link>
            <a className="nav-call" href={`tel:${phone}`}><Phone size={16} /> اتصل بنا</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-texture" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> مدرسة قيادة موثوقة في المغرب</div>
              <h1>قد الطريق <em>بثقة.</em><br />ونحن نرافقك<br />في كل مرحلة.</h1>
              <p className="hero-lead">من أول درس نظري إلى لحظة الحصول على الرخصة، نضع بين يديك تكويناً واضحاً، عملياً، وقريباً منك.</p>
              <div className="hero-actions">
                <a href={`https://wa.me/212612160626?text=${encodeURIComponent("السلام عليكم، أود الاستفسار عن التسجيل في مؤسسة الكتبية.")}`} className="button button-gold"><MessageCircle size={18} /> ابدأ عبر واتساب <ArrowLeft size={17} /></a>
                <a href={`tel:${phone}`} className="button button-quiet"><Phone size={17} /> {phone}</a>
                <Link href="/infractions" className="button button-quiet">المخالفات المرورية <ArrowLeft size={17} /></Link>
              </div>
              <div className="hero-proof"><span><Check size={15} /> تكوين نظري وتطبيقي</span><span><Check size={15} /> مواكبة فردية</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame"><img src="/manus-storage/koutoubia-hero_ada736a7.jpg" alt="متعلم يتدرب على السياقة مع المدرب" /></div>
              <div className="hero-float-card"><span className="float-icon"><Trophy size={20} /></span><div><strong>هدفنا واضح</strong><small>سائق مسؤول وآمن</small></div></div>
              <div className="route-stamp"><span>01</span><small>انطلق<br />اليوم</small></div>
            </div>
          </div>
          <div className="hero-bottom"><div className="container hero-bottom-inner"><span>مدرسة الكتبية لتعليم السياقة</span><div className="road-dash" /><span>طريقك إلى الرخصة يبدأ هنا</span></div></div>
        </section>

        <section className="video-section section-pad" aria-labelledby="video-title"><div className="container video-grid"><div className="video-copy"><div className="section-kicker"><span>01</span><div /><p>شاهد طريقة التكوين</p></div><h2 id="video-title">خطوتك الأولى<br /><span>تبدأ بفهم الطريق.</span></h2><p>تعرف على أجواء مؤسسة الكتبية وطريقتنا في مواكبة المتعلمين من أول حصة إلى يوم الامتحان.</p><div className="video-meta"><span><Play size={15} /> فيديو تعريفي</span><span><ShieldCheck size={15} /> تكوين آمن واحترافي</span></div><a href={whatsapp} target="_blank" rel="noreferrer" className="text-link">اسألنا عن التسجيل <ArrowLeft size={17} /></a></div><div className="video-frame"><video controls playsInline preload="metadata" poster="/manus-storage/koutoubia-hero.jpg" aria-label="فيديو تعريفي بمؤسسة الكتبية لتعليم السياقة"><source src="https://res.cloudinary.com/azp0ikkv/video/upload/vid_auto_Ecolekoutoubia_pfobxy.mp4" type="video/mp4" />متصفحك لا يدعم تشغيل الفيديو. <a href="https://res.cloudinary.com/azp0ikkv/video/upload/vid_auto_Ecolekoutoubia_pfobxy.mp4">شاهد الفيديو مباشرة</a></video><span className="video-corner">01 / شاهد</span></div></div></section>

        <section id="about" className="intro-section section-pad">
          <div className="container intro-grid">
            <div className="section-kicker"><span>01</span><div /><p>لماذا تعلم السياقة؟</p></div>
            <div className="intro-copy"><h2>الاستقلالية تبدأ<br /><span>من مقعد السائق.</span></h2><p>لم تعد السياقة مجرد رفاهية، بل أصبحت ضرورة أساسية في الحياة اليومية والتطور المهني. نساعدك على تحويل هذه الخطوة إلى تجربة منظمة ومطمئنة.</p><a href="#method" className="text-link">اكتشف منهجيتنا <ArrowLeft size={17} /></a></div>
            <div className="intro-points"><div><Sparkles size={18} /><span><b>حرية التنقل</b> توفير الوقت والجهد وتوسيع خياراتك اليومية.</span></div><div><Trophy size={18} /><span><b>فرص أفضل</b> رخصة السياقة تفتح أبواباً واسعة في سوق الشغل.</span></div><div><ShieldCheck size={18} /><span><b>أمان ومسؤولية</b> تعلم سليم يحميك ويحمي مستعملي الطريق.</span></div></div>
          </div>
        </section>

        <section id="method" className="method-section section-pad">
          <div className="container"><div className="section-heading"><div><div className="section-kicker"><span>02</span><div /><p>طريقة العمل</p></div><h2>تكوين يشرح لك الطريق،<br /><span>ولا يتركك وحدك.</span></h2></div><p>نمزج بين المعرفة، التدريب، والمواكبة حتى تصل إلى الامتحان وأنت مستعد فعلاً.</p></div><div className="benefits-grid">{benefits.map((item, index) => { const Icon = item.icon; return <article className="benefit-card" key={item.title}><div className="benefit-number">0{index + 1}</div><Icon className="benefit-icon" size={29} /><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow"><ArrowUpLeft size={18} /></span></article>; })}</div></div>
        </section>

        <section id="categories" className="categories-section section-pad"><div className="container"><div className="section-heading categories-heading"><div><div className="section-kicker"><span>03</span><div /><p>اختر مسارك</p></div><h2>كل صنف له طريقه.<br /><span>نحن نعرفه جيداً.</span></h2></div><Link href="/page3.html" className="outline-link">دليل الرخصة الكامل <ArrowLeft size={16} /></Link></div><div className="category-list">{categories.map((category, index) => <article className={`category-card category-${category.tone}`} key={category.code}><div className="category-image"><img src={category.image} alt={category.label} /><div className="category-code">{category.code}</div></div><div className="category-info"><span className="category-index">0{index + 1}</span><h3>{category.label}</h3><p>{category.detail}</p><Link href="/page3.html" className="card-link">تعرف على المتطلبات <ChevronLeft size={16} /></Link></div></article>)}</div></div></section>

        <section className="contact-section"><div className="container contact-grid"><div><div className="section-kicker light"><span>04</span><div /><p>جاهز للانطلاق؟</p></div><h2>خطوتك الأولى<br /><span>تبدأ برسالة.</span></h2><p>فريقنا يسعد باستقبالكم والإجابة عن أسئلتكم حول التسجيل، الأصناف، والمواعيد.</p></div><div className="contact-actions"><a href={`tel:${phone}`} className="contact-row"><span className="contact-icon"><Phone size={20} /></span><span><small>اتصل بنا مباشرة</small><b>{phone}</b></span><ArrowLeft /></a><a href={whatsapp} target="_blank" rel="noreferrer" className="contact-row"><span className="contact-icon"><MessageCircle size={20} /></span><span><small>مراسلة عبر واتساب</small><b>نحن هنا لمساعدتك</b></span><ArrowLeft /></a><a href={mapUrl} target="_blank" rel="noreferrer" className="contact-row"><span className="contact-icon"><MapPin size={20} /></span><span><small>موقع المؤسسة</small><b>اضغط لفتح الخريطة</b></span><ExternalLink size={17} /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><Logo /><div className="footer-links"><a href={youtube} target="_blank" rel="noreferrer"><Play size={14} /> قناتنا على يوتيوب</a><a href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={14} /> موقعنا</a></div><p>© {new Date().getFullYear()} مؤسسة الكتبية لتعليم السياقة</p></div></footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="تواصل عبر واتساب"><MessageCircle size={22} /></a>
    </div>
  );
}
