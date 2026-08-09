// Style reminder: «طريق الثقة» — صفحة RTL تعليمية هادئة، كحلي للهيكلة، ذهبي للإرشاد، أخضر للتأكيد، وخطوط طريق متقطعة.
import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, Search, Signpost, X } from "lucide-react";
import { Link } from "wouter";

type SignCategory = "علامات الخطر" | "علامات المنع" | "علامات الإلزام" | "علامات الإرشاد";
type TrafficSign = { name: string; category: SignCategory; image: string; meaning: string };

const sign = (name: string, category: SignCategory, image: string, meaning: string): TrafficSign => ({ name, category, image: `https://assets.conduire.ma/signs/${image}`, meaning });

const signs: TrafficSign[] = [
  sign("خطر منعرج لليمين", "علامات الخطر", "khatar-asba9ia/sign_p1_1.png", "تنبيه إلى وجود منعرج خطير نحو اليمين، خفف السرعة واستعد لتغيير الاتجاه."),
  sign("خطر منعرج لليسار", "علامات الخطر", "khatar-asba9ia/sign_p1_0.png", "تنبيه إلى وجود منعرج خطير نحو اليسار، مع ضرورة احترام السرعة المناسبة."),
  sign("منعرجات متتابعة أولها على اليسار", "علامات الخطر", "khatar-asba9ia/sign_p1_2.png", "طريق يضم منعرجات متتابعة، ويكون أولها على اليسار."),
  sign("منعرجات متتابعة أولها على اليمين", "علامات الخطر", "khatar-asba9ia/sign_p1_3.png", "طريق يضم منعرجات متتابعة، ويكون أولها على اليمين."),
  sign("خطر منحدر حاد 6%", "علامات الخطر", "khatar-asba9ia/sign_p1_4.png", "منحدر حاد بنسبة ستة في المائة؛ حافظ على مسافة الأمان واستعمل السرعة الملائمة."),
  sign("منحدر خطير بنسبة 10%", "علامات الخطر", "khatar-asba9ia/sign_p1_5.png", "منحدر شديد الانحدار بنسبة عشرة في المائة."),
  sign("خطر طريق ضيق من جهة اليمين", "علامات الخطر", "khatar-asba9ia/sign_p2_0.png", "تنبيه إلى تضيق الطريق من الجهة اليمنى."),
  sign("خطر طريق ضيق من الجهتين", "علامات الخطر", "khatar-asba9ia/sign_p2_1.png", "تنبيه إلى تضيق الطريق من الجهتين."),
  sign("خطر طريق زلقة", "علامات الخطر", "khatar-asba9ia/sign_p2_9.png", "قد يفقد الطريق تماسكه؛ تجنب الفرملة أو المناورات المفاجئة."),
  sign("انتباه مكان يرتاده الأطفال", "علامات الخطر", "khatar-asba9ia/sign_p3_0.png", "منطقة قد يعبر فيها الأطفال؛ خفف السرعة وكن مستعداً للتوقف."),
  sign("خطر ممر الراجلين", "علامات الخطر", "khatar-asba9ia/sign_p3_1.png", "تنبيه إلى ممر محتمل للراجلين."),
  sign("سكة حديدية بحواجز", "علامات الخطر", "khatar-asba9ia/sign_p4_2.png", "تقاطع الطريق مع سكة حديدية محمية بحواجز."),
  sign("علامة قف", "علامات المنع", "alman3/sign_p1_4.png", "توقف تام قبل الخط أو ملتقى الطرق، ثم تابع بعد التأكد من خلو الطريق."),
  sign("إعطاء حق الأسبقية", "علامات المنع", "alman3/sign_p1_3.png", "يجب إعطاء حق الأسبقية لمستعملي الطريق الآخرين."),
  sign("ممنوع المرور في الاتجاهين", "علامات المنع", "alman3/sign_p1_9.png", "يمنع مرور المركبات في الاتجاهين."),
  sign("ممنوع الوقوف والتوقف", "علامات المنع", "alman3/sign_p1_12.png", "يمنع الوقوف والتوقف في المجال المحدد بالعلامة."),
  sign("السرعة القصوى 60 كلم/س", "علامات المنع", "alman3/sign_p1_17.png", "لا يجوز تجاوز السرعة القصوى المبينة على العلامة."),
  sign("ممنوع التجاوز", "علامات المنع", "alman3/sign_p1_19.png", "يمنع تجاوز المركبات وفق الشروط المبينة في مدونة السير."),
  sign("اتجاه إجباري نحو اليمين", "علامات الإلزام", "ijbar/image_0.png", "يجب على مستعمل الطريق اتباع الاتجاه نحو اليمين."),
  sign("اتجاه إجباري نحو اليسار", "علامات الإلزام", "ijbar/image_1.png", "يجب اتباع الاتجاه نحو اليسار."),
  sign("مسلك إجباري للدراجات", "علامات الإلزام", "ijbar/image_2.png", "مسلك مخصص وإجباري للدراجات."),
  sign("اتجاه إجباري إلى الأمام", "علامات الإلزام", "ijbar/image_3.png", "يجب مواصلة السير إلى الأمام."),
  sign("ملتقى طرقي دوراني", "علامات الإرشاد", "mawaqi3/image_0.png", "اتجاه السير داخل ملتقى طرقي دائري."),
  sign("طريق ذات أولوية", "علامات الإرشاد", "mawaqi3/image_1.png", "الطريق ذات أولوية عند ملتقيات الطرق إلى حين ظهور علامة النهاية."),
  sign("نهاية طريق ذات أولوية", "علامات الإرشاد", "mawaqi3/image_2.png", "انتهاء الأولوية الممنوحة لهذا الطريق."),
  sign("ممر الراجلين", "علامات الإرشاد", "mawaqi3/image_3.png", "ممر مخصص لعبور الراجلين."),
];

const categories = ["الكل", "علامات الخطر", "علامات المنع", "علامات الإلزام", "علامات الإرشاد"] as const;

export default function TrafficSigns() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("الكل");
  const [selected, setSelected] = useState<TrafficSign | null>(null);
  const filtered = useMemo(() => signs.filter((item) => {
    const matchesText = `${item.name} ${item.meaning} ${item.category}`.includes(query.trim());
    return matchesText && (category === "الكل" || item.category === category);
  }), [query, category]);

  return (
    <div className="signs-page" dir="rtl">
      <header className="signs-header"><div className="container signs-nav"><Link href="/" className="signs-brand"><span className="brand-mark">ك</span><span>مؤسسة <b>الكتبية</b><small>لتعليم السياقة</small></span></Link><nav><Link href="/">الرئيسية</Link><Link href="/quiz">الاختبارات</Link><Link href="/infractions">المخالفات</Link><Link href="/page3.html">دليل الرخصة</Link><Link href="/panneaux" className="active">الإشارات</Link></nav><div className="signs-header-actions"><a href="tel:0612160626" className="signs-call">اتصل بنا 0612160626</a><Link href="/" className="signs-back"><ArrowRight size={15} /> العودة للموقع</Link></div></div></header>
      <main className="container signs-main road-guide">
        <div className="signs-crumb"><span>دليل الطريق</span><span>/</span><b>الإشارات</b></div>
        <section className="signs-intro"><div><p className="eyebrow">مرجعك البصري على الطريق</p><h1>الإشارات</h1><p>تعلم معاني إشارات المرور المغربية، صنفاً بعد صنف، بطريقة واضحة تساعدك على الاستعداد للامتحان والقيادة بثقة.</p></div><div className="signs-intro-badge"><Signpost size={24} /><span>افهم العلامة<br /><b>واحترم الطريق.</b></span></div></section>
        <section className="signs-layout">
          <aside className="signs-aside"><div className="aside-card"><div className="aside-icon"><Signpost size={18} /></div><h2>اختر إشارة</h2><p>ابحث عن إشارة أو اختر صنفاً للوصول إلى المعلومة التي تحتاجها بسرعة.</p></div><div className="aside-note"><span>طريق الثقة</span><p>المعرفة المسبقة بالإشارات تجعل قراراتك أوضح وأكثر أماناً.</p></div></aside>
          <div className="signs-content"><div className="signs-tools"><label className="signs-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن إشارة…" aria-label="ابحث عن إشارة" />{query && <button type="button" onClick={() => setQuery("")} aria-label="مسح البحث"><X size={15} /></button>}</label><label className="signs-select"><span>الصنف</span><select value={category} onChange={(event) => setCategory(event.target.value as (typeof categories)[number])}>{categories.map((item) => <option key={item} value={item}>{item === "الكل" ? "جميع الأصناف" : item}</option>)}</select><ChevronDown size={15} /></label></div><div className="signs-result-line"><span>{filtered.length} إشارة</span><span>اضغط على البطاقة لعرض المعنى</span></div>
            {categories.slice(1).map((group) => { const items = filtered.filter((item) => item.category === group); if (!items.length) return null; return <section className="sign-group" key={group}><div className="group-heading"><span className="group-dot" /><h2>{group}</h2><span className="group-count">{items.length}</span></div><div className="sign-grid">{items.map((item, index) => <button type="button" className="sign-card" key={`${item.name}-${index}`} onClick={() => setSelected(item)}><div className="sign-image"><img src={item.image} alt={item.name} loading="lazy" /></div><h3>{item.name}</h3><span className="sign-index">{String(index + 1).padStart(2, "0")}</span></button>)}</div></section> })}
            {!filtered.length && <div className="signs-empty"><Search size={24} /><h2>لم نجد هذه الإشارة</h2><p>جرّب كلمة أخرى أو اختر «جميع الأصناف».</p><button type="button" onClick={() => { setQuery(""); setCategory("الكل"); }}>إظهار كل الإشارات</button></div>}
          </div>
        </section>
      </main>
      {selected && <div className="sign-modal-backdrop" role="presentation" onClick={() => setSelected(null)}><div className="sign-modal" role="dialog" aria-modal="true" aria-labelledby="sign-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="إغلاق"><X size={19} /></button><div className="modal-sign-image"><img src={selected.image} alt={selected.name} /></div><p className="eyebrow">{selected.category}</p><h2 id="sign-modal-title">{selected.name}</h2><p>{selected.meaning}</p><button type="button" className="modal-action" onClick={() => setSelected(null)}>العودة إلى الإشارات</button></div></div>}
    </div>
  );
}
