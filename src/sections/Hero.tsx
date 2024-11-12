"use client";
import robotImg from "@/assets/images/robot.jpg";
import underLineImage from "@/assets/images/underline.svg?url";
import LoaderImg from "@/assets/images/loader-animated.svg";
import Button from "@/components/Button";
import Image from "next/image";
import Orbit from "@/components/Orbit";
import Planet from "@/components/Planet";
import SectionBorder from "@/components/sectionBorder";
import SectionContent from "@/components/SectionContent";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const useMousePosition = () => {
  const [innerWidth, setinnerWidth] = useState(1);
  const [innerHeight, setinnerHeight] = useState(1);

  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);

  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);

  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);

  useMotionValueEvent(clientY, "change", (latest) => {
    console.log("clientY", latest);
  });
  useEffect(() => {
    setinnerHeight(window.innerHeight);
    setinnerWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setinnerHeight(window.innerHeight);
      setinnerWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    });
  }, []);
  return { xProgress, yProgress };
};

export const Hero = () => {
  const { xProgress, yProgress } = useMousePosition();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end start", "start end"],
  });
  const transformY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const transformedLargeX = useTransform(springX, [0, 1], ["-25%", "25%"]);

  const transformedLargeY = useTransform(yProgress, [0, 1], ["-25%", "25%"]);
  const transformedMediumX = useTransform(springX, [0, 1], ["-50%", "50%"]);
  const transformedMediumY = useTransform(springY, [0, 1], ["-25%", "25%"]);
  // const transformedSmallX = useTransform(springX, [0, 1], ["-50%", "50%"]);
  // const transformedSmallY = useTransform(springY, [0, 1], ["-75%", "75%"]);
  return (
    <section className="" ref={sectionRef}>
      <div className="container">
        <SectionBorder>
          <SectionContent className="py-24 lg:py-48 md:py-36 relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900),var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="overflow-clip">
              <Orbit size={200} />
              <Orbit size={400} />
              <Orbit size={600} />
              <Orbit size={800} />
              <Orbit size={1000} />
            </div>

            <h1 className="text-4xl font-semibold text-gray-100 text-center leading-tight md:text-5xl lg:text-6xl">
              Empowering Your Business with AI-Driven Insights {""}
              <span className="relative">
                <span>Phoenix</span>
                <span
                  className="absolute h-4 w-full left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400,var(--color-violet-400)))]"
                  style={{
                    maskImage: `url(${underLineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-center text-lg mt-8 md:text-xl max-w-3xl mx-auto">
              At Phoenix.io, we specialize in advanced AI solutions designed to
              transform your business processes, enhance decision-making, and
              drive growth. With a commitment to precision, innovation, and
              reliability, we bring the power of artificial intelligence to your
              fingertips, enabling you to stay ahead in a dynamic digital
              landscape.
            </p>

            <div className="flex justify-center">
              <Button variant="secondary" className="w-fit mt-10">
                Start chatting
              </Button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <motion.div
                  style={{
                    x: transformedLargeX,
                    y: transformedLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="-translate-y-[76px] -translate-x-[230px]"
                  />
                </motion.div>
                <motion.div
                  style={{
                    x: transformedLargeX,
                    y: transformedLargeY,
                  }}
                >
                  <Planet
                    size="lg"
                    color="violet"
                    className="-translate-y-[180px] translate-x-[250px] rotate-[-90deg]"
                  />
                </motion.div>

                <motion.div
                  style={{
                    x: transformedMediumX,
                    y: transformedMediumY,
                  }}
                >
                  <Planet
                    size="sm"
                    color="fuchsia"
                    className="-translate-y-[210px] -translate-x-[350px] rotate-135"
                  />
                </motion.div>

                <motion.div
                  style={{
                    x: transformedMediumX,
                    y: transformedMediumY,
                  }}
                >
                  <Planet
                    size="sm"
                    color="teal"
                    className="-translate-y-[270px] translate-x-[400px] -rotate-135"
                  />
                </motion.div>
              </div>
              <div className="hidden lg:block">
                <div className="absolute top-[30%] -translate-x-10 left-0 z-10">
                  <motion.div
                    className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                    style={{
                      y: transformY,
                    }}
                  >
                    <div className="">
                      Hey <strong>Phoenix AI</strong> can you set me up with a
                      dialer and CRM
                    </div>
                    <div className="text-right text-gray-400 text-sm font-semibold">
                      1min ago
                    </div>
                  </motion.div>
                </div>
                <div className="absolute top-[50%] translate-x-10 right-0 z-10">
                  <motion.div
                    className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                    style={{
                      y: transformY,
                    }}
                  >
                    <div className="">
                      <strong>Phoenix AI:</strong> Yes I can do that for you
                      Agent Bryan, but we need to get our website running first!
                    </div>
                    <div className="text-right text-gray-400 text-sm font-semibold">
                      Just now
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="relative mt-20 rounded-2xl text-xl border-gradient border-2 overflow-hidden">
                <Image src={robotImg} alt="Robot Image" />
                <div className="absolute bottom-2 md:bottom-4 lg:bottom-10  left-1/2 -translate-x-1/2 w-full px-8">
                  <div className="bg-gray-950/80 p-4 rounded-2xl flex items-center gap-4 w-full md:w-1/2 mx-auto">
                    <div className="text-violet-400">
                      <LoaderImg />
                    </div>
                    <div className="text-xl font-semibold text-gray-100">
                      Phoenix AI is generating{" "}
                      <span className="animate-cursor-blink">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
