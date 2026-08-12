// Style reminder: «طريق الثقة» — one navy/gold navigation system shared by every public page, with clear RTL hierarchy and a visible contact action.
import { Menu, Phone, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

type SiteNavProps = { active?: "home" | "license" | "infractions" | "panneaux" };

export default function SiteNav({ active }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const linkClass = (key: SiteNavProps["active"]) => active === key ? "shared-nav-link active" : "shared-nav-link";
  return <header className="shared-site-header" dir="rtl"><div className="container shared-nav-wrap"><Link href="/" className="shared-brand" onClick={close}><span className="shared-brand-mark">ك</span><span>مؤسسة <b>الكتبية</b><small>لتعليم السياقة</small></span></Link><button className="shared-mobile-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}>{open ? <X size={21} /> : <Menu size={21} />}</button><nav className={open ? "shared-main-nav is-open" : "shared-main-nav"}><Link href="/" className={linkClass("home")} onClick={close}>الرئيسية</Link><Link href="/page3.html" className={linkClass("license")} onClick={close}>دليل الرخصة</Link><Link href="/infractions" className={linkClass("infractions")} onClick={close}>المخالفات</Link><Link href="/panneaux" className={linkClass("panneaux")} onClick={close}>الإشارات</Link><a className="shared-nav-call" href="tel:0612160626" onClick={close}><Phone size={15} /> اتصل بنا</a></nav></div></header>;
}
