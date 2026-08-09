// Style reminder: «طريق الثقة» — keep the quiz grid calm, practical, RTL, and use a focused overlay for the original interactive test.
import { CheckCircle2, ChevronLeft, Clock3, Sparkles, Trophy, X } from "lucide-react";
import SiteNav from "../components/SiteNav";
import { useState } from "react";
import { Link } from "wouter";

const quizCount = 40;
const quizUrl = (number: number) => `https://conduire.ma/quiz/${number}`;

export default function Quiz() {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const close = () => setActiveQuiz(null);

  return <div dir="rtl" className="quiz-page">
    <SiteNav active="quiz" />

    <main id="quizzes"><section className="quiz-intro container"><div className="quiz-beta">تدريب عملي <Sparkles size={14} /></div><h1>اختبارات <span>السياقة</span></h1><p>اختبر معلوماتك في قانون السير عبر نماذج تدريبية قصيرة، بنفس روح الاختبار النظري وبواجهة واضحة وسريعة.</p><div className="quiz-stats"><span><Trophy size={16} /> 40 اختباراً تدريبياً</span><span><Clock3 size={16} /> 40 سؤالاً في كل اختبار</span><span><CheckCircle2 size={16} /> تصحيح وتقييم فوري</span></div></section>
      <section className="quiz-grid-wrap container"><div className="quiz-grid-heading"><div><span>اختبر نفسك</span><h2>اختر اختباراً وابدأ</h2></div><p>انقر على أي بطاقة لفتح الاختبار وتشغيل الوسائط بنفس تجربة الصفحة الأصلية.</p></div><div className="quiz-grid">{Array.from({ length: quizCount }, (_, index) => { const number = index + 1; const image = `https://assets.conduire.ma/quizzes/quiz_${number}/quiz_${number}_1.jpg`; return <button type="button" className="quiz-card" key={number} onClick={() => setActiveQuiz(number)} aria-label={`فتح اختبار السياقة ${number}`}><div className="quiz-card-image"><img src={image} alt={`معاينة اختبار ${number}`} loading="lazy" /><span>{String(number).padStart(2, "0")}</span><i className="quiz-play-badge">▶</i></div><div className="quiz-card-body"><div><h3>اختبار {number}</h3><p>40 سؤالاً · انقر للبدء</p></div><span className="quiz-arrow"><ChevronLeft size={17} /></span></div></button>; })}</div></section>
    </main>

    <footer id="contact" className="quiz-footer"><div className="container"><Link href="/" className="quiz-brand"><span className="quiz-brand-mark">ك</span><span>مؤسسة <b>الكتبية</b><small>لتعليم السياقة</small></span></Link><p>تدرّب اليوم، وقد بثقة غداً.</p></div></footer>

    {activeQuiz !== null && <div className="quiz-modal-backdrop" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) close(); }}><section className="quiz-modal quiz-player-modal" role="dialog" aria-modal="true" aria-labelledby="quiz-modal-title"><button type="button" className="quiz-modal-close" onClick={close} aria-label="إغلاق"><X size={18} /></button><div className="quiz-modal-head"><span id="quiz-modal-title">اختبار السياقة {activeQuiz}</span></div><div className="quiz-player-frame"><iframe src={quizUrl(activeQuiz)} title={`اختبار السياقة ${activeQuiz}`} allow="autoplay; fullscreen" /></div></section></div>}
  </div>;
}
