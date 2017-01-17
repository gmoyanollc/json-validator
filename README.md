#Getting Started
##Project Set-Up
  * Requirement: Node and Node Package Manager (NPM) instances.
  
  1. Git Clone or copy files to an empty project folder.
  2. Open a terminal session in the project folder.
  3. Install dependencies:
```
    npm install
```
##Run Test
```
    node index.js
```
The test performs the following steps:

  1. JSON Schema file is read.
  2. Invalid JSON object file is read
  3. JSON object is validated for conformance to JSON Schema
  4. Validation error is output
  5. Valid JSON object file is read
  6. JSON object is validated for conformance to JSON Schema 
  7. Validation success is output
  
#Ajv
  

##JSON Validation
A JSON data structure is validated for conformance to JSON Schema with [Ajv (Another JSON Schema Validator)](https://github.com/epoberezkin/ajv), "a JavaScript JSON Schema validator for node.js and browswer":  
```
    /--------------\    /---------------\
    |  JSON Object |    |  JSON Schema  |
    \--------------/    \---------------/
                \          /
                 |        |
                 V        V
               /------------\
              /     Ajv      \
              \--------------/
                     |
                     V
               /-----------\
               |  Result   |
               \-----------/
```

#Authoritative Sources

The authoritative and complete work is maintained on [GitHub](https://github.com/gmoyanollc/json-validator).
