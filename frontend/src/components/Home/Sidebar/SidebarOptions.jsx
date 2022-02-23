import React from 'react'
import "./SidebarOptions.css"

function SidebarOption({active, text, Icon}) {
  return (
    <div className= {`sidebarOption ${active && 'sidebarOption--active'}`} >

        <Icon></Icon>
        <span>{text}</span>
    </div>
  )
}

export default SidebarOption