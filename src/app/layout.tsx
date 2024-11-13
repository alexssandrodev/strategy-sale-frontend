
import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Strategy Sale",
  description: "Gerenciamento de compra e venda de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className=''>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

