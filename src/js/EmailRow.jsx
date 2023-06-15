import '../css/EmailRow.css';
import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { selectedMail } from '../features/mailSlice';

function EmailRow({ title, subject, desc, time, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectedMail({ id, title, subject, desc, time }));
    navigate('/Mail');
  };

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__describition"> - {desc}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
