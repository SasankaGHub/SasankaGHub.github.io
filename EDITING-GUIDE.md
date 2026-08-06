# Website Editing Guide

All regular content changes are made in **`site-content.js`**. You do not need to edit `index.html`, `styles.css`, or `script.js`.

## Add a publication

Find this section:

```js
publications: {
  items: [
```

Copy one complete publication block, paste it inside the `items` list, and change its details:

```js
{
  year: "2027",
  type: "Journal article",
  title: "Title of the New Publication",
  authors: "S. Adikari and Coauthor Name",
  venue: "Journal Name, volume(issue), pages",
  href: "https://doi.org/your-doi-here",
},
```

The final comma is recommended. You can place the newest publication first.

## Change the biography

Find `about`, then edit the text inside `paragraphs`:

```js
paragraphs: [
  "First biography paragraph.",
  "Second biography paragraph.",
  "Third biography paragraph.",
],
```

## Add a teaching item

Find `teaching`, then add a block inside `items`:

```js
{
  period: "Spring 2027",
  institution: "Clarkson University",
  courses: "Course Number: Course Name",
},
```

## Add a professional experience item

First upload the organization logo to `assets/institutions/`. Then add:

```js
{
  period: "2027 — Present",
  role: "Position Title",
  organization: "Organization Name",
  department: "Department Name",
  category: "Academic",
  logo: "assets/institutions/logo-file.png",
  href: "https://www.organization.edu/",
},
```

Use one of the existing category names if you want the filter buttons to work: `Academic`, `Public service`, or `Teaching`.

## Add a photograph

1. Upload the image to `assets/photography/`.
2. Add a block inside `beyond.photos`:

```js
{
  src: "assets/photography/new-photo.webp",
  title: "Photograph title",
  category: "Macro",
  alt: "A short description of the photograph for accessibility",
},
```

## Important formatting rules

- Keep quotation marks around text.
- Keep commas between list items.
- Do not delete the opening or closing braces and brackets.
- Use straight quotation marks (`"`) in the code.
- If the website becomes blank after an edit, check the most recent change for a missing quote, comma, brace, or bracket.

Each committed change is automatically published by GitHub Pages. No rebuild is required.
