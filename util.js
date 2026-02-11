const express=require('express');
function sendEmail(to, subject) {
  console.log(`Email sent to ${to} with subject ${subject}`);
}

function logActivity(message) {
  console.log("ACTIVITY LOG:", message);
}

module.exports= {sendEmail,logActivity};