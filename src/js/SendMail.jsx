import React from 'react';
import '../css/SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add({
      reciver: formData.reciver,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>

        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="reciver"
          {...register('reciver', { required: true })}
          type="email"
          placeholder="To"
        />
        {errors.reciver && (
          <p className="sendMail__error">Reciver's email is required</p>
        )}

        <input
          name="subject"
          {...register('subject', { required: true })}
          type="text"
          placeholder="Subject"
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required</p>
        )}

        <input
          name="message"
          {...register('message', { required: true })}
          type="text"
          placeholder="Message..."
          className="sendMail__message"
        />
        {errors.message && (
          <p className="sendMail__error"> message is required</p>
        )}

        <div className="sendMail__options">
          <Button
            variant="contained"
            color="primary"
            className="sendMail__send"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
