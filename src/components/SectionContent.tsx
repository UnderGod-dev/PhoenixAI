import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const SectionContent = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...otherProps } = props;
  //   spreading props directly overrides every other props, so destucture classname to not override that
  return (
    <div
      className={twMerge("container overflow-hidden", className)}
      {...otherProps}
    />
  );
};

export default SectionContent;
