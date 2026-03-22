// صفحة الـ Offline — Server Component (بدون 'use client')
// تظهر تلقائياً عندما يحاول المستخدم فتح صفحة غير مخزنة
// وهو غير متصل بالإنترنت.
// لأنها بدون event handlers، لا نحتاج 'use client'
// ────────────────────────────────────────────────────────────

export default function OfflinePage() {
  return (
    <div
      dir="rtl"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Cairo, sans-serif",
        textAlign: "center",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      {/* أيقونة الإشارة المنقطعة */}
      <div style={{ fontSize: "5rem" }}>📵</div>

      <h1 style={{ fontSize: "1.8rem", fontWeight: "700" }}>
        أنت غير متصل بالإنترنت
      </h1>

      <p style={{ fontSize: "1rem", color: "#666", maxWidth: "400px" }}>
        لا يمكن تحميل هذه الصفحة حالياً. تحقق من اتصالك بالإنترنت وحاول مجدداً.
        <br />
        <br />
        الأذكار والقرآن المخزنة مسبقاً ستعمل بشكل طبيعي. 🌿
      </p>

      {/* نستخدم <a> بدلاً من button+onClick لتجنب مشكلة Server/Client Components */}
      <a
        href="/"
        style={{
          marginTop: "1rem",
          padding: "0.75rem 2rem",
          borderRadius: "12px",
          border: "none",
          backgroundColor: "#1a5c3a",
          color: "white",
          fontSize: "1rem",
          cursor: "pointer",
          fontFamily: "Cairo, sans-serif",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        العودة للرئيسية
      </a>
    </div>
  );
}
