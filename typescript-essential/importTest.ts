/**
 * Created by vega on 2017-05-29.
 */
import { ZipCodeValidator }  from "./ZipCodeValidator";

let myValidator = new ZipCodeValidator();
console.log(myValidator.isAcceptable('a10102'));

import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator2 = new ZCV();


import * as validator from "./ZipCodeValidator";
import { numberRegexp } from './ZipCodeValidator';
let myValidator3 = new validator.ZipCodeValidator();

console.log(myValidator3.isAcceptable('12456'));
console.log(numberRegexp);