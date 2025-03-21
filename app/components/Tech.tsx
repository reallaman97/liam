"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";

const Tech = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-center">
        {technologies.map((tag, index) => (
          <p key={index} className={`text-[25px] ${tag.color}`}>
            # {tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
