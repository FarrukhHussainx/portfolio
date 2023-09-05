"use client";
import { Home } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

const NavBar = () => {
  //ts  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="fixed right-0 top-36 z-10 h-72 w-10  items-center justify-center  rounded-l-md bg-[#18191E]   overflow-hidden hidden md:flex">
        <div className="flex flex-col w-[100%] items-center justify-around gap-12 text-gray-500">
          <Link href="#home" onClick={handleScroll}>
            <HomeOutlinedIcon className="hover:text-white" />
          </Link>
          <Link href="#about" onClick={handleScroll}>
            <PersonOutlinedIcon className="hover:text-white" />
          </Link>
          <Link href="#project" onClick={handleScroll}>
            <AssignmentOutlinedIcon className="hover:text-white" />
          </Link>
          <Link href="#contact" onClick={handleScroll}>
            <ChatOutlinedIcon className="hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="fixed  bottom-0 z-10 h-10 w-full flex items-center justify-center  rounded-t-md bg-[#18191E]   overflow-hidden md:hidden">
        <div className="flex w-[100%] items-center justify-center gap-20 mb-2 text-gray-500">
          <Link href="#home" onClick={handleScroll}>
            <HomeOutlinedIcon className="hover:text-white p-[2px]" />
          </Link>
          <Link href="#about" onClick={handleScroll}>
            <PersonOutlinedIcon className="hover:text-white p-[2px]" />
          </Link>
          <Link href="#project" onClick={handleScroll}>
            <AssignmentOutlinedIcon className="hover:text-white p-[2px]" />
          </Link>
          <Link href="#contact" onClick={handleScroll}>
            <ChatOutlinedIcon className="hover:text-white p-[2px]" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
