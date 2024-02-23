import { Routes, useLocation, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { AppLayout } from "../interface/AppLayout";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Work = lazy(() => import("../pages/Work"));
const Contact = lazy(() => import("../pages/Contact"));
const Learn = lazy(() => import("../pages/Learn"));
const Blog = lazy(() => import("../pages/Blog"));
import { AnimatePresence } from "framer-motion";

export const AllRoutes = () => {
  let location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location?.pathname}>
        <Route
          element={
            <ProtectedRoutes>
              <Suspense>
                <AppLayout />
              </Suspense>
            </ProtectedRoutes>
          }
        >
          {/* <Route index element={<Navigate replace to={"home"} />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
