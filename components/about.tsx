"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28 font-poppins font-normal"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey there! <span className="font-bold">I'm Wajeeha Usman</span>, a multitasker by heart and a go-getter by
        choice.
      </p>
      <p className="mb-3">
        My journey into tech started with curiosity and a passion for exploring
        beyond the usual boundaries. While pursuing my degree in <span className="font-bold">Software
        Engineering</span>, I didn’t just stick to academics—I stepped into multiple
        domains, from development and design to management and leadership.
      </p>
      <p className="mb-3">
        Specializing in <span className="font-bold">React, Next.js, and modern web technologies</span>, I love
        building scalable, user-friendly applications. My experience extends
        beyond coding—I’ve also worked as a virtual assistant, a graphics lead,
        and a management head, handling tasks efficiently while optimizing
        workflows. Balancing tech with leadership has shaped me into someone who
        thrives in dynamic environments.
      </p>
      <p className="mb-3">
        For me, it's simple: <span className="font-bold">Follow your passion. Keep learning. Keep evolving.
        No rules, no limits—just a drive to explore, build, and grow.</span>
      </p>
    </motion.section>
  );
}
