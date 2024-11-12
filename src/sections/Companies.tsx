"use client";
import AcmeCorpLogo from "../assets/images/acme-corp-logo.svg";
import EchoValleyLogo from "../assets/images/echo-valley-logo.svg";
import QuantumLogo from "../assets/images/quantum-logo.svg";
import PulseLogo from "../assets/images/pulse-logo.svg";
import OutsideLogo from "../assets/images/outside-logo.svg";
import CelestialLogo from "../assets/images/celestial-logo.svg";
import SectionBorder from "@/components/sectionBorder";
import SectionContent from "@/components/SectionContent";
import { motion } from "framer-motion";

export const companies = [
  {
    name: "Acme Corp",
    logo: AcmeCorpLogo,
  },
  {
    name: "Echo Valley",
    logo: EchoValleyLogo,
  },
  {
    name: "Quantum",
    logo: QuantumLogo,
  },
  {
    name: "Pulse",
    logo: PulseLogo,
  },
  {
    name: "Outside",
    logo: OutsideLogo,
  },
  {
    name: "Celestial",
    logo: CelestialLogo,
  },
];

export const Companies = () => {
  return (
    <section className="">
      <div className="container">
        <SectionBorder>
          <SectionContent className="pb-24 lg:pb-48 md:pb-36">
            <h2 className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">
              Empowering the new generation of developers
            </h2>
            <div className="flex mt-20 -mx-4 overflow-x-clip lg:-mx-8">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
                className="flex gap-12 md:gap-36 flex-none px-6 md:px-18"
                style={{
                  x: "-25%",
                }}
              >
                {[...companies, ...companies].map(
                  ({ logo: Logo }, arrIndex) => (
                    <div className="" key={arrIndex}>
                      <Logo className="h-8" />
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Companies;