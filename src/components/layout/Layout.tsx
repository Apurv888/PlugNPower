import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageLoader } from "./PageLoader";
import { FloatingScrollButton } from "./FloatingScrollButton";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <PageLoader />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingScrollButton />
    </div>
  );
}
