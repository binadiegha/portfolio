"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { TProject } from "../../data";
import Image from "next/image";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { LuGlobe } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import Tag from "../tag/tag";
import Link from "next/link";
import Color from "color-thief-react";
import { RxExternalLink } from "react-icons/rx";

const ProjectModal = ({
  project,
  handleClick,
}: {
  project: TProject | null;
  handleClick: () => void;
}) => {
  const src = `/images/${project?.image}`;
  return (
    <>
      <section className="w-full bg-black/2 h-svh fixed top-0 right-0 p-5 backdrop-blur-2xl backdrop-brightness-50 z-10000">
        <div className="  w-full h-full" onClick={handleClick}></div>
        {project && (
          <div className="max-md:w-full w-[550px] bg-white h-svh absolute bottom-0 max-md:bottom-0 right-0 backdrop-blur-2xl backdrop-brightness-50">
            <div className="w-full relative min-h-svh h-svh overflow-scroll p-5 ">
              <div className=" flex justify-between items-center h-15 border-b border-[#33415540] mb-5">
                <HiArrowSmallLeft
                  className="text-2xl cursor-pointer"
                  onClick={handleClick}
                />
                <p className=" font-bold cursor-pointer">
                  Projects / {project.title}
                </p>
              </div>

              <h3 className=" font-black text-xl leading-loose mt-5">
                {project.title}
              </h3>

              <p className=" font-extralight font-[#334155] mb-5">
                {project.sub_title}
              </p>

              <div className="w-full md-max:h-[300px] h-[350px] rounded-2xl overflow-hidden relative">
                <Image
                  alt="project"
                  src={`/images/${project.image}`}
                  fill={true}
                  placeholder="blur"
                  blurDataURL="/images/image_blue.jpg"
                />
                <div className=" bg-linear-to-b absolute w-full h-full from-black/5 via-black/10 to-black/40 from bottom-0"></div>
              </div>

              <h3 className=" font-black text-xl leading-loose mt-5">About</h3>
              <p className=" font-extralight font-[#334155]">{project.about}</p>

              <h3 className=" font-black text-xl leading-loose mt-5">
                Technologies / Tools
              </h3>
              <div className="flex flex-wrap gap-2 capitalize">
                {project.technologies.map((tech, index) => (
                  <Tag key={index}>{tech as ReactNode}</Tag>
                ))}
              </div>

              {/* Roles */}
              <h3 className=" font-black text-xl leading-loose mt-5">Roles</h3>
              <div className="flex flex-wrap gap-2 capitalize">
                {project.roles.map((tech, index) => (
                  <Tag key={index}>{tech as ReactNode}</Tag>
                ))}
              </div>

              <div className="pb-30">
                {/* website */}
                <h3 className=" font-black text-xl leading-loose mt-5 flex items-center gap-2">
                  <LuGlobe /> Website
                </h3>
                <Link
                  href={project.link}
                  target="_blank"
                  className=" font-[#334155] font-bold hover:underline"
                >
                  {project.link}
                </Link>

                {/* github link */}
                {project?.github && (
                  <div className="">
                    <h3 className=" font-black text-xl leading-loose mt-5 flex items-center gap-2">
                      <FaGithub /> Git Repo
                    </h3>
                    <Link
                      href={project.github}
                      target="_blank"
                      className=" font-[#334155] font-bold  hover:underline"
                    >
                      {project.github}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <Color src={src} format="rgbString">
              {({ data }: { data: string }) => {
                const vals = data?.slice(4, -1).split(",");
                let fallbackColor = "#334155";
                if (data) {
                  const bness =
                    (Number(vals[0]) * 299 +
                      Number(vals[1]) * 587 +
                      Number(vals[2]) * 114) /
                    1000;

                  fallbackColor = bness > 240 ? "#334155" : data;
                  console.log(vals);
                }

                return (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="w-full bg-gray-700 h-20 fixed left-0 bottom-0 bg-liner-to-r from-black/60 to-black/5 text-white items-center justify-center flex font-semibold gap-5"
                    style={{ background: fallbackColor }}
                  >
                    View Project <RxExternalLink />
                  </Link>
                );
              }}
            </Color>
          </div>
        )}
      </section>
    </>
  );
};

export default ProjectModal;
