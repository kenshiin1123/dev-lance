import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Analytics } from "@vercel/analytics/react";
export default function Layout() {
  return (
    <>
      {/* <NavigationBar /> */}
      <Analytics />
      <Outlet />
    </>
  );
}
