const express = require("express")
const router = express.Router()

const userController = require("../controller/userController");

router.get("/", (req, res)=>{
    res.send("user Root")
})

router.get('/get_all', userController.getAll);

router.get('/search/:_id', userController.search);

router.post("/add", userController.createUser);

router.put('/update/:_id', userController.update);

router.delete('/delete/:_id', userController.delete);

module.exports = router;


