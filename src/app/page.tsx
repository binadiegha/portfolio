"use client";

import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import Tag from "./components/tag/tag";
import { PROJECTS, SKILLS, TProject } from "./data";
import Pill from "./components/pill/pill";
import { GoArrowRight } from "react-icons/go";
import Project from "./components/project/project";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error: Typing error from package
import "swiper/css";
import { useState } from "react";
import ClientPortal from "./ClientPortal/clientPortal";
import ProjectModal from "./components/modal/projectModal";

export default function Home() {
  const [currentProject, setCurrentProject] = useState<TProject | null>(null);
  const [modalActive, setModalActive] = useState(false);

  const handleProjectChange = (proj: TProject) => {
    setCurrentProject(proj);
    setModalActive(true);
  };

  function handleCloseModal() {
    setCurrentProject(null);
    setModalActive(false);
  }

  return (
    <main className="w-full justify-center leading-loose">
      <div className="mt-20">
        <div className="max-md:w-full w-4/5">
          <h1 className="items-center justify-center font-bold text-2xl leading-18">
            Hi, The B is for Binadiegha !
          </h1>

          <h1 className="items-center justify-center font-bold text-xl">
            Software Engineer
          </h1>
          <p>
            A highly motivated, goal-oriented individual with a strong passion
            for continuous learning. As an autodidact, I believe that with the
            right dedication, any skill can be mastered. I am also a software
            engineer with growing expertise in artificial intelligence and
            machine learning, and I am eager to make a meaningful impact in the
            autonomous vehicles industry and the broader field of machine
            learning.
          </p>
        </div>

        <Link
          href="https://github.com/binadiegha"
          className="flex items-center gap-2 my-5"
        >
          <IoIosLink /> <span className="link">github.com/binadiegha</span>
        </Link>

        <section className="my-10 max-md:w-full w-4/5">
          <h3 className="text-2xl font-bold ">Skills</h3>
          <div className="py-3 flex flex-wrap gap-5">
            {SKILLS.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </section>

        {/* projects section */}
        <section className="w-full">
          {/* <div className="flex justify-between w-full gap-5"> */}
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            className="w-full"
          >
            {PROJECTS.slice(0, 4).map((project) => (
              <SwiperSlide key={project.id}>
                <Project
                  isWrapped
                  project={project}
                  handleClick={() => handleProjectChange(project)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* </div> */}
          <Pill accent="#7C3AED" link="/projects">
            Projects <GoArrowRight />
          </Pill>

          {modalActive && (
            <ClientPortal>
              <ProjectModal
                project={currentProject}
                handleClick={handleCloseModal}
              />
            </ClientPortal>
          )}
        </section>
      </div>
    </main>
  );
}
