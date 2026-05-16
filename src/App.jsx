import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import Companies from "@/pages/Companies/Companies";
import Talent from "@/pages/Talent/Talent";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Companies />} />
          <Route path="talent" element={<Talent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
