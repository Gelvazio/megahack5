const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.find({}).populate('role').limit(10);

    console.log(users);

    res.send(users);
  },
  
  async getOne(req, res) {
    const id = req.params.id

    const user = await User.find({ _id: id })
      
    res.send(user);
  },
  
  async insert(req, res) {
    const body = req.body

    debugger;

    console.log(req.params)

    res.json({"teste":"1213"});
  },

  async update(req, res) {
    const id = req.params.id
    const user = await User.find({ _id: id })      
    res.send(user);
  },

  async delete(req, res) {
    const id = req.params.id
    const user = await User.find({ _id: id })      
    res.send(user);
  }

};