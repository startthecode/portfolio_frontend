import { lazy, useEffect, useState, Suspense } from "react";

let HomeHero = lazy(() => import("../components/home/HomeHero"));
const HomeSec2 = lazy(() => import("../components/home/HomeSec2"));
const HomeSec3 = lazy(() => import("../components/home/HomeSec3"));
const HomeSec4 = lazy(() => import("../components/home/HomeSec4"));
// import { HomeHero } from "../components/home/HomeHero";
// import { HomeSec2 } from "../components/home/HomeSec2";
// import { HomeSec3 } from "../components/home/HomeSec3";
// import { HomeSec4 } from "../components/home/HomeSec4";
import PageTransitions from "../animation/PageTransitions";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { initGSAPThemescroll } from "../animation/scrolltrigger";
import { headElements } from "../constant/headElements";
const Home = () => {
  let [scrollTriggered, setScrollTrigger] = useState(false);
  let location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      initGSAPThemescroll(() => {
        setScrollTrigger(Math.random(5) * 50);
      });
    }, 1000);

    return () => {
      initGSAPThemescroll(() => {
        false;
      }, "disable");
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>{headElements.home.title}</title>
        <meta name="description" content={headElements.home.description} />
        <meta property="og:title" content={headElements.home.title} />
        <meta
          property="og:description"
          content={headElements.home.description}
        />
      </Helmet>
      <div className="observers relative h-[100svh] w-full overflow-hidden bg-color1">
        <Suspense fallback={"loading"}>
          <HomeHero />
          <HomeSec2 scrollTriggered={scrollTriggered} />
          <HomeSec3 scrollTriggered={scrollTriggered} />
          <HomeSec4 scrollTriggered={scrollTriggered} />
        </Suspense>
      </div>
    </>
  );
};

export default PageTransitions(Home);
