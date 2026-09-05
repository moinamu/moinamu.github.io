// Add your public GoatCounter site code here later, for example: "moinuddin".
const GOATCOUNTER_SITE = "";
if (!document.querySelector('link[href="assets/enhancements.css"]')) { const style = document.createElement('link'); style.rel = 'stylesheet'; style.href = 'assets/enhancements.css'; document.head.append(style); }
document.querySelectorAll('.brand').forEach(el => el.textContent = 'Dr. Moin Uddin');
function publicationMarkup(item) { const title = item.url ? `<a class="paper-title" href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a>` : item.title; const link = item.url ? `<a href="${item.url}" target="_blank" rel="noreferrer">DOI</a>` : ""; return `<article class="publication"><time>${item.year}</time><div><h3 class="publication-title">${title}</h3><p>${item.authors}</p><em>${item.journal}</em></div>${link}</article>`; }
document.querySelectorAll("#featured-publications").forEach(el => el.innerHTML = publications.slice(0, 3).map(publicationMarkup).join(""));
document.querySelectorAll("#all-publications").forEach(el => el.innerHTML = publications.map(publicationMarkup).join(""));
document.querySelectorAll("#under-review-list").forEach(el => el.innerHTML = underReview.map(publicationMarkup).join(""));
document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());
if (typeof currentPosition !== 'undefined') { const role = document.querySelector('.academic-role'); if (role) role.innerHTML = `<strong>${currentPosition.title}</strong><span>${currentPosition.center}<br>${currentPosition.institution}, ${currentPosition.location}</span>`; }
const algorithmVisual = document.querySelector('.algorithm-visual');
const currentNewsYear = String(new Date().getFullYear());
const currentYearPapers = typeof publications !== 'undefined' ? publications.filter(item => item.year === currentNewsYear) : [];
const currentYearPosition = typeof currentPosition !== 'undefined' && currentPosition.startYear === currentNewsYear;
const newsItems = [
  ...currentYearPapers.map(item => `<article><time>${item.year}</time><p>Publication: <i>${item.title}</i>, <em>${item.journal}</em>.</p></article>`),
  ...(currentYearPosition ? [`<article><time>${currentPosition.startYear}</time><p>Joined ${currentPosition.institution} as a ${currentPosition.title}.</p></article>`] : [])
].join('') || `<article><time>${currentNewsYear}</time><p>No research updates have been added for this year yet.</p></article>`;
if (algorithmVisual && typeof currentPosition !== 'undefined') algorithmVisual.insertAdjacentHTML('afterend', `<section class="news-section wrap"><p class="eyebrow">Latest updates</p><h2>News</h2><div class="news-list">${newsItems}</div></section>`);
document.querySelectorAll('footer').forEach(footer => footer.insertAdjacentHTML('beforeend', ` <span class="footer-feature">· Last updated: September 2026 · <span id="visitor-count">Visitors: —</span></span>`));
if (GOATCOUNTER_SITE) fetch(`https://${GOATCOUNTER_SITE}.goatcounter.com/counter/TOTAL.json`).then(response => response.json()).then(data => document.querySelectorAll('#visitor-count').forEach(el => el.textContent = `Visitors: ${data.count}`)).catch(() => {});
const menu = document.querySelector(".menu-button"), nav = document.querySelector("nav"); if (menu) menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll('a.button[href="#"]').forEach(link => { if (link.textContent.includes("Download CV")) { link.href = "assets/Moin-Uddin-CV.pdf"; link.download = "Moin-Uddin-CV.pdf"; } });
document.querySelectorAll('.cv-box p').forEach(paragraph => { if (paragraph.textContent.includes('Add your exported PDF')) paragraph.hidden = true; });
