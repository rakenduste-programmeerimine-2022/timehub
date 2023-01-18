const express = require("express")
const router = express.Router()
const controller = require("../controllers/controllers")

router.get("/users",controller.getUsers)

router.post("/users/new",controller.createUser)

router.get("/users/:id",controller.getUser)

router.post("/users/:id/delete",controller.deleteUser)

module.exports = router