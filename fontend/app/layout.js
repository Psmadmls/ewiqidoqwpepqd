"use client"; // Mark this as a Client Component

import "./globals.css";
import Navbar from "@/pecket/Navbar";
import { Provider } from "react-redux";
import store from "@/pecket/store"; // Corrected import and variable name

// If you're using custom fonts, make sure to import them
// Example:
// import { geistSans, geistMono } from '@/app/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}> {/* Corrected prop name to "store" */}
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}