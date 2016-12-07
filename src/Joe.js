var _ = require('lodash');
var jose = require('node-jose');

exports = module.exports = function Joe() {

    this.jose = jose;

    this.kid = 'peregrin.took@tuckborough.example';

    this.generate = () => {

        var keystore = jose.JWK.createKeyStore();

        var promise = keystore.generate("EC", "P-384", {
            kid: this.kid,
            use: "enc"
        });

        return promise.then((key) => {
            return this.keystore = keystore;
        });

    }

    this.import = (key) => {
        // {input} is a String or JSON object representing the JWK-set
        return jose.JWK.asKey(key).
            then((result) => {
                // {result} is a jose.JWK.KeyStore
                return this.keystore = result.keystore;
            });
    }

    // this.export = () => {
    //     return this.keystore.toJSON();
    // }

    this.export = () => {
        var key = this.keystore.get(this.kid);
        return key.toJSON(true);
    }

    this.lock = (_object) => {
        // console.log('locking :', _object);
        var key = this.keystore.get(this.kid);
        var input = new Buffer(JSON.stringify(_object));
        return jose.JWE.createEncrypt({ zip: true }, key).
            update(input).
            final().then((ct) => {
                // console.log('ct: ', JSON.stringify(ct));
                return ct;
            })
    }

    this.unlock = (_encrypted_object) => {

        var key = this.keystore.get(this.kid);
        var decrypter = jose.JWE.createDecrypt(key);

        return decrypter
            .decrypt(_encrypted_object)
            .then((result) => {
                // console.log('rs: ', result);
                return JSON.parse(result.plaintext.toString('utf8'));
            });
    }

    return this;
} ()


// var encodeBase64 = (_env) => {
//     return new Buffer(JSON.stringify(_env)).toString('base64')
// }

// var decodeBase64 = (_string) => {
//     return JSON.parse(Buffer(_string, 'base64').toString('ascii'));
// }

// var ct_buff = new Buffer(JSON.stringify(ct));

// var b64_ct = Joe.jose.util.base64url.encode(ct_buff, "utf8");

// var ct_buff = Joe.jose.util.base64url.decode(b64_ct, "utf8");

// console.log('ct_buff: ', ct_buff)

// var obj_string = ct_buff.toString('utf8');

// console.log('obj_string: ', obj_string)

// var obj = JSON.parse(obj_string);
