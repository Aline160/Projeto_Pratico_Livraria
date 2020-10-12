const funcionarios= require ("../model/funcionarios.json");
const fs = require("fs");

const getAll = (req,res) => {
    console.log (req.url);
    res.status (200).send (funcionarios);
};

const getByID = (req,res) => {
  const id = req.params.id

  const funcionariosFiltrado= funcionarios.find ((funcionarios) => funcionarios.id == id)

  res.status(200).send(funcionariosFiltrado)
};

const postFuncionarios = (req,res)=>{
    console.log(req.body);
    const {id, nome, idade, cpf,rg,data_nasc,sexo,signo,mae,pai,email,senha,cep,endereco,numero,bairro,cidade,estado,telefone_fixo,celular,altura,peso,tipo_sanguineo,cor} = req.body;
    funcionarios.push ({id, nome, idade, cpf,rg,data_nasc,sexo,signo,mae,pai,email,senha,cep,endereco,numero,bairro,cidade,estado,telefone_fixo,celular,altura,peso,tipo_sanguineo,cor});
    
    fs.writeFile("./src/model/funcionarios.json",JSON.stringify(funcionarios),'utf8',function(err){
      if (err){
        return res.status(424).send ({message: err});
      }
      console.log ("Arquivo atualizado com Sucesso!");
    });

    res.status(200).send(funcionarios);
    
  };

  const deleteFuncionario = (req,res)=>{
    const id = req.params.id;
    const funcionariosFiltrado = funcionarios.find((funcionarios) => funcionarios.id ==id);
    const index = funcionarios.indexOf(funcionariosFiltrado);
  
    funcionarios.splice(index,11);
  
    fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios),'utf8',function(err){
      if (err){
        return res.status(424).send ({message: err});
      }
      console.log ("Arquivo atualizado com Sucesso!");
    });
  
    res.status(200).send(funcionarios);
  };

  

module.exports = {
    getAll,
    getByID,
    postFuncionarios,
    deleteFuncionario,
};