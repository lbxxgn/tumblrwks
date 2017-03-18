/**
 * Created by gn on 2017/3/18.
 */
let mysql = require('mysql'),
    Util = require('../Utils/utils'),
    dbClient,
    client = {};


module.exports = function (configFile) {
    _constructor(configFile);

    /**
     * 数据库查找
     *
     * */
    this.findOneById = function (tablename, id, callback) {
        dbClient.query('Select * from ' + tablename + ' where ?', id, function (err, result) {
            if (err) {
                console.log("ERROR:" + err.message);
                dbClient.end();
                callback(false);
            } else {
                if (result) {
                    callback(result.pop());
                } else {
                    callback(result);
                }
            }
        })
    };

    /**
     * 数据库插入
     *
     * */
    this.insert = function (tablename, rowInfo, callback) {
        dbClient.query('INSERT INTO ' + tablename + " SET ?", rowInfo, function (err, result) {
            if (err) {
                console.log(err.message);
                throw err;
            }
            callback(result.insertId);
        })
    };

    /**
     * 数据库修改
     *
     * */
    this.update = function (tablename, info, callback) {

    };

    /**
     * 数据库条件查询
     *
     * */
    this.find = function (tableName, whereJson, orderByJson, limitArr, fieldArr, callback) {

    };

    function _constructor(configFile) {
        let dbConfig = Util.get(configFile, 'db');
        console.info(dbConfig);
        client.host = dbConfig['host'];
        client.port = dbConfig['port'];
        client.user = dbConfig['user'];
        client.password = dbConfig['password'];
        client.db = dbConfig['dbName'];
        dbClient = mysql.createConnection(client);
        dbClient.connect();
        dbClient.query('USE ' + client.db, function (err, results) {
            if (err) {
                console.info('Connect Error!' + err.message);
                dbClient.end();
            }
            console.info('Connect success!');
        })
    }
};