import { Outlet } from "react-router-dom";
import TopNavbar from "../componets/UI/TopNavBar";

function Layout() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header>
        <TopNavbar />
      </header>
      <main className="containter mb-auto mx-auto max-w-screen-2xl py-1 px-2 lg:px-4 lg:py-2">
        <Outlet />
      </main>
      <footer className="h-15">
        <div className="bg-gray-300 w-full mx-auto max-w-screen-2xl py-1 px-1 lg:px-8 lg:py-4 rounded-xl shadow-md text-center">
          <span>&#169; 2023</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
