const livros= require ("../model/livros.json");
const fs = require("fs");

const getAll = (req,res) => {
    console.log (req.url);
    res.status (200).send (livros);
};

const getByID = (req,res) => {
  const id = req.params.id

  const livrosFiltrado= livros.find ((livros) => livros.id == id)

  res.status(200).send(livrosFiltrado)
};

const postLivros = (req,res)=>{
    console.log(req.body);
    const {id, titulo, autor, ano} = req.body;
    livros.push ({id, titulo, autor, ano});
    
    fs.writeFile("./src/model/livros.json",JSON.stringify(livros),'utf8',function(err){
      if (err){
        return res.status(424).send ({message: err});
      }
      console.log ("Arquivo de livros atualizado com Sucesso!");
    });

    res.status(200).send(livros);
    
  };

  const deleteLivros = (req,res)=>{
    const id = req.params.id;
    const livrosFiltrado = livros.find((livros) => livros.id ==id);
    const index = livros.indexOf(livrosFiltrado);
  
    livros.splice(index,11);
  
    fs.writeFile("./src/model/livros.json",JSON.stringify(livros),'utf8',function(err){
        if (err){
          return res.status(424).send ({message: err});
        }
        console.log ("Arquivo de livros atualizado com Sucesso!");
      });
  
      res.status(200).send(livros);
      
    };
    
    const getAllTituloLivro = (req, res) => {
        const titulo = req.params.titulo;
        const Alltitulo = livros.map((livros) => livros.titulo)
        res.status(200).send(Alltitulo)

    };

    const getby = (req,res) => {
        const artista = req.params.artista
        const artistaFiltrado= nossas_musicas.filter ((nossas_musicas) => nossas_musicas.artista == artista)
    
        res.status(200).send(artistaFiltrado);
    }


module.exports = {
    getAll,
    getByID,
    postLivros,
    deleteLivros,
    getAllTituloLivro,
};