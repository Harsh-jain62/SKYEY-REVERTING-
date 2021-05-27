const catchAsync = require('../../utils/catchAsync');
const Job = require('./../../models/admin/jobModel');
const path = require('path');
const mime = require('mime');
const fs = require('fs');
const AppError = require('../../utils/appError');


exports.addJob = catchAsync(async (req, res, next) => {
  // console.log('hi');
  let data = {
    name: req.body.name,
  };
  // console.log(req.user);
  const addjob = await Job.create(data);

  res.status(200).json({
    status: 'success',
    data: addjob,
  });
});

exports.getAllJob = catchAsync(async (req, res, next) => {
  const getJob = await Job.find();

  res.status(200).json({
    status: 'success',
    results: getJob.length,
    data: getJob,
  });
});


exports.searchJob = catchAsync(async (req, res, next) => {
    
  const getJob = await Job.find({ name: new RegExp(req.body.name)});

  res.status(200).json({
    status: 'success',
    results: getJob.length,
    data: getJob,
  });
});

