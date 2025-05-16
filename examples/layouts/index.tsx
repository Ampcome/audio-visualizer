import React from "react";
// parts
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white overflow-auto">
      <Header />
      <div className="flex-1 w-full -mb-12">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
