
var Joe = require('./src/Joe');

if (typeof window !== 'undefined') {
    window.Joe = Joe
}

exports = module.exports = Joe;

