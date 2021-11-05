const { ObjectId } = require('mongodb');
const connection = require('./connection');

const collection = 'tasks';

const getAll = async () => {
  const db = await connection();
  try {
    const tasks = await db.collection(collection).find().toArray();
    return tasks;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const addTask = async (task) => {
  const db = await connection();
  const date = new Date();
  try {
    const inserted = await db.collection(collection).insertOne({ ...task, date });
    return {
      _id: inserted.insertedId,
      date,
      ...task,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteTask = async (id) => {
  const db = await connection();
  try {
    const deleted = await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
    return deleted;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const editTask = async (id, task) => {
  const db = await connection();
  const myQuery = { _id: new ObjectId(id) };
  const newValues = { $set: { ...task } };
  try {
    const edited = await db.collection(collection).updateMany(myQuery, newValues);
    return edited;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  getAll,
  addTask,
  deleteTask,
  editTask,
};