/**
 * Created by gn on 2017/3/18.
 */
let BaseModel = require('../lib/DB/BaseModel'),
    basemodel = new BaseModel('../conf/config.json'),
    rowInfo={};

rowInfo.name="genan";
rowInfo.title="test";
rowInfo.description="genan is a good Boy!";
rowInfo.url="http://blog.csdn.net/ISaiSai/article/details/53442748";
rowInfo.updated="1487316329";

basemodel.insert('Tumblr_Info',rowInfo,function (ret) {
    console.log("ID:"+ret);
});
console.log(rowInfo);
