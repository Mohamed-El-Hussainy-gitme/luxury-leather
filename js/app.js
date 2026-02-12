// ==========================================================
// Luxury Leather — App logic (rendering, filters, modal, i18n)
// ==========================================================

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const state = {
    lang: "ar",
    theme: "dark",
    category: "all",
    search: ""
  };

  // -------------------------
  // Helpers
  // -------------------------
  const escapeHtml = (str) =>
    String(str).replace(/[&<>"]/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[s]));

  const format = (template, vars) =>
    String(template).replace(/\{(\w+)\}/g, (_, key) => (vars[key] ?? ""));

  const t = (key) => (I18N?.[state.lang]?.[key] ?? key);

  const categoryLabel = (catId) => {
    const cat = CATEGORIES.find((c) => c.id === catId);
    return cat ? (cat.label[state.lang] ?? catId) : catId;
  };

  const waLink = (message) => {
    const base = `https://wa.me/${BRAND.whatsappNumber}`;
    const text = encodeURIComponent(message || t("wa.default"));
    return `${base}?text=${text}`;
  };

  // -------------------------
  // i18n apply
  // -------------------------
  const applyI18n = () => {
    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      el.textContent = t(key);
    });

    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      el.setAttribute("placeholder", t(key));
    });
  };

  // -------------------------
  // Theme + Language
  // -------------------------
  const setTheme = (theme) => {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ll_theme", theme);
  };

  const setLang = (lang) => {
    state.lang = lang;
    localStorage.setItem("ll_lang", lang);

    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const langLabel = $("#langLabel");
    if (langLabel) langLabel.textContent = lang === "ar" ? "EN" : "AR";

    applyI18n();
    renderCategories();
    renderProducts();
    hydrateForm();
    setWhatsAppLinks();
  };

  // -------------------------
  // Categories + Products
  // -------------------------
  const filteredProducts = () => {
    const q = state.search.trim().toLowerCase();

    return PRODUCTS.filter((p) => {
      if (state.category !== "all" && p.category !== state.category) return false;
      if (!q) return true;

      const title = (p.title[state.lang] ?? "").toLowerCase();
      const tag = (p.tagline[state.lang] ?? "").toLowerCase();
      const cat = categoryLabel(p.category).toLowerCase();
      return title.includes(q) || tag.includes(q) || cat.includes(q);
    });
  };

  const renderCategories = () => {
    const wrap = $("#categoryChips");
    if (!wrap) return;

    wrap.innerHTML = "";
    CATEGORIES.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (state.category === cat.id ? " is-active" : "");
      btn.textContent = cat.label[state.lang];

      btn.addEventListener("click", () => {
        state.category = cat.id;
        renderCategories();
        renderProducts();
        hydrateForm();
      });

      wrap.appendChild(btn);
    });
  };

  const renderProducts = () => {
    const grid = $("#productGrid");
    if (!grid) return;

    const list = filteredProducts();
    grid.innerHTML = "";

    if (!list.length) {
      const empty = document.createElement("div");
      empty.className = "info-card";
      const title = state.lang === "ar" ? "لا توجد نتائج" : "No results";
      const desc =
        state.lang === "ar"
          ? "جرّب كلمة بحث مختلفة أو اختر فئة أخرى."
          : "Try another search term or choose a different category.";
      empty.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
      grid.appendChild(empty);
      return;
    }

    list.forEach((p) => {
      const img = p.images?.[0];
      const card = document.createElement("article");
      card.className = "card reveal";
      card.setAttribute("tabindex", "0");

      card.innerHTML = `
        <div class="card__media">
          <img src="${img}" alt="${escapeHtml(p.title[state.lang])}" loading="lazy" />
          <span class="card__badge">${escapeHtml(categoryLabel(p.category))}</span>
        </div>

        <div class="card__body">
          <h3 class="card__title">${escapeHtml(p.title[state.lang])}</h3>
          <p class="card__tag">${escapeHtml(p.tagline[state.lang])}</p>

          <div class="card__meta">
            <span class="card__cat">${escapeHtml(categoryLabel(p.category))}</span>
            <button class="card__btn" type="button" data-product="${p.id}">
              ${escapeHtml(t("product.view"))}
            </button>
          </div>
        </div>
      `;

      card.querySelector("[data-product]")?.addEventListener("click", (e) => {
        e.stopPropagation();
        openModal(p.id);
      });

      card.addEventListener("click", () => openModal(p.id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") openModal(p.id);
      });

      grid.appendChild(card);
    });

    observeReveals();
  };

  // -------------------------
  // WhatsApp links
  // -------------------------
  const setWhatsAppLinks = () => {
    const msg = t("wa.default");
    const href = waLink(msg);

    ["whatsHeaderBtn", "whatsHeroBtn", "whatsQuoteBtn", "whatsContactBtn", "fabWhats"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.href = href;
    });
  };

  // -------------------------
  // Quote form
  // -------------------------
  const hydrateForm = () => {
    const catSel = $("#formCategory");
    const prodSel = $("#formProduct");
    if (!catSel || !prodSel) return;

    const cats = CATEGORIES.filter((c) => c.id !== "all");
    catSel.innerHTML = "";
    cats.forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = c.label[state.lang];
      catSel.appendChild(opt);
    });

    const preferred = state.category !== "all" ? state.category : cats[0]?.id;
    if (preferred) catSel.value = preferred;

    const refreshProducts = () => {
      const catId = catSel.value;
      const list = PRODUCTS.filter((p) => p.category === catId);

      prodSel.innerHTML = "";
      list.forEach((p) => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = p.title[state.lang];
        prodSel.appendChild(opt);
      });
    };

    refreshProducts();
    catSel.onchange = refreshProducts;
  };

  const initFormSubmit = () => {
    const form = $("#quoteForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const name = (fd.get("name") ?? "").toString().trim();
      const company = (fd.get("company") ?? "").toString().trim();
      const phone = (fd.get("phone") ?? "").toString().trim();
      const categoryId = (fd.get("category") ?? "").toString();
      const productId = (fd.get("product") ?? "").toString();
      const message = (fd.get("message") ?? "").toString().trim();

      const prod = PRODUCTS.find((p) => p.id === productId);
      const productName = prod ? prod.title[state.lang] : productId;
      const categoryName = categoryLabel(categoryId);

      const dash = state.lang === "ar" ? "—" : "—";

      const waMsg = format(t("wa.form"), {
        name: name || dash,
        company: company || dash,
        phone: phone || dash,
        category: categoryName || dash,
        product: productName || dash,
        message: message || dash
      });

      window.open(waLink(waMsg), "_blank", "noopener");
    });
  };

  // -------------------------
  // Modal
  // -------------------------
  const modal = $("#productModal");
  let modalLastFocus = null;

  const openModal = (productId) => {
    const p = PRODUCTS.find((x) => x.id === productId);
    if (!p || !modal) return;

    modalLastFocus = document.activeElement;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    $("#modalCategory").textContent = categoryLabel(p.category);
    $("#modalTitle").textContent = p.title[state.lang];
    $("#modalTagline").textContent = p.tagline[state.lang];
    $("#modalDesc").textContent = p.description[state.lang];

    const features = $("#modalFeatures");
    features.innerHTML = "";
    (p.features[state.lang] || []).forEach((f) => {
      const li = document.createElement("li");
      li.textContent = f;
      features.appendChild(li);
    });

    const mainImg = $("#modalMainImg");
    const thumbs = $("#modalThumbs");
    thumbs.innerHTML = "";

    const imgs = (p.images && p.images.length ? p.images : []).filter(Boolean);
    const uniqueImgs = Array.from(new Set(imgs));
    const first = uniqueImgs[0];

    mainImg.src = first;
    mainImg.alt = p.title[state.lang];

    uniqueImgs.forEach((src, idx) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "thumb" + (idx === 0 ? " is-active" : "");
      b.innerHTML = `<img src="${src}" alt="" loading="lazy" />`;

      b.addEventListener("click", () => {
        mainImg.src = src;
        $$(".thumb", thumbs).forEach((t) => t.classList.remove("is-active"));
        b.classList.add("is-active");
      });

      thumbs.appendChild(b);
    });

    const waMsg = format(t("wa.product"), {
      product: p.title[state.lang],
      category: categoryLabel(p.category)
    });

    const waBtn = $("#modalWhatsBtn");
    if (waBtn) waBtn.href = waLink(waMsg);

    setTimeout(() => $("#productModal .modal__close")?.focus(), 0);
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (modalLastFocus && typeof modalLastFocus.focus === "function") {
      modalLastFocus.focus();
    }
  };

  const initModal = () => {
    if (!modal) return;

    modal.addEventListener("click", (e) => {
      if (e.target.matches("[data-close-modal]")) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });
  };

  // -------------------------
  // Reveal animations
  // -------------------------
  let revealObserver = null;

  const observeReveals = () => {
    const items = $$(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((ent) => {
            if (ent.isIntersecting) {
              ent.target.classList.add("is-visible");
              revealObserver.unobserve(ent.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }

    items.forEach((el) => revealObserver.observe(el));
  };

  // -------------------------
  // UI init
  // -------------------------
  const initNavToggle = () => {
    const toggle = $("#navToggle");
    const links = $("#navLinks");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.addEventListener("click", (e) => {
      if (e.target.matches("a")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  };

  const initSearch = () => {
    const input = $("#searchInput");
    if (!input) return;

    input.addEventListener("input", () => {
      state.search = input.value;
      renderProducts();
    });
  };

  const initThemeToggle = () => {
    const btn = $("#themeToggle");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const next = state.theme === "dark" ? "light" : "dark";
      setTheme(next);
    });
  };

  const initLangToggle = () => {
    const btn = $("#langToggle");
    if (!btn) return;

    btn.addEventListener("click", () => {
      setLang(state.lang === "ar" ? "en" : "ar");
    });
  };

  const initFooterYear = () => {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  };

  // -------------------------
  // Boot
  // -------------------------
  const boot = () => {
    const savedTheme = localStorage.getItem("ll_theme");
    const savedLang = localStorage.getItem("ll_lang");

    setTheme(savedTheme === "light" ? "light" : "dark");
    setLang(savedLang === "en" ? "en" : "ar");

    initNavToggle();
    initSearch();
    initThemeToggle();
    initLangToggle();
    initModal();
    initFormSubmit();
    initFooterYear();
    observeReveals();
  };

  document.addEventListener("DOMContentLoaded", boot);
})();
