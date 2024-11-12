import Button from "@/components/Button";
import SectionBorder from "@/components/sectionBorder";

import SectionContent from "@/components/SectionContent";
import underlineImage from "@/assets/images/underline.svg?url";
import Orbit from "@/components/Orbit";
import Planet from "@/components/Planet";

export const CallToAction = () => {
  return (
    <section className="">
      <div className="container relative">
        <SectionBorder
          className="py-24 lg:py-48 md:py-36 md:px-20 overflow-clip md:overflow-visibl"
          borderTop
        >
          <SectionContent className="isolate p-20">
            <div className="-z-10 absolute inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900),var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="">
              <Orbit size={200} />
              <Orbit size={350} />
              <Orbit size={500} />
              <Orbit size={650} />
              <Orbit size={800} />
            </div>
            <div className="absolute -z-10">
              <Planet
                size="lg"
                className="translate-y-[350px] translate-x-[200px] rotate-45"
              />
            </div>
            <div className="absolute -z-10">
              <Planet
                size="lg"
                className="-translate-y-[100px] translate-x-[200px] -rotate-45"
              />
            </div>
            <div className="absolute -z-10">
              <Planet
                size="lg"
                className="-translate-y-[90px] translate-x-[500px] -rotate-45"
              />
            </div>
            <div className="absolute -z-10">
              <Planet
                size="md"
                className="translate-y-[40px] translate-x-[320px] -rotate-45"
              />
            </div>
            <div className="absolute -z-10">
              <Planet
                size="sm"
                color="teal"
                className="translate-y-[50px] -translate-x-[50px] -rotate-45"
              />
            </div>
            <div className="absolute -z-10">
              <Planet
                size="lg"
                color="fuchsia"
                className="translate-y-[110px] translate-x-[400px] -rotate-45"
              />
            </div>
            <div className="absolute right-0 -z-10">
              <Planet
                size="lg"
                color="teal"
                className="translate-y-[150px] -translate-x-[150px] rotate-95"
              />
            </div>

            <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto  text-center leading-tight">
              Join the AI Revolution with{" "}
              <span className="relative isolate">
                <span className="">Phoenix</span>
                <div
                  className="absolute top-8 md:top-10 lg:top-14 -translate-y-1/2 left-0 w-full h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></div>
              </span>
            </h2>
            <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
              Ready to elevate your business with the power of AI? Phoenix AI
              empowers companies to unlock new levels of efficiency, innovation,
              and growth through cutting-edge artificial intelligence solutions
              tailored to your unique needs. Join us on a journey to transform
              data into actionable insights and discover the future of
              intelligent business. Take the leap with Phoenix AI—where your
              vision meets tomorrow’s technology.
            </p>
            <div className="w-fit mx-auto mt-10 ">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
