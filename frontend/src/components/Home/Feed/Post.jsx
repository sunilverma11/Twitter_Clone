import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Post({displayName, userName, verified, text, image, avatar}) {
  return (
    <div className='post'>
        <div className="post_avatar">
            <Avatar src="https://imgk.timesnownews.com/story/Virat_Kohli_T20_PTI.jpg?tr=w-400,h-300,fo-auto" sx={{ width: 50, height: 50 }}/>
        </div>
        <div className="post_body">
            <div className="post_header">

                <div className="post_headerNames">
                    jayesh k
                </div>
                <div className="post_options">
                    <MoreHorizIcon/>
                </div>
  
            </div>
            <div className="post_description">
                <p>This is a construct week project we are building with a team of 5 members. Tech stacks we are gonna use for this are ReactJs, NodeJs, MaterialUi, Firebase.This is a construct week project we are building with a team of 5 members. Tech stacks we are gonna use for this are ReactJs, NodeJs, MaterialUi, Firebase.</p>
            </div>
            <div className="post_image">
                <img src="https://www.surfertoday.com/images/stories/sunrisesunsettime.jpg" alt="" />
            </div>
            <div className="post_actions">
                <div><i class='bx bx-message-rounded'></i> <span>500</span></div>
                <div><i class='bx bx-repost'></i> <span>500</span></div>
                <div><i class='bx bx-heart'></i> <span>500</span></div>
                <div><i class='bx bx-upload'></i> <span>500</span></div>
            </div>
            
        </div>
    </div>
  )
}

export default Post