import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pet Town — Pet Shop e Clínica Veterinária em Casa Forte | Recife - PE",
  description:
    "Banho e tosa profissional, clínica veterinária acolhedora e pet shop completo no coração de Casa Forte, Recife. Quem cuida com amor do seu pet.",
  keywords: [
    "pet shop recife",
    "clínica veterinária casa forte",
    "banho e tosa casa forte",
    "pet town recife",
    "veterinário recife",
    "vacina cão e gato recife",
  ],
  authors: [{ name: "Pet Town" }],
  openGraph: {
    title: "Pet Town — Pet Shop e Clínica Veterinária em Casa Forte",
    description:
      "Tudo o que seu melhor amigo precisa: banho e tosa, consultas veterinárias, medicamentos e carinho de sobra.",
    url: "https://pettown.com.br",
    siteName: "Pet Town",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased selection:bg-[#F26430]/20 selection:text-[#F26430]">
        {children}
      </body>
    </html>
  );
}
