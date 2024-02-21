import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { useEffect, useRef, useState } from "react";
import { Routes, useLocation, Route, Navigate } from "react-router-dom";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";
import siteIconDark from "../images/logo-black-small.png";
export const AppLayout = () => {
  let ref = useRef();
  let location = useLocation();
  let [isDark, setIsDark] = useState(false);

  useEffect(() => {
    function update(time) {
      ref.current?.lenis?.raf(time * 1000);
      ScrollTrigger.update();
    }
    // ref.current?.resize();
    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, [location]);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // User prefers dark mode
      setIsDark(true);
    } else {
      // User prefers light mode
      setIsDark(false);
    }
  }, []);

  return (
    <>
      <ReactLenis
        ref={ref}
        autoRaf={false}
        root
        options={{
          autoResize: true,
          duration: 1.8,
        }}
      />
      <Helmet>
        {!isDark && <link rel="icon" type="image/png" href={siteIconDark} />}
      </Helmet>
      <Header />
      <main className="relative bg-color1">
        <Outlet />
      </main>
      <Footer scrollTriggered={true} />
    </>
  );
};
