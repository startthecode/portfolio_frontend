import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useScreenSize } from "../../hooks/useScreenSize";
import { TextReveal_vertical } from "../../animation/TextReveal_vertical";
import instaIcon from "../../images/instaICON.png";
import linkedinIcon from "../../images/linkedinICON.png";
import gmailIcon from "../../images/gmailICON.webp";
import gsap from "gsap/gsap-core";
export const Navigation = ({ show, hideNav }) => {
  useEffect(() => {
    let tl = gsap.timeline();

    if (show) {
      tl.to(".navTransition", {
        width: "100%",
        duration: 1,
        ease: "power1.inOut",
      })
        .to(".navTransition", {
          scaleX: 0,
          duration: 1,
          background: "#1e1e1e",
          transformOrigin: "left",
          ease: "power1.inOut",
        })
        .to(".navList", {
          stagger: 0.2,
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
    } else {
      tl.to(".navTransition", {
        scaleX: 1,
        duration: 1.5,
        background: "#000",
        transformOrigin: "left",
        ease: "power1.inOut",
      }).to(".navTransition", {
        width: "0",
        ease: "power1.inOut",
      });
    }
  }, [show]);

  return (
    <>
      <nav
        className={`mainNav overflow-hidden delay-1000 ${
          show ? "left-0" : "left-[100%] duration-[1.3s]"
        }`}
      >
        <ul className="md:flex_v_center hidden">
          <li className="overflow-hidden">
            <Link to={"/"} className="navLink">
              Home
            </Link>
          </li>
          <li className="overflow-hidden">
            <Link to={"/about"} className="navLink">
              About
            </Link>
          </li>
          <li className="overflow-hidden">
            <Link to={"/work"} className="navLink">
              Work
            </Link>
          </li>
          {/* <li className="overflow-hidden">
            <Link className="navLink"> Learn</Link>
          </li> */}
          <li className="overflow-hidden">
            <Link to={"/blog"} className="navLink">
              Blog
            </Link>
          </li>
        </ul>

        <ul className="sm:hidden block navUl">
          <li
            className="overflow-hidden translate-y-10 opacity-0 navList"
            onClick={() => hideNav()}
          >
            <Link to={"/"} className="navLink">
              Home
            </Link>
          </li>
          <li
            className="overflow-hidden translate-y-10 opacity-0 navList"
            onClick={() => hideNav()}
          >
            <Link to={"/about"} className="navLink">
              About
            </Link>
          </li>
          <li
            className="overflow-hidden translate-y-10 opacity-0 navList"
            onClick={() => hideNav()}
          >
            <Link to={"/work"} className="navLink">
              Work
            </Link>
          </li>
          {/* <li className="overflow-hidden" onClick={()=>hideNav()}>
            <Link className="navLink"> Learn</Link>
          </li> */}
          <li
            className="overflow-hidden translate-y-10 opacity-0 navList"
            onClick={() => hideNav()}
          >
            <Link to={"/blog"} className="navLink">
              Blog
            </Link>
          </li>
        </ul>

        <div className="md:hidden block px-[3rem] mt-10">
          <a href="mailto:agfrontenddeveloper@gmail.com" className="text-[1.6rem] mb-4 text-color2 font-light tracking-wide navList translate-y-10 opacity-0 ">
            agfrontenddeveloper@gmail.com
          </a>
          <a href="tel:9650173941" className="text-[1.6rem] mb-4 text-color2 font-light tracking-wide navList translate-y-10 opacity-0">
            +91 9650173941
          </a>

          <div className="flex justify-start items-centeroverflow-hidden mt-10 navList translate-y-10 opacity-0">
            <img
              src={instaIcon}
              alt=""
              className="md:h-[4rem] md:w-[4rem] h-[3rem] w-[3rem] mr-4 object-contain"
            />
            <img
              src={linkedinIcon}
              alt=""
              className="md:h-[4rem] md:w-[4rem] h-[3rem] w-[3rem] mr-4 object-contain"
            />
            <img
              src={gmailIcon}
              alt=""
              className="md:h-[4rem] md:w-[4rem] h-[3rem] w-[3rem] mr-4 object-contain"
            />
          </div>
        </div>

        <div className="bg-black h-screen w-0 fixed top-0 right-0 navTransition z-[100]"></div>
      </nav>
    </>
  );
};
