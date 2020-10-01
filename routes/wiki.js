const express = require('express')
const router = express.Router()
const addPage = require('../views/addPage')
// const client = require('../db')
router.use(express.urlencoded({ extended: false }));
router.use(express.json());


router.get('/add', async (req, res) => {
    res.send(addPage())
})

router.post('/', async (req, res) => {
    // let content = await client.query(res.json(req.body))
    res.json(req.body);
})

module.exports = router
