import React from 'react'
import "./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
function Feed() {
  return (
    <div className='feed'>

        {/* Header */}
        <div className='feed_header'>
            <span>Home</span>
        </div>

        {/* tweet box */}
        <TweetBox/>

        {/* Posts  */}
        <Post/>
        <Post/>
        <Post/>
    </div>

  )
}

export default Feed