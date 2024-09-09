import React from "react";
import "./globals.css";

export const metadata = {
  title: "Aodi Saputra",
  description: "Personal project as my portfolio showcase website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
