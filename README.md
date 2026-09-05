# Dr. Moin Uddin - Academic Website

This is a static academic website hosted with GitHub Pages. No software framework or website builder is required. Update the files, commit the changes, and push them to GitHub.

## Which file should I edit?

| Change | File to edit |
| --- | --- |
| Add, edit, or remove a publication | `assets/data.js` |
| Name, About Me, research interests, emails, and profile links | `index.html` |
| Education page | `education.html` |
| Teaching and CV page | `teaching.html` |
| Profile photograph | `assets/images/moin-uddin.png` |
| CV PDF | `assets/Moin-Uddin-CV.pdf` |
| Colours, spacing, photograph/card size, and layout | `assets/enhancements.css` |

## Add a new publication

1. Open `assets/data.js`.
2. Copy one complete publication item inside `const publications = [`.
3. Paste the new item at the top of the list and update its details.
4. Add a comma `,` at the end of each item.

Example:

```js
{ year: "2026", title: "Paper title", authors: "Author 1, Moin Uddin and Author 3", journal: "Journal Name, volume, pages", url: "https://doi.org/your-doi" },
```

The publication title and DOI will become clickable automatically. If there is no DOI or online link, use `url: ""`.

Important: include a comma after the `journal` field. A JavaScript syntax error can prevent all publications from appearing.

## Automatic News updates

- New publications in the `publications` list can appear automatically in the News section on the Home page.
- Only publications from the current calendar year appear in News.
- Update the `currentPosition` block in `assets/data.js` when your current position changes.

## Replace the profile photograph

1. Place your new photograph in `assets/images`.
2. Name it exactly `moin-uddin.png`.
3. Replace the existing file.

After replacing the image, press `Ctrl + F5` in your browser to bypass any cached version.

## Update the CV PDF

1. Export your latest CV as a PDF.
2. Name the file exactly `Moin-Uddin-CV.pdf`.
3. Replace the existing PDF in the `assets` folder.

The Download CV button will automatically download this file; no HTML changes are required.

## Update text, contact details, and profile links

Open `index.html` and edit the required text.

- About Me: the section with `id="research"`
- Email addresses: the section with `id="contact"`
- Google Scholar, ORCID, Scopus, and ResearchGate links: the Contact section

## Change the layout or colours

Edit `assets/enhancements.css`. This file controls the photograph size, hero card, gaps, typography, colours, and other visual styles.

## Upload updates using the GitHub website

1. Open your GitHub repository.
2. To change a text file, open it, select the pencil icon, edit it, and choose **Commit changes**.
3. To replace a photograph or PDF, open `assets/images` or `assets`, select **Add file -> Upload files**, upload the new file, and choose **Commit changes**.
4. GitHub Pages normally publishes the update within 1-3 minutes.

## Push the website from PowerShell

For the first upload, open PowerShell and run these commands one at a time:

```powershell
cd "C:\Users\moin.uddin\Downloads\moinuddin.github.io"
git credential-manager github login
```

Your browser will open. Sign in to the `moinamu` GitHub account and approve the request. After authorization, run:

```powershell
git push -u origin main
```

Use `git push` to upload local website files to GitHub. Use `git pull` only to download changes from GitHub to your computer.

## Publish future changes from PowerShell

After editing any website file, run:

```powershell
cd "C:\Users\moin.uddin\Downloads\moinuddin.github.io"
git add .
git commit -m "Update website"
git push
```

The update should be live on GitHub Pages within 1-3 minutes.

## Enable GitHub Pages for the first time

1. Create a public GitHub repository named `moinamu.github.io`.
2. Upload or push all project files, including `index.html`, the other HTML pages, and the `assets` folder.
3. In the repository, open **Settings -> Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select the `main` branch and the `/(root)` folder, and save.
5. The website will be available at: `https://moinamu.github.io`

Share this link on LinkedIn, WhatsApp, ResearchGate, Google Scholar, and other social-media profiles.
