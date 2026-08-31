import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Augusto Gabriel | Backend, Python e Automação",
  description:
    "Portfólio de Augusto Gabriel, desenvolvedor júnior focado em Python, backend, APIs, automação e dados.",
  keywords: [
    "Augusto Gabriel",
    "Python",
    "FastAPI",
    "Backend",
    "Automação",
    "PostgreSQL",
    "SQL",
    "Desenvolvedor Júnior",
  ],
  authors: [{ name: "Augusto Gabriel" }],
  creator: "Augusto Gabriel",
  openGraph: {
    title: "Augusto Gabriel | Backend, Python e Automação",
    description:
      "Projetos de backend, automação e dados construídos com foco em problemas reais.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Augusto Gabriel | Backend, Python e Automação",
    description:
      "Projetos de backend, automação e dados construídos com foco em problemas reais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#09090b] font-sans">{children}</body>
    </html>
  );
}
