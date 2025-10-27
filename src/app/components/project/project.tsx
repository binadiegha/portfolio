import React from "react";
import Image from "next/image";
import { TProject } from "@/app/data";

const Project = ({
  isWrapped,
  project,
  handleClick,
}: {
  isWrapped?: boolean;
  project: TProject;
  handleClick: () => void;
}) => {
  return (
    <div
      className={`my-10 cursor-pointer relative ${
        !isWrapped ? "w-full md:w-[calc(33.33%-16.15px)]" : "w-full"
      }`}
      onClick={handleClick}
    >
      <div className={`overflow-clip rounded-t-2xl h-[300px] relative`}>
        <Image
          alt="project"
          src={`/images/${project.image}`}
          fill={true}
          placeholder="blur"
          blurDataURL="/images/image_blue.jpg"
        />
        <div className=" bg-linear-to-b absolute w-full h-full from-black/2 via-black/5 to-black/40 from bottom-0"></div>
      </div>
      <h3 className=" font-bold text-xl mt-5">{project.title}</h3>
      <p>{project.sub_title}</p>
    </div>
  );
};

export default Project;
