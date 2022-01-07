const mysql = require('mysql');
const promise = require("bluebird");
const Connection = require('mysql/lib/Connection');
promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project2",
};

async function addmessage(user){
     const connection = mysql.createConnection(dbinfo);
     await connection.connectAsync();
     let sql = 'INSERT INTO user(message) VALUES (?)';
    await connection.queryAsync(sql,[user,message]);
     await connection.endAsync();
}

let user ={
    message:"hey are you there"
}
connectionCheck();

async function selectmessage() {

    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = 'select * from user';
    const list=await connection.queryAsync(sql,[]);
    await connection.endAsync();

    console.log("bye")

    return list;
}

module.exports = {addmsg, showmsg}
