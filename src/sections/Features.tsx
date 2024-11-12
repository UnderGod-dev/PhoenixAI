"use client";
import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import SectionBorder from "@/components/sectionBorder";
import SectionContent from "@/components/SectionContent";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/components/Logo";
import Image from "next/image";

import { motion } from "framer-motion";

export const features = [
  "Effortless integration",
  "Intelligent automation",
  "Robust security",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return (
    <section className="" id="features">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="py-24 lg:py-48 md:py-36 md:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200 leading-tight">
                  Your AI-Powered collaboration companion
                </h2>
                <ul className="mt-12 flex flex-col gap-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="size-6 text-violet-400"
                      />
                      <span className="text-xl font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className=" mt-16">
                  <Button>Try it now</Button>
                </div>
              </div>
              <div className="flex justify-center flex-shrink-0">
                <div className="relative size-[270px] md:size-[450px] flex flex-shrink-0">
                  <div className="absolute inset-0">
                    <div className="border border-[var(--color-border)] rounded-full size-full"></div>
                  </div>
                  <div className="absolute inset-0">
                    <div className="border border-[var(--color-border)] rounded-full size-[180px] md:size-[300px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
                  </div>
                  <div className="absolute-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
                    <Logo className="size-24" />
                  </div>
                  {logos.map(({ src, alt, rotate }) => (
                    <motion.div
                      className="absolute inset-0"
                      initial={{
                        rotate: rotate,
                      }}
                      // style={{ transform: `rotate(${rotate}deg)` }}
                      key={alt}
                      animate={{
                        rotate: [
                          rotate,
                          rotate + 45,
                          rotate + 45,
                          rotate + 90,
                          rotate + 90,
                          rotate + 135,
                          rotate + 135,
                          rotate + 180,
                          rotate + 180,
                          rotate + 225,
                          rotate + 225,
                          rotate + 270,
                          rotate + 270,
                          rotate + 315,
                          rotate + 315,
                          rotate + 360,
                          rotate + 360,
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 10,
                      }}
                    >
                      <motion.div
                        initial={{
                          translate: "50%, 50%",
                          rotate: -rotate,
                        }}
                        animate={{
                          rotate: [
                            rotate,
                            -rotate - 45,
                            -rotate - 45,
                            -rotate - 90,
                            -rotate - 90,
                            -rotate - 135,
                            -rotate - 135,
                            -rotate - 180,
                            -rotate - 180,
                            -rotate - 225,
                            -rotate - 225,
                            -rotate - 270,
                            -rotate - 270,
                            -rotate - 315,
                            -rotate - 315,
                            -rotate - 360,
                            -rotate - 360,
                          ],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 10,
                        }}
                        className=" inline-flex size-10 md:size-14 items-center justify-center rounded-lg absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-0"
                      >
                        <Image
                          src={src}
                          alt={alt}
                          className="size-6 md:size-9"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Features;
