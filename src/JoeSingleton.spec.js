var assert = require('assert');

var Joe = require('../index');

describe('Joe', function () {

    before(function () {
        Joe.init({
            password: 'foo'
        })
    });


    describe('#version()', function () {
        it('version() should return a the Joe library version.', function () {

            assert(true)
        });

    });


});

