import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftSideNavbar from "../components/LeftSideNavbar";
import PagePagination from "../components/Pagination";

export default function RootLayout() {
  return (
    <>
      <div className="">
        <Header />
        <div className="flex justify-center gap-5 m-auto">
          <LeftSideNavbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
