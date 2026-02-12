import express from "express";
function logActivity(message:string ) : void  {
  console.log("ACTIVITY LOG:", message);
}

export default logActivity;