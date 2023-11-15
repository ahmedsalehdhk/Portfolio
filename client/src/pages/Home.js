import React from 'react'
import { FaInstagram, FaBehanceSquare, FaGithub, FaHome, FaUser } from "react-icons/fa";
import { motion } from "framer-motion"
import bgVideo from '../assets/background.mp4'

export default function home() {
  return (
    <div className='master-container h-screen w-screen flex justify-center items-center p-4 bg-black/75'>
        <video src={bgVideo} className='absolute object-cover h-screen w-screen -z-10 top-0 left-0 overflow-x-hidden' autoPlay loop muted></video>
        <div className="home h-full w-full rounded-xl flex shadow-xl text-white">
            <div className="info-container w-3/12 min-w-fit border border-neutral-500 rounded-2xl p-16 flex flex-col justify-between">
                <div className="intro-text">
                    <h3 className='text-neutral-400 font-medium'>Designer & Developer</h3>
                    <h1 className='font-light text-4xl'>Saleh Ahmed</h1>
                </div>
                <div className="image-container bg-neutral-900 rounded-2xl h-64 w-full self-center flex justify-center items-center">IMAGE GOES HERE</div>
                <div className="contact-text mb-20 text-center">
                    <h2 className='font-medium text-[1.2rem]'>CS Graduate, NSU</h2>
                    <h2 className='font-medium text-[1.2rem] mb-5'><a href="/">ahmedsalehdhk@gmail.com</a></h2>
                    <h3 className='text-neutral-400 font-medium'>Dhaka, Bangladesh</h3>
                </div>
                <div className="social-links flex justify-evenly">
                    <button className='border border-neutral-400 rounded-full h-16 w-16 hover:bg-black flex justify-center items-center'><FaGithub size={25} /></button>
                    <button className='border border-neutral-400 rounded-full h-16 w-16 hover:bg-black flex justify-center items-center'><FaInstagram size={25} /></button>
                    <button className='border border-neutral-400 rounded-full h-16 w-16 hover:bg-black flex justify-center items-center'><FaBehanceSquare size={25} /></button>
                </div>
                <div className="button-container">
                    <button className='bg-accent border border-neutral-500 rounded-full w-full h-12 text-black font-bold hover:bg-black hover:text-white'>Hire Me</button>
                </div>
            </div>
            <div className="content-container bg-neutral-5000 w-9/12 px-32 py-16 overflow-y-scroll">
                <div className="introduction mb-32">
                    <h3 className='mb-16 border w-fit px-5 py-1 rounded-full uppercase flex justify-center items-center gap-2'><FaHome />Introduce</h3>
                    <h1 className='mb-10 text-6xl font-medium'>Hi. This is <span className='text-accent'>Saleh</span>, <br/>Designer and Developer.</h1>
                    <p className='text-neutral-400'>I design minimal design elements, and I love what I do.<br/> It's simple like that!</p>
                </div>
                <div className="about mb-32">
                    <h3 className='mb-16 border w-fit px-5 py-1 rounded-full uppercase flex justify-center items-center gap-2'><FaUser />About</h3>
                    <h2 className='mb-10 text-4xl'>Every great design begins with<br/> an even <span className='text-accent'>better story</span></h2>
                    <p className='text-neutral-400 w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eligendi vel, quibusdam sit quo culpa voluptates, quisquam at optio libero ducimus distinctio voluptas veritatis modi non nesciunt commodi molestiae! Possimus?</p>
                </div>
                <div className="experience mb-32">
                    <h3 className='mb-16 border w-fit px-5 py-1 rounded-full uppercase flex justify-center items-center gap-2'><FaUser />Background</h3>
                    <h2 className='mb-10 text-4xl'>Education and <span className='text-accent'>Experience</span></h2>

                </div>
            </div>
        </div>
    </div>
  )
}
