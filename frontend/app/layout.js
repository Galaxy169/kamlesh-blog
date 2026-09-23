import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { client, urlFor } from "@/lib/sanity/client";
import { siteSettingsQuery } from "@/lib/sanity/queries";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const revalidate = 0;

export async function generateMetadata() {
  const settings = await client.fetch(siteSettingsQuery);

  const title = settings?.siteName || "Tax & Financial Compliance Services";
  const description = settings?.siteDescription || "Professional tax filing, accounting, and financial compliance services for businesses and individuals.";

  const metadata = {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: description,
    keywords: ["Tax Filing", "GST Services", "Income Tax", "Business Registration", "Accounting", "Bookkeeping"],
    openGraph: {
      title: title,
      description: description,
      type: "website",
      locale: "en_US",
      siteName: title,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
    },
    robots: {
      index: true,
      follow: true,
    }
  };

  if (settings?.favicon) {
    metadata.icons = {
      icon: urlFor(settings.favicon).url()
    };
  }

  return metadata;
}

export default async function RootLayout({ children }) {
  const settings = await client.fetch(siteSettingsQuery);

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar data={settings} />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
