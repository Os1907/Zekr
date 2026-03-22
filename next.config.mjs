import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  // ────────────────────────────────────────────
  // 1️⃣  أين يُحفظ ملف الـ Service Worker المولَّد
  // ────────────────────────────────────────────
  dest: "public",

  // ────────────────────────────────────────────
  // 2️⃣  صفحة الـ Offline الاحتياطية
  //     تظهر عند محاولة فتح صفحة غير مخزنة أثناء الأوفلاين
  // ────────────────────────────────────────────
  fallbacks: {
    document: "/offline", // مسار صفحة الـ Offline التي أنشأناها
  },

  // ────────────────────────────────────────────
  // 3️⃣  خيارات إضافية
  // ────────────────────────────────────────────
  cacheOnFrontEndNav: true,  // خزّن عند التنقل بين الصفحات
  aggressiveFrontEndNavCaching: true, // تخزين أكثر عدوانية للصفحات
  reloadOnOnline: true,      // أعد تحميل التطبيق عند عودة الإنترنت

  // ────────────────────────────────────────────
  // 3️⃣  قواعد الـ Caching - قلب الـ Service Worker
  // ────────────────────────────────────────────
  workboxOptions: {
    // حذف الـ Cache القديم تلقائياً عند تحديث التطبيق
    cleanupOutdatedCaches: true,

    // ── استراتيجيات الـ Runtime Caching ──────────
    runtimeCaching: [

      // ─── القاعدة 1: ملفات Next.js الثابتة (JS, CSS) ───
      // استراتيجية: CacheFirst → نعطي الأولوية للـ Cache
      // السبب: هذه الملفات لا تتغير بعد الـ Build
      {
        urlPattern: /\/_next\/static\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "next-static-assets",
          expiration: {
            maxEntries: 200,          // أقصى عدد ملفات في الـ Cache
            maxAgeSeconds: 60 * 60 * 24 * 30, // 30 يوم
          },
        },
      },

      // ─── القاعدة 2: صور التطبيق ───────────────────
      // استراتيجية: CacheFirst → الصور لا تتغير
      {
        urlPattern: /\/_next\/image\?.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "next-image-assets",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 30 يوم
          },
        },
      },

      // ─── القاعدة 3: بيانات الأذكار من GitHub ────────
      // استراتيجية: CacheFirst → البيانات ثابتة ونادراً تتغير
      // السبب: نريد أن تعمل حتى بدون إنترنت
      {
        urlPattern: /^https:\/\/raw\.githubusercontent\.com\/nawafalqari\/azkar-api\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "azkar-api-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 7, // 7 أيام
          },
          // هذا يسمح بـ Caching للـ Cross-Origin requests
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // ─── القاعدة 4: بيانات القرآن من GitHub ─────────
      // استراتيجية: CacheFirst → القرآن لا يتغير أبداً 😄
      {
        urlPattern: /^https:\/\/raw\.githubusercontent\.com\/penggguna\/QuranJSON\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "quran-api-cache",
          expiration: {
            maxEntries: 200,          // 114 سورة + هامش
            maxAgeSeconds: 60 * 60 * 24 * 365, // سنة كاملة
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // ─── القاعدة 5: صفحات التطبيق ────────────────
      // استراتيجية: NetworkFirst → نحاول الإنترنت أولاً
      // إذا فشل (أوفلاين) → نرجع النسخة المخزنة
      {
        urlPattern: /^https?:\/\/.*\/.*$/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "pages-cache",
          networkTimeoutSeconds: 5, // انتظر 5 ثوانٍ، إذا فشل استخدم الـ Cache
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24, // يوم واحد
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
});

export default withPWA({
  // إعدادات Next.js العادية
});