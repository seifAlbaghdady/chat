const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const {getAllMsg,createMsg} = require('../controllers/MsgController');

router.get('/', getAllMsg);

router.post('/', createMsg);

module.exports = router;