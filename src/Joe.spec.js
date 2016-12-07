var assert = require('assert');

var Joe = require('../index');

var fs = require('fs');

describe('Joe', function() {

    before(function() {

    });

    describe('#generate()', function() {
        it('should generate a keystore ', function() {
            return Joe.generate()
                .then((keystore) => {
                    console.log('keystore: ', keystore.toJSON());

                })
        });
    });

    describe('#export()', function() {
        it('should export a key as json', function(done) {
            var key = Joe.export();
            fs.writeFile("key.json", JSON.stringify(key), function(err) {
                done();
            });
        });
    });

    describe('#import(key)', function() {
        it('should import a keystore from json', function() {

            var keystore = require('../key.json');

            return Joe.import(keystore)
                .then((keystore) => {
                    console.log('keystore: ', keystore.toJSON());

                })
        });
    });

    describe('#lock(_object)', function() {
        it('should encrypt an object.', function() {

            // console.log(Joe.keystore.toJSON())

            var _object = {
                test: '123'
            }

            return Joe.lock(_object)
                .then((cipher_text) => {
                    // console.log();

                    console.log('cipher_text: ', cipher_text);
                })
        });
    });

    describe('#unlock(_object)', function() {
        it('should decrypt an object.', function() {

            var _object = {
                test: '123'
            }

            return Joe.lock(_object)
                .then((cipher_text) => {
                    // console.log();

                    // console.log('cipher_text: ', cipher_text);

                    Joe.unlock(cipher_text)
                        .then((_object) => {
                            console.log(_object);
                        })

                })
        });
    });


});

