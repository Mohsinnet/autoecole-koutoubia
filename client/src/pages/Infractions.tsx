// Style reminder: «طريق الثقة» — transform the reference catalogue into a calm Arabic wayfinding tool with navy structure, gold signals, and green confirmation accents.
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Search, ShieldAlert, X } from "lucide-react";

type Infraction = {
  title: string;
  description: string;
  category: string;
  type: string;
  fine: number;
  points: number;
  level: "الدرجة الأولى" | "الدرجة الثانية" | "الدرجة الثالثة";
};

const infractions: Infraction[] = [
  { title: "التجاوز المعيب", description: "التجاوز الذي يتم في ظروف لا تسمح به أو يعرّض مستعملي الطريق للخطر.", category: "التجاوز", type: "قواعد السير", fine: 700, points: 4, level: "الدرجة الأولى" },
  { title: "عدم احترام الوقوف المفروض بعلامة قف", description: "عدم احترام الوقوف المفروض بعلامة قف من طرف سائق مركبة عند ملتقى الطرق.", category: "ملتقى الطرق", type: "الأسبقية", fine: 700, points: 4, level: "الدرجة الأولى" },
  { title: "عدم احترام الوقوف المفروض بضوء التشوير الأحمر", description: "عدم احترام الوقوف المفروض بضوء التشوير الأحمر من طرف سائق مركبة.", category: "ملتقى الطرق", type: "الأسبقية", fine: 700, points: 4, level: "الدرجة الأولى" },
  { title: "تجاوز السرعة من 30 إلى أقل من 50 كلم/ساعة", description: "تجاوز السرعة القصوى المسموح بها بما يعادل 30 كلم/ساعة إلى أقل من 50 كلم/ساعة.", category: "تجاوز السرعة", type: "السرعة", fine: 700, points: 4, level: "الدرجة الأولى" },
  { title: "السير في اتجاه ممنوع", description: "السير في الاتجاه المعاكس أو في اتجاه ممنوع على الطريق العمومية.", category: "اتجاه ممنوع", type: "قواعد السير", fine: 700, points: 4, level: "الدرجة الأولى" },
  { title: "التوقف ليلاً بدون إضاءة خارج التجمع العمراني", description: "التوقف ليلاً وبدون إضاءة خارج التجمعات العمرانية في مخالفة للنصوص الجاري بها العمل.", category: "الليل", type: "الإنارة", fine: 700, points: 3, level: "الدرجة الأولى" },
  { title: "السير ليلاً بدون إنارة خارج التجمع العمراني", description: "سير المركبة على الطريق العمومية ليلاً بدون إنارة خارج التجمع العمراني.", category: "الليل", type: "الإنارة", fine: 700, points: 3, level: "الدرجة الأولى" },
  { title: "سياقة مركبة بدون شهادة الفحص التقني", description: "عدم الخضوع للمراقبة التقنية أو عدم التوفر على شهادة الفحص التقني.", category: "الفحص التقني", type: "وثائق المركبة", fine: 700, points: 0, level: "الدرجة الأولى" },
  { title: "استعمال الهاتف ممسوكاً باليد", description: "الاستعمال أو التحدث بالهاتف ممسوكاً باليد أثناء سياقة المركبة أو استعمال جهاز يحد من الانتباه.", category: "الهاتف", type: "سلوك السائق", fine: 500, points: 0, level: "الدرجة الثانية" },
  { title: "عدم وضع حزام السلامة", description: "عدم احترام إجبارية استعمال حزام السلامة من طرف السائق أو الراكب.", category: "حزام السلامة", type: "السلامة", fine: 500, points: 0, level: "الدرجة الثانية" },
  { title: "عدم احترام الأسبقية الواجبة للراجلين", description: "عدم احترام الأسبقية الواجبة للراجلين عند الممرات أو ملتقيات الطرق.", category: "الراجل", type: "الأسبقية", fine: 500, points: 2, level: "الدرجة الثانية" },
  { title: "السير على شريط التوقف العاجل بالطريق السيار", description: "السير على شريط التوقف العاجل بالطريق السيار دون حالة اضطرار أو سبب مشروع.", category: "الطريق السيار", type: "قواعد السير", fine: 500, points: 3, level: "الدرجة الثانية" },
];

const levels = ["الكل", "الدرجة الأولى", "الدرجة الثانية", "الدرجة الثالثة"];
const categories = ["الكل", ...Array.from(new Set(infractions.map((item) => item.category)))];

export default function Infractions() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("الكل");
  const [category, setCategory] = useState("الكل");
  const [selected, setSelected] = useState<Infraction | null>(null);

  const filtered = useMemo(() => infractions.filter((item) => {
    const matchesQuery = `${item.title} ${item.description} ${item.category} ${item.type}`.includes(query.trim());
    const matchesLevel = level === "الكل" || item.level === level;
    const matchesCategory = category === "الكل" || item.category === category;
    return matchesQuery && matchesLevel && matchesCategory;
  }), [query, level, category]);

  return (
    <div className="infractions-page" dir="rtl">
      <header className="infractions-header"><div className="container infractions-nav"><Link href="/" className="infractions-brand"><span className="brand-mark">ك</span><span>مؤسسة <b>الكتبية</b><small>لتعليم السياقة</small></span></Link><nav><Link href="/">الرئيسية</Link><Link href="/quiz">الاختبارات</Link><Link href="/page3.html">دليل الرخصة</Link><Link href="/infractions" className="active">المخالفات</Link></nav><Link href="/" className="infractions-back"><ArrowRight size={15} /> العودة للموقع</Link></div></header>
      <main className="container infractions-main road-guide">
        <div className="infractions-crumb"><span>دليل الطريق</span><span>/</span><b>المخالفات</b></div>
        <section className="infractions-intro"><div><p className="eyebrow">مرجع عملي للسائق</p><h1>المخالفات</h1><p>تعرّف على أبرز المخالفات والغرامات ونقاط السياقة بطريقة واضحة وسريعة.</p></div><div className="infractions-intro-badge"><ShieldAlert size={22} /><span>قد الطريق<br /><b>بمسؤولية.</b></span></div></section>
        <section className="infractions-layout">
          <aside className="infractions-aside"><div className="aside-card"><div className="aside-icon"><Search size={18} /></div><h2>اختر مخالفة</h2><p>ابحث عن المخالفة أو استعمل الفلاتر للوصول إلى المعلومة بسرعة.</p></div><div className="aside-note"><span>معلومة تعليمية</span><p>المبالغ والنقاط المعروضة مرجع توعوي. راجع المصادر الرسمية عند الحاجة.</p></div></aside>
          <div className="infractions-content"><div className="infractions-tools"><label className="infractions-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن مخالفة…" aria-label="ابحث عن مخالفة" />{query && <button type="button" onClick={() => setQuery("")} aria-label="مسح البحث"><X size={15} /></button>}</label><div className="filter-row"><label>الفئة<select value={level} onChange={(event) => setLevel(event.target.value)}>{levels.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} /></label><label>الصنف<select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} /></label></div></div>
            <div className="infractions-result-line"><span>{filtered.length} مخالفة</span><span>اضغط على البطاقة لعرض التفاصيل</span></div>
            {levels.slice(1).map((currentLevel) => { const items = filtered.filter((item) => item.level === currentLevel); if (!items.length) return null; return <section className="infraction-group" key={currentLevel}><div className="group-heading"><span className="group-dot" /> <h2>{currentLevel}</h2><span className="group-count">{items.length}</span></div><div className="infraction-list">{items.map((item) => <button className="infraction-card" type="button" key={item.title} onClick={() => setSelected(item)}><div className="infraction-copy"><h3>{item.title}</h3><p>{item.description}</p><span className="infraction-meta">{item.category}</span></div><div className="infraction-stats"><strong>DH {item.fine}</strong><span>{item.points ? `${item.points} نقط` : "بدون خصم"}</span></div></button>)}</div></section> })}
            {!filtered.length && <div className="infractions-empty"><Search size={24} /><h2>لم نجد هذه المخالفة</h2><p>جرّب كلمة أخرى أو أعد ضبط الفلاتر.</p><button type="button" onClick={() => { setQuery(""); setLevel("الكل"); setCategory("الكل"); }}>إظهار كل المخالفات</button></div>}
          </div>
        </section>
      </main>
      {selected && <div className="infraction-overlay" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><section className="infraction-dialog" role="dialog" aria-modal="true" aria-labelledby="infraction-title"><button type="button" className="dialog-close" onClick={() => setSelected(null)} aria-label="إغلاق"><X size={18} /></button><span className="dialog-kicker">تفاصيل المخالفة</span><h2 id="infraction-title">{selected.title}</h2><p>{selected.description}</p><div className="dialog-grid"><div><small>الفئة</small><strong>{selected.category}</strong></div><div><small>الغرامة</small><strong>DH {selected.fine}</strong></div><div><small>النقاط</small><strong>{selected.points ? `${selected.points} نقط` : "بدون خصم"}</strong></div></div><Link href="/quiz" className="dialog-action">تدرّب على الاختبار <ArrowRight size={15} /></Link></section></div>}
    </div>
  );
}
