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
    try {
      const funcionariosFiltrado = funcionarios.find((funcionarios) => funcionarios.id ==id);
    const index = funcionarios.indexOf(funcionariosFiltrado);
  
    funcionarios.splice(index,11);
  
    fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios),'utf8',function(err){
      if (err){
        return res.status(424).send ({message: 'Registro não encontrado'});
      }
      console.log ("Arquivo atualizado com Sucesso!");
    });
  
    res.status(200).send(funcionarios);
    } catch(err) {
      return res.status(500).send({message: err})
    }
  };

  const putFuncionarios = (req,res) => {
    try{
      const id = req.params.id;
      const funcionariosASerModificado = funcionarios.find((funcionarios) => funcionarios.id == id);
  
      const funcionariosAtualizado = req.body;
  
      const index = funcionarios.indexOf(funcionariosASerModificado);
  
      funcionarios.splice(index,1,funcionariosAtualizado);
  
      fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios),'utf8',function(err){
        if (err){
          return res.status(424).send ({message: err});
        }
        console.log ("Arquivo atualizado com Sucesso!");
      });
  
      res.status(200).send(funcionarios);
    }catch(err){
    return res.status(424).send({message:err});
  }
}


  const patchFuncionarios = (req,res) => {
    const id = req.params.id;
    const atualizacao = req.body;

    try {
      const funcionariosASerModificado= funcionarios.find((funcionarios)=> funcionarios.id == id);

      Object.keys(atualizacao).forEach((chave)=> {
        funcionariosASerModificado[chave] = atualizacao[chave]
      })
      console.log(funcionariosASerModificado)

      fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios),'utf8',function(err){
        if (err){
          return res.status(424).send ({message: err});
        }
        console.log ("Arquivo atualizado com Sucesso!");
      });

     return res.status(200).send(funcionarios);

    } catch(err){
      return res.status(424).send({message: err});
    }
  }

module.exports = {
    getAll,
    getByID,
    postFuncionarios,
    deleteFuncionario,
    putFuncionarios,
    patchFuncionarios
};