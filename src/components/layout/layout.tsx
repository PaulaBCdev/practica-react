import type { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
