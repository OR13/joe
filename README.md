
# Joe

[![NPM](https://nodei.co/npm/joe.png)](https://nodei.co/npm/joe/)


[![Build Status](https://travis-ci.org/OR13/Joe.svg?branch=master)](https://travis-ci.org/OR13/joe)

## WARNING THIS IS AN EXPERIMENT. DO NOT USE.

- Crypto thanks to the very awesome [JOSE](https://github.com/cisco/node-jose)

Joe provides tools for javascript object encryption and encoding.

### Install

```
$ npm install joe --save
```

```
var Joe = require('joe');
```

or 

```
<!-- dev -->
<script src="https://cdn.rawgit.com/OR13/joe/master/dist/joe.js"></script>

<!-- prod (but really did you read the warning?) -->
<script src="https://rawgit.com/OR13/joe/master/dist/joe.js"></script
```

### Usage

```
Joe.init({ password: 'shared_secret' }); 

### Dev

```
$ npm run test
$ npm run build
```
