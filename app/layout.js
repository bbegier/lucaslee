import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

export const metadata = {
  title: "Home - LL Resort",
  description: "Our premier family-friendly private club in Victor offers an exceptional Scottish links-style 18-hole golf course, state-of-the-art golf simulators, a comprehensive fitness center, brand-new pickleball facilities, and a seasonal pool.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}