import React from 'react';
import '../css/EmailList.css';
import Section from './Section';
import EmailRow from './EmailRow';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Checkbox, IconButton } from '@mui/material';
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  InboxSharp,
  Settings,
} from '@mui/icons-material';

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <IconButton>
            <Checkbox />
          </IconButton>
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={<InboxSharp />} title="Primary" color="red" selected />
        <Section Icon={<PeopleIcon />} title="Social" color="#1A74E8" />
        <Section Icon={<LocalOfferIcon />} title="Promotitions" color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow
          title={'Twitch'}
          subject={'Batfleck went live ! '}
          desc={'This is a test mail'}
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
