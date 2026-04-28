import { BrowserRouter } from "react-router";
import { NextonNav, NextonFooter } from "@/components/Nav";

export default function App() {
  return (
    <BrowserRouter>
      <NextonNav active="companies" />
      <main style={{ padding: "80px var(--gutter)" }}>
        <h1>Nexton</h1>
      </main>
      <NextonFooter />
    </BrowserRouter>
  );
}
