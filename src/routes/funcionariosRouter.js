const express = require ("express");
const router = express.Router();
const controller = require ("../controller/funcionariosController");

router.get ("/",controller.getAll);
router.get ('/funcionarios/:id',controller.getByID);
router.get ("/funcionarios", controller.getAll);
//router.get ("/funcionarios", controller.getAll);


module.exports = router;