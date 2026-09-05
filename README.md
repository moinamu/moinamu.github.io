# Dr. Moin Uddin - Academic Website

Yeh aapki static GitHub Pages website hai. Isme koi software install karne ki zarurat nahi hai. Aap files edit karke GitHub par upload/commit karenge aur site update ho jayegi.

## Kis change ke liye kaunsi file?

| Agar aapko yeh change karna ho | Yeh file edit karein |
| --- | --- |
| New paper add, old paper edit/remove | `assets/data.js` |
| Name, About Me, research interests, emails, profile links | `index.html` |
| Education page | `education.html` |
| Teaching aur CV page | `teaching.html` |
| Profile photo | `assets/images/moin-uddin.png` |
| CV PDF | `assets/Moin-Uddin-CV.pdf` |
| Colour, spacing, photo/card size, layout | `assets/enhancements.css` |

## New publication add karna

1. `assets/data.js` open karein.
2. `const publications = [` ke andar existing paper ki ek complete line copy karein.
3. Naya paper list ke bilkul top par paste karein, aur details edit karein.
4. Har paper ke end mein comma `,` hona chahiye.

Example:

```js
{ year: "2026", title: "Paper title", authors: "Author 1, Moin Uddin and Author 3", journal: "Journal Name, volume, pages", url: "https://doi.org/your-doi" },
```

Paper ka title aur DOI dono clickable ho jayenge. DOI/online link nahi ho to `url: ""` likhein.

Important: `journal` ke baad comma zaroor lagayein. JavaScript syntax error hone par publications page blank ho sakta hai.

## News automatic kaise update hoti hai

- Naya paper `publications` list mein add karte hi Home page ke News section mein aa sakta hai.
- Current year ke papers hi News mein dikhte hain.
- Current job position `currentPosition` block mein update karein.

## Profile photo replace karna

1. New photo ko `assets/images` folder mein rakhein.
2. Existing file ka naam same rakhein: `moin-uddin.png`.
3. Old file ko replace karein.

Photo change ke baad browser mein `Ctrl + F5` press karein, taki purani cached photo na dikhe.

## CV PDF update karna

1. Latest CV ko PDF mein export karein.
2. PDF ka naam exact yeh rakhein: `Moin-Uddin-CV.pdf`.
3. Is file ko `assets` folder mein existing PDF ki jagah replace karein.

Download CV button automatically isi file ko download karega. HTML file edit karne ki zarurat nahi hai.

## About Me, email ya links change karna

`index.html` open karein aur required text change karein.

- About Me: `id="research"` section
- Email: `id="contact"` section
- Google Scholar, ORCID, Scopus, ResearchGate links: Contact section mein

## Layout ya colour change karna

`assets/enhancements.css` edit karein. Is file mein photo size, hero box, gaps, fonts aur card styles hain.

## GitHub par update upload/commit karna

GitHub website mein:

1. Apna repository open karein.
2. Kisi text file ko change karna ho to file open karein, pencil icon click karein, edit karein, phir **Commit changes** click karein.
3. Photo ya PDF replace karna ho to `assets/images` ya `assets` folder open karein, **Add file -> Upload files** select karein, new file upload karein aur **Commit changes** click karein.
4. GitHub Pages 1-3 minutes mein updated site publish kar dega.

## PowerShell se GitHub par website push karna

Pehli baar upload ke liye PowerShell open karke yeh commands one-by-one run karein:

```powershell
cd "C:\Users\moin.uddin\Downloads\moinuddin.github.io"
git credential-manager github login
```

Second command ke baad browser open hoga. GitHub account `moinamu` se sign in karke authorize karein. Browser authorization complete ho jaye to PowerShell mein yeh command run karein:

```powershell
git push -u origin main
```

Note: Website files GitHub par upload karne ke liye `git push` use hota hai. `git pull` GitHub se files computer par download karne ke liye hota hai.

## Future website updates PowerShell se

Kisi file ko change karne ke baad yeh commands run karein:

```powershell
cd "C:\Users\moin.uddin\Downloads\moinuddin.github.io"
git add .
git commit -m "Update website"
git push
```

`git push` successful hone ke 1-3 minutes baad GitHub Pages par update live ho jayega.

## First-time GitHub Pages publish

1. GitHub par public repository banayein: `moinamu.github.io`.
2. Is project folder ke andar ki sari files upload karein: `index.html`, other HTML pages aur `assets` folder.
3. Repository mein **Settings -> Pages** kholein.
4. **Deploy from a branch**, branch `main`, folder `/(root)` select karke Save karein.
5. Website link hoga: `https://moinamu.github.io`

Yahi link LinkedIn, WhatsApp, ResearchGate, Google Scholar aur other social media profiles mein paste kiya ja sakta hai.
