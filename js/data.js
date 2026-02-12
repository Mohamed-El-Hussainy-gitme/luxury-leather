// ==========================================================
// Luxury Leather — Data + i18n
// (Keep markup in HTML, styling in CSS, behavior here)
// ==========================================================

const BRAND = {
  name: "Luxury Leather",
  nameAr: "الجلد الفاخر",
  // Official number extracted from the provided business cards / profile PDF
  whatsappNumber: "966505192091",
  phoneDisplay: "+966 50 519 2091",
  email: "info@luxuryleather.org",
  website: "luxuryleather.org"
};

const CATEGORIES = [
  { id: "all", label: { ar: "الكل", en: "All" } },
  { id: "desk-sets", label: { ar: "مجموعات مكتب تنفيذية", en: "Executive Desk Sets" } },
  { id: "gift-boxes", label: { ar: "صناديق هدايا فاخرة", en: "Premium Gift Boxes" } },
  { id: "awards", label: { ar: "تكريم وملفات مناسبات", en: "Awards & Ceremony" } },
  { id: "portfolios", label: { ar: "فولدرات ومحافظ ملفات", en: "Portfolios & Folders" } },
  { id: "desk-accessories", label: { ar: "إكسسوارات مكتب", en: "Desk Accessories" } },
  { id: "displays", label: { ar: "عرض وتقديم", en: "Presentation & Display" } }
];

const PRODUCTS = [
  {
    id: "deskset-royal-green",
    category: "desk-sets",
    title: {
      ar: "مجموعة مكتب تنفيذية — الأخضر الملكي",
      en: "Executive Desk Set — Royal Green"
    },
    tagline: {
      ar: "مكتب مرتب… وهيبة تسبق الكلام.",
      en: "A disciplined desk. A presence that speaks first."
    },
    description: {
      ar: "مجموعة مكتبية جلدية فاخرة تُظهر الهوية بشكل راقٍ، وتمنح المكتب لمسة بروتوكولية. مناسبة للمكاتب التنفيذية، هدايا كبار الشخصيات، وتجهيزات الجهات الرسمية.",
      en: "A premium leather desk set designed to elevate executive workspaces with a polished, protocol-ready presence. Ideal for VIP gifts and official offices."
    },
    features: {
      ar: [
        "إمكانية إضافة شعار الجهة بطباعة ذهبية أو نقش",
        "تنسيق عناصر المجموعة حسب احتياج المكتب",
        "تشطيب حواف وخياطة دقيقة لثبات أطول"
      ],
      en: [
        "Logo customization: gold stamping or engraving",
        "Elements can be arranged based on desk workflow",
        "Precise stitching and clean edges for durability"
      ]
    },
    images: [
      "assets/products/deskset_green.jpg"
    ]
  },

  {
    id: "deskset-teal",
    category: "desk-sets",
    title: {
      ar: "مجموعة مكتب تنفيذية — لمسة تيال",
      en: "Executive Desk Set — Teal Edition"
    },
    tagline: {
      ar: "تفاصيل هادئة… فخامة غير صاخبة.",
      en: "Quiet details. Confident luxury."
    },
    description: {
      ar: "خيار أنيق للجهات التي تفضّل الهدوء البصري مع حضور فاخر. تصميم متوازن يمنح المكتب اتساقًا مع سهولة الاستخدام اليومي.",
      en: "A refined choice for brands that prefer subtle sophistication. Balanced design that keeps the desk consistent and functional every day."
    },
    features: {
      ar: [
        "ألوان وخامات قابلة للتخصيص حسب هوية الجهة",
        "مناسبة كهدايا رسمية للمناسبات والوفود",
        "تنفيذ دقيق يليق بالاجتماعات والمكاتب القيادية"
      ],
      en: [
        "Colors and materials tailored to your brand identity",
        "Perfect as protocol gifts for events and delegations",
        "Crafted to match executive environments"
      ]
    },
    images: [
      "assets/products/deskset_teal.jpg"
    ]
  },

  {
    id: "giftbox-emerald",
    category: "gift-boxes",
    title: {
      ar: "صندوق هدايا فاخر — زمردي",
      en: "Premium Gift Box — Emerald"
    },
    tagline: {
      ar: "من أول نظرة… تُفهم قيمة الهدية.",
      en: "Value understood at first glance."
    },
    description: {
      ar: "صندوق جلد فاخر بتفاصيل ذهبية وتجهيز داخلي منظم. مناسب للهدايا الرسمية، تكريم الضيوف، والمناسبات الخاصة للجهات.",
      en: "A luxury leather gift box with gold accents and a neat interior layout—made for official gifting, guest honors, and high-end corporate occasions."
    },
    features: {
      ar: [
        "إمكانية تصميم التقسيمات الداخلية حسب المحتوى",
        "خيار إضافة شعار/اسم مناسبة على الغطاء",
        "تغليف يليق بالبروتوكول والهدايا الرسمية"
      ],
      en: [
        "Interior compartments can be designed per item",
        "Add your logo or event title on the lid",
        "Protocol-ready presentation for official gifting"
      ]
    },
    images: [
      "assets/products/box_emerald_closed.jpg",
      "assets/products/box_emerald_open.jpg"
    ]
  },

  {
    id: "giftbox-skyline",
    category: "gift-boxes",
    title: {
      ar: "صندوق هدايا — إصدار المدينة",
      en: "Gift Box — Skyline Edition"
    },
    tagline: {
      ar: "تفاصيل سعودية… وإخراج فاخر للهدية.",
      en: "Saudi-inspired details, luxury presentation."
    },
    description: {
      ar: "تصميم مستوحى من روح المدينة وتفاصيلها — مع تنفيذ جلدي فاخر يليق بالهدايا الرسمية. مناسب للفعاليات، الجوائز، والهدايا المؤسسية.",
      en: "A city-inspired design with a premium leather finish. Ideal for events, awards, and corporate gifting with a local touch."
    },
    features: {
      ar: [
        "إمكانية تعديل التصميم ليناسب هوية الجهة",
        "خامة جلد فاخرة ولمسة ذهبية راقية",
        "حل مثالي لتجهيزات الفعاليات والوفود"
      ],
      en: [
        "Design can be adapted to your brand identity",
        "Premium leather with refined gold accents",
        "Perfect for events, delegations, and ceremonies"
      ]
    },
    images: [
      "assets/products/box_skyline.jpg"
    ]
  },

  {
    id: "presentation-box-wood-leather",
    category: "displays",
    title: {
      ar: "صندوق تقديم — خشب وجلد",
      en: "Presentation Box — Wood & Leather"
    },
    tagline: {
      ar: "عرض مرتب… يجعل الهدية تجربة كاملة.",
      en: "A neat presentation that turns a gift into an experience."
    },
    description: {
      ar: "صندوق تقديم بهيكل خشبي مع سطح جلدي فاخر وتجهيز داخلي أنيق. مناسب للهدايا متعددة القطع، الدروع، أو تجهيزات التكريم.",
      en: "A premium presentation box combining a wooden structure with a leather top and elegant inner layout—ideal for multi-piece gifts and honors."
    },
    features: {
      ar: [
        "غطاء جلدي قابل للطباعة/النقش حسب الطلب",
        "تقسيمات داخلية قابلة للتعديل حسب المحتوى",
        "اختيار ممتاز للهدايا الرسمية والجوائز"
      ],
      en: [
        "Leather lid can be stamped/engraved on request",
        "Inner compartments can be customized",
        "A strong option for official gifts and awards"
      ]
    },
    images: [
      "assets/products/box_wood_leather.jpg",
      "assets/products/display_case.jpg"
    ]
  },

  {
    id: "award-folder-black",
    category: "awards",
    title: {
      ar: "ملف تكريم — غطاء فاخر",
      en: "Ceremony Folder — Premium Cover"
    },
    tagline: {
      ar: "لحظة تكريم… تحتاج إطارًا يليق بها.",
      en: "A moment of honor deserves the right frame."
    },
    description: {
      ar: "غلاف تكريم/شهادة بتشطيب جلد فاخر، مناسب لحفلات التكريم والجهات التي تهتم بالتفاصيل. قابل للتخصيص بالشعار أو اسم المناسبة.",
      en: "A premium leather ceremony folder for certificates and honors—customizable with logos and event titles."
    },
    features: {
      ar: [
        "مناسب للشهادات والوثائق الرسمية",
        "خيار ألوان متعددة (أسود/أخضر/كحلي…)",
        "تشطيب فخم يليق بالصور التذكارية"
      ],
      en: [
        "Perfect for certificates and official documents",
        "Multiple color options (black/green/navy…)",
        "A premium finish for memorable moments"
      ]
    },
    images: [
      "assets/products/award_folder_black.jpg"
    ]
  },

  {
    id: "doc-folder-security",
    category: "portfolios",
    title: {
      ar: "فولدر وثائق — إصدار رسمي",
      en: "Document Folder — Official Edition"
    },
    tagline: {
      ar: "حماية وتنظيم… بشكل يليق بالجهة.",
      en: "Protection and organization—done properly."
    },
    description: {
      ar: "فولدر جلد فاخر لترتيب المستندات والمراسلات، مناسب للاجتماعات، التوقيعات، والملفات الحساسة. يمكن تنفيذ مقاسات داخلية حسب الاستخدام.",
      en: "A premium leather folder for documents and meetings—ideal for signatures, presentations, and sensitive files, with optional custom sizing."
    },
    features: {
      ar: [
        "جيوب داخلية حسب الطلب (بطاقات/أوراق/تقارير)",
        "إمكانية إضافة شعار الجهة",
        "خامة عملية للاستخدام اليومي"
      ],
      en: [
        "Custom inner pockets (cards/papers/reports)",
        "Add your organization logo",
        "Built for daily professional use"
      ]
    },
    images: [
      "assets/products/doc_folder_security.jpg"
    ]
  },

  {
    id: "portfolio-aou-green",
    category: "portfolios",
    title: {
      ar: "فولدر مؤسسي — أخضر فاخر",
      en: "Corporate Portfolio — Luxury Green"
    },
    tagline: {
      ar: "هوية واضحة… وتفاصيل تعكس الاحتراف.",
      en: "Clear identity. Professional detail."
    },
    description: {
      ar: "فولدر أنيق للوثائق والعروض التقديمية. مناسب لتجهيزات الجهات والجامعات والشركات — مع إمكانية طباعة الشعار أو الاسم.",
      en: "A sleek portfolio for documents and presentations—made for institutions, universities, and companies with optional logo personalization."
    },
    features: {
      ar: [
        "مناسب للعروض والاجتماعات والملفات الرسمية",
        "خياطة متقنة ومظهر فاخر",
        "تنفيذ متعدد المقاسات حسب المحتوى"
      ],
      en: [
        "Ideal for meetings, pitches, and official files",
        "Precise stitching and premium look",
        "Multiple sizes based on content needs"
      ]
    },
    images: [
      "assets/products/portfolio_aou_green.jpg"
    ]
  },

  {
    id: "deskpad-purple",
    category: "desk-accessories",
    title: {
      ar: "لبادة مكتب جلد — منحنى بنفسجي",
      en: "Leather Desk Pad — Curved Purple"
    },
    tagline: {
      ar: "مساحة مريحة… وتفاصيل تغيّر شكل المكتب.",
      en: "A comfortable surface that transforms the desk."
    },
    description: {
      ar: "لبادة مكتب فاخرة بسطح ناعم وانحناءة أنيقة، تمنح تجربة استخدام أجمل وترتيبًا أفضل للمكتب. مناسبة كهدايا شركات أو تجهيزات مكاتب.",
      en: "A premium desk pad with a smooth surface and elegant curves—enhancing comfort and elevating desk aesthetics. Great for office setups and corporate gifts."
    },
    features: {
      ar: [
        "سطح مريح للاستخدام اليومي",
        "مقاسات وألوان حسب الطلب",
        "إمكانية إضافة شعار الجهة"
      ],
      en: [
        "Comfortable surface for daily use",
        "Custom sizes and color options",
        "Optional logo personalization"
      ]
    },
    images: [
      "assets/products/deskpad_purple.jpg"
    ]
  },

  {
    id: "display-stand-navy",
    category: "displays",
    title: {
      ar: "ستاند عرض جلدي — كحلي",
      en: "Leather Display Stand — Navy"
    },
    tagline: {
      ar: "عرض أنيق… للوثائق واللوحات والشعارات.",
      en: "An elegant stand for documents, plaques, and logos."
    },
    description: {
      ar: "ستاند عرض بلمسة جلدية فاخرة، مناسب للاستقبال، المكاتب، والمعارض. يضيف مظهرًا رسميًا للهوية أو الشهادة أو لوحة التكريم.",
      en: "A premium leather display stand—ideal for receptions, offices, and exhibitions, adding a formal touch to certificates, brand marks, and honors."
    },
    features: {
      ar: [
        "مناسب للاستقبال والمعارض والفعاليات",
        "تنفيذ ثابت مع تشطيب فاخر",
        "إمكانية تخصيص المقاس والهوية"
      ],
      en: [
        "Great for receptions, exhibitions, and events",
        "Stable build with premium finishing",
        "Custom sizing and branding available"
      ]
    },
    images: [
      "assets/products/display_stand_blue.jpg"
    ]
  }
];

const I18N = {
  ar: {
    "skip": "تخطي إلى المحتوى",
    "topbar.badge": "صناعة محلية بلمسة فاخرة",
    "topbar.call": "اتصال مباشر",
    "nav.collections": "المجموعات",
    "nav.craft": "الحِرفة",
    "nav.customization": "التخصيص",
    "nav.quote": "طلب عرض سعر",
    "nav.contact": "تواصل",
    "nav.whatsapp": "واتساب الآن",

    "hero.kicker": "Luxury Leather • الجلد الفاخر",
    "hero.title": "هدايا جلدية تليق بالمقام… وتبقى أثرًا",
    "hero.subtitle": "تصاميم سعودية بروح فاخرة — من مجموعات المكتب التنفيذية حتى صناديق الهدايا والتكريم. تنفيذ حسب الطلب مع إمكانية إضافة شعار الجهة واسم المناسبة.",
    "hero.ctaPrimary": "اطلب عرض سعر",
    "hero.ctaSecondary": "تواصل واتساب",
    "hero.h1.t": "جلد فاخر",
    "hero.h1.d": "ملمس ناعم وخياطة دقيقة",
    "hero.h2.t": "تفاصيل ذهبية",
    "hero.h2.d": "طباعة/نقش يرفع قيمة الهدية",
    "hero.h3.t": "تسليم منظم",
    "hero.h3.d": "مناسب للجهات والفعاليات",
    "hero.pill": "نماذج تنفيذ قابلة للتخصيص",

    "collections.title": "مجموعات مختارة بعناية",
    "collections.subtitle": "اختر الفئة، واستعرض المنتجات بتجربة سريعة — مع وصف تشويقي وحلول مخصصة للجهات.",
    "collections.searchPlaceholder": "ابحث عن منتج...",
    "product.view": "عرض التفاصيل",

    "craft.title": "حِرفة تُرى… وتُلمس",
    "craft.p1": "كل قطعة تُصنع لتخدم سنوات، وتبدو أجمل مع الوقت. نعتني بالقصّ، والخياطة، واللمسات المعدنية، حتى تصبح القطعة جديرة بالهدية الرسمية أو الاستخدام اليومي.",
    "craft.li1": "تشطيبات نظيفة وحواف مُتقنة",
    "craft.li2": "خيارات ألوان تلائم الهوية السعودية (أخضر/أسود/ذهبي)",
    "craft.li3": "مقاسات مخصصة حسب المحتوى والاحتياج",
    "craft.link": "شاركنا فكرة الهدية… ونقترح أفضل تنفيذ",

    "custom.title": "التخصيص يرفع قيمة القطعة",
    "custom.subtitle": "شعار الجهة، اسم المناسبة، أو تصميم خاص… ننفّذه بدقة تُشبه البروتوكول.",
    "custom.c1.t": "طباعة ذهبية أنيقة",
    "custom.c1.d": "لمعة محسوبة تُظهر الهوية بدون مبالغة — مثالية للهدايا الرسمية.",
    "custom.c2.t": "نقش وشعارات",
    "custom.c2.d": "يمكن إضافة شعار الجهة أو رمز المناسبة بأكثر من تقنية وفق الخامة.",
    "custom.c3.t": "تغليف وتجهيز فعاليات",
    "custom.c3.d": "حلول جاهزة للفعاليات: أرقام، تقسيمات داخلية، وتسليم مرتب.",

    "quote.title": "اطلب عرض سعر خلال دقيقة",
    "quote.subtitle": "املأ البيانات، وسنجهّز لك اقتراحًا مناسبًا (المقاس/الخامة/التخصيص) ثم نرسله عبر واتساب.",
    "quote.whats": "مراسلة واتساب مباشرة",
    "quote.note": "الرقم الرسمي مأخوذ من بطاقات Luxury Leather التعريفية.",

    "form.name": "الاسم",
    "form.namePh": "اسمك",
    "form.company": "الجهة/الشركة",
    "form.companyPh": "اختياري",
    "form.phone": "رقم التواصل",
    "form.phonePh": "05xxxxxxxx",
    "form.category": "الفئة",
    "form.product": "المنتج",
    "form.message": "تفاصيل الطلب",
    "form.messagePh": "مثال: عدد القطع، اللون، إضافة شعار، موعد التسليم…",
    "form.submit": "إرسال الطلب عبر واتساب",
    "form.fineprint": "بالضغط على “إرسال”، سيتم فتح واتساب برسالة جاهزة. يمكنك تعديلها قبل الإرسال.",

    "contact.title": "تواصل مع Luxury Leather",
    "contact.subtitle": "للجهات، الهدايا الرسمية، تجهيزات الفعاليات، ومنتجات الجلد المكتبية الفاخرة.",
    "contact.c1.t": "واتساب",
    "contact.c1.d": "رد سريع + اقتراحات وتصاميم",
    "contact.c1.btn": "مراسلة الآن",
    "contact.c2.t": "البريد",
    "contact.c3.t": "الموقع",

    "footer.top": "الأعلى",
    "footer.quote": "طلب عرض سعر",
    "footer.collections": "المجموعات",

    "fab": "واتساب",

    "modal.whats": "اطلبه عبر واتساب",
    "modal.quote": "طلب عرض سعر",
    "modal.note": "* الصور المعروضة نماذج تنفيذ قابلة للتخصيص حسب هوية الجهة.",

    "wa.default": "السلام عليكم، أود الاستفسار عن منتجات Luxury Leather.",
    "wa.product": "السلام عليكم، أود طلب عرض سعر لمنتج: {product} — الفئة: {category}.",
    "wa.form": "السلام عليكم، أود طلب عرض سعر.
الاسم: {name}
الجهة: {company}
رقم التواصل: {phone}
الفئة: {category}
المنتج: {product}
التفاصيل: {message}"
  },

  en: {
    "skip": "Skip to content",
    "topbar.badge": "Local craft, luxury finish",
    "topbar.call": "Call",
    "nav.collections": "Collections",
    "nav.craft": "Craft",
    "nav.customization": "Customization",
    "nav.quote": "Request a Quote",
    "nav.contact": "Contact",
    "nav.whatsapp": "WhatsApp Now",

    "hero.kicker": "Luxury Leather • Al-Jild Al-Fakher",
    "hero.title": "Luxury leather gifts that leave a lasting impression",
    "hero.subtitle": "Saudi-inspired premium pieces — from executive desk sets to gift boxes and ceremony folders. Made to order with logo & event personalization.",
    "hero.ctaPrimary": "Request a Quote",
    "hero.ctaSecondary": "Chat on WhatsApp",
    "hero.h1.t": "Premium leather",
    "hero.h1.d": "Smooth feel, precise stitching",
    "hero.h2.t": "Gold details",
    "hero.h2.d": "Stamping/engraving that elevates value",
    "hero.h3.t": "Organized delivery",
    "hero.h3.d": "Ideal for institutions & events",
    "hero.pill": "Customizable execution samples",

    "collections.title": "Curated collections",
    "collections.subtitle": "Pick a category and explore products quickly — with sales-ready copy and customization options.",
    "collections.searchPlaceholder": "Search products...",
    "product.view": "View details",

    "craft.title": "Craft you can see… and feel",
    "craft.p1": "Every piece is built to serve for years and look even better with time. From cutting to stitching and metal accents—each detail is made to match official gifting and daily use.",
    "craft.li1": "Clean edges & precise finishing",
    "craft.li2": "Colors aligned with Saudi identity (green/black/gold)",
    "craft.li3": "Custom sizing based on content needs",
    "craft.link": "Share your gifting idea… we’ll recommend the best execution",

    "custom.title": "Customization raises the value",
    "custom.subtitle": "Your logo, event title, or a special design—crafted with protocol-level precision.",
    "custom.c1.t": "Elegant gold stamping",
    "custom.c1.d": "A controlled shine that highlights identity without being loud.",
    "custom.c2.t": "Engraving & logos",
    "custom.c2.d": "Multiple techniques available depending on materials and finish.",
    "custom.c3.t": "Event-ready packaging",
    "custom.c3.d": "Numbering, internal layouts, and organized delivery for events.",

    "quote.title": "Request a quote in 60 seconds",
    "quote.subtitle": "Fill in the details—we’ll propose the right size/material/personalization and send it via WhatsApp.",
    "quote.whats": "Direct WhatsApp message",
    "quote.note": "Official number sourced from Luxury Leather business cards.",

    "form.name": "Name",
    "form.namePh": "Your name",
    "form.company": "Company / Organization",
    "form.companyPh": "Optional",
    "form.phone": "Contact number",
    "form.phonePh": "e.g. +9665xxxxxxxx",
    "form.category": "Category",
    "form.product": "Product",
    "form.message": "Request details",
    "form.messagePh": "Example: quantity, color, logo, deadline…",
    "form.submit": "Send via WhatsApp",
    "form.fineprint": "By clicking “Send”, WhatsApp will open with a pre-filled message. You can edit it before sending.",

    "contact.title": "Contact Luxury Leather",
    "contact.subtitle": "For institutions, official gifting, event preparation, and premium leather office products.",
    "contact.c1.t": "WhatsApp",
    "contact.c1.d": "Fast response + suggestions",
    "contact.c1.btn": "Message now",
    "contact.c2.t": "Email",
    "contact.c3.t": "Website",

    "footer.top": "Top",
    "footer.quote": "Request a Quote",
    "footer.collections": "Collections",

    "fab": "WhatsApp",

    "modal.whats": "Order via WhatsApp",
    "modal.quote": "Request a Quote",
    "modal.note": "* Images shown are execution samples and can be customized per organization identity.",

    "wa.default": "Hello, I’d like to inquire about Luxury Leather products.",
    "wa.product": "Hello, I'd like a quote for: {product} — Category: {category}.",
    "wa.form": "Hello, I'd like a quote.
Name: {name}
Company: {company}
Phone: {phone}
Category: {category}
Product: {product}
Details: {message}"
  }
};
