import React from 'react'
import { FaInstagram, FaBehanceSquare, FaGithub } from "react-icons/fa";
import bgVideo from '../assets/background.mp4'

export default function home() {
  return (
    <div className='master-container h-screen w-screen flex justify-center items-center p-5 bg-black/70'>
        <video src={bgVideo} className='absolute object-cover h-screen w-screen -z-10 top-0 left-0 overflow-x-hidden' autoPlay loop muted></video>
        <div className="home h-full w-full rounded-xl flex p-6 shadow-xl text-white">
            <div className="info-container w-3/12 border border-neutral-600 rounded-2xl p-16 flex flex-col justify-between">
                <div className="intro-text">
                    <h3 className='text-neutral-600 font-medium'>Designer & Developer</h3>
                    <h1 className='font-light text-4xl'>Saleh Ahmed</h1>
                </div>
                <div className="image-container bg-neutral-600 rounded-2xl h-64 w-full self-center flex justify-center items-center">IMAGE GOES HERE</div>
                <div className="contact-text mb-20 text-center">
                    <h2 className='font-light text-[1.2rem]'>CS Graduate, NSU</h2>
                    <h2 className='font-light text-[1.2rem] mb-5'><a href="/">ahmedsalehdhk@gmail.com</a></h2>
                    <h3 className='text-neutral-600 font-medium'>Dhaka, Bangladesh</h3>
                </div>
                <div className="social-links flex justify-evenly">
                    <button className='border border-neutral-600 rounded-full h-16 w-16 hover:bg-neutral-900 flex justify-center items-center'><FaGithub size={25} /></button>
                    <button className='border border-neutral-600 rounded-full h-16 w-16 hover:bg-neutral-900 flex justify-center items-center'><FaInstagram size={25} /></button>
                    <button className='border border-neutral-600 rounded-full h-16 w-16 hover:bg-neutral-900 flex justify-center items-center'><FaBehanceSquare size={25} /></button>
                </div>
                <div className="button-container">
                    <button className='bg-accent rounded-full w-full h-12 text-black font-bold'>Hire Me</button>
                </div>
            </div>
            <div className="content-container bg-neutral-5000 w-9/12 px-8 py-16 overflow-y-scroll">
                <div className="div h-screen text-6xl">Hi. This is Saleh.</div>
                <div className="div h-screen">2</div>
            </div>
        </div>
    </div>
  )
}
