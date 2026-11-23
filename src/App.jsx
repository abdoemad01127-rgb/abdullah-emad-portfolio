import { useEffect, useState } from 'react'
import './App.css'

const copy = {
  ar: {
    direction: 'rtl',
    nav: ['نبذة عني', 'المهارات', 'المشاريع', 'تواصل'],
    role: 'مطوّر واجهات أمامية',
    name: 'عبدالله عماد',
    intro: 'أحوّل الأفكار إلى',
    highlight: 'تجارب رقمية',
    introEnd: 'واضحة وممتعة.',
    summary: 'أبني واجهات ويب عصرية وسريعة، أهتم بالتفاصيل الصغيرة وأجعل كل تجربة سهلة الاستخدام على أي جهاز.',
    work: 'شاهد مشاريعي',
    contact: 'تواصل معي',
    available: 'متاح لمشاريع جديدة',
    scroll: 'مرّر لاكتشاف المزيد',
    aboutTag: 'نبذة مختصرة',
    aboutTitle: 'أحب أن أجعل الويب\nأبسط وأجمل.',
    aboutBody: 'أنا مطوّر واجهات أمامية أستمتع ببناء منتجات رقمية تجمع بين التصميم المدروس والكود النظيف. أتعلم باستمرار وأحوّل كل تحدٍ إلى فرصة لصنع شيء أفضل.',
    facts: [['01', 'تصميم يضع المستخدم أولًا'], ['02', 'كود منظم وقابل للتطوير'], ['03', 'تفاصيل متقنة على كل شاشة']],
    skillsTag: 'ما أستخدمه',
    skillsTitle: 'أدواتي ومهاراتي',
    skillsBody: 'أدوات عملية لبناء واجهات سريعة وسهلة الاستخدام.',
    projectsTag: 'أعمال مختارة',
    projectsTitle: 'مشاريع أفتخر بها',
    projectsBody: 'تصفّح تطبيقاتي المنشورة وروابط المعاينة المباشرة.',
    preview: 'معاينة المشروع',
    projects: [
      { id: 'calculator', name: 'آلة حاسبة', description: 'آلة حاسبة بسيطة بواجهة واضحة، تدعم العمليات الحسابية الأساسية.', kind: 'تطبيق ويب', tech: ['HTML', 'CSS', 'JavaScript'] },
      { id: 'task-list', name: 'يوم — قائمة مهامي', description: 'تطبيق لتنظيم مهامك اليومية، مع تسجيل دخول وإنشاء حساب لمتابعة الإنجاز.', kind: 'تطبيق ويب', tech: ['Firebase Hosting'], sourceUrl: null, previewUrl: 'https://yawm-tasks-abdoemad-2026.web.app/' },
      { id: 'number-guess', name: 'لعبة تخمين الأرقام', description: 'لعبة عربية لتخمين رقم عشوائي من 1 إلى 100 خلال عشر محاولات.', kind: 'لعبة ويب', tech: ['HTML', 'CSS', 'JavaScript'] },
    ],
    contactTag: 'لنعمل معًا',
    contactTitle: 'عندك فكرة؟\nخلّينا ننفّذها.',
    contactBody: 'أبحث دائمًا عن تحدٍ جديد وتعاون جميل. أرسل لي رسالة وسأعود إليك قريبًا.',
    email: 'راسلني عبر البريد',
    footer: 'صُنع بإتقان وشغف.',
    switch: 'EN',
  },
  en: {
    direction: 'ltr',
    nav: ['About', 'Skills', 'Projects', 'Contact'],
    role: 'FRONTEND DEVELOPER',
    name: 'Abdullah Emad',
    intro: 'I turn ideas into',
    highlight: 'digital experiences',
    introEnd: 'that feel right.',
    summary: 'I build modern, fast web interfaces with thoughtful details and intuitive experiences on every screen.',
    work: 'Explore my work',
    contact: 'Get in touch',
    available: 'Available for new projects',
    scroll: 'SCROLL TO EXPLORE',
    aboutTag: 'A LITTLE ABOUT ME',
    aboutTitle: 'Making the web\nsimpler and better.',
    aboutBody: 'I’m a frontend developer who enjoys building digital products that pair thoughtful design with clean code. I keep learning and turn each challenge into a chance to make something better.',
    facts: [['01', 'User-first design'], ['02', 'Clean, scalable code'], ['03', 'Care on every screen']],
    skillsTag: 'MY TOOLKIT',
    skillsTitle: 'Tools & skills',
    skillsBody: 'Practical tools for building fast, intuitive interfaces.',
    projectsTag: 'SELECTED WORK',
    projectsTitle: 'Things I’ve built',
    projectsBody: 'Explore my published apps and open their live previews.',
    preview: 'Live preview',
    projects: [
      { id: 'calculator', name: 'Calculator', description: 'A simple calculator with a clear interface for everyday arithmetic.', kind: 'WEB APP', tech: ['HTML', 'CSS', 'JavaScript'] },
      { id: 'task-list', name: 'Yawm — My Tasks', description: 'A daily task app with sign-in and account creation to keep track of your progress.', kind: 'WEB APP', tech: ['Firebase Hosting'], sourceUrl: null, previewUrl: 'https://yawm-tasks-abdoemad-2026.web.app/' },
      { id: 'number-guess', name: 'Number guessing game', description: 'An Arabic game: guess a random number from 1 to 100 in ten attempts.', kind: 'WEB GAME', tech: ['HTML', 'CSS', 'JavaScript'] },
    ],
    contactTag: 'LET’S WORK TOGETHER',
    contactTitle: 'Have an idea?\nLet’s make it real.',
    contactBody: 'I’m always open to a new challenge and great collaboration. Send me a message and I’ll get back to you soon.',
    email: 'Say hello by email',
    footer: 'Made with care and curiosity.',
    switch: 'عربي',
  },
}

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive UI', 'Git & GitHub']

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={diagonal ? 'arrow-icon diagonal' : 'arrow-icon'}>
      <path d="M4 10h11M10 4l6 6-6 6" />
    </svg>
  )
}

function App() {
  const [language, setLanguage] = useState('ar')
  const t = copy[language]
  const isArabic = language === 'ar'

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = t.direction
  }, [language, t.direction])

  return (
    <div className="site-shell" dir={t.direction}>
      <header className="site-header wrap">
        <a className="wordmark" href="#home" aria-label={isArabic ? 'العودة إلى الأعلى' : 'Back to top'}>
          <span className="wordmark-mark">AE<span>.</span></span>
          <span className="wordmark-caption">ABDULLAH EMAD</span>
        </a>
        <nav className="main-nav" aria-label={isArabic ? 'التنقل الرئيسي' : 'Main navigation'}>
          {t.nav.map((label, index) => <a key={label} href={['#about', '#skills', '#projects', '#contact'][index]}>{label}</a>)}
        </nav>
        <button className="language-toggle" onClick={() => setLanguage(isArabic ? 'en' : 'ar')} type="button" aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}>{t.switch}</button>
      </header>

      <main>
        <section className="hero-section wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" />{t.available}</div>
            <p className="hero-name">{t.name}</p>
            <p className="eyebrow">{t.role}</p>
            <h1>{t.intro}<br /><span className="accent-text">{t.highlight}</span><br />{t.introEnd}</h1>
            <p className="hero-summary">{t.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{t.work}<ArrowIcon /></a>
              <a className="button button-quiet" href="#contact">{t.contact}<ArrowIcon diagonal /></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="art-grid" />
            <div className="art-card card-back"><span className="code-dot" /><span className="code-dot" /><span className="code-dot" /><div className="code-lines"><i /><i /><i /><i /><i /></div></div>
            <div className="art-monogram"><span>A</span><i /></div>
            <div className="floating-chip chip-react"><span className="chip-symbol">✳</span> React</div>
            <div className="floating-chip chip-code"><span className="chip-symbol">&lt;/&gt;</span> Clean code</div>
            <div className="art-caption"><span>01 / 04</span><span>{isArabic ? 'أفكار تتحول إلى واجهات' : 'Ideas into interfaces'}</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" />{t.scroll}</a>
        </section>

        <section className="content-section wrap" id="about">
          <div className="section-heading"><p className="section-label"><span>01</span>{t.aboutTag}</p><h2>{t.aboutTitle}</h2></div>
          <div className="about-content"><p className="about-body">{t.aboutBody}</p><div className="about-facts">{t.facts.map(([number, label]) => <div className="fact" key={number}><span>{number}</span><p>{label}</p></div>)}</div></div>
        </section>

        <section className="skills-section" id="skills"><div className="wrap skills-inner"><div><p className="section-label"><span>02</span>{t.skillsTag}</p><h2>{t.skillsTitle}</h2><p className="section-description">{t.skillsBody}</p></div><div className="skill-list">{skills.map((skill, index) => <div className="skill-pill" key={skill}><span>0{index + 1}</span>{skill}</div>)}</div></div></section>

        <section className="content-section projects-section wrap" id="projects">
          <div className="projects-heading"><div><p className="section-label"><span>03</span>{t.projectsTag}</p><h2>{t.projectsTitle}</h2><p className="section-description">{t.projectsBody}</p></div></div>
          <div className="project-grid">{t.projects.map((project, index) => <article className="project-card" key={project.id}>
            <div className={`project-visual visual-${project.id}`} aria-hidden="true">
              <span className="project-kind">{project.kind} <b>/ {String(index + 1).padStart(2, '0')}</b></span>
              {project.id === 'calculator' && <div className="calc-mock"><span className="calc-display">8,240<span>÷</span></span><div className="calc-keys">{['C','±','%','÷','7','8','9','×','4','5','6','−','1','2','3','+','0','.','='].map((key, keyIndex) => <i className={keyIndex % 4 === 3 || key === '=' ? 'key-accent' : ''} key={key}>{key}</i>)}</div></div>}
              {project.id === 'task-list' && <div className="yawm-mock"><div className="yawm-brand"><span>ي</span><b>يوم</b><i>•</i></div><strong>{isArabic ? 'أهلًا بعودتك' : 'Welcome back'}</strong><span className="yawm-subtitle">{isArabic ? 'مساحتك لإنجاز أجمل' : 'Make every day count'}</span><div className="yawm-field">{isArabic ? 'البريد الإلكتروني' : 'Email address'}</div><div className="yawm-field">{isArabic ? 'كلمة المرور' : 'Password'}</div><div className="yawm-submit">{isArabic ? 'تسجيل الدخول' : 'Sign in'}</div><span className="yawm-create">{isArabic ? 'إنشاء حساب' : 'Create account'}</span></div>}
              {project.id === 'number-guess' && <div className="guess-mock"><span className="guess-kicker">{isArabic ? 'خمن الرقم السري' : 'GUESS THE NUMBER'}</span><b>?</b><span className="guess-range">1 <i /> 100</span><span className="guess-button">{isArabic ? 'تحقق' : 'CHECK'}</span></div>}
            </div>
            <div className="project-card-content"><div className="project-card-heading"><span className="project-number">0{index + 1}</span><h3>{project.name}</h3></div><p>{project.description}</p><div className="project-tags">{project.tech.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="project-links"><a className="preview-link" href={project.previewUrl || `https://abdoemad01127-rgb.github.io/${project.id}/`} target="_blank" rel="noreferrer">{t.preview}<ArrowIcon diagonal /></a></div>
            </div>
          </article>)}</div>
        </section>

        <section className="contact-section" id="contact"><div className="wrap contact-inner"><div><p className="section-label"><span>04</span>{t.contactTag}</p><h2>{t.contactTitle}</h2><p className="contact-description">{t.contactBody}</p></div><div className="contact-actions"><a className="button button-primary" href="mailto:abdoemad01127@gmail.com">{t.email}<ArrowIcon diagonal /></a><a className="social-link" href="https://wa.me/201010195779" target="_blank" rel="noreferrer">WhatsApp <ArrowIcon diagonal /></a></div></div></section>
      </main>

      <footer className="site-footer wrap"><a className="wordmark" href="#home"><span className="wordmark-mark">AE<span>.</span></span></a><p>© {new Date().getFullYear()} · {t.footer}</p><a className="back-top" href="#home">↑ <span>{isArabic ? 'للأعلى' : 'Back to top'}</span></a></footer>
    </div>
  )
}

export default App
