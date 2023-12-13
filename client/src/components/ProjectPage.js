import React from 'react'
import block from '../assets/block.png'

export default function ProjectPage(props) {
  return (
    <div className="project-container w-screen px-5 md:px-32 lg:px-52">
      <div className="inner h-full py-32">
        <img src={block} alt="" className='h-4 mb-5' />
        <h1 className='mb-10 text-2xl md:text-4xl font-bold'>{props.project.name}</h1>
        <img src={""} alt="" className='rounded-xl  max-h-[500px] mb-10' />
        <h2 className='mb-5 text-xl md:text-2xl'>Overview</h2>
        <p className='mb-5'>Github: <a href="/" className='text-blue-500 hover:text-blue-700'>{`${props.project.name} on GitHub`}</a></p>
        <p className='mb-5'>Link: <a href="" className='text-blue-500 hover:text-blue-700'>Visit Website</a></p>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur sit eaque corrupti, doloribus pariatur illo, officia aut natus, qui velit optio et placeat dolores vitae non? Dolor, minima dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, eveniet quo veniam odio nam quisquam deserunt debitis maxime sit dolore natus! Laboriosam cumque maxime, illum minima perspiciatis nihil suscipit nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et sit magnam nobis impedit. Laudantium reprehenderit architecto dolor repudiandae, sapiente dolorem deserunt ea vel aut dicta voluptatum ullam officia possimus facere?</p>
      </div>
    </div>
  )
}
