import React from 'react'
import Posthelper from './Posthelper/Posthelper'
import { dummyPosts } from '../../assets/Storydummydata'

const Postforhome = () => {
  return (
    <div className="py-4 sm:py-6 space-y-4 sm:space-y-10 md:space-y-8 px-2 md:ml-40 lg:ml-35 @[640px-768px]:ml-250 sm:px-0">
      {dummyPosts.map((post, index) => (
        <Posthelper 
          key={post.id}
          profile={post.profile}
          username={post.username}
          postImage={post.postImage}
          likes={post.likes}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Postforhome