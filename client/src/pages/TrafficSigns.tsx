// Style reminder: «طريق الثقة» — faithfully mirror the reference catalogue structure in Arabic RTL while retaining Koutoubia navy/gold wayfinding.
import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, Search, Signpost, X, UserCircle2 } from "lucide-react";
import { Link } from "wouter";
import { referenceGroups, type ReferenceSign } from "../referenceSigns";

const allSigns = referenceGroups.flatMap((group) => group.items.map((item) => ({ ...item, category: group.title })));
const groupOptions = ["جميع الأصناف", ...referenceGroups.map((group) => group.title)];

export default function TrafficSigns() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("جميع الأصناف");
  const [selected, setSelected] = useState<ReferenceSign & { category: string } | null>(null);
  const filteredGroups = useMemo(() => referenceGroups.map((group) => ({ ...group, items: group.items.filter((item) => {
    const matchesCategory = category === "جميع الأصناف" || category === group.title;
    const matchesText = `${item.name} ${group.title}`.includes(query.trim());
    return matchesCategory && matchesText;
  }) })).filter((group) => group.items.length), [query, category]);
  const total = filteredGroups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <div className="signs-page reference-signs-page" dir="rtl">
      <header className="signs-header"><div className="container signs-nav"><Link href="/" className="signs-brand"><span className="brand-mark">ك</span><span>مؤسسة <b>الكتبية</b><small>لتعليم السياقة</small></span></Link><nav><Link href="/">الرئيسية</Link><Link href="/quiz">الاختبارات</Link><Link href="/situations">المواقف</Link><Link href="/infractions">المخالفات</Link><Link href="/lexique">المعجم</Link><Link href="/panneaux" className="active">الإشارات</Link></nav><div className="signs-header-actions"><a href="tel:0612160626" className="signs-call">اتصل بنا</a><button type="button" className="signs-account" aria-label="الحساب"><UserCircle2 size={20} /></button><Link href="/" className="signs-back"><ArrowRight size={15} /> العودة للموقع</Link></div></div></header>
      <main className="container signs-main road-guide">
        <div className="signs-crumb"><span>دليل الطريق</span><span>/</span><b>الإشارات</b></div>
        <section className="reference-title"><div><h1>الإشارات</h1><p>جميع إشارات المرور في مدونة السير المغربية، مرتبة حسب الصنف.</p></div><span className="beta-badge">BETA</span></section>
        <section className="signs-layout">
          <aside className="signs-aside"><div className="aside-card"><div className="aside-icon"><Signpost size={18} /></div><h2>اختر إشارة</h2><p>انقر على أي إشارة للاطلاع على معناها واستخدامها في الطريق.</p></div><div className="aside-note"><span>طريق الثقة</span><p>تعلّم الإشارات بصرياً، ثم اختبر نفسك في صفحة الاختبارات.</p><Link href="/quiz">الذهاب إلى الاختبارات <ArrowRight size={14} /></Link></div></aside>
          <div className="signs-content"><div className="signs-tools"><label className="signs-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن إشارة…" aria-label="ابحث عن إشارة" />{query && <button type="button" onClick={() => setQuery("")} aria-label="مسح البحث"><X size={15} /></button>}</label><label className="signs-select"><span>الصنف</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{groupOptions.map((item) => <option key={item} value={item}>{item}</option>)}</select><ChevronDown size={15} /></label></div><div className="signs-result-line"><span>{total} إشارة</span><span>{category === "جميع الأصناف" ? "جميع الأصناف" : category}</span></div>
            {filteredGroups.map((group, groupIndex) => <section className="sign-group reference-group" key={group.title}><div className="group-heading"><span className="group-dot" /><h2>{group.title}</h2><span className="group-count">{group.items.length} إشارة</span></div><div className="sign-grid">{group.items.map((item, index) => <button type="button" className="sign-card" key={`${item.name}-${index}`} onClick={() => setSelected({ ...item, category: group.title })}><div className="sign-image"><img src={item.image} alt={item.name} loading={groupIndex === 0 && index < 6 ? "eager" : "lazy"} /></div><h3>{item.name}</h3><span className="sign-index">{String(index + 1).padStart(2, "0")}</span></button>)}</div></section>)}
            {!filteredGroups.length && <div className="signs-empty"><Search size={24} /><h2>لم نجد هذه الإشارة</h2><p>جرّب كلمة أخرى أو أعد اختيار جميع الأصناف.</p><button type="button" onClick={() => { setQuery(""); setCategory("جميع الأصناف"); }}>إظهار كل الإشارات</button></div>}
          </div>
        </section>
      </main>
      {selected && <div className="sign-modal-backdrop" role="presentation" onClick={() => setSelected(null)}><div className="sign-modal" role="dialog" aria-modal="true" aria-labelledby="sign-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="إغلاق"><X size={19} /></button><div className="modal-sign-image"><img src={selected.image} alt={selected.name} /></div><p className="eyebrow">{selected.category}</p><h2 id="sign-modal-title">{selected.name}</h2><p>هذه الإشارة جزء من إشارات المرور المغربية. راجع معناها واحترم مدلولها أثناء السياقة.</p><button type="button" className="modal-action" onClick={() => setSelected(null)}>العودة إلى الإشارات</button></div></div>}
    </div>
  );
}
