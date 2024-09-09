import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { getSEOTags, viewport } from "../libs/seo";
import ClientLayout from "../components/LayoutClient";
import config from "../config";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
const font = Inter({ subsets: ["latin"] });

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

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
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
