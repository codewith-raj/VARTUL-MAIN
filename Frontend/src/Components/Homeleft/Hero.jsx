import React from 'react'
import Story from './Story'
import { dummyStories } from '../../assets/Storydummydata'

const Hero = () => {
  return (
    <div className="h-40 w-[45rem] ml-40 mt-6 overflow-x-auto">
      <div className="flex gap-8 flex-nowrap">
        {dummyStories.map((story, index) => (
          <Story key={index} image={story.image} username={story.username} />
        ))}
      </div>
    </div>
  )
}

export default Hero
