"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const EmailSection = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [btn, setBtn] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtn(false);
    console.log(subject);

    try {
      await axios.post("https://farrukhhussain.vercel.app/api/send", {
        subject,
        email,
        message,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 mt-4  py-8 md:mt-20 md:py-20 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-50 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 mb-4 md:mb-0">
          <Link
            className="hover:text-red-950"
            href="https://www.linkedin.com/in/farrukh-hussain-1b8164259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="text-3xl lg:text-5xl text-white hover:text-[#ADB7BE]" />
          </Link>

          <Link
            className="hover:text-red-950"
            href="https://github.com/FarrukhHussainx"
            target="_blank"
          >
            <GitHubIcon className="text-3xl lg:text-5xl text-white hover:text-[#ADB7BE]" />
          </Link>
          <Link
            className="hover:text-red-950"
            href="mailto:farrukhhussainofficial@gmail.com"
          >
            <EmailIcon className="text-3xl lg:text-5xl text-white hover:text-[#ADB7BE]" />
          </Link>
          <Link
            className="hover:text-red-950"
            href="https://wa.me/3085165899"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="text-3xl lg:text-5xl text-white hover:text-[#ADB7BE]" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="farrukhhussainofficial@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
