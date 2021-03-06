import { databaseProvider as firebase } from "../firebase";
const db = firebase.ref("projects/");

const getAll = () => {
  return db;
};

const getWithLimit = (limit) => {
  return db.limitToLast(limit);
};

const create = (data) => {
  return db.push(data);
};

const update = (key, data) => {
  return db.child(key).update(data);
};

const remove = (key) => {
  return db.child(key).remove();
};

const removeAll = () => {
  return db.remove();
};

export default {
  getAll,
  getWithLimit,
  create,
  update,
  remove,
  removeAll,
};
