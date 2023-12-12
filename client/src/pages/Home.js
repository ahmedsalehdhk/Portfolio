import React, { useState, useEffect, useRef } from 'react'
import { easeInOut, motion } from "framer-motion"
import { FaInstagram, FaBehanceSquare, FaGithub, FaEnvelope } from "react-icons/fa";
import bgVideo from '../assets/background.mp4';
import block from '../assets/block.png'
import { variants } from '../animations/animation';

export default function Home() {
    
    // scrolling to contact view on hire me button click
    const contactRef = useRef()
    const executeScroll = () => contactRef.current.scrollIntoView({ block: 'end',  behavior: 'smooth' });

    // changing titles function
    const titles = ["software engineer.", "web designer.", "web developer.", "app developer."];
    const [index, setIndex] = useState(0);
    const ChangingTitles = () => {
        // const [index, setIndex] = useState(0);
        useEffect(() => {
            const interval = setInterval(() => {
              setIndex(index + 1);
              if(index===3){
                setIndex(0)
              }
            }, 2000);
            return () => clearInterval(interval);
          });
      return titles[index]
    };

    // tech stacks carousel
    const [width, setWidth] = useState(0);
    const carousel = useRef(null);

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

  return (
    <div className='master-container h-screen w-screen flex justify-center items-center p-4 bg-black/75'>
        <video src={bgVideo} className='fixed object-cover h-screen w-screen -z-10 top-0 left-0 overflow-x-hidden' autoPlay playsinline loop muted></video>
        <div className="home h-full w-full rounded-xl flex shadow-xl text-white">
            {/* INFO */}
            <motion.div className="info-container w-3/12 min-w-fit h-full min-h-fit border border-neutral-500 rounded-2xl p-16 hidden lg:flex flex-col justify-between gap-5 overflow-y-hidden" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ease: easeInOut, duration: 0.5}} >
                
                <div className="intro-text mb-5">
                    <h3 className='text-neutral-400 font-medium'>Designer & Engineer</h3>
                    <h1 className='font-light text-4xl'>Saleh Ahmed</h1>
                </div>
                <div className='profile flex flex-col'>
                    <div className="image-container bg-neutral-900 rounded-full h-32 w-32 min-h-[200px] min-w-[200px] self-center flex justify-center items-center bg-cover bg-center mb-5"></div>
                    <div className="contact-text mb-20 text-center">
                        <h2 className='font-medium text-[1.2rem]'>CSE, NSU</h2>
                        <h2 className='font-medium text-[1.2rem] mb-5'>ahmedsalehdhk@gmail.com</h2>
                        <h3 className='text-neutral-400 font-medium'>Dhaka, Bangladesh</h3>
                    </div>
                </div>
                <div className='socials'>
                    <div className="social-links flex justify-center gap-5 mb-5">
                        <a href='https://github.com/ahmedsalehdhk' className='border border-neutral-400 rounded-full h-16 w-16 hover:bg-black flex justify-center items-center'><FaGithub size={25} /></a>
                        <a href='https://www.instagram.com/ahmedsalehdhk2023' className='border border-neutral-400 rounded-full h-16 w-16 hover:bg-black flex justify-center items-center'><FaInstagram size={25} /></a>
                        <a href='https://www.behance.net/ahmedsalehdhk' className='border border-neutral-400 rounded-full h-16 w-16 hover:bg-black flex justify-center items-center'><FaBehanceSquare size={25} /></a>
                    </div>
                    <div className="button-container">
                        <motion.button onClick={executeScroll} whileTap={{scale: 0.9}} className='bg-accent border border-neutral-500 rounded-full w-full h-12 text-black font-bold '>Hire Me</motion.button>
                    </div>
                </div>
            </motion.div>
            {/* CONTENT */}
            <div className="content-container w-full lg:w-9/12 px-2 lg:px-32 py-16 overflow-y-scroll">
                <motion.div className="introduction mb-32" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ease: easeInOut, duration: 0.8, delay: 1}} viewport={{ once: true }}>
                    <img src={block} alt="" className='h-4 mb-2' />
                    <h3 className='mb-16 w-fit uppercase whitespace-nowrap'>Introduction</h3>
                    <h1 className='mb-10 text-4xl md:text-6xl font-medium'>Hi. This is <span className='text-accent'>Saleh</span>,<br/><motion.div className='capitalize whitespace-nowrap text-2xl sm:text-4xl md:text-5xl lg:text-6xl' key={index} variants={variants} initial="hide" animate={'show'}>{ChangingTitles()}</motion.div></h1>
                    <p className='text-neutral-400'>I design and build minimal, beautiful software.<br/>It's simple and I love it!</p>
                </motion.div>
                <motion.div className="about mb-32" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ease: easeInOut, duration: 0.8, delay: 1.2}} viewport={{ once: true }}>
                    <img src={block} alt="" className='h-4 mb-2' />
                    <h3 className='mb-16 w-fit uppercase whitespace-nowrap'>About</h3>
                    <h2 className='mb-10 text-2xl md:text-4xl'>Every great design begins with<br/> an even <span className='text-accent'>better story</span></h2>
                    <p className='text-neutral-400 w-full md:w-3/4 mb-5 md:text-justify'>My creative journey echoes the wonder of discovering storytelling through my sketchbooks as a child. Today, each project is a canvas to recreate that magic, infusing every pixel with purpose. Join me in this exciting landscape, where code and design elements converge, contributing to stories waiting to unfold.</p>
                    <p className='mb-5 border-b w-fit'>What I Do</p>
                    <ul className='flex gap-8 flex-wrap text-neutral-400'>
                        <li>Software Development</li>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>App Development</li>
                        <li>UI/UX</li>
                    </ul>
                </motion.div>
                <motion.div className="experience mb-32" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                    <img src={block} alt="" className='h-4 mb-2' />
                    <h3 className='mb-16 w-fit uppercase whitespace-nowrap'>Background</h3>                    <h2 className='mb-10 text-4xl'>Education and <span className='text-accent'>Experience</span></h2>
                    <ul className='flex flex-col gap-8'>
                        <li>Executive - Alliance Properties Ltd.<br/><span className='text-accent'>2023 - Present</span></li>
                        <li>Bachelors Degree on Computer Science & Technology<br/><span>North South University</span><br/><span className='text-neutral-400'>2018 - 2023</span></li>
                        <li>Web Developer Intern - LIFE<br/><span className='text-neutral-400'>2021 - 2022</span></li>
                        <li>Graphic Design Intern - IndusVedic<br/><span className='text-neutral-400'>2019 - 2020</span></li>
                    </ul>
                </motion.div>
                <motion.div className="projects mb-32" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                    <img src={block} alt="" className='h-4 mb-2' />
                    <h3 className='mb-16 w-fit uppercase whitespace-nowrap'>Portfolio</h3>                    <h2 className='mb-10 text-4xl'><span className='text-accent'>Featured</span> Projects</h2>
                    <div className="projects-container flex flex-col gap-8">
                        <motion.div className="project-1" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                            <div className='h-64 w-full lg:w-3/4 rounded-xl overflow-hidden mb-3 relative'>
                                <div className="overlay h-full w-full absolute top-0 left-0 bg-transparent hover:bg-black/25 cursor-pointer"></div>
                                <div className="display-image h-full w-full flex flex-col lg:flex-row justify-start items-end flex-wrap gap-3 p-5 bg-cover bg-center" id='projectDrishti'>
                                    <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>Tensorflow.js</p>
                                    <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>YOLOV4</p>
                                    <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium whitespace-nowrap'>Android Studio</p>
                                </div>
                            </div>
                            <h3>Project Drishti</h3>
                            <p className='text-neutral-400'>App for the visually impaired</p>
                        </motion.div>
                        <motion.div className="project-2" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                            <div className='h-64 w-full lg:w-3/4 rounded-xl overflow-hidden mb-3 relative'>
                                <div className="overlay h-full w-full absolute top-0 left-0 bg-transparent hover:bg-black/25 cursor-pointer"></div>
                                <div className="display-image h-full w-full flex flex-col lg:flex-row justify-start items-end flex-wrap gap-3 p-5 bg-cover bg-top" id='proteronDigital'>
                                    <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>Figma</p>
                                    <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>React</p>
                                </div>
                            </div>
                            <h3>Proteron Digital</h3>
                            <p className='text-neutral-400'>Software startup website</p>
                        </motion.div>
                        <motion.div className="project-3" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                            <div className='h-64 w-full lg:w-3/4 rounded-xl overflow-hidden mb-3 relative'>
                                <div className="overlay h-full w-full absolute top-0 left-0 bg-transparent hover:bg-black/25 cursor-pointer"></div>
                                <div className="display-image h-full w-full flex flex-col lg:flex-row justify-start items-end flex-wrap gap-3 p-5 bg-cover bg-center" id='teamflow'>
                                    <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>Figma</p>
                                    <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>MERN</p>
                                </div>
                            </div>
                            <h3>TeamFlow</h3>
                            <p className='text-neutral-400'>Team managemnt software</p>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div className="stacks mb-32"  initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                    <img src={block} alt="" className='h-4 mb-2' />
                    <h3 className='mb-16 w-fit uppercase whitespace-nowrap'>My Skills</h3>                    <h2 className='mb-10 text-4xl'>Technology <span className='text-accent'>Stacks</span></h2>
                    <motion.div ref={carousel} className='outer-carousel cursor-grab outline-none w-full md:w-3/4 overflow-hidden' whileTap={{ cursor: "grabbing" }}>
                        <motion.div className="tech-stacks inner-carousel inline-flex gap-3" drag="x" dragConstraints={carousel}>
                            <div className="stack-1 rounded h-20 min-h-[100px] w-48 min-w-[180px] bg-white" id='figma'></div>
                            <div className="stack-2 rounded h-20 min-h-[100px] w-48 min-w-[180px] bg-white" id='illustrator'></div>
                            <div className="stack-3 rounded h-20 min-h-[100px] w-48 min-w-[180px] bg-white" id='mongoDB'></div>
                            <div className="stack-4 rounded h-20 min-h-[100px] w-48 min-w-[180px] bg-white" id='express'></div>
                            <div className="stack-5 rounded h-20 min-h-[100px] w-48 min-w-[180px] bg-white" id='react'></div>
                            <div className="stack-6 rounded h-20 min-h-[100px] w-48 min-w-[180px] bg-white" id='nodeJS'></div>
                            <div className="stack-7 rounded h-20 min-h-[100px] w-48 min-w-[180px] bg-white" id='reactnative'></div>
                            <div className="stack-8 rounded h-20 min-h-[100px] w-48 min-w-[180px] bg-white" id='tailwindcss'></div>
                            <div className="stack-9 rounded h-20 min-h-[100px] w-48 min-w-[180px] bg-white" id='framer'></div>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="contact mb-16" id='contact' ref={contactRef}  initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                    <img src={block} alt="" className='h-4 mb-2' />
                    <h3 className='mb-16 w-fit uppercase whitespace-nowrap'>Contact</h3>                    <h2 className='mb-10 text-4xl'>Get In <span className='text-accent'>Touch</span></h2>
                    <p className='w-full md:w-3/4 inline-block'>Say Hello. Lets talk over coffee, perhaps?</p>
                    <p className='w-full md:w-3/4 mb-12'>You can reach out to me at:</p>
                    <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='flex justify-center items-center gap-2 md:gap-3 w-fit border rounded-full px-3 md:px-5 p-5 hover:bg-green-500 hover:text-black hover:border-green-500 duration-300' href="mailto:ahmedsalehdhk@gmail.com"><FaEnvelope />ahmedsalehdhk@gmail.com</motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
