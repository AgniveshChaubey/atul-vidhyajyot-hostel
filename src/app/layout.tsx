import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import NavigationBar from "./components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atul Vidhyajyot Hostel",
  description:
    "A hostel that provide free accomodation in Vallabh Vidyanagar, Anand, Gujarat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Anton&family=Climate+Crisis&family=Pacifico&family=Russo+One&display=swap')
        </style>
      </head>
      <body className={inter.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
