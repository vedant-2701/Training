import express from 'express';
function sendEmail(to: string , subject: string ) : void  {
  console.log(`Email sent to ${to} with subject ${subject}`);
}

export default sendEmail;