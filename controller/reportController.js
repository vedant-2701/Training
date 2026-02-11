const express=require('express');

const Task=require('../models/Task');
const taskReport= async (req, res) => {
  const tasks = await Task.find();

  const report = {
    total: tasks.length,
    open: tasks.filter((t) => t.status === "OPEN").length,
    closed: tasks.filter((t) => t.status === "CLOSED").length,
  };

  res.send(report);
};

module.exports=taskReport;
