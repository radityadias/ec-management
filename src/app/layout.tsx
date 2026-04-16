import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {AppSidebar} from "@/components/app-sidebar";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "English Cafe Portal",
  description: "Managing English Cafe Human Resources",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable)}
    >
      <body className="min-h-full">
        <SidebarProvider>
          <AppSidebar className="bg-background"/>
          <main>
            <SidebarTrigger/>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
