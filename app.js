let Tumblr = require('./lib/tumblrwks.js'),
    Sleep=require('sleep');
let BaseModel = require('./lib/DB/BaseModel'),
    basemodel = new BaseModel('./conf/config.json'),
    rowInfo = {},
    Id = {};

let tumblr = new Tumblr({
        consumerKey: 'APB66HaXKOdzvFvEKen4O1EE3AyydLysL9g4QCnXVGJwyctnOz',
        consumerSecret: '1mTg6SKpptGyTXRGtmrnJSmbU8BU6aE43E4wotUufJ8Y9aurPx',
        accessToken: 'Haw4hLra5fQ2CVYNqczRLLqcE9gSvQhw6G2afqG5bFekWUNgwH',
        accessSecret: 'zsXLTbjd9UI5tS6pozu6QLNUgm87vOO7pQbClFPjTMGwrX231z'
    }, "spookytacodestiny.tumblr.com"
);

tumblr.get('/info', {hostname: 'spookytacodestiny.tumblr.com'}, function (err, json) {
    console.log(json);
});

// Or with Promises
tumblr.get('/info', {hostname: 'spookytacodestiny.tumblr.com'}).then(function (json) {
    console.log(json);
}, function (error) {
    console.log(error);
});

for (let i = 0; i < 30; i++) {
    tumblr.get('/user/following', {limit: 10, offset: 10 * i}).then(function (json) {
        console.log(json);
        for (let j = 0; j < 10; j++) {
            sleep(200); //当前方法暂停5秒
            if (json.blogs[j] == null)continue;
            rowInfo.name = json.blogs[j].name;
            rowInfo.title = json.blogs[j].title;
            rowInfo.description = json.blogs[j].description;
            rowInfo.url = json.blogs[j].url;
            rowInfo.updated = json.blogs[j].updated;
            rowInfo.num = 10*i+j;

            Id.name = json.blogs[j].name;
            basemodel.insert('Tumblr_Info', rowInfo, function (ret) {
                console.log("ID:" + ret);
            })
            // new Promise(basemodel.findOneById('Tumblr_Info', Id, function (ret) {
            //     console.log(true);
            //     return true;
            // })).then(function () {
            //     console.log(rowInfo);
            //     basemodel.insert('Tumblr_Info', rowInfo, function (ret) {
            //         console.log("ID:" + ret);
            //     })
            // }).catch(function () {
            //         console.log("失败")
            //     }
            // )
        }
    }, function (error) {
        console(error);
    })
}

function sleep(d){
    for(var t = Date.now();Date.now() - t <= d;);
}




