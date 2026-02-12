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
  website: "luxury-leather.pages.dev"
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

// ==========================================================
// PRODUCTS
// ✅ كل منتج = كولكشن صور خاص به (زوايا/ألوان/فتح-غلق)
// ✅ أول صورة في كل منتج = أفضل Cover للبطاقة (أقل قص/زوم)
// ==========================================================
const PRODUCTS = [
  {
    id: "deskset-executive",
    category: "desk-sets",
    title: { ar: "مجموعات المكتب التنفيذية", en: "Executive Desk Set Collection" },
    tagline: { ar: "تنظيم فاخر يليق بمكتبك — تنفيذ حسب الهوية", en: "Premium organization — tailored to your brand" },
    description: {
      ar: "مجموعة مكتبية متكاملة من الجلد الفاخر، تشمل قطعاً عملية لرفع مستوى المكتب وتوحيد المظهر العام. تتوفر بألوان وخيارات متعددة مع إمكانية إضافة الشعار والاسم.",
      en: "A complete luxury-leather desk set designed for executive offices. Multiple pieces, precise finishing, and full branding options (logo, name, custom layout) with a selection of colors."
    },
    features: {
      ar: ["جلد فاخر وتشطيب يدوي", "مجموعة متعددة القطع", "تخصيص بالشعار والاسم", "ألوان وتكوينات متنوعة"],
      en: ["Premium leather & hand finishing", "Modular multi-piece set", "Logo/name customization", "Multiple colors and configurations"]
    },
    images: [
      "assets/products/deskset_teal.jpg",
      "assets/products/deskset_green.jpg",
      "assets/products/deskset_emerald_full.jpg",
      "assets/products/deskset_sand_full.jpg",
      "assets/products/deskset_obsidian.jpg",
      "assets/products/deskset_render.jpg"
    ]
  },

  {
    id: "giftbox-emerald",
    category: "gift-boxes",
    title: { ar: "صندوق هدايا زمردي", en: "Emerald Gift Box" },
    tagline: { ar: "تفاصيل فاخرة لتجربة تقديم لا تُنسى", en: "A premium unboxing experience" },
    description: {
      ar: "صندوق هدايا فاخر بتصميم جلدي أنيق، مناسب للهدايا الرسمية، الدروع، والمناسبات المؤسسية. خيارات داخلية قابلة للتخصيص حسب المحتوى.",
      en: "A luxury gift box with elegant leather finishing—ideal for corporate awards, VIP gifts, and special occasions. Interior layout can be customized to fit your items."
    },
    features: {
      ar: ["إغلاق محكم وتشطيب راقٍ", "ترتيب داخلي حسب الطلب", "قابل للطباعة والنقش", "مثالي للهدايا الرسمية"],
      en: ["Secure closure & refined finishing", "Custom interior layout", "Branding: print/emboss/plate", "Designed for corporate gifting"]
    },
    images: [
      "assets/products/box_emerald_closed.jpg",
      "assets/products/box_emerald_open.jpg",
      "assets/products/box_emerald_top.jpg"
    ]
  },

  {
    id: "giftbox-skyline",
    category: "gift-boxes",
    title: { ar: "صندوق هدايا Skyline", en: "Skyline Gift Box" },
    tagline: { ar: "تصميم أسود وذهبي بلمسة فنية", en: "Black & gold — designed to stand out" },
    description: {
      ar: "صندوق هدايا بواجهة فنية ولمسات ذهبية، يبرز الهوية ويمنح الهدية قيمة أعلى. مناسب للفعاليات والمؤتمرات مع خيارات تخصيص كاملة.",
      en: "A statement gift box with premium black finish and gold detailing—perfect for events, conferences, and premium giveaways. Fully customizable for your brand."
    },
    features: {
      ar: ["تفاصيل ذهبية ولمسة فخامة", "خيارات داخلية متنوعة", "مناسب للمؤتمرات والفعاليات", "تخصيص كامل للهوية"],
      en: ["Premium finish with gold details", "Multiple interior configurations", "Ideal for conferences & events", "Full customization available"]
    },
    images: [
      "assets/products/box_skyline.jpg",
      "assets/products/box_skyline_open.jpg"
    ]
  },

  {
    id: "presentation-boxes",
    category: "displays",
    title: { ar: "صناديق عرض خشب وجلد", en: "Wood & Leather Presentation Boxes" },
    tagline: { ar: "عرض فخم للمجموعات والقطع المميزة", en: "Premium presentation for premium items" },
    description: {
      ar: "صناديق عرض تجمع بين الخشب والجلد لتقديم القطع أو المجموعات بشكل راقٍ ومنظم. مناسبة للهدايا المؤسسية والنسخ الخاصة مع تقسيمات داخلية متعددة.",
      en: "Presentation boxes combining wood structure with leather finishing—ideal for curated sets and special editions. Configurable interiors and branding options."
    },
    features: {
      ar: ["خشب متين مع كسوة جلدية", "تقسيمات داخلية متعددة", "إغلاق آمن/غطاء شفاف حسب التصميم", "خيارات تخصيص للشعار والاسم"],
      en: ["Solid wood with leather finishing", "Multi-compartment interior layouts", "Secure closure / optional clear lid", "Logo & naming customization"]
    },
    images: [
      "assets/products/box_wood_leather.jpg",
      "assets/products/box_wood_closed.jpg",
      "assets/products/display_case_green.jpg",
      "assets/products/display_case.jpg"
    ]
  },

  {
    id: "award-folders",
    category: "awards",
    title: { ar: "ملفات تكريم وشهادات", en: "Ceremony & Award Folders" },
    tagline: { ar: "للمناسبات الرسمية… حضور يليق بالتكريم", en: "Because recognition deserves a premium finish" },
    description: {
      ar: "ملفات تكريم وشهادات بتصميم جلدي فاخر، مناسبة للحفلات الرسمية والجهات الحكومية والشركات. تتوفر بألوان متعددة مع خيارات للطباعة، النقش، أو اللوحات المعدنية.",
      en: "Luxury leather award and certificate folders for official ceremonies and corporate recognition. Available in multiple colors with print/emboss/metal plate branding."
    },
    features: {
      ar: ["أغلفة جلدية فاخرة", "تخصيص: طباعة/نقش/لوحة معدنية", "ألوان ومقاسات متعددة", "مناسبة للشهادات والوثائق الرسمية"],
      en: ["Premium leather covers", "Branding: print, emboss, or metal plate", "Multiple sizes and colors", "Perfect for certificates and official documents"]
    },
    images: [
      "assets/products/folder_award_blue_plate.jpg",
      "assets/products/award_folder_black.jpg",
      "assets/products/folder_green_emblem.jpg",
      "assets/products/folder_ndu.jpg",
      "assets/products/folder_nursing_green.jpg",
      "assets/products/folder_teal_charity.jpg",
      "assets/products/folder_green_airports.jpg",
      "assets/products/folder_brown_arabic.jpg",
      "assets/products/folder_brown_embossed.jpg"
    ]
  },

  {
    id: "corporate-portfolios",
    category: "portfolios",
    title: { ar: "محافظ وملفات تنفيذية", en: "Corporate Portfolios & Document Holders" },
    tagline: { ar: "تنظيم عملي… ومظهر مؤسسي موحد", en: "Practical organization with a premium look" },
    description: {
      ar: "محافظ وملفات مستندات بتصاميم داخلية متنوعة (جيوب، مشابك، إغلاق مغناطيسي)، مناسبة للاجتماعات والفعاليات والملفات الرسمية. قابلة للتخصيص وفق هوية الجهة.",
      en: "Executive portfolios and document holders in multiple layouts—pockets, pen loops, clips, magnetic closures—ideal for meetings, events, and official files. Fully branded to your identity."
    },
    features: {
      ar: ["تصاميم داخلية متعددة", "خيارات إغلاق متنوعة", "مقاسات مختلفة حسب الاستخدام", "تخصيص كامل للهوية"],
      en: ["Multiple interior layouts", "Flexible closure options", "Different sizes per use-case", "Fully customizable branding"]
    },
    images: [
      "assets/products/portfolio_blue_open_01.jpg",
      "assets/products/portfolio_blue_open_02.jpg",
      "assets/products/portfolio_black_binder.jpg",
      "assets/products/doc_folder_security.jpg",
      "assets/products/portfolio_pockets_green.jpg",
      "assets/products/portfolio_green_simple.jpg",
      "assets/products/folder_cit_blue.jpg",
      "assets/products/portfolio_aou_blue_01.jpg",
      "assets/products/portfolio_aou_blue_02.jpg",
      "assets/products/portfolio_aou_green.jpg",
      "assets/products/folder_blue_round_01.jpg",
      "assets/products/folder_blue_round_02.jpg"
    ]
  },

  {
    id: "office-accessories",
    category: "desk-accessories",
    title: { ar: "إكسسوارات مكتبية", en: "Office Accessories" },
    tagline: { ar: "تفاصيل صغيرة… تصنع فرقاً كبيراً", en: "Small details that elevate the whole desk" },
    description: {
      ar: "مجموعة من الإكسسوارات المكتبية المصممة لتكمل هوية المكتب: مساند، حوامل، بطاقات تعريف، وبادات مكتبية. تنفيذ دقيق مع خيارات تخصيص واسعة.",
      en: "A curated set of office accessories to complete your workspace identity—stands, holders, nameplates, ID wallets, and desk pads. Precision-made with broad customization options."
    },
    features: {
      ar: ["لوحات اسم وهوية", "حوامل عرض ومساند", "بادات مكتبية جلدية", "مناسبة للهدايا المؤسسية"],
      en: ["Nameplates & branding elements", "Display stands and holders", "Leather desk pads", "Perfect for corporate gifting"]
    },
    images: [
      "assets/products/nameplate_hajj.jpg",
      "assets/products/deskpad_purple_flat.jpg",
      "assets/products/idholders_blue_set.jpg",
      "assets/products/display_stand_blue.jpg",
      "assets/products/display_stand_blue_alt.jpg",
      "assets/products/deskpad_purple.jpg"
    ]
  },

  {
  id: "desk-organizer-calendar",
  category: "desk-organizers",
  title: { ar: "تقاويم مكتبية", en: "Desk Calendars" },
  tagline: { ar: "تقاويم يومية/شهرية بتصاميم عملية", en: "Daily/monthly calendars with practical designs" },
  description: {
    ar: "تقاويم مكتبية مناسبة للاستخدام اليومي داخل الجهات والمكاتب. متاحة بعدة موديلات (مثل KH15 / KH13 / KH07 / KH16 / KH12) مع إمكانية التخصيص حسب الطلب.",
    en: "Desk calendars ideal for daily office use. Available in multiple models (KH15 / KH13 / KH07 / KH16 / KH12) with customization on request."
  },
  features: {
    ar: [
      "خيارات متعددة للموديلات والمقاسات",
      "تصميم ثابت وسهل القراءة على المكتب",
      "مناسبة للهدايا المؤسسية والاستخدام اليومي",
      "إمكانية إضافة شعار الجهة أو الاسم"
    ],
    en: [
      "Multiple models and sizes",
      "Stable, desk-friendly design",
      "Ideal for corporate gifting and daily use",
      "Logo/name customization available"
    ]
  },
  images: [
    "assets/products/cal_kh15_open.jpg",
    "assets/products/cal_kh15_side.jpg",
    "assets/products/cal_kh13.jpg",
    "assets/products/cal_kh07.jpg",
    "assets/products/cal_kh16.jpg",
    "assets/products/cal_kh12.jpg",
    "assets/products/cal_pyramid_set.jpg"
  ]
},
]

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
    "hero.title": "هدايا جلدية تليق بالفخامة التي تدوم. وتبقى أثرًا",
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

    "craft.title": "طقم مكتبي",
    "craft.p1": "كل قطعة تُصنع لتخدم سنوات، وتبدو أجمل مع الوقت. نعتني بالقصّ، والخياطة، واللمسات المعدنية، حتى تصبح القطعة جديرة بالهدية الرسمية أو الاستخدام اليومي.",
    "craft.li1": "تشطيبات نظيفة وحواف مُتقنة",
    "craft.li2": "خيارات ألوان من الجلد الفاخر",
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
    "wa.form": `السلام عليكم، أود طلب عرض سعر.
الاسم: {name}
الجهة: {company}
الرقم: {phone}
الفئة: {category}
المنتج: {product}
التفاصيل: {message}`
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
    "wa.form": `Hello, I'd like a quote.
Name: {name}
Company: {company}
Phone: {phone}
Category: {category}
Product: {product}
Details: {message}`
  }
};
