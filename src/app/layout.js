import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Climate Mapper",
  description: "Interactive climate mapping game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactQueryProvider>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
          <Footer />
          <Toaster
            position="top-center"
            containerStyle={{ bottom: "10%" }}
            toastOptions={{
              style: {
                borderRadius: "5px",
                //   background: "#333",
                //   color: "#fff",
                padding: "16px 24px",
              },
            }}
          />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
