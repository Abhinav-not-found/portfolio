import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/general/container";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700","800",'900'],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Abhinav - A MERN stack Developer",
  description: "Full-stack MERN developer focused on building scalable, performant web applications with modern JavaScript technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
