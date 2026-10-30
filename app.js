const fallbackData = {
  siteSettings: {
    title: "JAYDEN SIRIUS Healer",
    brandSubtitle: "Healer",
    tagline: "Energy healing • remote Reiki • multidimensional care",
    bookButton: "Book a session",
    navigation: [
      { label: "About", href: "#about" },
      { label: "Sessions", href: "#sessions" },
      { label: "Courses", href: "#courses" },
      { label: "Events", href: "#events" },
      { label: "Connect", href: "#connect" }
    ],
    footerText: "Website content is being refined with Jayden’s review.",
    footerLinks: [
      { label: "About", href: "#about" },
      { label: "Sessions", href: "#sessions" },
      { label: "Courses", href: "#courses" },
      { label: "Events", href: "#events" }
    ]
  },
  hero: {
    eyebrow: "Energy healing • remote Reiki • multidimensional care",
    title: "JAYDEN SIRIUS",
    lead: "Healing work rooted in compassion, spiritual support, and deep personal connection.",
    actions: [
      { label: "Book a session", href: "#sessions", variant: "primary" },
      { label: "Learn more", href: "#about", variant: "secondary" }
    ]
  },
  about: {
    title: "About",
    eyebrow: "Section 1",
    paragraphs: [
      "I am a multidisciplinary artist, energy healer, and Reiki Master Teacher from France.",
      "I am Black Queer Trans man, neurodivergent and it took me some time to see it as a strength I see it now as a power that allows me to connect deeply, feel empathy and think outside of the box.",
      "I come from a family of healers and my aunt …",
      "I have been practicing Reiki and holistic … since 2015 and see energy work as one of their deepest sources of Joy, Healing, Expansion and Fun.",
      "My specialty is remote Reiki, energy initiations (attunements), and multidimensional healing.",
      "My sessions usually focus on the healing of trauma, wounds of the soul, inner child, karmic memories, transgenerational wounds, harmonization of the chakras, raising the Vibration and reconnection to the Authentic self.",
      "My mission: [Mission statement to be supplied by Jayden.]"
    ]
  },
  sessions: {
    title: "Energy Healing Sessions",
    eyebrow: "Section 2",
    prompt: "What am I offering?",
    serviceName: "One-to-one energy session",
    duration: "1 hour",
    location: "Online video call via Zoom",
    option: "Energy Healing",
    pricing: ["44", "55", "77"],
    currency: "currency to be confirmed",
    description:
      "A focused, supportive session designed around energy work, grounding, and gentle healing support. The final service wording, pricing currency, and provider flow are still being confirmed with Jayden.",
    expectations: [
      "A calm, space-holding experience for your energy and reflection.",
      "A clear booking flow through the approved provider when live setup is ready.",
      "A confirmation and Zoom details process through the configured provider workflow."
    ],
    note: "The currency for the sliding-scale amounts and the final booking setup remain open decisions until Jayden confirms them.",
    bookingLink: "#connect"
  },
  courses: {
    title: "Courses",
    eyebrow: "Section 3",
    items: [
      {
        title: "Reiki Level 1",
        level: "Foundation",
        description: "An introductory experience for developing gentle awareness, practice foundations, and the beginning of your Reiki journey.",
        date: "Date to be announced",
        format: "Format to be confirmed",
        status: "Details pending",
        link: "#"
      },
      {
        title: "Reiki Level 2",
        level: "Practitioner",
        description: "A deeper exploration of the Reiki system, practical energy work, and continuing personal healing practice.",
        date: "Date to be announced",
        format: "Format to be confirmed",
        status: "Details pending",
        link: "#"
      },
      {
        title: "Reiki Level 3",
        level: "Advanced",
        description: "A progression for students seeking a more expanded relationship with Reiki practice and energetic development.",
        date: "Date to be announced",
        format: "Format to be confirmed",
        status: "Details pending",
        link: "#"
      },
      {
        title: "Reiki Level 4",
        level: "Mastery",
        description: "A higher-level course path with a focus on deepening attunement work and personal energetic understanding.",
        date: "Date to be announced",
        format: "Format to be confirmed",
        status: "Details pending",
        link: "#"
      }
    ]
  },
  events: {
    title: "Events",
    eyebrow: "Section 4",
    items: [
      {
        title: "Event journal entry",
        date: "Date to be announced",
        location: "Location to be confirmed",
        summary: "A visual journal placeholder for upcoming gatherings, workshops, and reflections from community events.",
        reflection: "This section is designed to document events with personal reflection and photo-led storytelling. It will be populated once Jayden approves the journal entries and images."
      },
      {
        title: "Community gathering",
        date: "Date to be announced",
        location: "Location to be confirmed",
        summary: "A placeholder for future events, healing circles, or shared gatherings and their reflections.",
        reflection: "The editorial approach remains intentionally flexible until the event archive and final content structure are confirmed."
      }
    ]
  },
  connect: {
    title: "Contact / Connect",
    eyebrow: "Section 5",
    paragraphs: [
      "This section is a placeholder pending Jayden’s confirmation. A Contact / Connect section is a reasonable proposal, but it is still unconfirmed.",
      "Use this space for contact details, social links, and any final site call-to-action after Jayden approves the final wording and channels.",
      "Public comments are not active yet and should not be implied as working until a moderated system is chosen."
    ]
  }
};

async function fetchJson(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load ${url}`);
    }
    return await response.json();
  } catch (error) {
    return null;
  }
}

function renderBrand(settings) {
  const title = document.getElementById("brand-title");
  const subtitle = document.getElementById("brand-subtitle");

  if (title) {
    title.textContent = settings.title || fallbackData.siteSettings.title;
  }

  if (subtitle) {
    subtitle.textContent = settings.brandSubtitle || fallbackData.siteSettings.brandSubtitle;
  }
}

function renderNavigation(settings) {
  const nav = document.getElementById("main-nav");
  const footerLinks = document.getElementById("footer-links");

  if (nav) {
    nav.innerHTML = (settings.navigation || fallbackData.siteSettings.navigation)
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join("");
  }

  if (footerLinks) {
    const links = settings.footerLinks || fallbackData.siteSettings.footerLinks;
    footerLinks.innerHTML = links
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join("");
  }
}

function renderHero(heroData, settings) {
  const eyebrow = document.getElementById("hero-eyebrow");
  const title = document.getElementById("hero-title");
  const lead = document.getElementById("hero-lead");
  const actions = document.getElementById("hero-actions");
  const button = document.getElementById("header-book-button");

  if (eyebrow) {
    eyebrow.textContent = heroData.eyebrow || fallbackData.hero.eyebrow;
  }

  if (title) {
    title.textContent = heroData.title || fallbackData.hero.title;
  }

  if (lead) {
    lead.textContent = heroData.lead || fallbackData.hero.lead;
  }

  if (button) {
    button.textContent = settings.bookButton || fallbackData.siteSettings.bookButton;
  }

  if (actions) {
    const items = heroData.actions || fallbackData.hero.actions;
    actions.innerHTML = items
      .map(
        (action) => `
          <a class="button ${
            action.variant === "secondary" ? "button-secondary" : "button-primary"
          }" href="${action.href}">${action.label}</a>
        `
      )
      .join("");
  }
}

function renderAbout(data) {
  const container = document.getElementById("about-content");
  const eyebrow = document.getElementById("about-eyebrow");
  const heading = document.getElementById("about-heading");

  if (eyebrow) {
    eyebrow.textContent = data.eyebrow || fallbackData.about.eyebrow;
  }

  if (heading) {
    heading.textContent = data.title || fallbackData.about.title;
  }

  if (!container) return;

  container.innerHTML = (data.paragraphs || fallbackData.about.paragraphs)
    .map((paragraph) => `<div class="bio-block"><p>${paragraph}</p></div>`)
    .join("");
}

function renderSessions(data) {
  const container = document.getElementById("sessions-content");
  const eyebrow = document.getElementById("sessions-eyebrow");
  const heading = document.getElementById("sessions-heading");

  if (eyebrow) {
    eyebrow.textContent = data.eyebrow || fallbackData.sessions.eyebrow;
  }

  if (heading) {
    heading.textContent = data.title || fallbackData.sessions.title;
  }

  if (!container) return;

  const prices = (data.pricing || fallbackData.sessions.pricing)
    .map((price) => `<span class="price-pill">${price}</span>`)
    .join("");

  const expectations = (data.expectations || fallbackData.sessions.expectations)
    .map((item) => `<li>${item}</li>`)
    .join("");

  container.innerHTML = `
    <div class="sessions-layout">
      <article class="session-card">
        <p class="eyebrow">${data.prompt || fallbackData.sessions.prompt}</p>
        <h3>${data.serviceName || fallbackData.sessions.serviceName}</h3>
        <p>${data.description || fallbackData.sessions.description}</p>

        <ul class="service-meta">
          <li>Duration: ${data.duration || fallbackData.sessions.duration}</li>
          <li>Location: ${data.location || fallbackData.sessions.location}</li>
          <li>Option: ${data.option || fallbackData.sessions.option}</li>
        </ul>

        <div class="price-row">
          <div>
            <p class="meta-line">Sliding scale</p>
            <div class="price-pills">${prices}</div>
          </div>
          <a class="button button-primary" href="${data.bookingLink || fallbackData.sessions.bookingLink}">Book a session</a>
        </div>
      </article>

      <aside class="booking-panel session-card">
        <p class="eyebrow">Booking</p>
        <h3>Breely booking flow</h3>
        <p>${data.note || fallbackData.sessions.note}</p>
        <a class="button button-primary" href="${data.bookingLink || fallbackData.sessions.bookingLink}">Open booking</a>
        <p class="booker-note">Availability, payment, and confirmations remain pending the configured Breely setup.</p>
        <ul class="service-meta">
          ${expectations}
        </ul>
      </aside>
    </div>
  `;
}

function renderCourses(data) {
  const container = document.getElementById("courses-content");
  const eyebrow = document.getElementById("courses-eyebrow");
  const heading = document.getElementById("courses-heading");

  if (eyebrow) {
    eyebrow.textContent = data.eyebrow || fallbackData.courses.eyebrow;
  }

  if (heading) {
    heading.textContent = data.title || fallbackData.courses.title;
  }

  if (!container) return;

  const items = data.items || fallbackData.courses.items;

  container.innerHTML = items
    .map(
      (course) => `
        <article class="course-card">
          <span class="course-tag">${course.level}</span>
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <p><strong>Date:</strong> ${course.date}</p>
          <p><strong>Format:</strong> ${course.format}</p>
          <p><strong>Status:</strong> ${course.status}</p>
          <a class="course-link" href="${course.link}">Registration link pending</a>
        </article>
      `
    )
    .join("");
}

function renderEvents(data) {
  const container = document.getElementById("events-content");
  const eyebrow = document.getElementById("events-eyebrow");
  const heading = document.getElementById("events-heading");

  if (eyebrow) {
    eyebrow.textContent = data.eyebrow || fallbackData.events.eyebrow;
  }

  if (heading) {
    heading.textContent = data.title || fallbackData.events.title;
  }

  if (!container) return;

  const items = data.items || fallbackData.events.items;

  container.innerHTML = items
    .map(
      (event) => `
        <article class="event-card">
          <div class="event-cover" aria-hidden="true"></div>
          <div class="content">
            <p class="meta-line">${event.date}</p>
            <h3>${event.title}</h3>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.summary}</p>
            <div class="fine-print">
              <p>${event.reflection}</p>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderConnect(data) {
  const container = document.getElementById("connect-content");
  const eyebrow = document.getElementById("connect-eyebrow");
  const heading = document.getElementById("connect-heading");

  if (eyebrow) {
    eyebrow.textContent = data.eyebrow || fallbackData.connect.eyebrow;
  }

  if (heading) {
    heading.textContent = data.title || fallbackData.connect.title;
  }

  if (!container) return;

  container.innerHTML = `
    <div class="content-stack">
      ${(data.paragraphs || fallbackData.connect.paragraphs)
        .map((paragraph) => `<div class="placeholder-note"><p>${paragraph}</p></div>`)
        .join("")}
    </div>
  `;
}

function renderFooter(settings) {
  const footerBrand = document.getElementById("footer-brand");
  const footerText = document.getElementById("footer-text");
  if (footerBrand) {
    footerBrand.textContent = settings.title || fallbackData.siteSettings.title;
  }

  if (footerText) {
    footerText.textContent = settings.footerText || fallbackData.siteSettings.footerText;
  }
}

async function loadContent() {
  const siteData = (await fetchJson("./content/site.json")) || { siteSettings: fallbackData.siteSettings, hero: fallbackData.hero };
  const aboutData = (await fetchJson("./content/about.json")) || fallbackData.about;
  const sessionsData = (await fetchJson("./content/sessions.json")) || fallbackData.sessions;
  const coursesData = (await fetchJson("./content/courses.json")) || fallbackData.courses;
  const eventsData = (await fetchJson("./content/events.json")) || fallbackData.events;
  const connectData = (await fetchJson("./content/connect.json")) || fallbackData.connect;

  const settings = siteData.siteSettings || siteData || fallbackData.siteSettings;
  const heroData = siteData.hero || fallbackData.hero;

  renderBrand(settings);
  renderNavigation(settings);
  renderHero(heroData, settings);
  renderFooter(settings);

  renderAbout(aboutData);
  renderSessions(sessionsData);
  renderCourses(coursesData);
  renderEvents(eventsData);
  renderConnect(connectData);
}

loadContent();
