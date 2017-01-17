var fs  = require('fs');
var Ajv = require('ajv');

console.log('#Hello World');

console.log('##read json schema file');
var schema = fs.readFileSync('TrackInfo-schema.json');

var ajv = new Ajv({allErrors: true, verbose: true, coerceTypes: true}); // options can be passed, e.g. {allErrors: true} 
console.log('##validate json schema object');
//var validate = ajv.compile(schema);

console.log('##read json data file');
var data = fs.readFileSync('Unit-invalid.json');
console.log('##validate json data object');
//var valid = validate(data);
var valid = ajv.validate(schema, data);
if (!valid) console.log(validate.errors);
