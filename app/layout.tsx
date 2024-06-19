import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeCustomization from "@/app/theme/ThemeCustomization";
import Layout from "@/app/layout/Layout";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bridge Application",
  description: "Simple Bridge Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Providers>
      <AppRouterCacheProvider>
        <ThemeCustomization>
          <Layout>
            {children}
          </Layout>
          <CssBaseline/>
        </ThemeCustomization>
      </AppRouterCacheProvider>
    </Providers>
    </body>
    </html>
  );
}
