/**
 * Created by gn on 2017/3/18.
 */
let fs = require('fs'),
    sys = require('util');
exports.get = function (filename, key) {
    let configJson = {};
    try {
        console.log(__dirname);
        let str = fs.readFileSync(filename, 'UTF-8');
        configJson = JSON.parse(str);
    } catch (e) {
        sys.debug("parse fails"+e.message)
    }
    return configJson[key];
};