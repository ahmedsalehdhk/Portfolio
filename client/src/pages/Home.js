import React, { useRef } from 'react'
import { easeInOut, motion } from "framer-motion"
import { FaInstagram, FaBehanceSquare, FaGithub, FaHome, FaUser, FaBookOpen, FaPencilRuler, FaEnvelope } from "react-icons/fa";
import bgVideo from '../assets/background.mp4'

export default function Home() {
    
    //scrolling to contact view on hire me button click
    const contactRef = useRef()
    const executeScroll = () => contactRef.current.scrollIntoView({ block: 'end',  behavior: 'smooth' });

  return (
    <div className='master-container h-screen w-screen flex justify-center items-center p-4 bg-black/75'>
        <video src={bgVideo} className='absolute object-cover h-screen w-screen -z-10 top-0 left-0 overflow-x-hidden' autoPlay loop muted></video>
        <div className="home h-full w-full rounded-xl flex shadow-xl text-white">
            <motion.div className="info-container w-3/12 min-w-fit border border-neutral-500 rounded-2xl p-16 hidden lg:flex flex-col justify-between" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ease: easeInOut, duration: 0.5}} >
                <div className="intro-text">
                    <h3 className='text-neutral-400 font-medium'>Designer & Engineer</h3>
                    <h1 className='font-light text-4xl'>Saleh Ahmed</h1>
                </div>
                <div className="image-container bg-neutral-900 rounded-2xl h-64 w-full self-center flex justify-center items-center"></div>
                <div className="contact-text mb-20 text-center">
                    <h2 className='font-medium text-[1.2rem]'>CS Graduate, NSU</h2>
                    <h2 className='font-medium text-[1.2rem] mb-5'><a href="/">ahmedsalehdhk@gmail.com</a></h2>
                    <h3 className='text-neutral-400 font-medium'>Dhaka, Bangladesh</h3>
                </div>
                <div className="social-links flex justify-evenly">
                    <a href='https://github.com/ahmedsalehdhk' className='border border-neutral-400 rounded-full h-16 w-16 hover:bg-black flex justify-center items-center'><FaGithub size={25} /></a>
                    <a href='https://www.instagram.com/ahmedsalehdhk2023' className='border border-neutral-400 rounded-full h-16 w-16 hover:bg-black flex justify-center items-center'><FaInstagram size={25} /></a>
                    <a href='https://www.behance.net/ahmedsalehdhk' className='border border-neutral-400 rounded-full h-16 w-16 hover:bg-black flex justify-center items-center'><FaBehanceSquare size={25} /></a>
                </div>
                <div className="button-container">
                    <motion.button onClick={executeScroll} whileHover={{scaleY: 1.2}} whileTap={{scale: 0.9}} className='bg-accent border border-neutral-500 rounded-full w-full h-12 text-black font-bold '>Hire Me</motion.button>
                </div>
            </motion.div>
            <div className="content-container w-full lg:w-9/12 px-2 lg:px-32 py-16 overflow-y-scroll">
                <motion.div className="introduction mb-32" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ease: easeInOut, duration: 0.8, delay: 1}} viewport={{ once: true }}>
                    <h3 className='mb-16 border w-fit px-5 py-1 rounded-full uppercase flex justify-center items-center gap-2'><FaHome />Introduction</h3>
                    <h1 className='mb-10 text-4xl md:text-6xl font-medium'>Hi. This is <span className='text-accent'>Saleh</span>, <br/>Software Engineer and Designer.</h1>
                    <p className='text-neutral-400'>I design and build minimal, beautiful software.<br/>It's simple and I love it!</p>
                </motion.div>
                <motion.div className="about mb-32" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ease: easeInOut, duration: 0.8, delay: 1.2}} viewport={{ once: true }}>
                    <h3 className='mb-16 border w-fit px-5 py-1 rounded-full uppercase flex justify-center items-center gap-2'><FaUser />About</h3>
                    <h2 className='mb-10 text-2xl md:text-4xl'>Every great design begins with<br/> an even <span className='text-accent'>better story</span></h2>
                    <p className='text-neutral-400 w-full md:w-3/4 mb-5 text-justify'>My creative journey echoes the wonder of discovering storytelling through my sketchbooks as a child. Today, each project is a canvas to recreate that magic, infusing every pixel with purpose. Join me in this exciting landscape, where code and design elements converge, contributing to stories waiting to unfold.</p>
                    <p className='mb-5 border-b w-fit'>What I Do</p>
                    <ul className='flex gap-8 flex-wrap text-neutral-400'>
                        <li>Software Engineering</li>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>UI/UX</li>
                        <li>Framer Animations</li>
                    </ul>
                </motion.div>
                <motion.div className="experience mb-32" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                    <h3 className='mb-16 border w-fit px-5 py-1 rounded-full uppercase flex justify-center items-center gap-2'><FaBookOpen />Background</h3>
                    <h2 className='mb-10 text-4xl'>Education and <span className='text-accent'>Experience</span></h2>
                    <ul className='flex flex-col gap-8'>
                        <li>Executive - Alliance Properties Ltd.<br/><span className='text-accent'>2023 - Present</span></li>
                        <li>Bachelors Degree on Computer Science & Technology<br/><span>North South University</span><br/><span className='text-neutral-400'>2018 - 2023</span></li>
                        <li>Web Developer Intern - LIFE<br/><span className='text-neutral-400'>2021 - 2022</span></li>
                        <li>Graphic Design Intern - IndusVedic<br/><span className='text-neutral-400'>2019 - 2020</span></li>
                    </ul>
                </motion.div>
                <motion.div className="projects mb-32" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                    <h3 className='mb-16 border w-fit px-5 py-1 rounded-full uppercase flex justify-center items-center gap-2'><FaPencilRuler />Portfolio</h3>
                    <h2 className='mb-10 text-4xl'><span className='text-accent'>Featured</span> Projects</h2>
                    <div className="projects-container flex flex-col gap-8">
                        <motion.div className="project-1" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                            <div className="display-image h-64 w-full lg:w-3/4 rounded-xl bg-black mb-3 flex flex-col lg:flex-row justify-start items-end flex-wrap gap-3 p-5">
                                <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>Tensorflow.js</p>
                                <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>YOLOV4</p>
                                <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium whitespace-nowrap'>Android Studio</p>
                            </div>
                            <h3>Project Drishti</h3>
                            <p className='text-neutral-400'>App for the visually impaired</p>
                        </motion.div>
                        <motion.div className="project-2" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                            <div className="display-image h-64 w-full min-w-fit lg:w-3/4 rounded-xl bg-black mb-3 flex flex-col md:flex-row  justify-start items-end gap-3 p-5">
                                <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>Figma</p>
                                <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>MERN</p>
                            </div>
                            <h3>TeamFlow</h3>
                            <p className='text-neutral-400'>Team managemnt software</p>
                        </motion.div>
                        <motion.div className="project-3" initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                            <div className="display-image h-64 w-full min-w-fit lg:w-3/4 rounded-xl bg-black mb-3 flex flex-col md:flex-row  justify-start items-end gap-3 p-5">
                                <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>Figma</p>
                                <p className='border h-fit w-fit px-3 py-1 rounded-full bg-white text-black font-medium'>React</p>
                            </div>
                            <h3>Proteron Digital</h3>
                            <p className='text-neutral-400'>Tech Startup Website</p>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div className="stacks mb-32"  initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                    <h3 className='mb-16 border w-fit px-5 py-1 rounded-full uppercase flex justify-center items-center gap-2'><FaPencilRuler />My Skills</h3>
                    <h2 className='mb-10 text-4xl'>Technology <span className='text-accent'>Stacks</span></h2>
                    <div className="tech-stacks flex justify-start items-start flex-wrap gap-3 w-full md:w-3/4">
                        <div className="stack-1 rounded h-20 w-48 bg-white" id='figma'></div>
                        <div className="stack-1 rounded h-20 w-48 bg-white" id='mongoDB'></div>
                        <div className="stack-1 rounded h-20 w-48 bg-white" id='express'></div>
                        <div className="stack-1 rounded h-20 w-48 bg-white" id='react'></div>
                        <div className="stack-1 rounded h-20 w-48 bg-white" id='nodeJS'></div>
                        <div className="stack-1 rounded h-20 w-48 bg-white" id='framer'></div>
                    </div>
                </motion.div>
                <motion.div className="contact mb-16" id='contact' ref={contactRef}  initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}  transition={{ease: easeInOut, duration: 0.8}} viewport={{ once: true }}>
                    <h3 className='mb-16 border w-fit px-5 py-1 rounded-full uppercase flex justify-center items-center gap-2'><FaPencilRuler />Contact</h3>
                    <h2 className='mb-10 text-4xl'>Get In <span className='text-accent'>Touch</span></h2>
                    <p className='w-full md:w-3/4 inline-block'><motion.span inline-block initial={{y:0}} whileHover={{y: 200}}>Dont hesitate</motion.span> to get in touch. Lets talk about all your bright ideas, we can bring to life. Together. </p>
                    <p className='w-full md:w-3/4 mb-12'>You can reach out to me at:</p>
                    <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='flex justify-center items-center gap-3 w-fit border rounded-full p-5 hover:bg-green-500 hover:text-black hover:border-green-500 duration-300' href="mailto:ahmedsalehdhk@gmail.com"><FaEnvelope />ahmedsalehdhk@gmail.com</motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
