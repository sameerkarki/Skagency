import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Head from "next/head";

const inter = Poppins({ subsets: ["latin"],weight: '300' });

export const metadata = {
  title: "Sk digital Agency",
  description: "The best web agency in Nepal",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="overflow-x-hidden">
      <Head>
        <link rel="shortcut icon" href="../public/lg.png" type="image/x-icon" />
      </Head>
      <body className={inter.className}><Navbar/> {children} <Footer/> </body>
    </html>
  );
}
