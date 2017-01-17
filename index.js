var fs  = require('fs');
var Ajv = require('ajv');
var JsonSchema = require('./lib/json-schema.js');
var JsonData = require('./lib/json-data.js');

console.log('#Hello World');

console.log('##instantiate schema');
var jsonSchema = new JsonSchema;

console.log('##instantiate Ajv');
var ajv = new Ajv({allErrors: true, verbose: true, coerceTypes: true}); // options can be passed, e.g. {allErrors: true} 

//console.log('##validate json schemaRoot object');
//var validate = ajv.compile(schemaRoot);

console.log('##read root json schema file');
var schemaRoot = fs.readFileSync(jsonSchema.getRootSchema());

console.log('##instantiate data');
var jsonData = new JsonData;

console.log('##read expected invalid json data file');
var data = fs.readFileSync(jsonData.getExpectedInvalidData());
validateData(schemaRoot, data);

console.log('##read expected valid json data file');
var data = fs.readFileSync(jsonData.getExpectedValidData());
validateData(schemaRoot, data);

done();

function validateData (schemaRoot, data) {
  console.log('##validate json data object');
  var valid = ajv.validate(schemaRoot, data);
  if (valid) console.log("valid"); else console.log(validate.errors);
}

function done() {
  console.log('#done');
}
