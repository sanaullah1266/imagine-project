import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({ subsets: ["latin"],
weight : ['100','200','300','400','500','600','700'],
variable: '--font-ibm-plex-sans',

 });

export const metadata: Metadata = {
  title: "Imagnifiy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={
      {
        variables:{
          colorPrimary:'#624cf5'
        }
      }
    }
    >
    <html lang="en">
      <body className={cn('font-IBMPlex antialiased',IBMPlex.variable)}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
