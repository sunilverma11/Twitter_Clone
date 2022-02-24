import React from 'react'
import "./TweetBox.css"
import Avatar from '@mui/material/Avatar';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Button from '@mui/material/Button';

function TweetBox() {
  return (
    <div className='tweetBox'>
        <div className='tweet_input'>
            <Avatar src="https://imgk.timesnownews.com/story/Virat_Kohli_T20_PTI.jpg?tr=w-400,h-300,fo-auto" sx={{ width: 50, height: 50 }}/>
            <input placeholder="What's happening?"/>
        </div>
        <div className='tweetOptions'>
            <div className='tweetAttachment'>
                <i class='bx bx-image-alt'></i>
                <GifBoxOutlinedIcon/>
                <i class='bx bx-poll'></i>
                <i class='bx bx-smile'></i>
                <i class='bx bx-calendar'></i>
                <LocationOnOutlinedIcon/>
            </div>
            <div className='tweetButton'>
                <Button variant="contained">Tweet</Button>
            </div>
        </div>
        
    </div>
  )
}

export default TweetBox