import React from 'react';
import '../css/SidebarOptions.css';
function SidebarOptions({ Icon, title, number, selected }) {
  return (
    <div className={`SidebarOptions ${selected && 'SidebarOptions--active'}`}>
      {Icon}
      <h3> {title}</h3>
      <p> {number} </p>
    </div>
  );
}

export default SidebarOptions;
