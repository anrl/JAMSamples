var Chance = require('chance');
var chance = new Chance();

jdata {
    char y as broadcaster;
}

setInterval(function() {
    y = chance.name();
}, 1000);
