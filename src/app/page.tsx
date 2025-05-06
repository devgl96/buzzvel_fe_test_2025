"use client";
import Image from "next/image";
import Card from "@/components/Card";
import { LeftArrow } from "@/components/LeftArrow";
import { RightArrow } from "@/components/RightArrow";
import TestimonialSlider from "@/components/TestimonialSlider";
import { RightFullArrow } from "@/components/RightFullArrow";
import { WorldIcon } from "@/components/WorldIcon";
import { EuroSymbol } from "@/components/EuroSymbol";
import { AccessibilitySymbol } from "@/components/AccessibilitySymbol";
import { motion } from "framer-motion";

export default function Home() {
  const paddingDefault = "px-16";

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, duration: 1.3 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="max-h-screen">
      {/* HEADER COMPONENT */}
      <motion.header
        className={`h-24 w-full flex justify-between items-center top-6 ${paddingDefault}`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <ul className="flex items-center gap-12">
            <Image
              src="/logo-colored.svg"
              alt="logo"
              width={100}
              height={100}
            />
            <li className="font-medium">Products</li>
            <li className="font-medium">Solutions</li>
            <li className="font-medium">Pricing</li>
            <li className="font-medium">Resources</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <motion.button
            className="border-none cursor-pointer font-medium"
            variants={buttonVariants}
            whileHover="hover"
          >
            Log In
          </motion.button>
          <motion.button
            className="border-2 p-3 border-slate-700 rounded-lg cursor-pointer font-medium w-[153px] h-12"
            variants={buttonVariants}
            whileHover="hover"
          >
            Sign Up Now
          </motion.button>
        </div>
      </motion.header>
      <main>
        {/* HERO SECTION COMPONENT */}
        <motion.div
          className={`flex justify-between items-center gap-[80px] mt-10 ${paddingDefault}`}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="flex flex-col gap-4 w-xl h-auto">
            <div className="relative inline-block">
              <Image
                src="/vector_title.svg"
                alt="underline vector title"
                width={195}
                height={195}
                className="z-0 absolute top-14 left-1"
              />
              <h1 className="font-extrabold text-7xl z-10 relative">
                Teach students worldwide
              </h1>
            </div>
            <p className="text-2xl font-normal w-[575.4px] tracking-normal leading-[160%]">
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est
              pellentesque turpis ultricies.
            </p>
            <div className="flex gap-8 items-center">
              <motion.button
                className="border-2 border-orange-600 rounded-lg cursor-pointer w-60 h-12 px-6 bg-orange-600 text-white font-bold text-2xl hover:opacity-90"
                variants={buttonVariants}
                whileHover="hover"
              >
                Sign Up Now
              </motion.button>
              <motion.button
                className="flex items-center justify-center gap-3 p-3 rounded-lg cursor-pointer h-16 px-6 py-5 text-blue-600 font-medium text-lg hover:opacity-90"
                variants={buttonVariants}
                whileHover="hover"
              >
                <Image
                  src="/play-circle.svg"
                  alt="play circle icon"
                  width={20}
                  height={20}
                />{" "}
                View Demo
              </motion.button>
            </div>
            <div className="flex gap-12 w-xl mt-20">
              <p className="text-base font-normal w-52 h-11 text-gray-600 leading-[140%] tracking-normal">
                Trusted by
                <br /> leading companies
              </p>
              <motion.div
                className="flex gap-7 justify-evenly items-center w-full"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              >
                <Image
                  src="/company_logo_1.svg"
                  alt="company 1"
                  width={30}
                  height={30}
                />
                <Image
                  src="/company_logo_2.svg"
                  alt="company 2"
                  width={30}
                  height={30}
                />
                <Image
                  src="/company_logo_3.svg"
                  alt="company 3"
                  width={30}
                  height={30}
                />
                <Image
                  src="/company_logo_4.svg"
                  alt="company 4"
                  width={30}
                  height={30}
                />
                <Image
                  src="/company_logo_5.svg"
                  alt="company 5"
                  width={30}
                  height={30}
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            className="flex flex-1"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/hero-image-section.svg"
              alt="hero image section"
              width={100}
              height={100}
              sizes="100vw"
              style={{
                width: "95%",
                height: "auto",
              }}
            />
          </motion.div>
        </motion.div>
        {/* CONTENT SECTION */}
        <motion.div
          className={`flex justify-between items-center gap-[80px] my-40 ${paddingDefault}`}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-1 flex-col gap-4">
            <div className="relative inline-block">
              <Image
                src="/vector_title.svg"
                alt="underline vector title"
                width={245}
                height={215}
                className="z-0 absolute top-11 left-20"
              />
              <h2 className="font-extrabold text-[56px] z-10 leading-[110%] -tracking-normal relative">
                An all-in-one app that makes it easier
              </h2>
            </div>
            <ul className="mt-8">
              <motion.li
                className="text-xl font-normal flex items-center gap-2 leading-[180%] -tracking-tighter h-9"
                variants={listItemVariants}
              >
                <Image
                  src="/check.svg"
                  alt="check icon"
                  width={23}
                  height={23}
                />
                Est et in pharetra magna adipiscing ornare aliquam.
              </motion.li>
              <motion.li
                className="text-xl font-normal flex items-center gap-2 leading-[180%] -tracking-tighter h-9"
                variants={listItemVariants}
              >
                <Image
                  src="/check.svg"
                  alt="check icon"
                  width={23}
                  height={23}
                />
                Tellus arcu sed consequat ac velit ut eu blandit.
              </motion.li>
              <motion.li
                className="text-xl font-normal flex items-center gap-2 leading-[180%] -tracking-tighter h-9"
                variants={listItemVariants}
              >
                <Image
                  src="/check.svg"
                  alt="check icon"
                  width={23}
                  height={23}
                />
                Ullamcorper ornare in et egestas dolor orci.
              </motion.li>
            </ul>
            <motion.button
              className="flex items-center gap-5 p-3 rounded-lg cursor-pointer h-16 px-2 py-4 text-blue-600 font-medium text-lg hover:opacity-90"
              variants={buttonVariants}
              whileHover="hover"
            >
              Find more about the app
              <Image
                src="/arrow-right.svg"
                alt="arrow right blue icon"
                width={14}
                height={14}
              />
            </motion.button>
          </div>
          <div className="flex flex-1 flex-col relative">
            <div className="relative inline-block mt-0">
              <Image
                src="/blob.svg"
                alt="blob vector"
                width={500}
                height={500}
                className="z-0 absolute top-[-200px] right-70"
              />
              <Image
                src="/icons-content.svg"
                alt="icons content vector"
                width={125}
                height={245}
                className="z-1 absolute top-[-250px] -left-30"
              />
              <Image
                src="/desktop.svg"
                alt="desktop vector"
                width={620}
                height={450}
                className="z-2 absolute top-[-235px] -left-2"
              />
            </div>
            <div className="relative inline-block mt-0 z-4">
              <motion.div variants={cardVariants}>
                <Card
                  badge="Featured"
                  title="The map of mathematics"
                  description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                  badgeColor="purple"
                  position="top-16 -left-6"
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card
                  badge="Popular"
                  title="Design for how people think"
                  description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
                  badgeColor="blue"
                  position="top-16 left-52"
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card
                  badge="New"
                  title="International & commercial law"
                  description="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui."
                  badgeColor="green"
                  position="top-16 right-2"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* PEOPLE COMMENTS SECTION */}
        <motion.div
          className={`flex flex-col items-center justify-center gap-10 bg-[#FACC15] h-[480px] max-w-full relative ${paddingDefault} my-3`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <LeftArrow className="absolute top-[45%] bottom-0 left-14 fill-white" />
          <div className="flex items-center justify-center gap-30 w-full px-14">
            <div className="flex flex-col gap-4 flex-[100%]">
              <p className="font-normal text-2xl leading-[160%] -tracking-tighter">
                Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu
                mattis est velit in. Nibh in purus sit convallis phasellus ut.
                At vel erat ultricies commodo. Neque suspendisse a habitasse
                commodo.
              </p>
              <p className="font-normal text-2xl leading-[160%] -tracking-tighter flex flex-col -gap-1">
                Marie Poirot
                <span className="font-bold text-2xl leading-[110%] tracking-tighter">
                  Bigapp
                </span>
              </p>
              <div className="flex items-center gap-2 mt-6">
                <span className="w-8 h-2 rounded-full bg-[#0F172A]" />
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
            <div className="relative inline-block mt-0 w-full">
              <div className="relative flex-1 flex flex-col gap-10">
                <Image
                  src="/background-profile-image.svg"
                  alt="background profile image vector"
                  width={495}
                  height={553}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="z-0 absolute -top-[270px] right-32"
                />
                <Image
                  src="/picture-profile-image.svg"
                  alt="picture profile image vector"
                  width={450}
                  height={415}
                  className="z-1 absolute -top-44 -left-12"
                />
                <Image
                  src="/icons-square.svg"
                  alt="icons square vector"
                  width={125}
                  height={245}
                  className="z-2 absolute top-[95px] -left-6"
                />
                <Image
                  src="/chat-quote.svg"
                  alt="chat quote icon vector"
                  width={42}
                  height={42}
                  className="z-3 absolute -top-[230px] right-[245px]"
                />
              </div>
            </div>
          </div>
          <RightArrow className="absolute top-[45%] bottom-0 right-14 fill-[#0F172A] hover:fill-orange-600" />
        </motion.div>
        {/* INFORMATION SECTION */}
        <motion.div
          className={`flex flex-col items-center justify-center gap-10 h-[600px] max-w-full relative ${paddingDefault} my-10`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-14 w-full px-14">
            <div className="relative w-full">
              <Image
                src="/meet-students-image-section.svg"
                alt="meet students image section vector"
                width={495}
                height={553}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="flex flex-col gap-4 flex-[100%] ">
              <h2 className="font-extrabold text-[56px] leading-[110%] tracking-tighter relative inline-block">
                <Image
                  src="/plane-departure.svg"
                  alt="plane departure icon vector"
                  width={62}
                  height={62}
                  className="z-0 absolute -top-10 right-[210px]"
                />
                Meet international students & teachers
              </h2>
              <p className="font-normal text-lg leading-[180%] -tracking-tighter mt-6 text-gray-900">
                Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
                senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
                facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
                urna, faucibus aenean lorem faucibus integer.
              </p>
              <motion.button
                className="flex items-center gap-5 p-3 rounded-lg cursor-pointer h-16 px-2 py-4 text-blue-600 font-medium text-lg hover:opacity-90"
                variants={buttonVariants}
                whileHover="hover"
              >
                Explore teachers and students
                <Image
                  src="/arrow-right.svg"
                  alt="arrow right blue icon"
                  width={14}
                  height={14}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
        {/* STATISTICS SECTION */}
        <motion.div
          className={`
          flex flex-col items-center justify-center gap-10 h-[373px] max-w-full relative ${paddingDefault} my-10 bg-gray-900`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-around gap-24 w-full px-14">
            <div className="flex flex-col items-center justify-center gap-2 text-[#FACC15]">
              <Image
                src="/heart_icon.svg"
                alt="heart icon vector"
                width={60}
                height={60}
              />

              <h1 className="font-extrabold text-7xl leading-[110%] tracking-tighter relative inline-block">
                195
              </h1>
              <p className="font-normal text-2xl leading-[160%] -tracking-tighter">
                user countries
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-[#FACC15]">
              <Image
                src="/diamond_icon.svg"
                alt="diamond icon vector"
                width={60}
                height={60}
              />

              <h1 className="font-extrabold text-7xl leading-[110%] tracking-tighter relative inline-block">
                1M
              </h1>
              <p className="font-normal text-2xl leading-[160%] -tracking-tighter">
                valued teachers
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-[#FACC15]">
              <Image
                src="/teacher_icon.svg"
                alt="teacher icon vector"
                width={60}
                height={60}
              />

              <h1 className="font-extrabold text-7xl leading-[110%] tracking-tighter relative inline-block">
                17M
              </h1>
              <p className="font-normal text-2xl leading-[160%] -tracking-tighter">
                happy students
              </p>
            </div>
          </div>
        </motion.div>
        {/* TESTIMONIAL SECTION */}
        <motion.div
          className={`flex flex-col items-center justify-center gap-10 h-[600px] max-w-full relative ${paddingDefault} my-3`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <TestimonialSlider />
        </motion.div>
        {/* FEATURES SECTION */}
        <motion.div
          className={`flex justify-between items-center gap-[80px] my-40 ${paddingDefault}`}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-1 flex-col gap-4">
            <div className="relative inline-block">
              <Image
                src="/vector_title.svg"
                alt="underline vector title"
                width={205}
                height={215}
                className="z-0 absolute top-11 right-[152px ]"
              />
              <h2 className="font-extrabold text-[56px] z-10 leading-[110%] -tracking-normal relative">
                All the cool features
              </h2>
            </div>
            <div className="my-12">
              <p className="text-xl font-normal flex items-center gap-2 leading-[180%] -tracking-tighter h-9">
                Mauris consequat, cursus pharetra et, habitasse rhoncus quis
                odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
                pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
                ullamcorper non viverra a, neque orci.
              </p>
            </div>
            <motion.button
              className="flex items-center gap-5 p-3 rounded-lg cursor-pointer h-16 px-2 py-4 text-blue-600 font-medium text-lg hover:opacity-90"
              variants={buttonVariants}
              whileHover="hover"
            >
              View all the features
              <Image
                src="/arrow-right.svg"
                alt="arrow right blue icon"
                width={14}
                height={14}
              />
            </motion.button>
          </div>
          <div className="flex flex-1 flex-col relative -right-16">
            <div className="relative inline-block mt-0">
              <Image
                src="/blob.svg"
                alt="blob vector"
                width={500}
                height={500}
                className="z-0 absolute top-[-240px] right-[270px]"
              />
              <Image
                src="/icons-stars-circles.svg"
                alt="icons stars circles vector"
                width={265}
                height={245}
                className="z-1 absolute -top-72 left-20"
              />
              <Image
                src="/Picture.svg"
                alt="picture vector"
                width={320}
                height={350}
                className="z-2 absolute top-10 -left-28"
              />
              <Image
                src="/Picture-1.svg"
                alt="picture 1 vector"
                width={255}
                height={300}
                className="z-2 absolute top-10 right-52"
              />
              <Image
                src="/Picture-2.svg"
                alt="picture 2 vector"
                width={255}
                height={300}
                className="z-2 absolute -top-40 left-30"
              />
            </div>
            <div className="relative inline-block mt-0 z-4">
              <motion.div variants={cardVariants}>
                <Card
                  badge="Popular"
                  title="Design for how people think"
                  description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
                  badgeColor="blue"
                  position="-top-50 -left-20"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* SIGN UP SECTION */}
        <motion.div
          className={`flex items-center justify-center gap-20 h-[779px] max-w-full bg-yellow-400 relative ${paddingDefault} px-20 py-64`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true, amount: "all" }}
        >
          <Image
            src="/left-card-round.svg"
            alt="left card round vector"
            width={430}
            height={430}
            className="absolute top-24 left-0"
          />

          <div className="flex flex-col items-center justify-center gap-8 w-7xl">
            <h2 className="font-extrabold text-[56px] leading-[110%] -tracking-normal relative">
              Join a world of learning
            </h2>
            <div className="flex flex-col items-center justify-center gap-8">
              <p className="text-xl font-normal leading-[180%] -tracking-tighter h-20 text-gray-900 text-center w-2xl">
                Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                Risus elit et fringilla habitant ut facilisi.
              </p>
              <motion.button
                className="border-2 border-orange-600 rounded-lg cursor-pointer w-60 h-12 px-6 bg-orange-600 text-white font-bold text-2xl hover:opacity-90"
                variants={buttonVariants}
                whileHover="hover"
              >
                Sign Up Now
              </motion.button>
            </div>
          </div>
          <Image
            src="/right-card-round.svg"
            alt="right card round vector"
            width={430}
            height={430}
            className="absolute top-24 right-0"
          />
        </motion.div>
        {/* FORM SECTION */}
        <motion.div
          className="flex items-center justify-center h-[779px] max-w-full relative bg-[#EA580C] p-20 gap-20 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-center gap-8 w-7xl">
            <h2 className="font-extrabold text-[56px] leading-[110%] -tracking-normal relative">
              Ready for your next project?
            </h2>
            <p className="text-[32px] font-extralight leading-[160%] -tracking-tighter h-20">
              Sit elit feugiat turpis sed integer integer accumsan turpis.
            </p>
            <form className="flex flex-col gap-5 w-[550px]">
              <label className="font-medium text-lg leading-[100%]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 rounded-xl bg-white placeholder:text-[#A6A6A6] p-4 placeholder:text-sm placeholder:font-normal"
              />
              <label className="font-medium text-lg leading-[100%]">
                Message
              </label>
              <textarea
                placeholder="What are you say?"
                className="w-full h-20 rounded-xl bg-white placeholder:text-[#A6A6A6] p-4 placeholder:text-sm placeholder:font-normal"
              />
              <div className="w-full flex items-center justify-center mt-3">
                <motion.button
                  className="text-center mx-0 border-2 border-[#0F172A] rounded-lg cursor-pointer w-60 h-12 px-6 bg-[#0F172A] text-white font-bold text-2xl hover:opacity-90"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Request Demo
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </main>
      {/* FOOTER SECTION */}
      {/* <footer className="flex flex-col bg-gray-900"> */}
      <motion.footer
        className={`flex flex-col items-center justify-center gap-20 max-w-full relative ${paddingDefault} bg-gray-900 pt-12`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start justify-between w-full gap-10 text-white">
          <Image
            src="footer-logo.svg"
            alt="footer logo"
            width={160}
            height={40}
          />
          <div className="flex flex-col gap-10">
            <p className="font-medium text-sm leading-[110%]">Product</p>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Pricing
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Overview
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Browse
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Accessibility
            </a>
          </div>
          <div className="flex flex-col gap-10">
            <p className="font-medium text-sm leading-[110%]">Solutions</p>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Brainstorming
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Ideation
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Wireframing
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Research
            </a>
          </div>
          <div className="flex flex-col gap-10">
            <p className="font-medium text-sm leading-[110%]">Resources</p>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Help Center
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Blog
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Tutorials
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              FAQs
            </a>
          </div>
          <div className="flex flex-col gap-10">
            <p className="font-medium text-sm leading-[110%]">Support</p>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Contact Us
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Developers
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Documentation
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Integrations
            </a>
          </div>
          <div className="flex flex-col gap-10">
            <p className="font-medium text-sm leading-[110%]">Company</p>
            <a href="#" className="font-normal text-sm leading-[140%]">
              About
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Press
            </a>
            <a href="#" className="font-normal text-sm leading-[140%]">
              Events
            </a>
            <a
              href="#"
              className="font-normal text-sm leading-[140%] flex items-center gap-2"
            >
              Request Demo <RightFullArrow className="fill-white" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-t-2 border-gray-700 text-white">
          <div className="flex items-center justify-center text-[16px] leading-[140%] font-normal">
            uteach@2025. All rights reserved.
          </div>
          <div className="flex items-center justify-center gap-10 py-10">
            <p className="font-normal text-[16px] leading-[140%]">Terms</p>
            <p className="font-normal text-[16px] leading-[140%]">Privacy</p>
            <p className="font-normal text-[16px] leading-[140%]">Contact</p>
            <p className="font-normal text-[16px] leading-[140%] flex items-center justify-center gap-3">
              <WorldIcon className="fill-white" /> EN
            </p>
            <p className="font-normal text-[16px] leading-[140%] flex items-center justify-center gap-3">
              <EuroSymbol />
              EUR
            </p>
            <p className="font-normal text-[16px] leading-[140%]">
              <AccessibilitySymbol />
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
