import { Outlet, useLocation } from "react-router";
import { NextonNav, NextonFooter } from "@/components/Nav";

export default function MainLayout() {
  const { pathname } = useLocation();
  const active = pathname.startsWith("/talent") ? "talent" : "companies";

  return (
    <>
      <NextonNav active={active} />
      <Outlet />
      <NextonFooter />
    </>
  );
}
