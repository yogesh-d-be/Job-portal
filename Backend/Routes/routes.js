const express = require ("express");
const router = express.Router();

const {userRegPost} = require('../Controller/controller')

router.post("/userregister", userRegPost);

module.exports = router;
