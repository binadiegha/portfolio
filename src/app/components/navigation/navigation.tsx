"use client";
import Link from "next/link";
import React, { useState } from "react";
import Pill from "../pill/pill";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaLocationPin, FaSquareXTwitter } from "react-icons/fa6";
import { Cross as Hamburger } from "hamburger-react";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const email = "jonesbgabriel@gmail.com";
  const location = "United Kingdom";

  function handleMenu() {
    setOpen((prevState) => !prevState);
  }
  return (
    <section className="z-1000 fixed top-0 antialiased w-full left-0 transition-all bg-white/90 backdrop-blur-3xl">
      <div className="max-xl:w-[90%] w-[65%] mx-auto">
        <nav className="flex justify-between items-center h-18 ">
          <div className="max-xl:hidden  text-2xl font-bold">
            Jones B Gabriel
          </div>
          <div className="xl:hidden  text-2xl font-extrabold">B</div>
          <div className="max-xl:hidden flex gap-5 font-extralight">
            <Link className="nav-link" href={"/"}>
              Home
            </Link>
            <Link className="nav-link" href={"/projects"}>
              Projects
            </Link>
            <Link className="nav-link" href={"/"}>
              Resumé
            </Link>
            <Link className="nav-link" href={"/"}>
              Blog
            </Link>
            <Link className="nav-link" href={"/"}>
              Contact
            </Link>
          </div>

          {/* mobile socials, location and email links  */}
          <div className="xl:hidden h-20 flex items-center justify-between z-10000">
            <div className="flex gap-7">
              <Link
                className="flex gap-1 items-center nav-link text-[#0A66C2]"
                href="https://www.linkedin.com/in/jonesbgabriel/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="flex gap-1 items-center nav-link text-[#222222]"
                href="https://x.com/binadiegha"
                target="_blank"
              >
                <FaSquareXTwitter />
              </Link>

              <Link
                className="flex gap-1 items-center nav-link text-[#222222]"
                href="https://github.com/binadiegha"
                target="_blank"
              >
                <FaGithub />
              </Link>

              <Link className="flex gap-1 items-center nav-link" href="">
                <FaLocationPin /> UK
              </Link>

              <Link
                className="flex gap-2 items-center nav-link"
                href=""
                target="_blank"
              >
                <FaEnvelope />
              </Link>
            </div>
          </div>

          <div className="xl:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

          {isOpen && (
            <div className="xl:hidden gap-5 font-extralight absolute bg-[#FBF9FF] top-18 left-0 w-full h-[calc(100svh-72px)] px-[5%] py-5 z-10000">
              <Link className="nav-link block mb-10 text-xl" href={"/"}>
                Home
              </Link>
              <Link className="nav-link block mb-10 text-xl" href={"/projects"}>
                Projects
              </Link>
              <Link className="nav-link block mb-10 text-xl" href={"/"}>
                Resume
              </Link>
              <Link className="nav-link block mb-10 text-xl" href={"/"}>
                Blog
              </Link>
              <Link className="nav-link block mb-10 text-xl" href={"/"}>
                Contact
              </Link>
            </div>
          )}
          {/* end of mobile adaptation of social and mobile links  */}
        </nav>

        <div className="max-xl:hidden h-20 flex items-center justify-between">
          <div className=" flex gap-2">
            <Pill
              accent="#0A66C2"
              link="https://www.linkedin.com/in/jonesbgabriel/"
              isBlank
            >
              <FaLinkedin /> / jonesbgabriel
            </Pill>

            <Pill accent="#222222" link="https://x.com/binadiegha" isBlank>
              <FaSquareXTwitter /> / Binadiegha
            </Pill>

            <Pill accent="#222222" link="https://github.com/binadiegha" isBlank>
              <FaGithub /> / Binadiegha
            </Pill>
          </div>

          <div className="flex gap-5">
            <Link className="flex gap-2 items-center nav-link" href="">
              <FaLocationPin /> {location}
            </Link>

            <Link
              className="flex gap-2 items-center nav-link"
              href=""
              target="_blank"
            >
              <FaEnvelope /> {email}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
