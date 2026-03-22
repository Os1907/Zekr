import type { Metadata, Viewport } from "next";
import { Cairo } from 'next/font/google'
import "./globals.css";
import ReduxProvider from "@/Rdeux/Provider";
import ThemeProvider from "@/context/ThemeContext";
import FloatingThemeToggle from "./_Components/ThemeToggle/ThemeToggle";

const cairo = Cairo({ 
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-main',
  display: 'swap',
})

const APP_NAME = "ذكر";
const APP_DEFAULT_TITLE = "تطبيق أذكار المسلم";
const APP_TITLE_TEMPLATE = "ذكر";
const APP_DESCRIPTION = "تطبيق شامل لأذكار المسلم لمساعدتك على الذكر في حياتك اليومية.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a5c3a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-theme="light" suppressHydrationWarning>
      <body className={`${cairo.variable} antialiased`}>
        <ReduxProvider>
          <ThemeProvider>
            <FloatingThemeToggle />
            <main>
              {children}
            </main>
          
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}