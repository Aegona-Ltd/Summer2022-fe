import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/redux/provider";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import ClientOnly from "@/components/ClientOnly";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer/Index";
import { MainLayout } from "@/layouts/MainLayout";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora iste dolorum molestias ut quam laboriosam cupiditate ipsum suscipit voluptas dolor porro animi odio sed temporibus esse modi, officia debitis unde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className} suppressHydrationWarning>
        <ToastContainer
          autoClose={3000}
          closeOnClick
          draggable
          hideProgressBar
          newestOnTop={false}
          pauseOnFocusLoss
          pauseOnHover
          position="top-right"
          rtl={false}
        />
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
