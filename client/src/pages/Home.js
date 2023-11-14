import React from 'react'

export default function home() {
  return (
    <div className='master-container h-screen w-screen bg-black flex justify-center items-center p-5'>
        <div className="home h-full w-full bg-primary rounded-xl flex p-6">
            <div className="info-container w-3/12 border border-neutral-600 text-white rounded-2xl p-16 flex flex-col justify-between">
                <div className="intro-text">
                    <h3 className='text-neutral-600 font-medium'>Designer & Developer</h3>
                    <h1 className='font-bold text-4xl'>Saleh Ahmed</h1>
                </div>
                <div className="image-container bg-neutral-600 rounded-2xl h-64 w-full self-center flex justify-center items-center">IMAGE GOES HERE</div>
                <div className="contact-text mb-20 text-center">
                    <h2 className='text-[1.2rem]'>CS Graduate, NSU</h2>
                    <h2 className='text-[1.2rem] mb-5'><a href="/">ahmedsalehdhk@gmail.com</a></h2>
                    <h3 className='text-neutral-600'>Dhaka, Bangladesh</h3>
                </div>
                <div className="social-links flex justify-evenly">
                    <button className='border border-neutral-600 rounded-full h-16 w-16 hover:bg-neutral-900'>1</button>
                    <button className='border border-neutral-600 rounded-full h-16 w-16 hover:bg-neutral-900'>1</button>
                    <button className='border border-neutral-600 rounded-full h-16 w-16 hover:bg-neutral-900'>1</button>
                </div>
                <div className="button-container">
                    <button className='bg-accent rounded-full w-full h-12 text-black font-bold'>Hire Me</button>
                </div>
            </div>
            <div className="content-container bg-neutral-5000 w-9/12 px-8 py-16 overflow-y-scroll">
                <div className="div h-screen"></div>
                <div className="div h-screen"></div>
            </div>
        </div>
    </div>
  )
}
