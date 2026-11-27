const SITE = 'https://911dentist.org';
const POSTS = `${SITE}/wp-json/wp/v2/posts?per_page=18&_embed`;

const translations = {
  en: {
    skip: "Skip to content",
    brandLine: "Dental guidance when every minute matters",
    helpNow: "Emergency help",
    criticalTitle: "Life-threatening symptoms?",
    criticalCopy: "Trouble breathing or swallowing, rapidly spreading facial swelling, uncontrolled bleeding, or major trauma require emergency medical care now.",
    call911: "Call 911 — US",
    call112: "Call 112 — Sweden/EU",
    heroTitle: "What do you need help with?",
    consultOptions: "Check online consult availability",
    decisionTitle: "What best describes the problem?",
    patientResources: "PATIENT RESOURCES",
    latestGuides: "Latest emergency guides",
    viewGuides: "View guides",
    safetyFirst: "SAFETY FIRST",
    emergencyTitle: "Is this a dental emergency?",
    emergencyIntro: "Use these general warning signs to choose your next step. This information does not diagnose your condition.",
    getMedicalHelp: "Get emergency medical help now",
    getMedicalHelpCopy: "Call emergency services or go to the nearest emergency department for breathing or swallowing difficulty, facial swelling affecting the airway, uncontrolled bleeding, major facial trauma, or symptoms that feel life-threatening.",
    dentalNextStep: "DENTAL NEXT STEP",
    chooseSituation: "Choose the closest situation",
    toothPain: "Tooth pain",
    toothPainCopy: "Severe, persistent, throbbing, or night pain.",
    infectionSwelling: "Infection or swelling",
    infectionSwellingCopy: "Swelling, drainage, fever, bad taste, or worsening pain.",
    brokenTrauma: "Broken tooth",
    brokenTraumaCopy: "Cracks and fractures.",
    lostFilling: "Lost filling or crown",
    lostFillingCopy: "A missing restoration, sensitivity, or sharp edge.",
    readGuide: "Read guide",
    untilCare: "UNTIL YOU RECEIVE CARE",
    temporaryTitle: "General temporary steps",
    stepRinse: "Rinse gently with warm water.",
    stepChew: "Avoid chewing on the affected side.",
    stepCold: "Use a cold compress on the outside of the face for swelling.",
    stepAspirin: "Do not place aspirin directly on the tooth or gums.",
    temporaryDisclaimer: "These are temporary educational measures, not treatment. Do not delay urgent professional care.",
    professionalGuidance: "PROFESSIONAL GUIDANCE",
    consultTitle: "Check online consult availability",
    consultIntro: "Enter your U.S. ZIP code on 911Dentist.org to check whether a dentist licensed in your state is available.",
    simpleConsult: "Dentist Video Review",
    xraySecondOpinion: "X-ray Second Opinion",
    xraySecondIntro: "Ask a dentist to review your dental X-ray and your first dentist’s diagnosis or treatment plan.",
    viewXraySecond: "Check second-opinion availability",
    exploreXraySecond: "See the paid X-ray second opinion",
    oneTime: "one-time",
    simpleIntro: "Get a recorded review from a dentist for a non-urgent question.",
    viewSimple: "Check recorded review availability",
    liveConsult: "Live Video Consult",
    liveIntro: "Speak with a dentist in a live video appointment.",
    viewLive: "Check live consult availability",
    secureHandoffCopy: "Eligibility, intake, and payment are handled on 911Dentist.org.",
    learnPrepare: "LEARN & PREPARE",
    guidesTitle: "Dental emergency guides",
    guidesIntro: "Search recent public articles from 911Dentist.org. Articles currently open in English; the app navigation and safety information are available in English and Swedish.",
    searchGuides: "Search recent guides",
    guidesUnavailable: "Recent guides are temporarily unavailable here.",
    visitBlog: "Browse all guides in English",
    noResults: "No guides match your search.",
    readArticle: "Read article",
    latestEnglish: "Latest article in English",
    planDecoder: "Decode a treatment plan",
    accountInfo: "ACCOUNT & INFORMATION",
    aboutTitle: "Clearer decisions in the first moments of a dental emergency.",
    aboutCopy: "911Dentist provides safety-first educational guidance and optional pathways to virtual consultation and dental second opinions.",
    install: "Install 911Dentist",
    installCopy: "Add the app to your phone home screen",
    iosInstall: "On iPhone: tap Share, then Add to Home Screen.",
    patientAccount: "Patient account",
    createAccount: "Create patient account",
    login: "Log in",
    moreInformation: "More information",
    freeGuide: "Free Dental Emergency Survival Guide",
    forDentists: "For dentists",
    aboutUs: "About 911Dentist",
    contact: "Contact",
    privacy: "Privacy policy",
    terms: "Terms of service",
    disclaimer: "Medical disclaimer",
    footerLine: "Emergency dental guidance and virtual consult pathways",
    footerDisclaimer: "Educational information only. Not a diagnosis or substitute for an in-person examination.",
    home: "Home",
    emergency: "Emergency",
    more: "More",
    installed: "911Dentist installed",
    backOnline: "Back online",
    offline: "You are offline",
    docTitle: "911Dentist — Emergency Dental Guidance",
    metaDescription: "Installable access to 911Dentist emergency dental guidance, virtual consults, second opinions, and patient resources.",
    brandHome: "911Dentist home",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
    trustListLabel: "App privacy and safety",
    sekNote: "",
    guidesSoon: "Latest emergency guides",
    urgentTask: "Get urgent dental guidance",
    findDentist: "Find a dentist",
    find: "Find dentist",
    tools: "Tools",
    freeTools: "Free dental tools",
    planTask: "Understand my treatment plan",
    knockedOut: "Knocked-out tooth",
    brokenOnly: "Broken tooth",
    directoryCopy: "Search by ZIP code. The directory includes listings in California, Colorado, Arizona, and Texas. Call the practice to confirm availability.",
    openDirectory: "Search the dentist directory",
    noListing: "What if there is no listing?",
    toolsCopy: "These tools open in English on 911Dentist.org. Cost estimates are for the U.S.",
    xrayTool: "Understand your X-ray type",
    costTool: "Estimate dental costs",
    insuranceTool: "Estimate costs with insurance",
    secondGuide: "Read the second-opinion guide"
  },
  sv: {
    skip: "Hoppa till innehållet",
    brandLine: "Tandvårdsråd när varje minut räknas",
    helpNow: "Akut hjälp",
    criticalTitle: "Livshotande symtom?",
    criticalCopy: "Andnings- eller sväljsvårigheter, snabbt ökande ansiktssvullnad, okontrollerad blödning eller allvarligt trauma kräver akut sjukvård nu.",
    call911: "Ring 911 — USA",
    call112: "Ring 112 — Sverige/EU",
    heroTitle: "Vad behöver du hjälp med?",
    consultOptions: "Kontrollera tillgång till konsultation online",
    decisionTitle: "Vad beskriver problemet bäst?",
    patientResources: "PATIENTRESURSER",
    latestGuides: "Senaste akutguiderna",
    viewGuides: "Se guider",
    safetyFirst: "SÄKERHETEN FÖRST",
    emergencyTitle: "Är detta ett akut tandproblem?",
    emergencyIntro: "Använd dessa allmänna varningssignaler för att välja nästa steg. Informationen ställer ingen diagnos.",
    getMedicalHelp: "Sök akut sjukvård nu",
    getMedicalHelpCopy: "Ring larmnumret eller åk till närmaste akutmottagning vid andnings- eller sväljsvårigheter, ansiktssvullnad som påverkar luftvägen, okontrollerad blödning, allvarligt ansiktstrauma eller symtom som känns livshotande.",
    dentalNextStep: "NÄSTA TANDVÅRDSSTEG",
    chooseSituation: "Välj det som bäst motsvarar situationen",
    toothPain: "Tandvärk",
    toothPainCopy: "Svår, ihållande, bultande eller nattlig smärta.",
    infectionSwelling: "Infektion eller svullnad",
    infectionSwellingCopy: "Svullnad, var, feber, dålig smak eller ökande smärta.",
    brokenTrauma: "Trasig tand",
    brokenTraumaCopy: "Sprickor och frakturer.",
    lostFilling: "Förlorad fyllning eller krona",
    lostFillingCopy: "En förlorad restauration, ilningar eller en vass kant.",
    readGuide: "Läs guiden",
    untilCare: "TILLS DU FÅR VÅRD",
    temporaryTitle: "Allmänna tillfälliga åtgärder",
    stepRinse: "Skölj försiktigt med varmt vatten.",
    stepChew: "Undvik att tugga på den drabbade sidan.",
    stepCold: "Använd en kall kompress på utsidan av ansiktet vid svullnad.",
    stepAspirin: "Placera inte aspirin direkt på tanden eller tandköttet.",
    temporaryDisclaimer: "Detta är tillfälliga informationsåtgärder, inte behandling. Vänta inte med att söka akut professionell vård.",
    professionalGuidance: "PROFESSIONELL VÄGLEDNING",
    consultTitle: "Kontrollera tillgång till konsultation online",
    consultIntro: "Ange ditt amerikanska postnummer på 911Dentist.org för att se om en tandläkare med legitimation i din delstat är tillgänglig.",
    simpleConsult: "Inspelad videobedömning",
    xraySecondOpinion: "Andra bedömning av tandröntgen",
    xraySecondIntro: "Be en tandläkare granska din tandröntgen och din första tandläkares diagnos eller behandlingsplan.",
    viewXraySecond: "Kontrollera tillgång till en andra bedömning",
    exploreXraySecond: "Se erbjudandet om en andra bedömning",
    oneTime: "engångsbelopp",
    simpleIntro: "Få en inspelad bedömning av en tandläkare för en fråga som inte är akut.",
    viewSimple: "Kontrollera tillgång till inspelad videobedömning",
    liveConsult: "Videokonsultation live",
    liveIntro: "Prata med en tandläkare i ett videosamtal.",
    viewLive: "Kontrollera tillgång till videosamtal",
    secureHandoffCopy: "Kontroll av tillgänglighet, patientuppgifter och betalning hanteras på 911Dentist.org.",
    learnPrepare: "LÄR DIG & FÖRBERED DIG",
    guidesTitle: "Guider för akuta tandproblem",
    guidesIntro: "Guiderna finns på engelska. Appens akutvägledning finns på svenska.",
    searchGuides: "Sök bland de senaste guiderna",
    guidesUnavailable: "De senaste guiderna är tillfälligt otillgängliga här.",
    visitBlog: "Bläddra bland alla guider på engelska",
    noResults: "Inga guider matchar din sökning.",
    readArticle: "Läs artikeln",
    latestEnglish: "Senaste artikeln på engelska",
    planDecoder: "Förstå en behandlingsplan",
    accountInfo: "KONTO & INFORMATION",
    aboutTitle: "Tydligare beslut under de första minuterna av ett akut tandproblem.",
    aboutCopy: "911Dentist erbjuder säkerhetsfokuserad information och valfria vägar till videokonsultation och odontologisk second opinion.",
    install: "Installera 911Dentist",
    installCopy: "Lägg till appen på telefonens hemskärm",
    iosInstall: "På iPhone: tryck på Dela och sedan Lägg till på hemskärmen.",
    patientAccount: "Patientkonto",
    createAccount: "Skapa patientkonto",
    login: "Logga in",
    moreInformation: "Mer information",
    freeGuide: "Kostnadsfri guide för akuta tandproblem",
    forDentists: "För tandläkare",
    aboutUs: "Om 911Dentist",
    contact: "Kontakt",
    privacy: "Integritetspolicy",
    terms: "Användarvillkor",
    disclaimer: "Medicinsk ansvarsfriskrivning",
    footerLine: "Akut tandvägledning och vägar till videokonsultation",
    footerDisclaimer: "Endast utbildningsinformation. Ingen diagnos och ingen ersättning för en klinisk undersökning.",
    home: "Hem",
    emergency: "Akut",
    more: "Mer",
    installed: "911Dentist har installerats",
    backOnline: "Du är online igen",
    offline: "Du är offline",
    docTitle: "911Dentist — Akut tandvårdsvägledning",
    metaDescription: "Installerbar åtkomst till 911Dentists akuta tandvårdsvägledning, videokonsultationer, second opinions och patientresurser.",
    brandHome: "911Dentist startsida",
    primaryNav: "Huvudnavigering",
    mobileNav: "Mobilnavigering",
    trustListLabel: "Appens integritet och säkerhet",
    sekNote: "Ungefärligt pris i svenska kronor. Slutbetalningen behandlas i amerikanska dollar.",
    guidesSoon: "Svenska guider kommer snart.",
    urgentTask: "Få vägledning vid akuta tandproblem",
    findDentist: "Hitta en tandläkare",
    find: "Hitta tandläkare",
    tools: "Verktyg",
    freeTools: "Kostnadsfria tandvårdsverktyg",
    planTask: "Förstå min behandlingsplan",
    knockedOut: "Utslagen tand",
    brokenOnly: "Trasig tand",
    directoryCopy: "Sök med amerikanskt postnummer. Katalogen innehåller mottagningar i Kalifornien, Colorado, Arizona och Texas. Ring mottagningen för att fråga om lediga tider.",
    openDirectory: "Sök i tandläkarkatalogen",
    noListing: "Vad gör jag om ingen mottagning visas?",
    toolsCopy: "Verktygen öppnas på engelska på 911Dentist.org. Kostnadsuppskattningarna gäller USA.",
    xrayTool: "Förstå din typ av tandröntgen",
    costTool: "Uppskatta tandvårdskostnader",
    insuranceTool: "Uppskatta kostnader med försäkring",
    secondGuide: "Läs guiden om en andra bedömning"
  }
};

const icon = {
  home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10M9.5 20v-6h5v6"/></svg>',
  emergency:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 19h18.4L12 3Z"/><path d="M12 9v4.5M12 17h.01"/></svg>',
  find:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></svg>',
  tools:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z"/><path d="M8 20a3 3 0 0 1 3-3h8M9 8h6M9 11h6"/></svg>',
  more:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>'
};
const navItems = [['home','home'],['emergency','emergency'],['find','find'],['tools','tools'],['more','more']];
let lang = localStorage.getItem('911dentist-lang') === 'sv' ? 'sv' : 'en';
let postsLoading = false;
let postsFailed = false;
let posts = [];
let deferredInstall;

const t = key => translations[lang][key] || translations.en[key] || key;
const stripHtml = value => { const node = document.createElement('div'); node.innerHTML = value || ''; return node.textContent || ''; };
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]));

function currentView(){
  return document.querySelector('.view.active')?.id || 'home';
}

function renderNav(){
  const mobile = navItems.map(([key,id]) => `<button data-view="${id}" class="${currentView() === id ? 'active' : ''}" ${currentView() === id ? 'aria-current="page"' : ''} aria-label="${escapeHtml(t(key))}">${icon[id]}<span>${escapeHtml(t(key))}</span></button>`).join('');
  const desktop = navItems.map(([key,id]) => `<button data-view="${id}" class="${currentView() === id ? 'active' : ''}" ${currentView() === id ? 'aria-current="page"' : ''}>${escapeHtml(t(key))}</button>`).join('');
  document.querySelector('.mobile-nav').innerHTML = mobile;
  document.querySelector('.desktop-nav').innerHTML = desktop;
}

function showView(id, push = true){
  const target = document.getElementById(id);
  if(!target?.classList.contains('view')) return;
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  target.classList.add('active');
  if(push && location.hash !== `#${id}`) history.pushState({view:id}, '', `#${id}`);
  renderNav();
  window.scrollTo({top:0, behavior:'instant'});
  document.getElementById('main').focus({preventScroll:true});
}

function applyLanguage(){
  document.documentElement.lang = lang;
  document.getElementById('languageToggle').textContent = lang === 'en' ? 'SV' : 'EN';
  document.getElementById('languageToggle').setAttribute('aria-label', lang === 'en' ? 'Byt språk till svenska' : 'Switch language to English');
  document.querySelectorAll('[data-i18n]').forEach(element => element.textContent = t(element.dataset.i18n));
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => element.placeholder = t(element.dataset.i18nPlaceholder));
  document.title = t('docTitle');
  var __md = document.querySelector('meta[name="description"]'); if(__md){ __md.setAttribute('content', t('metaDescription')); }
  var __ogt = document.querySelector('meta[property="og:title"]'); if(__ogt){ __ogt.setAttribute('content', t('docTitle')); }
  var __ogd = document.querySelector('meta[property="og:description"]'); if(__ogd){ __ogd.setAttribute('content', t('metaDescription')); }
  var __brand = document.querySelector('.brand'); if(__brand){ __brand.setAttribute('aria-label', t('brandHome')); }
  var __pnav = document.querySelector('.desktop-nav'); if(__pnav){ __pnav.setAttribute('aria-label', t('primaryNav')); }
  var __mnav = document.querySelector('.mobile-nav'); if(__mnav){ __mnav.setAttribute('aria-label', t('mobileNav')); }
  renderNav();
  renderPosts();
  if(lang === 'en' && posts.length === 0){ loadPosts(); }
}

function postCard(post){
  const image = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const title = stripHtml(post?.title?.rendered) || '911Dentist';
  const excerpt = stripHtml(post?.excerpt?.rendered).trim();
  const date = post?.date ? new Intl.DateTimeFormat(lang === 'sv' ? 'sv-SE' : 'en-US', {month:'short', day:'numeric', year:'numeric'}).format(new Date(post.date)) : '';
  const media = image ? `<img src="${escapeHtml(image)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : '<span class="fallback-mark">911</span>';
  return `<article class="guide-card"><div class="guide-image">${media}</div><div class="guide-body"><small>${escapeHtml(lang === 'sv' ? t('latestEnglish') : date)}</small><h3>${escapeHtml(title)}</h3><p>${escapeHtml(excerpt)}</p><a href="${escapeHtml(post.link)}" target="_blank" rel="noopener">${escapeHtml(t('readArticle'))} →</a></div></article>`;
}

function renderPosts(){
  document.getElementById('guideSearchRow').hidden = lang === 'sv' || postsFailed;
  document.getElementById('guideNotice').hidden = lang === 'sv' || !postsFailed;
  if(lang === 'sv' || postsFailed){
    document.getElementById('guideGrid').replaceChildren();
    document.getElementById('featuredGuides').replaceChildren();
    return;
  }
  const query = (document.getElementById('guideSearch')?.value || '').trim().toLocaleLowerCase(lang === 'sv' ? 'sv-SE' : 'en-US');
  const filtered = posts.filter(post => `${stripHtml(post?.title?.rendered)} ${stripHtml(post?.excerpt?.rendered)}`.toLowerCase().includes(query));
  const grid = document.getElementById('guideGrid');
  const featured = document.getElementById('featuredGuides');
  if(grid){
    grid.innerHTML = filtered.length ? filtered.map(postCard).join('') : posts.length ? `<div class="empty-state">${escapeHtml(t('noResults'))}</div>` : '';
  }
  if(featured){
    featured.innerHTML = posts.slice(0,3).map(postCard).join('');
  }
}

async function loadPosts(){
  if(lang === 'sv' || postsLoading) return;
  postsLoading = true;
  postsFailed = false;
  renderPosts();
  document.getElementById('guideGrid').innerHTML = '<div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>';
  document.getElementById('featuredGuides').innerHTML = '<div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>';
  try{
    const response = await fetch(POSTS, {headers:{Accept:'application/json'}});
    if(!response.ok) throw new Error('Posts unavailable');
    posts = await response.json();
    if(!Array.isArray(posts) || !posts.length) throw new Error('No guides');
  }catch{
    posts = [];
    postsFailed = true;
  }finally{
    postsLoading = false;
    renderPosts();
  }
}

function toast(message){
  const element = document.getElementById('toast');
  element.textContent = message;
  element.classList.add('show');
  window.setTimeout(() => element.classList.remove('show'), 2200);
}

document.addEventListener('click', event => {
  const control = event.target.closest('[data-view]');
  if(!control) return;
  event.preventDefault();
  showView(control.dataset.view);
});

document.getElementById('languageToggle').addEventListener('click', () => {
  lang = lang === 'en' ? 'sv' : 'en';
  localStorage.setItem('911dentist-lang', lang);
  applyLanguage();
});

document.getElementById('guideSearch').addEventListener('input', renderPosts);
window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredInstall = event; });
window.addEventListener('appinstalled', () => toast(t('installed')));
document.getElementById('installButton').addEventListener('click', async () => {
  if(deferredInstall){
    deferredInstall.prompt();
    await deferredInstall.userChoice;
    deferredInstall = null;
  }else{
    document.getElementById('iosInstall').hidden = false;
    document.getElementById('iosInstall').scrollIntoView({behavior:'smooth', block:'center'});
  }
});
window.addEventListener('popstate', () => showView((location.hash || '#home').slice(1), false));
window.addEventListener('online', () => toast(t('backOnline')));
window.addEventListener('offline', () => toast(t('offline')));
if('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));

showView((location.hash || '#home').slice(1), false);
applyLanguage();
