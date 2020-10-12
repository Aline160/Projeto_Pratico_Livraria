const express = require ("express");
const router = express.Router();
const controller = require ("../controller/livrosController");

router.get ("/",controller.getAll);
router.get ("/livros", controller.getAll);
router.get ("/:id",controller.getByID);
router.get('/titulo', controller.getAllTituloLivro)
router.post ("/",controller.postLivros);
router.delete ("/",controller.deleteLivros);



module.exports = router;