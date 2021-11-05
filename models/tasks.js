// const { ObjectId } = require('mongodb');
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

module.exports = {
  getAll,
};