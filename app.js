let Tumblr = require('./lib/tumblrwks.js');
let BaseModel = require('./lib/DB/BaseModel'),
    basemodel = new BaseModel('./conf/config.json'),
    rowInfo = {};

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

for (let i = 0; i < 15; i++) {
    tumblr.get('/user/following', {limit: 20, offset: 20 * i}).then(function (json) {
        console.log(json);
        for (let j = 0; j < 20; j++) {
            rowInfo.name = json.response.blogs[j].name;
            rowInfo.title = json.response.blogs[j].title;
            rowInfo.description = json.response.blogs[j].description;
            rowInfo.url = json.response.blogs[j].url;
            rowInfo.updated = json.response.blogs[j].updated;
            rowInfo.url = json.response.blogs[j].url;

            basemodel.insert('Tumblr_Info', rowInfo, function (ret) {
                console.log("ID:" + ret);
            })
        }
    }, function (error) {
        console(error);
    })
}




