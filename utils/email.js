const express=require('express');
function sendEmail(to, subject) {
  console.log(`Email sent to ${to} with subject ${subject}`);
}

module.exports={sendEmail};