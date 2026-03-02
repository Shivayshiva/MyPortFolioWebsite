import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prashant Kumar Madheshiya | Senior Software Engineer",
  description:
    "Senior Software Engineer with 4+ years of experience building scalable, secure, and high-performance SaaS applications using React.js, Next.js, JavaScript (ES6+), and TypeScript. Expert in component-driven architecture, Redux Toolkit, RTK Query, REST API integration, JWT/OAuth-based authentication.",
  keywords: [
    "Prashant Kumar Madheshiya",
    "Senior Software Engineer",
    "React.js Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "TypeScript",
    "JavaScript",
    "Redux Toolkit",
    "SaaS Developer",
    "Noida India",
    "Full Stack Developer",
    "Web Performance",
    "SSR",
    "SSG",
  ],
  authors: [{ name: "Prashant Kumar Madheshiya" }],
  creator: "Prashant Kumar Madheshiya",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prashantmaddheshiya.dev",
    siteName: "Prashant Kumar Madheshiya Portfolio",
    title: "Prashant Kumar Madheshiya | Senior Software Engineer",
    description:
      "Senior Software Engineer with 4+ years building scalable SaaS applications. Expert in React.js, Next.js, TypeScript, and modern frontend architecture.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prashant Kumar Madheshiya - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashant Kumar Madheshiya | Senior Software Engineer",
    description:
      "Senior Software Engineer with 4+ years building scalable SaaS applications. Expert in React.js, Next.js, TypeScript.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-token",
  },
  alternates: {
    canonical: "https://prashantmaddheshiya.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prashant Kumar Madheshiya",
              jobTitle: "Senior Software Engineer",
              description:
                "Senior Software Engineer with 4+ years of experience building scalable SaaS applications",
              url: "https://prashantmaddheshiya.dev",
              email: "prashantmaddheshiya@gmail.com",
              telephone: "+91-8505840560",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Noida",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.linkedin.com/in/prashant-maddheshiya-88900b69/",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Redux Toolkit",
                "REST API",
                "Frontend Architecture",
                "SaaS Development",
              ],
            }),
          }}
        />
      </head>
      <body className="noise-texture scan-line antialiased">{children}</body>
    </html>
  );
}
