import '../css/EmailList.css';
import React, { useEffect, useState } from 'react';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';
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
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  });
  // This peice of code give us a snapshot of the database and everytime the database gets updated,
  // a new snapshot is provided and the code get ran again to populate the emailList with the new emails that were added to the database

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
        {emails.map(
          ({ id, data: { reciver, subject, message, timestamp } }) => (
            <EmailRow
              id={id}
              key={id}
              title={reciver}
              subject={subject}
              desc={message}
              time={new Date(timestamp.seconds * 1000).toUTCString().trim()}
            />
          )
        )}
      </div>
    </div>
  );
}

export default EmailList;
