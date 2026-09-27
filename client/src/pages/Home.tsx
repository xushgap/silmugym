import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Dumbbell,
  Gauge,
  Instagram,
  MapPin,
  Menu,
  MoveRight,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

const heroImage = "/images/silmugym-hero.jpg";
const spaceImage = "/images/silmugym-space.jpg";
const barbellImage = "/images/silmugym-barbell.jpg";

const navItems = [
  { label: "Imkoniyatlar", href: "#features" },
  { label: "Jadval", href: "#schedule" },
  { label: "Narxlar", href: "#pricing" },
  { label: "Aloqa", href: "#contact" },
];

const classes = [
  { time: "06:30", name: "Morning Strength", type: "Strength", level: "Barcha daraja", tone: "lime" },
  { time: "08:00", name: "Mobility Reset", type: "Recovery", level: "Beginner", tone: "soft" },
  { time: "18:30", name: "Engine Room", type: "Conditioning", level: "Intermediate", tone: "dark" },
  { time: "20:00", name: "Power Hour", type: "Performance", level: "Advanced", tone: "lime" },
];

const plans = [
  {
    name: "Start",
    price: "390 000",
    description: "Ritmingizni topish uchun asosiy a'zolik.",
    perks: ["Erkin mashg‘ulot zonasi", "07:00 — 22:00 kirish", "Locker & shower"],
  },
  {
    name: "Focus",
    price: "690 000",
    description: "Har bir mashg‘ulotda ko‘proq natija va yo‘nalish.",
    perks: ["Barcha Start imkoniyatlari", "Haftalik group classes", "1 ta coach check-in"],
    featured: true,
  },
  {
    name: "Peak",
    price: "1 190 000",
    description: "Shaxsiy progress uchun to‘liq premium tajriba.",
    perks: ["Barcha Focus imkoniyatlari", "4 ta personal training", "Nutrition roadmap"],
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(72);
  const [age, setAge] = useState(24);
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiMessage, setBmiMessage] = useState("");

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bmiLabel = useMemo(() => {
    if (!bmi) return "Sizning ko‘rsatkichiingiz";
    if (bmi < 18.5) return "Yengilroq tanani kuch bilan qo‘llang";
    if (bmi < 25) return "Ajoyib balans — shu tempda davom eting";
    if (bmi < 30) return "Yangi odatlar uchun yaxshi start nuqtasi";
    return "Har bir kichik qadam katta o‘zgarish";
  }, [bmi]);

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const result = weight / (heightInMeters * heightInMeters);
    setBmi(Number(result.toFixed(1)));
    setBmiMessage(
      result < 18.5
        ? "Kuch va sog‘lom massa ustida ishlashga fokus qiling."
        : result < 25
          ? "Sizning tanangiz yaxshi balansda. Performance’ni oshiramiz."
          : result < 30
            ? "Kuchliroq odatlar bilan yangi forma yaqin."
            : "Sekin, izchil va coach bilan — buni birga uddalaymiz.",
    );
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className={`site-header ${scrollY > 40 ? "site-header--scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="SilmuGym bosh sahifa">
          <span className="brand-mark"><span /></span>
          <span>Silmu<span>Gym</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Asosiy navigatsiya">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-phone" href="tel:+998944277980">
          <Phone size={15} /> +998 94 427 79 80
        </a>
        <button className="menu-button" aria-label="Menyuni ochish" onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={17} /></a>
          ))}
          <a className="mobile-menu__phone" href="tel:+998944277980"><Phone size={16} /> +998 94 427 79 80</a>
        </div>
      )}

      <main id="top">
        <section className="hero section-pad">
          <div className="hero__copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Tana. Aql. Intizom.</div>
            <h1>O‘zingizning<br /><em>kuchliroq</em> versiyangiz.</h1>
            <p className="hero__lede">SilmuGym — shunchaki zal emas. Bu siz har kuni o‘zingizga bergan va’dangizni bajaradigan joy.</p>
            <div className="hero__actions">
              <button className="button button--lime" onClick={() => scrollToSection("pricing")}>Mashg‘ulotni boshlash <ArrowUpRight size={17} /></button>
            </div>
            <div className="hero__proof">
              <div className="avatar-stack"><span>AS</span><span>MK</span><span>NR</span><span>+1k</span></div>
              <div><strong>1,240+</strong><small>o‘zgarishlar boshlangan</small></div>
            </div>
          </div>
          <div className="hero__visual" style={{ transform: `translateY(${scrollY * 0.055}px)` }}>
            <div className="hero__image-wrap">
              <img src={heroImage} alt="SilmuGym’da kuch mashg‘uloti" />
              <div className="hero__image-shade" />
              <div className="hero__image-caption"><span>01</span><span>TRAIN WITH INTENT</span></div>
            </div>
            <div className="hero__floating-card">
              <span className="floating-icon"><Activity size={18} /></span>
              <div><strong>Bugun ham.</strong><small>Bir qadam oldinda.</small></div>
              <ArrowUpRight size={17} />
            </div>
            <div className="hero__circle-copy">DISCIPLINE<br />OVER<br />MOOD</div>
          </div>
          <div className="hero__scroll"><span>Scroll to explore</span><ArrowDownRight size={16} /></div>
        </section>

        <section className="marquee-band" aria-label="SilmuGym qadriyatlari">
          <div className="marquee-track"><span>BUILD YOUR BASE</span><i>✳</i><span>MOVE WITH PURPOSE</span><i>✳</i><span>SHOW UP DAILY</span><i>✳</i><span>BUILD YOUR BASE</span><i>✳</i><span>MOVE WITH PURPOSE</span></div>
        </section>

        <section className="section-pad story-section" id="story">
          <div className="section-kicker"><span>02 / Bizning yondashuv</span><span>SilmuGym — Tashkent</span></div>
          <div className="story-grid">
            <div className="story-image-wrap depth-card"><img src={spaceImage} alt="SilmuGym training space" /><div className="image-label">THE SPACE / 01</div></div>
            <div className="story-copy">
              <p className="section-label">NOT A QUICK FIX</p>
              <h2>Harakat — bu yangi <span>standart.</span></h2>
              <p>Biz sizga 30 kunda boshqa odam bo‘lishni va’da qilmaymiz. Biz sizni har kuni kelishga, kuchliroq harakat qilishga va o‘zingizni yaxshi his qilishga yordam beramiz.</p>
              <div className="story-stats"><div><strong>24/7</strong><span>kirim erkinligi</span></div><div><strong>03</strong><span>aniq yo‘nalish</span></div><div><strong>01</strong><span>kuchli jamoa</span></div></div>
              <button className="outline-button" onClick={() => scrollToSection("features")}>Imkoniyatlarni ko‘rish <MoveRight size={17} /></button>
            </div>
          </div>
        </section>

        <section className="section-pad features-section" id="features">
          <div className="section-heading-row"><div><p className="section-label">THE SILMUGYM STANDARD</p><h2>Natija uchun<br /><span>yaratilgan muhit.</span></h2></div><p className="heading-note">Sizga kerak bo‘lgan barcha narsa. Ortiqcha shovqinsiz, to‘g‘ri yo‘nalishda.</p></div>
          <div className="feature-grid">
            <article className="feature-card feature-card--wide tilt-card"><div className="feature-card__top"><span className="feature-number">01</span><Dumbbell size={24} /></div><h3>Strength<br />zone</h3><p>Free weight, machines va functional training — tanangizning har bir bosqichi uchun.</p><a href="#pricing">Batafsil <ArrowUpRight size={15} /></a></article>
            <article className="feature-card feature-card--lime tilt-card"><div className="feature-card__top"><span className="feature-number">02</span><Zap size={24} /></div><h3>Group<br />energy</h3><p>Bir xil maqsad, turli odamlar. Guruh bilan mashg‘ulotda energiya ikki baravar.</p><a href="#schedule">Jadvalni ko‘rish <ArrowUpRight size={15} /></a></article>
            <article className="feature-card feature-card--image tilt-card"><img src={barbellImage} alt="Barbell strength training" /><div className="feature-card__overlay"><span className="feature-number">03</span><h3>Performance<br />lab</h3><a href="#bmi">O‘zingizni o‘lchang <ArrowUpRight size={15} /></a></div></article>
          </div>
        </section>

        <section className="section-pad bmi-section" id="bmi">
          <div className="bmi-panel">
            <div className="bmi-intro"><p className="section-label">YOUR STARTING POINT</p><h2>Tana haqida<br /><span>aniqroq bilib oling.</span></h2><p>BMI — umumiy orientir. Sizning yo‘lingiz esa individual. Natijani oling va keyingi qadamni rejalashtiring.</p><div className="bmi-note"><ShieldCheck size={17} /> Ma’lumotlaringiz saqlanmaydi</div></div>
            <div className="bmi-form-area">
              <div className="input-grid">
                <label>Bo‘y (cm)<input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} min="100" max="240" /></label>
                <label>Vazn (kg)<input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} min="30" max="250" /></label>
                <label>Yosh<input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} min="12" max="100" /></label>
              </div>
              <button className="button button--lime bmi-button" onClick={calculateBmi}>BMI’ni hisoblash <Gauge size={17} /></button>
              <div className={`bmi-result ${bmi ? "bmi-result--active" : ""}`}>
                <div className="bmi-result__value">{bmi ?? "—"}<small>BMI</small></div>
                <div><strong>{bmi ? bmiLabel : "Sizning ko‘rsatkichiingiz"}</strong><p>{bmiMessage || "Bo‘y va vazningizni kiriting — biz sizga boshlang‘ich nuqtani ko‘rsatamiz."}</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad schedule-section" id="schedule">
          <div className="section-heading-row"><div><p className="section-label">THIS WEEK / 07:00 — 22:00</p><h2>Bugungi <span>ritm.</span></h2></div><button className="outline-button" onClick={() => scrollToSection("pricing")}>To‘liq jadval <MoveRight size={17} /></button></div>
          <div className="class-list">{classes.map((item) => <article className={`class-row class-row--${item.tone}`} key={item.name}><div className="class-time">{item.time}</div><div className="class-info"><span>{item.type}</span><strong>{item.name}</strong></div><span className="class-level">{item.level}</span><Clock3 size={18} className="class-clock" /><ChevronRight size={19} /></article>)}</div>
        </section>

        <section className="section-pad pricing-section" id="pricing">
          <div className="section-heading-row"><div><p className="section-label">MEMBERSHIP / O‘ZINGIZGA INVESTITSIYA</p><h2>O‘zingizga mos<br /><span>rejani tanlang.</span></h2></div><p className="heading-note">Birinchi qadamni bugun tashlang. Qolganini birga quramiz.</p></div>
          <div className="pricing-grid">{plans.map((plan, index) => <article className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`} key={plan.name}><div className="pricing-card__inner"><div className="pricing-card__top"><span className="pricing-index">0{index + 1}</span>{plan.featured && <span className="popular-pill">Eng mashhur</span>}</div><h3>{plan.name}</h3><p>{plan.description}</p><div className="price"><strong>{plan.price}</strong><span>so‘m / oy</span></div><ul>{plan.perks.map((perk) => <li key={perk}><Check size={15} />{perk}</li>)}</ul><button className={plan.featured ? "button button--dark" : "outline-button outline-button--full"} onClick={() => scrollToSection("contact")}>Rejani tanlash <ArrowUpRight size={16} /></button></div></article>)}</div>
        </section>

        <section className="section-pad cta-section" id="contact">
          <div className="cta-panel"><div className="cta-panel__glow" /><div className="cta-content"><p className="section-label">READY WHEN YOU ARE</p><h2>Bugun boshlang.<br /><span>Ertaga rahmat aytasiz.</span></h2><p>SilmuGym’da birinchi mashg‘ulotingizni rejalashtirish uchun bizga qo‘ng‘iroq qiling.</p><a className="button button--dark" href="tel:+998944277980"><Phone size={16} /> +998 94 427 79 80</a></div><div className="cta-mark"><Sparkles size={25} /><span>SHOW UP<br />FOR YOURSELF</span></div></div>
        </section>
      </main>

      <footer className="footer section-pad"><div className="footer__brand"><a className="brand" href="#top"><span className="brand-mark"><span /></span><span>Silmu<span>Gym</span></span></a><p>Strong body.<br />Clear mind.</p></div><div className="footer__contact"><span>Manzil</span><strong>Mavjud emas bu zal</strong><a href="tel:+998944277980">+998 94 427 79 80</a></div><div className="footer__social"><span>Follow the movement</span><a href="#top" aria-label="SilmuGym Instagram"><Instagram size={18} /></a><a href="#top" aria-label="SilmuGym members"><Users size={18} /></a></div><div className="footer__bottom"><span>© 2026 SilmuGym. Demo concept.</span><span>Built for better days <Activity size={14} /></span></div></footer>
    </div>
  );
}
