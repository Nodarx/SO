const dbManager = require("../database/db.manager");

function createUser(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newUserObject = {
    username: req.body.username,
    password: req.body.password,
  };
  dbManager.User.create(newUserObject)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        menssage: "SOMENTHING HAPPENED, ERROR",
      });
    });
}

async function findAllUsers(req, res) {
  try {
    const allUsers = await dbManager.User.findAll();

    res.send(
       allUsers
    );
  } catch (error) {
    console.log(error);
    res.status(500).send({
      menssage: "ERROR, SORRY",
    });
  }
}

async function findUserById(req, res) {
  try {
    const { idUser, idPost } = req.params;
    const user = await dbManager.User.findOne({
      where: {
        idUser: idUser,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY",
    });
  }
}

async function deleteUserById(req, res) {
  try {
    const { idUser } = req.params;
    const user = await dbManager.User.destroy({
      where: {
        idUser: idUser,
      },
    });
    res.json("usuario eliminado correctamente");
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY",
    });
  }
}

async function authUser(req, res) {
  try {
    const { username, password } = req.body;
    //Execute query
    const user = await dbManager.User.findOne({
      //insertar autenticación
      where: {
        username: username,
        password: password,
      },
    });
    //Send response
    if (user) res.json(user);
    else res.status(400).json("usuario y/o contraseña incorrecto");
  } catch (e) {
    // Print error on console
    console.log(e);
    // Send error message as a response
    res.status(500).send({
      message: "Some error occurred",
    });
  }
}

async function updateUser(req,res){
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newUserObject = {
    idUser:req.body.idUser,
    username: req.body.username,
    password: req.body.password,
  };
  dbManager.User.update(
    {username:req.body.username},
    {password: req.body.password},
    {where:{idUser:req.body.idUser,},}
    )
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        menssage: "SOMENTHING HAPPENED, ERROR",
      });
    });
}


exports.createUser = createUser;
exports.findAllUsers = findAllUsers;
exports.findUserById = findUserById;
exports.authUser = authUser;
exports.deleteUserById = deleteUserById;
exports.updateUser= updateUser;
