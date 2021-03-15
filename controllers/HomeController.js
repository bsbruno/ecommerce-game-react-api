const { response } = require("express");

const Games = require("./Games");

class testController {
  async index(req, res) {
    res.render("test.ejs");
  }

  async create(req, res) {
    let { title, description, price, img } = req.body;

    Games.create({
      title: title,
      description: description,
      price: price,
      img: img,
    })
      .then((response) => res.status(200).json(response))
      .catch((e) => res.status(500).json(e));
  }
  async listAll(req, res) {
    let result = await Games.findAll({
      attributes: ["id", "title", "description", "price", "img"],
      limit: 6,
    })
      .then((response) => res.status(200).json(response))
      .catch((e) => res.status(500).json(e));
  }

  async deleteGame(req, res) {
    let id = await req.params.id;
    if (id != undefined) {
      if (!isNaN(id)) {
        Games.destroy({
          where: {
            id: id,
          },
        })
          .then(() => res.status(200).json({ ListaGame: "Jogo deletado" }))
          .catch((e) => res.status(500).json(e));
      } else
        res
          .status(501)
          .json({ Description: "Id do jogo somente pode ser numeros " });
    }
  }

  async updateGame(req, res) {
    let id = req.params.id;
    let { title, description, price, img } = req.body;
    await Games.update(
      { title: title, description: description, price: price, img: img },
      { where: { id: id } }
    )
      .then((response) => res.status(200).json(response))
      .catch((response) => res.status(500).json(response));
  }
}

module.exports = new testController();
