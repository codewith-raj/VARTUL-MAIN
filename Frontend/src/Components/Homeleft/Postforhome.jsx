import React from 'react'
import Posthelper from './Posthelper/Posthelper'
import { dummyPosts } from '../../assets/Storydummydata'

const Postforhome = () => {
  return (
    <div className="py-6 space-y-8">
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