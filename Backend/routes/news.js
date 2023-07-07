const express = require('express')
const multer = require("multer");
const path = require("path");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const userRouter = express.Router();

const {getNews, viewNews, createNews} = require('../controller/new')

const awsConfig = {
    accessKeyId: "AKIA2TRYZJXM34U3MG7M",
    secretAccessKey: "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",
    region: "ap-south-1",
    bucketName: "mynewtaskbucket",
    };
    let S3 = new AWS.S3(awsConfig);
    let upload = multer({
    storage: multerS3({
    bucket: "mynewtaskbucket",
    s3: S3,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
    },
    acl: "public-read",
    key: (req, file, cb) =>
    cb(
    null,
    `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`
    ),
    }),
    });

userRouter.get('/getnews', getNews)
userRouter.post('/createnews', upload.single("bannerimage"), createNews)
userRouter.post('/viewnews', viewNews)

module.exports = userRouter