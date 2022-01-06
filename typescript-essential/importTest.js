"use strict";
exports.__esModule = true;
/**
 * Created by vega on 2017-05-29.
 */
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var myValidator = new ZipCodeValidator_1.ZipCodeValidator();
console.log(myValidator.isAcceptable('a10102'));
var ZipCodeValidator_2 = require("./ZipCodeValidator");
var myValidator2 = new ZipCodeValidator_2.ZipCodeValidator();
var validator = require("./ZipCodeValidator");
var ZipCodeValidator_3 = require("./ZipCodeValidator");
var myValidator3 = new validator.ZipCodeValidator();
console.log(myValidator3.isAcceptable('12456'));
console.log(ZipCodeValidator_3.numberRegexp);
