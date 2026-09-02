import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
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

export const viewport: Viewport = {
  themeColor: "#08090B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tanuj Kashyap — Software Developer & Systems Engineer",
  description:
    "Software Developer building scalable backend architectures, high-performance web applications, and resilient mobile products for real businesses and clients.",
  keywords: [
    "Software Developer",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Flutter",
    "Full Stack Developer",
    "Tanuj Kashyap",
    "Systems Architecture",
    "Distributed Systems",
  ],
  authors: [{ name: "Tanuj Kashyap" }],
  creator: "Tanuj Kashyap",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanujkashyap.dev",
    title: "Tanuj Kashyap — Software Developer & Systems Engineer",
    description:
      "Software Developer building scalable backend architectures, high-performance web applications, and resilient mobile products.",
    siteName: "Tanuj Kashyap Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanuj Kashyap — Software Developer",
    description:
      "Software Developer building scalable backend architectures, high-performance web applications, and resilient mobile products.",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#08090B] text-[#F4F4F5] antialiased selection:bg-[#00F0FF]/20 selection:text-[#00F0FF] relative font-sans">
        {children}
      </body>
    </html>
  );
}
