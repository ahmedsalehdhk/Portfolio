import React from 'react'
import block from '../assets/block.png'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectPage(props) {
  return (
    <div className="project-container w-screen px-5 md:px-32 lg:px-52">
      <div className="inner h-full py-32">
        <Link to={"/"} className='mb-10 flex items-center underline'><FaArrowLeft className='mr-1' />Back to Home</Link>
        <img src={block} alt="" className='h-4 mb-5' />
        <h1 className='mb-10 text-2xl md:text-4xl font-bold'>{props.project.name}</h1>
        <img src={`${props.project.featuredImage}`} alt="" className='rounded-xl max-h-[500px] mb-10' />
        <h2 className='mb-5 text-xl md:text-2xl font-bold'>Overview</h2>
        { props.project.github !== "" ?  <p className='mb-5 font-bold'>GitHub: <a href={`${props.project.github}`} className='text-blue-500 hover:text-blue-700 hover:underline'>{props.project.name}</a></p> : null}
        { props.project.website !== "" ?  <p className='mb-5 font-bold'>Website: <a href={`${props.project.website}`} className='text-blue-500 hover:text-blue-700 hover:underline'>{props.project.name}</a></p> : null}
        { props.project.description }
      </div>
    </div>
  )
}
