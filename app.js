const SITE = 'https://911dentist.org';
const POSTS = `${SITE}/wp-json/wp/v2/posts?per_page=18&_embed`;

const translations = {
  en: {
    skip:'Skip to content', brandLine:'Dental guidance when every minute matters', helpNow:'Emergency help',
    criticalTitle:'Life-threatening symptoms?', criticalCopy:'Trouble breathing or swallowing, rapidly spreading facial swelling, uncontrolled bleeding, or major trauma require emergency medical care now.', call911:'Call 911 — US', call112:'Call 112 — Sweden/EU',
    urgentGuidance:'URGENT DENTAL GUIDANCE', heroTitle:'Know what to do next when dental pain cannot wait.', heroCopy:'Understand warning signs, find safe next steps, and continue to virtual consultation or second-opinion options on 911Dentist.org.', startEmergency:'Start emergency guidance', consultOptions:'View consult options',
    trustEducation:'Education-first guidance', trustNoDiagnosis:'No automated diagnosis', trustNoData:'No patient data stored in this app', firstStep:'FIRST STEP', decisionTitle:'What best describes the problem?', painSwelling:'Severe pain or swelling', painSwellingCopy:'Possible infection, abscess, or nerve pain', brokenTooth:'Broken or knocked-out tooth', brokenToothCopy:'Time-sensitive dental trauma guidance', lostRestoration:'Lost filling or crown', lostRestorationCopy:'Protect the area until professional care', notSure:'I am not sure', notSureCopy:'Review warning signs and available next steps',
    choosePath:'CHOOSE YOUR PATH', pathTitle:'Three ways to move forward', emergencyGuidance:'Emergency guidance', emergencyGuidanceCopy:'Recognize red flags and understand the safest immediate step.', openGuidance:'Open guidance', virtualConsult:'Virtual consultation', virtualConsultCopy:'Compare the current $49 written and $149 live options.', compareOptions:'Compare options', secondOpinion:'Dental second opinion', secondOpinionCopy:'Understand options before major or irreversible dental treatment.', learnMore:'Learn more', patientResources:'PATIENT RESOURCES', latestGuides:'Latest emergency guides', viewGuides:'View guides', privateTitle:'This app is a private gateway—not a patient record system.', privateCopy:'Forms, payments, accounts, photos, and X-rays open on the existing 911Dentist.org website. This app does not collect or store them.',
    safetyFirst:'SAFETY FIRST', emergencyTitle:'Is this a dental emergency?', emergencyIntro:'Use these general warning signs to choose your next step. This information does not diagnose your condition.', getMedicalHelp:'Get emergency medical help now', getMedicalHelpCopy:'Call emergency services or go to the nearest emergency department for breathing or swallowing difficulty, facial swelling affecting the airway, uncontrolled bleeding, major facial trauma, or symptoms that feel life-threatening.', dentalNextStep:'DENTAL NEXT STEP', chooseSituation:'Choose the closest situation', toothPain:'Tooth pain', toothPainCopy:'Severe, persistent, throbbing, or night pain.', infectionSwelling:'Infection or swelling', infectionSwellingCopy:'Swelling, drainage, fever, bad taste, or worsening pain.', brokenTrauma:'Broken tooth or trauma', brokenTraumaCopy:'Cracks, fractures, or a knocked-out tooth.', lostFilling:'Lost filling or crown', lostFillingCopy:'A missing restoration, sensitivity, or sharp edge.', readGuide:'Read guide', untilCare:'UNTIL YOU RECEIVE CARE', temporaryTitle:'General temporary steps', stepRinse:'Rinse gently with warm water.', stepChew:'Avoid chewing on the affected side.', stepCold:'Use a cold compress on the outside of the face for swelling.', stepAspirin:'Do not place aspirin directly on the tooth or gums.', temporaryDisclaimer:'These are temporary educational measures, not treatment. Do not delay urgent professional care.', continueEmergency:'Continue on 911Dentist.org',
    professionalGuidance:'PROFESSIONAL GUIDANCE', consultTitle:'Choose your consultation path', consultIntro:'Review the current options here. Payment, intake, and any uploads continue securely on 911Dentist.org.', flexible:'FLEXIBLE OPTION', simpleConsult:'Simple Consult', oneTime:'one-time', simpleIntro:'Submit symptoms and photos for written guidance—no live call required.', simpleItem1:'Written response within hours', simpleItem2:'Urgency and next-step guidance', simpleItem3:'Best for mild or non-urgent concerns', viewSimple:'View Simple Consult', recommended:'RECOMMENDED', liveConsult:'Live Video Consult', liveIntro:'Speak directly with a dentist by video for urgent or more complex concerns.', liveItem1:'Live video conversation', liveItem2:'Detailed symptom discussion', liveItem3:'Guidance on appropriate next steps', viewLive:'View Live Consult', beforeTreatment:'BEFORE TREATMENT', prioritySnapshot:'Priority Second Opinion', currentOption:'current option', snapshotIntro:'For questions about X-rays, treatment plans, root canals, extractions, or implants.', snapshotItem1:'Dentist-developed written guidance', snapshotItem2:'Treatment-option clarification', snapshotItem3:'Does not replace emergency care', viewSecondOpinion:'View Second Opinion', secureHandoff:'Secure handoff to 911Dentist.org', secureHandoffCopy:'This app does not process payments or accept medical information. The selected option opens the existing website workflow.',
    learnPrepare:'LEARN & PREPARE', guidesTitle:'Dental emergency guides', guidesIntro:'Search recent public articles from 911Dentist.org. Articles currently open in English; the app navigation and safety information are available in English and Swedish.', searchGuides:'Search guides', guidesUnavailable:'Recent guides are temporarily unavailable here.', visitBlog:'Visit the 911Dentist blog', noResults:'No guides match your search.', readArticle:'Read article', latestEnglish:'Latest article in English',
    accountInfo:'ACCOUNT & INFORMATION', aboutTitle:'Clearer decisions in the first moments of a dental emergency.', aboutCopy:'911Dentist provides safety-first educational guidance and optional pathways to virtual consultation and dental second opinions.', install:'Install 911Dentist', installCopy:'Add the app to your phone home screen', iosInstall:'On iPhone: tap Share, then Add to Home Screen.', patientAccount:'Patient account', createAccount:'Create patient account', login:'Log in', moreInformation:'More information', freeGuide:'Free Dental Emergency Survival Guide', forDentists:'For dentists', aboutUs:'About 911Dentist', contact:'Contact', privacy:'Privacy policy', terms:'Terms of service', disclaimer:'Medical disclaimer', footerLine:'Emergency dental guidance and virtual consult pathways', footerDisclaimer:'Educational information only. Not a diagnosis or substitute for an in-person examination.',
    home:'Home', emergency:'Emergency', consult:'Consult', guides:'Guides', more:'More', linkCopied:'Link copied', installed:'911Dentist installed', backOnline:'Back online', offline:'You are offline',
    docTitle:'911Dentist — Emergency Dental Guidance', metaDescription:'Installable access to 911Dentist emergency dental guidance, virtual consults, second opinions, and patient resources.', brandHome:'911Dentist home', primaryNav:'Primary navigation', mobileNav:'Mobile navigation', trustListLabel:'App privacy and safety', priceSimple:'<span>$</span>49', priceLive:'<span>$</span>149', priceSecond:'<span>$</span>29', sekNote:'', guidesSoon:'Latest emergency guides'
  },
  sv: {
    skip:'Hoppa till innehållet', brandLine:'Tandvårdsråd när varje minut räknas', helpNow:'Akut hjälp',
    criticalTitle:'Livshotande symtom?', criticalCopy:'Andnings- eller sväljsvårigheter, snabbt ökande ansiktssvullnad, okontrollerad blödning eller allvarligt trauma kräver akut sjukvård nu.', call911:'Ring 911 — USA', call112:'Ring 112 — Sverige/EU',
    urgentGuidance:'AKUT TANDVÄGLEDNING', heroTitle:'Få vägledning när tandvärken inte kan vänta.', heroCopy:'Lär dig känna igen varningssignaler, hitta ett säkert nästa steg och gå vidare till videokonsultation eller second opinion på 911Dentist.org.', startEmergency:'Starta akut vägledning', consultOptions:'Se konsultationsalternativ',
    trustEducation:'Vägledning med fokus på information', trustNoDiagnosis:'Ingen automatiserad diagnos', trustNoData:'Inga patientuppgifter lagras i appen', firstStep:'FÖRSTA STEGET', decisionTitle:'Vad beskriver problemet bäst?', painSwelling:'Svår smärta eller svullnad', painSwellingCopy:'Möjlig infektion, abscess eller nervsmärta', brokenTooth:'Trasig eller utslagen tand', brokenToothCopy:'Tidskänslig vägledning vid tandskada', lostRestoration:'Förlorad fyllning eller krona', lostRestorationCopy:'Skydda området tills du får professionell vård', notSure:'Jag är osäker', notSureCopy:'Se varningssignaler och möjliga nästa steg',
    choosePath:'VÄLJ DIN VÄG', pathTitle:'Tre sätt att gå vidare', emergencyGuidance:'Akut vägledning', emergencyGuidanceCopy:'Känn igen varningssignaler och förstå det säkraste första steget.', openGuidance:'Öppna vägledningen', virtualConsult:'Videokonsultation', virtualConsultCopy:'Jämför nuvarande alternativ: skriftligt svar för 49 dollar eller livesamtal för 149 dollar.', compareOptions:'Jämför alternativen', secondOpinion:'Odontologisk second opinion', secondOpinionCopy:'Förstå alternativen före en omfattande eller oåterkallelig tandbehandling.', learnMore:'Läs mer', patientResources:'PATIENTRESURSER', latestGuides:'Senaste akutguiderna', viewGuides:'Se guider', privateTitle:'Appen är en privat ingång – inte ett patientjournalsystem.', privateCopy:'Formulär, betalningar, konton, foton och röntgenbilder öppnas på den befintliga webbplatsen 911Dentist.org. Appen samlar inte in eller lagrar dem.',
    safetyFirst:'SÄKERHETEN FÖRST', emergencyTitle:'Är detta ett akut tandproblem?', emergencyIntro:'Använd dessa allmänna varningssignaler för att välja nästa steg. Informationen ställer ingen diagnos.', getMedicalHelp:'Sök akut sjukvård nu', getMedicalHelpCopy:'Ring larmnumret eller åk till närmaste akutmottagning vid andnings- eller sväljsvårigheter, ansiktssvullnad som påverkar luftvägen, okontrollerad blödning, allvarligt ansiktstrauma eller symtom som känns livshotande.', dentalNextStep:'NÄSTA TANDVÅRDSSTEG', chooseSituation:'Välj det som bäst motsvarar situationen', toothPain:'Tandvärk', toothPainCopy:'Svår, ihållande, bultande eller nattlig smärta.', infectionSwelling:'Infektion eller svullnad', infectionSwellingCopy:'Svullnad, var, feber, dålig smak eller ökande smärta.', brokenTrauma:'Trasig tand eller trauma', brokenTraumaCopy:'Sprickor, frakturer eller en utslagen tand.', lostFilling:'Förlorad fyllning eller krona', lostFillingCopy:'En förlorad restauration, ilningar eller en vass kant.', readGuide:'Läs guiden', untilCare:'TILLS DU FÅR VÅRD', temporaryTitle:'Allmänna tillfälliga åtgärder', stepRinse:'Skölj försiktigt med varmt vatten.', stepChew:'Undvik att tugga på den drabbade sidan.', stepCold:'Använd en kall kompress på utsidan av ansiktet vid svullnad.', stepAspirin:'Placera inte aspirin direkt på tanden eller tandköttet.', temporaryDisclaimer:'Detta är tillfälliga informationsåtgärder, inte behandling. Vänta inte med att söka akut professionell vård.', continueEmergency:'Fortsätt på 911Dentist.org',
    professionalGuidance:'PROFESSIONELL VÄGLEDNING', consultTitle:'Välj konsultationsväg', consultIntro:'Se de aktuella alternativen här. Betalning, anamnes och eventuella uppladdningar sker säkert på 911Dentist.org.', flexible:'FLEXIBELT ALTERNATIV', simpleConsult:'Enkel konsultation', oneTime:'engångsbelopp', simpleIntro:'Skicka symtom och foton för skriftlig vägledning – inget videosamtal krävs.', simpleItem1:'Skriftligt svar inom några timmar', simpleItem2:'Vägledning om brådska och nästa steg', simpleItem3:'Bäst vid milda eller icke-akuta besvär', viewSimple:'Se enkel konsultation', recommended:'REKOMMENDERAS', liveConsult:'Videokonsultation live', liveIntro:'Tala direkt med en tandläkare via video vid akuta eller mer komplicerade besvär.', liveItem1:'Videosamtal i realtid', liveItem2:'Detaljerad genomgång av symtom', liveItem3:'Vägledning om lämpliga nästa steg', viewLive:'Se videokonsultation', beforeTreatment:'FÖRE BEHANDLING', prioritySnapshot:'Prioriterad second opinion', currentOption:'aktuellt alternativ', snapshotIntro:'För frågor om röntgenbilder, behandlingsplaner, rotfyllningar, extraktioner eller implantat.', snapshotItem1:'Skriftlig vägledning utvecklad av tandläkare', snapshotItem2:'Förtydligande av behandlingsalternativ', snapshotItem3:'Ersätter inte akutvård', viewSecondOpinion:'Se second opinion', secureHandoff:'Säker övergång till 911Dentist.org', secureHandoffCopy:'Appen behandlar inte betalningar och tar inte emot medicinsk information. Det valda alternativet öppnar det befintliga webbflödet.',
    learnPrepare:'LÄR DIG & FÖRBERED DIG', guidesTitle:'Guider för akuta tandproblem', guidesIntro:'Svenska guider är på väg. Under tiden finns appens vägledning och säkerhetsinformation på svenska, och du kan alltid läsa de fullständiga guiderna på 911Dentist.org.', searchGuides:'Sök guider', guidesUnavailable:'De senaste guiderna är tillfälligt otillgängliga här.', visitBlog:'Besök 911Dentists blogg', noResults:'Inga guider matchar din sökning.', readArticle:'Läs artikeln', latestEnglish:'Senaste artikeln på engelska',
    accountInfo:'KONTO & INFORMATION', aboutTitle:'Tydligare beslut under de första minuterna av ett akut tandproblem.', aboutCopy:'911Dentist erbjuder säkerhetsfokuserad information och valfria vägar till videokonsultation och odontologisk second opinion.', install:'Installera 911Dentist', installCopy:'Lägg till appen på telefonens hemskärm', iosInstall:'På iPhone: tryck på Dela och sedan Lägg till på hemskärmen.', patientAccount:'Patientkonto', createAccount:'Skapa patientkonto', login:'Logga in', moreInformation:'Mer information', freeGuide:'Kostnadsfri guide för akuta tandproblem', forDentists:'För tandläkare', aboutUs:'Om 911Dentist', contact:'Kontakt', privacy:'Integritetspolicy', terms:'Användarvillkor', disclaimer:'Medicinsk ansvarsfriskrivning', footerLine:'Akut tandvägledning och vägar till videokonsultation', footerDisclaimer:'Endast utbildningsinformation. Ingen diagnos och ingen ersättning för en klinisk undersökning.',
    home:'Hem', emergency:'Akut', consult:'Konsultation', guides:'Guider', more:'Mer', linkCopied:'Länken har kopierats', installed:'911Dentist har installerats', backOnline:'Du är online igen', offline:'Du är offline',
    docTitle:'911Dentist — Akut tandvårdsvägledning', metaDescription:'Installerbar åtkomst till 911Dentists akuta tandvårdsvägledning, videokonsultationer, second opinions och patientresurser.', brandHome:'911Dentist startsida', primaryNav:'Huvudnavigering', mobileNav:'Mobilnavigering', trustListLabel:'Appens integritet och säkerhet', priceSimple:'cirka 480 kr', priceLive:'cirka 1 460 kr', priceSecond:'cirka 280 kr', sekNote:'Ungefärligt pris i svenska kronor. Slutbetalningen behandlas i amerikanska dollar.', guidesSoon:'Svenska guider kommer snart.'
  }
};

const icon = {
  home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10M9.5 20v-6h5v6"/></svg>',
  emergency:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 19h18.4L12 3Z"/><path d="M12 9v4.5M12 17h.01"/></svg>',
  consult:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9h8M8 12h5"/></svg>',
  guides:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z"/><path d="M8 20a3 3 0 0 1 3-3h8M9 8h6M9 11h6"/></svg>',
  more:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>'
};
const navItems = [['home','home'],['emergency','emergency'],['consult','consult'],['guides','guides'],['more','more']];
let lang = localStorage.getItem('911dentist-lang') || 'en';
let posts = [];
let deferredInstall;

const t = key => translations[lang][key] || translations.en[key] || key;
const stripHtml = value => { const node = document.createElement('div'); node.innerHTML = value || ''; return node.textContent || ''; };
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]));

function currentView(){
  return document.querySelector('.view.active')?.id || 'home';
}

function renderNav(){
  const mobile = navItems.map(([key,id]) => `<button data-view="${id}" class="${currentView() === id ? 'active' : ''}" aria-label="${escapeHtml(t(key))}">${icon[id]}<span>${escapeHtml(t(key))}</span></button>`).join('');
  const desktop = navItems.map(([key,id]) => `<button data-view="${id}" class="${currentView() === id ? 'active' : ''}">${escapeHtml(t(key))}</button>`).join('');
  document.querySelector('.mobile-nav').innerHTML = mobile;
  document.querySelector('.desktop-nav').innerHTML = desktop;
}

function showView(id, push = true){
  const target = document.getElementById(id);
  if(!target) return;
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  target.classList.add('active');
  if(push) history.pushState({view:id}, '', `#${id}`);
  renderNav();
  window.scrollTo({top:0, behavior:'smooth'});
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
  var __trust = document.querySelector('.trust-list'); if(__trust){ __trust.setAttribute('aria-label', t('trustListLabel')); }
  [['.price-card:not(.featured):not(.snapshot) .price','priceSimple','oneTime'],['.price-card.featured .price','priceLive','oneTime'],['.price-card.snapshot .price','priceSecond','currentOption']].forEach(function(p){ var el=document.querySelector(p[0]); if(el){ el.innerHTML = t(p[1]) + ' <small>' + t(p[2]) + '</small>'; } });
  var __grid = document.querySelector('.pricing-grid');
  if(__grid){ var __note = __grid.parentElement.querySelector('.sek-note'); if(!__note){ __note = document.createElement('p'); __note.className='sek-note'; __grid.parentElement.insertBefore(__note, __grid.nextSibling); } if(lang==='sv'){ __note.textContent = t('sekNote'); __note.style.display=''; } else { __note.textContent=''; __note.style.display='none'; } }
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
  if(lang === 'sv'){
    var __soon = '<p class="guides-soon">' + t('guidesSoon') + '</p>';
    var __g = document.getElementById('guideGrid'); if(__g){ __g.innerHTML = __soon; }
    var __f = document.getElementById('featuredGuides'); if(__f){ __f.innerHTML = __soon; }
    var __n = document.getElementById('guideNotice'); if(__n){ __n.hidden = true; }
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
  if(lang === 'sv'){ renderPosts(); return; }
  document.getElementById('guideGrid').innerHTML = '<div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>';
  document.getElementById('featuredGuides').innerHTML = '<div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>';
  try{
    const response = await fetch(POSTS, {headers:{Accept:'application/json'}});
    if(!response.ok) throw new Error('Posts unavailable');
    posts = await response.json();
    renderPosts();
  }catch{
    document.getElementById('guideGrid').innerHTML = '';
    document.getElementById('featuredGuides').innerHTML = '';
    document.getElementById('guideNotice').hidden = false;
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
loadPosts();
