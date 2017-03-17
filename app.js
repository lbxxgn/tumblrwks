var Tumblr = require('./lib/tumblrwks.js');

var tumblr = new Tumblr({
    consumerKey: 'APB66HaXKOdzvFvEKen4O1EE3AyydLysL9g4QCnXVGJwyctnOz',
    consumerSecret: '1mTg6SKpptGyTXRGtmrnJSmbU8BU6aE43E4wotUufJ8Y9aurPx',
    accessToken: 'Haw4hLra5fQ2CVYNqczRLLqcE9gSvQhw6G2afqG5bFekWUNgwH',
    accessSecret: 'zsXLTbjd9UI5tS6pozu6QLNUgm87vOO7pQbClFPjTMGwrX231z'
  }, "spookytacodestiny.tumblr.com"
);

tumblr.get('/info', {hostname: 'spookytacodestiny.tumblr.com'}, function(err, json){
  console.log(json);
});

// Or with Promises
tumblr.get('/info', {hostname: 'spookytacodestiny.tumblr.com'}).
    then(function (json) {
        console.log(json);
    }, function (error) {
        console.log(error);
    });