import express from 'express';
function sendSMS(to: string , subject: string ) : void  {
  console.log(`SMS sent to ${to} with subject ${subject}`);
}

export default sendSMS;