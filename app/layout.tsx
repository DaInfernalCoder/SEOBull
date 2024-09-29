import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { getSEOTags, viewport } from "../libs/seo";
import ClientLayout from "../components/LayoutClient";
import config from "../config";
//import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
//import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";

const font = Inter({ subsets: ["latin"] });

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
const seoTags = getSEOTags();

export const metadata: Metadata = {
  ...seoTags,
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icon.png',
    },
  },
  openGraph: {
    ...seoTags.openGraph,
    siteName: 'Your Site Name', // Replace 'Your Site Name' with your actual site name
  },
};

// Export the viewport configuration
export { viewport };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <script
            defer
            data-domain={config.domainName}
            src="https://plausible.io/js/script.js"
          ></script>
        </head>
      )}
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
     </html>
  );
}
