import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOptions'
import HomeIcon from '@mui/icons-material/Home';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon/>
        <ul>
            <li><SidebarOption active text="Home" Icon={HomeIcon}/></li>
            <li><SidebarOption text="Explore" Icon={TagRoundedIcon}/></li>
            <li><SidebarOption text="Notifications" Icon={NotificationsNoneRoundedIcon}/></li>
            <li><SidebarOption text="Messages" Icon={MailOutlineRoundedIcon}/></li>
            <li> <SidebarOption text="Bookmarks" Icon={BookmarkBorderRoundedIcon}/></li>
            <li><SidebarOption text="Lists" Icon={ArticleOutlinedIcon}/></li>
            <li><SidebarOption text="Profile" Icon={PermIdentityOutlinedIcon}/></li>
            <li><SidebarOption text="More" Icon={PendingOutlinedIcon}/></li>
        </ul>
        
        
        
        
       
        
        
        
    </div>
  )
}

export default Sidebar