import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftSideNavbar from "../components/LeftSideNavbar";

export default function RootLayout() {
  return (
    <>
      <div className=" pb-10">
        <Header />
        <div className="flex justify-center m-auto">
          <LeftSideNavbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
