"use client";
import React, { useState } from "react";
import AshwinSantiago from "@/assets/images/bryan.jpeg";
import AlecWhitten from "@/assets/images/alec-whitten.jpg";
import ReneWells from "@/assets/images/rene-wells.jpg";
import MollieHall from "@/assets/images/mollie-hall.jpg";
import SectionContent from "@/components/SectionContent";
import SectionBorder from "@/components/sectionBorder";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

export const testimonials = [
  {
    quote:
      "Phoenix has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Bryan Richard",
    title: "Operations Manager",
    image: AshwinSantiago,
  },
  {
    quote:
      "Phoenix integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Alec Whitten",
    title: "Lead Developer",
    image: AlecWhitten,
  },
  {
    quote:
      "Phoenix's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Rene Wells",
    title: "Customer Success Manager",
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Phoenix. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "Mollie Hall",
    title: "Product Designer",
    image: MollieHall,
  },
];

export const Testimonials = () => {
  const [testimonialindex, setTestimonialindex] = useState(0);
  return (
    <section className="" id="testimonials">
      <div className="container">
        <SectionBorder className="py-24 lg:py-48 md:py-36 md:px-20" borderTop>
          <SectionContent className="py-6">
            <LayoutGroup>
              <motion.div
                layout
                className="border-gradient rounded-3xl px-6 md:px-10 py-16 relative flex flex-col md:flex-row gap-12 md:mx-10"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="absolute size-20 left-6 text-violet-400 md:left-10 lg:left-16 top-0 -translate-y-1/2"
                />
                <AnimatePresence mode="wait" initial={false}>
                  {testimonials.map((testimonial, index) =>
                    testimonialindex === index ? (
                      <motion.blockquote
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col lg:flex-row gap-12"
                      >
                        <p className="text-xl md:text-2xl font-medium">
                          {testimonial.quote}
                        </p>
                        <cite className="not-italic lg:text-right">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            height={180}
                            width={180}
                            className="rounded-xl size-38 max-w-none object-center"
                          />
                          <div className="font-bold mt-4">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-2">
                            {testimonial.title}
                          </div>
                        </cite>
                      </motion.blockquote>
                    ) : null
                  )}
                </AnimatePresence>

                <motion.div
                  layout="position"
                  className="flex md:flex-col gap-2"
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      onClick={() => setTestimonialindex(index)}
                      className="isolate size-6 relative inline-flex items-center justify-center"
                    >
                      {testimonialindex === index && (
                        <motion.div
                          className="absolute border-gradient size-full rounded-full -z-10"
                          layoutId="testimonial-dot"
                        ></motion.div>
                      )}

                      <div className="size-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Testimonials;
