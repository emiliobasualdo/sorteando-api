const mongoose = require('mongoose');
const Schema = require("mongoose");
const {registerBrand} = require("./brand");
const {NoSuchDraw} = require("../constants/exceptions");
const userInscription = new mongoose.Schema({
  _id: false,
  id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  date: {type: Date, default: Date.now, required: true}
});
const userInscriptionHistory = new mongoose.Schema({
  _id: false,
  inscription: {required: true, type: userInscription},
  date : {required: true, type:Date, default: Date.now}
});
const drawSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  brand: {type: Schema.Types.ObjectId, ref: 'Brand', required: true},
  end_date: {type: Date, required: true},
  images: [String],
  current_users: {
    type: Map,
    default: {},
    of: userInscription
  },
  past_users: {
    type: [userInscriptionHistory],
    default: [],
  },
  winner: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const _Draw = mongoose.model('Draw', drawSchema);

const addUser = (draw, user) => {
  draw.current_users.set(user.id, {id: user.id});
  return draw;
};

const removeUser = (draw, user) => {
  const inscription = draw.current_users.get(user.id);
  draw.current_users.delete(user.id);
  draw.past_users.push({inscription});
  return draw;
};

const modelFunctions = (draw) => {
  draw.addUser = (user) => addUser(draw, user);
  draw.removeUser = (user) => removeUser(draw, user);
  draw.asObject = () => draw.toObject({flattenMaps:true});
  return draw;
};

const newDraw = (draw) => {
  const newDraw = new _Draw(draw);
  modelFunctions(newDraw);
  return newDraw.save();
};

const findById = (id) => _Draw.findById(id)
  .then(d => {
    if (!d) throw new NoSuchDraw;
    return modelFunctions(d);
  })
  .catch(e => {
    if (e.errmsg && e.errmsg.includes("Cast to ObjectId failed")) throw new NoSuchDraw;
    else throw e;
  });

const findByTitle = (title) => _Draw.findOne({title});

const drawExists = (_id) => _Draw.exists({_id});

const getAll = async () => {
  const query = _Draw.find(
      { end_date: {"$gte": Date.now()}},
      {
        title: 1,
        description: 1,
        brand: 1,
        end_date: 1,
        images: 1
      }
    ).populate({ path: 'brand', select: 'name' });
  return await query.exec();
};
registerBrand();
module.exports = {
  newDraw,
  findById,
  drawExists,
  getAll
};
