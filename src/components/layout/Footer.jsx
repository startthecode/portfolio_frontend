import { Icon } from "@iconify/react";
import { AnimatedTextWord } from "../../interface/ui/AnimatedTextWord";
import { motion } from "framer-motion";
// import { Marquee } from "../../animation/Marquee";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { Marquee } from "../../animation/Marquee";
import OverlayTextReveal from "../../animation/OverlayTextReveal";
import { TextReveal_vertical } from "../../animation/TextReveal_vertical";
import { UniversalFadeUp } from "../../animation/UniversalFadeUp";
import { useScreenSize } from "../../hooks/useScreenSize";
import instaIcon from "../../images/instaICON.png";
import linkedinIcon from "../../images/linkedinICON.png";
import gmailIcon from "../../images/gmailICON.webp";
export const Footer = ({ scrollTriggered }) => {
  let [active, setactive] = useState(false);
  let location = useLocation();
  let isLargeDevice = useScreenSize("lg", true);

  useEffect(() => {
    var tl = gsap.timeline({});

    tl.to(".ball", 1.25, {
      y: 0,
      stagger: 0.4,
      ease: "Bounce.easeOut",
      delay: 0,
    }).to(".ball", 2.5, { x: "0", rotate: "-360deg", opacity: 1 }, "-=1.75");
    window.addEventListener("scroll", () => {
      let footerPosition = document
        .querySelector("footer")
        .getBoundingClientRect().top;
      if (footerPosition <= 5) {
        tl.play();
      } else {
        // tl.reverse();
      }
    });
  }, []);

  return (
    <footer className=" ">
      <div className=" bg-color1 h-[100vh] overflow-hidden">
        (
        <div className="flex container relative flex-col items-center h-full justify-center no-scrollbar">
          <div className="flex flex-col items-center  mb-[7vh] max-w-[80rem]">
            <TextReveal_vertical
              text="Conceive wonders, build the extraordinary"
              classes="2xl:text-[8rem] md:text-[6rem] text-[4rem] 2xl:leading-[10rem] md:leading-[7rem] leading-[4.5rem] text-center text-color2 font-light normal-case mr-5"
              justify={isLargeDevice ? "center" : "center"}
              animationStart="top 80%"
              hightlighTextsArray={["extraordinary"]}
            />

            <div className="flex lg:max-w-[250px] max-w-[150px] justify-between w-full mt-[50px] mx-auto">
              <a
                href="https://www.instagram.com/_ashugola_?igsh=eTc5NmpubnAxemgy&utm_source=qr"
                target="_blank"
              >
                <img
                  src={instaIcon}
                  alt=""
                  className="md:h-[4rem] md:w-[4rem] h-[3rem] w-[3rem] object-contai opacity-0 ball translate-y-[-350px] translate-x-[200px]"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/ashish-kumar-gola-85404823a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
              >
                <img
                  src={linkedinIcon}
                  alt=""
                  className="md:h-[4rem] md:w-[4rem] h-[3rem] w-[3rem] object-contai opacity-0 ball translate-y-[-350px] translate-x-[200px]"
                />
              </a>
              <a href="mailto:agfrontenddeveloper@gmail.con" target="_blank">
                <img
                  src={gmailIcon}
                  alt=""
                  className="md:h-[4rem] md:w-[4rem] h-[3rem] w-[3rem] object-contain opacity-0 ball translate-y-[-350px] translate-x-[200px]"
                />
              </a>
            </div>
          </div>

          <UniversalFadeUp
            initialPosition="opacity-0 w-full absolute bottom-[80px] left-0"
            starting="bottom bottom"
          >
            <Marquee>
              <div className="uppercase md:text-[5rem] text-[3rem] tracking-[8px] text-color2 shrink-0">
                <Icon
                  className=" inline-block lg:text-[7rem] text-[5rem] mx-5"
                  icon="arcticons:mail"
                />
                say hi!
                <Icon
                  className=" inline-block lg:text-[5rem] text-[3rem] mx-5"
                  icon="fluent:text-asterisk-20-regular"
                />
                agfrontenddeveloper@gmail.com
              </div>
            </Marquee>
          </UniversalFadeUp>
          <UniversalFadeUp
            initialPosition="border-t-[0.1px] border-white absolute bottom-0 z-2 bg-color1 border-opacity-30 w-full mt-[10px] w-full left-0 mb-[10px] pt-7 pb-8 flex l justify-between"
            starting="top 98%"
          >
            <div className="basis-6/12  relative">
              <p className="text-[16px] text-color2  ">© AP 2010 - 2024.</p>
            </div>
            <div className="basis-6/12 relative">
              <p className="text-[16px] text-color2 text-end gradientText">
                Terms & conditions
              </p>
            </div>
          </UniversalFadeUp>
        </div>
        )
      </div>
    </footer>
  );
};
