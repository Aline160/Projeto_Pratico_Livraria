const express = require ("express");
const router = express.Router();
const controller = require ("../controller/funcionariosController");

router.get ("/",controller.getAll);
router.get ("/funcionarios", controller.getAll);
router.get ("/:id",controller.getByID);
router.post ("/",controller.postFuncionarios);
router.delete ("/",controller.deleteFuncionario);
router.put("/:id",controller.putFuncionarios);
router.patch("/:id",controller.patchFuncionarios);



module.exports = router;