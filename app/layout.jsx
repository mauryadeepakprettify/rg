import { Lato, Afacad_Flux } from "next/font/google";
import localFont from "next/font/local";
import "@/public/sass/header/header.css"
import MainTemplate from "@/components/frontendcomponents/templates/MainTemplate";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const afacad = Afacad_Flux({
  subsets: ["latin"],
  variable: "--font-afacad-flux",
});

const palmaton = localFont({
  src: "../public/font/Palmaton.woff2",
  display: "swap",
  variable: "--font-palmaton",
});

const telegraph = localFont({
  src: "../public/font/TelegrafBold.woff2",
  display: "swap",
  variable: "--font-telegraf",
});

export const metadata = {
  title: "RG's Pleiades",
  description: "The 7 Star Living",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${afacad.variable} ${palmaton.variable} ${telegraph.variable}`}
    >
      <body><MainTemplate>{children}</MainTemplate></body>
    </html>
  );
} 
