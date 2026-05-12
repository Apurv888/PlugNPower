import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { ComingSoon } from "./pages/ComingSoon";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ComingSoon />} />
        <Route path="testimonials" element={<ComingSoon />} />
        <Route path="about" element={<ComingSoon />} />
        <Route path="contact" element={<ComingSoon />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}
