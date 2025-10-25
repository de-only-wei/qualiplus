import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qualiplus - Clean Solutions at Your Core",
  description: "Because every breath deserves to be protected",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
