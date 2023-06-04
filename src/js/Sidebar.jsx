import React from 'react';
import '../css/Sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import CallIcon from '@mui/icons-material/Call';
import { Button } from '@mui/material';
import SidebarOptions from './SidebarOptions';

function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="sidebar__compose">
        Compose
      </Button>

      <SidebarOptions
        Icon={<InboxIcon />}
        title="inbox"
        number={200}
        selected={true}
      />
      <SidebarOptions Icon={<StarIcon />} title="Starred" number={23} />
      <SidebarOptions
        Icon={<QueryBuilderIcon />}
        title="Snoozed"
        number={344}
      />
      <SidebarOptions
        Icon={<LabelImportantIcon />}
        title="Important"
        number={12}
      />
      <SidebarOptions Icon={<NearMeIcon />} title="Sent" number={321} />
      <SidebarOptions Icon={<NoteIcon />} title="Drafts" number={4} />
      <SidebarOptions Icon={<KeyboardArrowDownIcon />} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <SidebarOptions Icon={<PersonIcon />} />
          <SidebarOptions Icon={<DuoIcon />} />
          <SidebarOptions Icon={<CallIcon />} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
