import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({

    name: 'maial',
    initialState: {
        sendMessageIsOPen:false,
    },
    reducers:{
        openSendMessage: state =>{
            state.sendMessageIsOPen = true;   },
        closeSendMessage: state =>{
            state.sendMessageIsOPen = false;   },
        }
});
export const {openSendMessage , closeSendMessage} = mailSlice.actions;
export const selectsendMessageIsOPen = state => state.mail.sendMessageIsOPen;
export default mailSlice.reducer