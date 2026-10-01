import { Lato, Afacad_Flux } from "next/font/google";
import localFont from "next/font/local";
import "@/public/sass/header/header.css"
import MainTemplate from "@/components/(frontendcomponents)/templates/MainTemplate";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const afacad = Afacad_Flux({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-afacad",
});

const palmaton = localFont({
  src: "../public/font/Palmaton.woff2",
  display: "swap",
  variable: "--font-palmaton",
});

export const metadata = {
  title: "RG's Pleiades",
  description: "The 7 Star Living",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${afacad.variable} ${palmaton.variable}`}
    >
      <body><MainTemplate>{children}</MainTemplate></body>
    </html>
  );
} 