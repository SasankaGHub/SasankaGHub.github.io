# Sasanka Adikari Academic Portfolio

This is a complete GitHub Pages version of the academic portfolio. It uses plain HTML, CSS, and JavaScript, so GitHub can publish it directly. No software installation or build command is required.

## The one file to edit

Open **`site-content.js`** to change the website's content. It controls:

- Name, position, institution, profile photo, and CV
- Biography, research interests, and education
- Research areas
- Publications and dissertation
- Professional and teaching experience
- Hobbies and photography gallery
- Contact information and professional links

After you commit a change to `site-content.js`, GitHub Pages automatically updates the website.

See **`EDITING-GUIDE.md`** for copy-and-paste examples.

## Files and folders

- `index.html` — page entry point; normally do not edit
- `site-content.js` — all editable website content
- `styles.css` — colors, spacing, and design
- `script.js` — creates the page and its interactions
- `assets/` — profile image, CV, logos, and gallery photographs
- `.nojekyll` — tells GitHub Pages to publish the files directly

## Publish on GitHub Pages

1. Download and extract the ZIP file.
2. Sign in to GitHub and open your website repository.
3. For the address `https://sasankaghub.github.io/`, the repository should be named **`SasankaGHub.github.io`**.
4. Open the repository's **Code** tab.
5. Select **Add file → Upload files**.
6. Upload everything *inside* the extracted folder, including the `assets` folder. Do not upload only the ZIP file.
7. Select **Commit changes**.
8. Open **Settings → Pages**.
9. Under **Build and deployment**, select **Deploy from a branch**.
10. Select branch **main**, folder **/(root)**, and then **Save**.
11. Wait a few minutes and open `https://sasankaghub.github.io/`.

If the repository has a different name, the address will normally be `https://sasankaghub.github.io/REPOSITORY-NAME/`.

## Update the website later

1. In the GitHub repository, open `site-content.js`.
2. Select the pencil icon (**Edit this file**).
3. Make the change.
4. Select **Commit changes**.
5. Wait briefly, then refresh the website. Use **Ctrl + F5** if the browser still shows the old version.

## Replace the CV or profile photo

The easiest approach is to keep the same filenames:

- CV: `assets/Sasanka-Adikari-CV.pdf`
- Profile photo: `assets/sasanka-adikari-profile.png`

Upload the replacement file to the same location with the same name. If you use a new filename, also update `cvFile` or `profilePhoto` near the top of `site-content.js`.
