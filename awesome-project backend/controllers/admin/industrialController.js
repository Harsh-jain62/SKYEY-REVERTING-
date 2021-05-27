const catchAsync = require('../../utils/catchAsync');
const Industrial = require('./../../models/admin/industrialModel');
const path = require('path');
const mime = require('mime');
const fs = require('fs');
const AppError = require('../../utils/appError');


exports.addIndustrial = catchAsync(async (req, res, next) => {
  // console.log('hi');
  let data = {
    name: req.body.name,
  };
  // console.log(req.user);
  const addindustrial = await Industrial.create(data);

  res.status(200).json({
    status: 'success',
    data: addindustrial,
  });
});

exports.getAllIndustrial = catchAsync(async (req, res, next) => {
  const getIndustrial = await Industrial.find();

  res.status(200).json({
    status: 'success',
    results: getIndustrial.length,
    data: getIndustrial,
  });
});


exports.searchIndustrial = catchAsync(async (req, res, next) => {
    
  const getIndustrial = await Industrial.find({ name: new RegExp(req.body.name)});

  res.status(200).json({
    status: 'success',
    results: getIndustrial.length,
    data: getIndustrial,
  });
});

