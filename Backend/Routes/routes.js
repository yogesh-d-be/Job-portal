const express = require ("express");
const router = express.Router();

const {userRegPost, login} = require('../Controller/controller')

router.post("/userregister", userRegPost);
router.post("/userlogin", login);
module.exports = router;
