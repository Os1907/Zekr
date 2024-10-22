
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_Components/Navbar/Navbar";
import ReduxProvider from "@/Rdeux/Provider";

const inter = Inter({ subsets: ["latin"] });


const APP_NAME = "ذِكر";
const APP_DEFAULT_TITLE = "تطبيق أذكار المسلم";
const APP_TITLE_TEMPLATE = "ذِكر";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/public/finalogo.png" />
      </head>
      <body dir='rtl'  className={inter.className}>
      <Navbar/>
      <ReduxProvider>
        {children}
      </ReduxProvider>
        </body>
    </html>
  );
}
