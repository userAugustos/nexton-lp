import { BrowserRouter } from "react-router";
import { NextonNav, NextonFooter } from "@/components/Nav";
import Companies from "@/pages/Companies/Companies";

export default function App() {
  return (
    <BrowserRouter>
      <NextonNav active="companies" />
      <Companies />
      <NextonFooter />
    </BrowserRouter>
  );
}
