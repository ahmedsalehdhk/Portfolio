import React from 'react'

export default function StackCard(props) {
  return (
    <div style={{'--image-url': `url(${props.stack})`}} className="rounded h-20 min-h-[100px] w-48 min-w-[180px] bg-white bg-[image:var(--image-url)]"  id={props.stack}></div>
  )
}
