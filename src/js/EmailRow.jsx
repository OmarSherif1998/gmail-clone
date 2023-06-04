import React from 'react';
import '../css/EmailRow.css';
import { Checkbox, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from '@mui/icons-material';

function EmailRow({ title, subject, desc, type, time, id }) {
  const navigate = useNavigate();
  return (
    <div className="emailRow" onClick={() => navigate('/Mail')}>
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
          {subject} <span className="emailRow__describition">- {desc}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
