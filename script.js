"use strict";

(function () {
  const content = window.SITE_CONTENT;
  const app = document.getElementById("app");

  if (!content || !app) {
    document.body.innerHTML =
      '<main class="content-error"><h1>Website content could not be loaded.</h1><p>Please check <strong>site-content.js</strong> for a missing quotation mark, comma, or bracket.</p></main>';
    return;
  }

  const escapeHTML = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const safeHref = (value) => {
    const href = String(value ?? "").trim();
    if (
      href.startsWith("https://") ||
      href.startsWith("http://") ||
      href.startsWith("mailto:") ||
      href.startsWith("#") ||
      href.startsWith("assets/") ||
      href.startsWith("./") ||
      href.startsWith("../")
    ) {
      return escapeHTML(href);
    }
    return "#";
  };

  const externalArrow = '<span aria-hidden="true">↗︎</span>';

  function iconSvg(name) {
    const icons = {
      graduation:
        '<path d="M12 3 1.5 8.4 12 13.8l8-4.1V15h2V8.7L12 3Zm0 8.6L5.7 8.4 12 5.2l6.3 3.2-6.3 3.2Zm-6 1.3v3.5L12 20l6-3.6v-3.5L12 16l-6-3.1Z"/>',
      plane:
        '<path d="m21 16-8-4.8V5.5a2 2 0 0 0-4 0v5.7L1 16v2l8-2.5V20l-2 1.5V23l4-1 4 1v-1.5L13 20v-4.5l8 2.5v-2Z"/>',
      camera:
        '<path d="M8.2 4 6.7 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2.7L15.8 4H8.2ZM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>',
      gift:
        '<path d="M20 7h-2.2A3 3 0 0 0 12 5.9 3 3 0 0 0 6.2 7H4a2 2 0 0 0-2 2v3h9V9H4V9h7v3h2V9h7v3h-7v2h8V9a2 2 0 0 0-2-2Zm-5-2a1 1 0 0 1 1 1c0 .6-.4 1-1 1h-2c0-1.1.9-2 2-2ZM9 5c1.1 0 2 .9 2 2H9a1 1 0 1 1 0-2ZM3 14h8v8H5a2 2 0 0 1-2-2v-6Zm10 0h8v6a2 2 0 0 1-2 2h-6v-8Z"/>',
    };

    return `<svg viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true" focusable="false">${
      icons[name] || icons.gift
    }</svg>`;
  }

  function socialGlyph(link) {
    const icons = {
      scholar: {
        viewBox: "0 0 24 24",
        path: "M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269ZM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z",
      },
      linkedin: {
        viewBox: "0 0 448 512",
        path: "M100.28 448H7.4V148.9h92.88ZM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3ZM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448Z",
      },
      orcid: {
        viewBox: "0 0 24 24",
        path: "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0ZM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947Zm-.722 3.038h1.444v10.041H6.647V7.416Zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416Zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222Z",
      },
      github: {
        viewBox: "0 0 496 512",
        path: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6Zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3Zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9ZM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8ZM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1Zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7Zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1Zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2Z",
      },
      facebook: {
        viewBox: "0 0 320 512",
        path: "M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8h66Z",
      },
    };

    const icon = icons[link.icon];
    if (!icon) {
      return `<span class="social-glyph" aria-hidden="true">${escapeHTML(
        link.shortLabel || link.label.slice(0, 2)
      )}</span>`;
    }

    return `<svg viewBox="${icon.viewBox}" fill="currentColor" aria-hidden="true" focusable="false"><path d="${icon.path}" /></svg>`;
  }

  const externalLink = (href, label, className = "") =>
    `<a${className ? ` class="${escapeHTML(className)}"` : ""} href="${safeHref(
      href
    )}" target="_blank" rel="noreferrer">${label}</a>`;

  document.title = content.site.pageTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", content.site.pageDescription);

  const savedTheme = window.localStorage.getItem("sasanka-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark" : "light";
  document.documentElement.dataset.theme = initialTheme;

  const socialIconLinks = content.socialLinks
    .map(
      (link) => `
        <a href="${safeHref(link.href)}" target="_blank" rel="noreferrer"
          aria-label="${escapeHTML(link.label)}" title="${escapeHTML(link.label)}">
          ${socialGlyph(link)}
        </a>`
    )
    .join("");

  const aboutEducation = content.about.education
    .map(
      (item) => `
        <article>
          <span class="degree-mark" aria-hidden="true">${iconSvg("graduation")}</span>
          <div>
            <h4>${escapeHTML(item.degree)}</h4>
            <p>${escapeHTML(item.school)}</p>
          </div>
        </article>`
    )
    .join("");

  const researchCards = content.research.areas
    .map(
      (area) => `
        <article class="research-card">
          <div class="card-number">${escapeHTML(area.number)}</div>
          <h3>${escapeHTML(area.title)}</h3>
          <p>${escapeHTML(area.text)}</p>
          <div class="tag-row">
            ${area.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}
          </div>
        </article>`
    )
    .join("");

  const publicationCards = content.publications.items
    .map(
      (publication) => `
        <a class="publication-item" href="${safeHref(publication.href)}" target="_blank" rel="noreferrer">
          <div class="publication-meta">
            <span>${escapeHTML(publication.year)}</span>
            <span>${escapeHTML(publication.type)}</span>
          </div>
          <div class="publication-body">
            <h3>${escapeHTML(publication.title)}</h3>
            <p>${escapeHTML(publication.authors)}</p>
            <p class="venue">${escapeHTML(publication.venue)}</p>
          </div>
          <span class="publication-arrow" aria-hidden="true">↗︎</span>
        </a>`
    )
    .join("");

  const teachingHistory = content.teaching.items
    .map(
      (item) => `
        <article class="teaching-history-item">
          <p class="teaching-period">${escapeHTML(item.period)}</p>
          <div>
            <h3>${escapeHTML(item.institution)}</h3>
            <p>${escapeHTML(item.courses)}</p>
          </div>
        </article>`
    )
    .join("");

  const hobbyCards = content.beyond.hobbies
    .map(
      (hobby) => `
        <article class="hobby-card">
          <span class="hobby-icon" aria-hidden="true">${iconSvg(hobby.icon)}</span>
          <div>
            <h3>${escapeHTML(hobby.title)}</h3>
            <p>${escapeHTML(hobby.text)}</p>
          </div>
        </article>`
    )
    .join("");

  const photoCards = content.beyond.photos
    .map(
      (photo, index) => `
        <button class="photo-card photo-card-${index + 1}" type="button"
          data-photo-index="${index}" aria-label="Enlarge photograph: ${escapeHTML(photo.title)}">
          <img src="${safeHref(photo.src)}" alt="${escapeHTML(photo.alt)}" loading="lazy" />
          <span class="photo-overlay">
            <span>${escapeHTML(photo.category)}</span>
            <strong>${escapeHTML(photo.title)}</strong>
          </span>
          <span class="photo-expand" aria-hidden="true">↗</span>
        </button>`
    )
    .join("");

  const contactProfileLinks = content.socialLinks
    .map(
      (link) => `
        <a href="${safeHref(link.href)}" target="_blank" rel="noreferrer">
          ${socialGlyph(link)}
          <span>${escapeHTML(link.label)}</span>
        </a>`
    )
    .join("");

  app.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to main content</a>

    <header class="site-header">
      <div class="nav-shell">
        <a class="brand" href="#about" aria-label="${escapeHTML(content.site.name)} home">
          ${escapeHTML(content.site.name)}
        </a>

        <nav class="desktop-nav" aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#teaching">Teaching</a>
          <a href="#beyond">Beyond</a>
          <a href="#contact">Contact</a>
        </nav>

        <div class="header-actions">
          ${externalLink(
            content.publications.scholarUrl,
            `Scholar ${externalArrow}`,
            "header-scholar"
          )}
          <button class="theme-toggle" type="button" aria-label="Switch color theme" title="Switch color theme">
            <span aria-hidden="true">${initialTheme === "light" ? "Dark" : "Light"}</span>
          </button>
          <details class="mobile-nav">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#about">About</a>
              <a href="#research">Research</a>
              <a href="#publications">Publications</a>
              <a href="#experience">Experience</a>
              <a href="#teaching">Teaching</a>
              <a href="#beyond">Beyond academia</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </div>
    </header>

    <main id="main-content">
      <section class="hero section-shell" id="about">
        <aside class="profile-column" aria-label="Profile summary">
          <div class="portrait">
            <div class="portrait-photo-shell">
              <img class="portrait-photo" src="${safeHref(content.site.profilePhoto)}" alt="${escapeHTML(
                content.site.name
              )}" />
            </div>
          </div>

          <div class="profile-copy">
            <p class="eyebrow">${escapeHTML(content.site.profileEyebrow)}</p>
            <h1>${escapeHTML(content.site.name)}</h1>
            <p class="profile-title">${escapeHTML(content.site.role)}</p>
            ${externalLink(
              content.site.institutionUrl,
              `${escapeHTML(content.site.institution)} ${externalArrow}`,
              "institution-link"
            )}
          </div>

          <div class="social-row" aria-label="Professional profiles">${socialIconLinks}</div>

          <a class="email-button" href="${safeHref(content.site.cvFile)}" target="_blank" rel="noreferrer"
            aria-label="Open ${escapeHTML(content.site.name)}'s CV in a new tab">
            <span>${escapeHTML(content.site.cvButtonText)}</span>
            <span aria-hidden="true">→</span>
          </a>
        </aside>

        <div class="biography-column">
          <p class="section-kicker">${escapeHTML(content.about.kicker)}</p>
          <h2>${escapeHTML(content.about.heading)}</h2>
          <div class="bio-copy">
            ${content.about.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}
          </div>

          <div class="profile-facts">
            <div class="fact-block">
              <h3>${escapeHTML(content.about.interestsHeading)}</h3>
              <ul>${content.about.interests.map((interest) => `<li>${escapeHTML(interest)}</li>`).join("")}</ul>
            </div>

            <div class="fact-block education-list">
              <h3>${escapeHTML(content.about.educationHeading)}</h3>
              ${aboutEducation}
            </div>
          </div>
        </div>
      </section>

      <section class="research-section" id="research">
        <div class="section-shell">
          <div class="section-heading-row">
            <div>
              <p class="section-kicker">${escapeHTML(content.research.kicker)}</p>
              <h2>${escapeHTML(content.research.heading)}</h2>
            </div>
            <p>${escapeHTML(content.research.introduction)}</p>
          </div>
          <div class="research-grid">${researchCards}</div>
        </div>
      </section>

      <section class="publications-section section-shell" id="publications">
        <div class="section-heading-row publication-heading">
          <div>
            <p class="section-kicker">${escapeHTML(content.publications.kicker)}</p>
            <h2>${escapeHTML(content.publications.heading)}</h2>
          </div>
          ${externalLink(
            content.publications.scholarUrl,
            `${escapeHTML(content.publications.scholarButtonText)} ${externalArrow}`,
            "text-link"
          )}
        </div>

        <div class="publication-list">${publicationCards}</div>

        <a class="dissertation-card" href="${safeHref(
          content.publications.dissertation.href
        )}" target="_blank" rel="noreferrer">
          <div>
            <span class="label">${escapeHTML(content.publications.dissertation.label)}</span>
            <h3>${escapeHTML(content.publications.dissertation.title)}</h3>
            <p>${escapeHTML(content.publications.dissertation.institution)}</p>
          </div>
          <span class="dissertation-action">${escapeHTML(
            content.publications.dissertation.buttonText
          )} ${externalArrow}</span>
        </a>
      </section>

      <section class="experience-section" id="experience">
        <div class="section-shell experience-layout">
          <div class="experience-intro">
            <p class="section-kicker">${escapeHTML(content.experience.kicker)}</p>
            <h2>${escapeHTML(content.experience.heading)}</h2>
            <p>${escapeHTML(content.experience.introduction)}</p>
            <div class="experience-filters" aria-label="Filter experience by type">
              ${content.experience.filters
                .map(
                  (filter, index) =>
                    `<button type="button" data-experience-filter="${escapeHTML(filter)}" class="${
                      index === 0 ? "is-active" : ""
                    }" aria-pressed="${index === 0 ? "true" : "false"}">${escapeHTML(filter)}</button>`
                )
                .join("")}
            </div>
          </div>
          <div class="timeline" aria-live="polite"></div>
        </div>
      </section>

      <section class="teaching-section section-shell" id="teaching">
        <div class="teaching-card">
          <div class="teaching-number" aria-hidden="true">T</div>
          <div>
            <p class="section-kicker">${escapeHTML(content.teaching.kicker)}</p>
            <h2>${escapeHTML(content.teaching.heading)}</h2>
            <p>${escapeHTML(content.teaching.introduction)}</p>
            <div class="teaching-history" aria-label="Teaching experience by institution">
              ${teachingHistory}
            </div>
          </div>
        </div>
      </section>

      <section class="beyond-section" id="beyond">
        <div class="section-shell">
          <div class="beyond-heading">
            <div>
              <p class="section-kicker">${escapeHTML(content.beyond.kicker)}</p>
              <h2>${escapeHTML(content.beyond.heading)}</h2>
            </div>
            <div class="beyond-intro">
              <p>${escapeHTML(content.beyond.introduction)}</p>
              <span>${escapeHTML(content.beyond.tagline)}</span>
            </div>
          </div>

          <div class="hobby-grid" aria-label="Personal interests">${hobbyCards}</div>

          <div class="gallery-heading">
            <div>
              <p class="section-kicker">${escapeHTML(content.beyond.galleryKicker)}</p>
              <h3>${escapeHTML(content.beyond.galleryHeading)}</h3>
            </div>
            <p>${escapeHTML(content.beyond.galleryIntroduction)}</p>
          </div>

          <div class="photo-mosaic" aria-label="Photography by ${escapeHTML(content.site.name)}">
            ${photoCards}
          </div>
          <p class="photo-credit">${escapeHTML(content.beyond.photoCredit)}</p>
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="section-shell contact-layout">
          <div>
            <p class="section-kicker">${escapeHTML(content.contact.kicker)}</p>
            <h2>${escapeHTML(content.contact.heading)}</h2>
            <p>${escapeHTML(content.contact.introduction)}</p>
            <a class="contact-button" href="mailto:${escapeHTML(content.contact.email)}">
              ${escapeHTML(content.contact.email)} <span aria-hidden="true">→</span>
            </a>
          </div>

          <div class="contact-details">
            <div>
              <span class="contact-label">${escapeHTML(content.contact.affiliationLabel)}</span>
              <p>${content.contact.affiliationLines.map(escapeHTML).join("<br />")}</p>
            </div>
            <div>
              <span class="contact-label">${escapeHTML(content.contact.locationLabel)}</span>
              <p>${content.contact.locationLines.map(escapeHTML).join("<br />")}</p>
            </div>
            <div>
              <span class="contact-label">${escapeHTML(content.contact.profilesLabel)}</span>
              <div class="contact-links">${contactProfileLinks}</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="section-shell footer-inner">
        <p>© ${new Date().getFullYear()} ${escapeHTML(content.site.name)}</p>
        <a href="#about">Back to top ↑</a>
      </div>
    </footer>`;

  function renderExperience(filter) {
    const timeline = document.querySelector(".timeline");
    if (!timeline) return;

    const visibleItems =
      filter === "All"
        ? content.experience.items
        : content.experience.items.filter((item) => item.category === filter);

    timeline.innerHTML = visibleItems
      .map(
        (item) => `
          <article class="timeline-item">
            <a class="timeline-logo-link" href="${safeHref(item.href)}" target="_blank" rel="noreferrer"
              aria-label="Visit ${escapeHTML(item.organization)}">
              <img class="timeline-logo" src="${safeHref(item.logo)}" alt="${escapeHTML(
                item.organization
              )} logo" />
            </a>
            <div class="timeline-content">
              <p class="timeline-period">${escapeHTML(item.period)}</p>
              <h3>${escapeHTML(item.role)}</h3>
              <a class="timeline-organization" href="${safeHref(
                item.href
              )}" target="_blank" rel="noreferrer">
                ${escapeHTML(item.organization)} ${externalArrow}
              </a>
              <p class="timeline-department">${escapeHTML(item.department)}</p>
            </div>
          </article>`
      )
      .join("");
  }

  renderExperience("All");

  document.querySelectorAll("[data-experience-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-experience-filter") || "All";
      document.querySelectorAll("[data-experience-filter]").forEach((candidate) => {
        const isActive = candidate === button;
        candidate.classList.toggle("is-active", isActive);
        candidate.setAttribute("aria-pressed", String(isActive));
      });
      renderExperience(filter);
    });
  });

  const themeButton = document.querySelector(".theme-toggle");
  themeButton?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("sasanka-theme", nextTheme);
    const label = themeButton.querySelector("span");
    if (label) label.textContent = nextTheme === "light" ? "Dark" : "Light";
  });

  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
  });

  let activeLightbox = null;
  let escapeHandler = null;

  function closeLightbox() {
    if (!activeLightbox) return;
    activeLightbox.remove();
    activeLightbox = null;
    document.body.style.overflow = "";
    if (escapeHandler) document.removeEventListener("keydown", escapeHandler);
    escapeHandler = null;
  }

  function openLightbox(photoIndex) {
    const photo = content.beyond.photos[photoIndex];
    if (!photo) return;

    closeLightbox();
    const modal = document.createElement("div");
    modal.className = "photo-lightbox";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", `Expanded photograph: ${photo.title}`);
    modal.innerHTML = `
      <button class="lightbox-close" type="button" aria-label="Close enlarged photograph">
        <span aria-hidden="true">×</span>
      </button>
      <figure>
        <img src="${safeHref(photo.src)}" alt="${escapeHTML(photo.alt)}" />
        <figcaption>
          <span>${escapeHTML(photo.category)}</span>
          <strong>${escapeHTML(photo.title)}</strong>
          <small>${escapeHTML(content.beyond.lightboxCredit)}</small>
        </figcaption>
      </figure>`;

    modal.addEventListener("mousedown", (event) => {
      if (event.target === modal) closeLightbox();
    });
    modal.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
    escapeHandler = (event) => {
      if (event.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", escapeHandler);
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";
    activeLightbox = modal;
    modal.querySelector(".lightbox-close")?.focus();
  }

  document.querySelectorAll("[data-photo-index]").forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(Number(button.getAttribute("data-photo-index")));
    });
  });
})();
