import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";
import FlareCursor from "./flare";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dama Solutions | Web Development, SEO, Branding & ERP Services",
  description:
    "Dama Solutions offers expert web development, SEO, ERP solutions, branding, and social media marketing to help businesses grow their digital presence.",
  keywords:
    "web development, SEO, ERP solutions, branding, social media marketing, business growth, Dama Solutions",
  openGraph: {
    title: "Dama Solutions | Web Development, SEO, Branding & ERP Services",
    description:
      "Dama Solutions offers expert web development, SEO, ERP solutions, branding, and social media marketing to help businesses grow their digital presence.",
    url: "https://www.damasolutions.vercel.app",
    siteName: "Dama Solutions",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
        alt: "Dama Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dama Solutions | Web Development, SEO, Branding & ERP Services",
    description:
      "Dama Solutions offers expert web development, SEO, ERP solutions, branding, and social media marketing to help businesses grow their digital presence.",
    images: ["https://www.damasolutions.vercel.app/images/twitter-image.jpg"],
    creator: "@damasolutions", // Replace with your actual Twitter handle
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.damasolutions.vercel.app",
  },
  icons: {
    icon: "/favicon.ico", // Update with the correct favicon path
  },

  other: {
    "application/ld+json": JSON.stringify({
      // "@context": "https://schema.org",
      "@type": "Organization",
      name: "Dama Solutions",
      url: "https://www.damasolutions.vercel.app",
      // logo: "https://www.damasolutions.vercel.app/images/logo.png",
      // sameAs: [
      //   "https://www.linkedin.vercel.app/company/damasolutions",
      //   "https://twitter.vercel.app/damasolutions",
      // ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+251-905-398-793", // Replace with your actual phone number
        contactType: "Customer Service",
      },
      description:
        "Dama Solutions offers expert web development, SEO, ERP solutions, branding, and social media marketing services to drive business success.",
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} antialiased sm:p-3 text-white main`}
      >
        <FlareCursor />
        {children}
      </body>
    </html>
  );
}
