const express =require('express');
function logActivity(message) {
  console.log("ACTIVITY LOG:", message);
}

module.exports= {logActivity};