import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FFF8F2",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tanuj Kashyap — Software Developer",
  description:
    "Software Developer building scalable web and mobile applications using Java, Spring Boot, React, and modern technologies.",
  keywords: [
    "Software Developer",
    "Java",
    "Spring Boot",
    "React",
    "Flutter",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Tanuj Kashyap",
  ],
  authors: [{ name: "Tanuj Kashyap" }],
  creator: "Tanuj Kashyap",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanujkashyap.dev",
    title: "Tanuj Kashyap — Software Developer",
    description:
      "Software Developer building scalable web and mobile applications using Java, Spring Boot, React, and modern technologies.",
    siteName: "Tanuj Kashyap Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanuj Kashyap — Software Developer",
    description:
      "Software Developer building scalable web and mobile applications using Java, Spring Boot, React, and modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFF8F2] text-[#30252E] antialiased selection:bg-[#F3C6C8] selection:text-[#4B263F] relative font-sans">
        {children}
      </body>
    </html>
  );
}
