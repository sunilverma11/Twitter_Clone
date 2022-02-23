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

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarOption active text="Home" Icon={HomeIcon}/>
        <SidebarOption text="Explore" Icon={TagRoundedIcon}/>
        <SidebarOption text="Notifications" Icon={NotificationsNoneRoundedIcon}/>
        <SidebarOption text="Messages" Icon={MailOutlineRoundedIcon}/>
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderRoundedIcon}/>
        <SidebarOption text="Lists" Icon={ArticleOutlinedIcon}/>
        <SidebarOption text="Profile" Icon={PermIdentityOutlinedIcon}/>
        <SidebarOption text="More" Icon={PendingOutlinedIcon}/>
    </div>
  )
}

export default Sidebar