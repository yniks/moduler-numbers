# moduler-numbers
C like Moduler Numbers in javascript

Super Lightweight - Zero dependency library for Moduler Numbers
Installation:
```sh
  npm install https://github.com/yniks/moduler-numbers.git
```



Example Imports:
```javascript
  //EXAMPLE TO IMPORTS
  let {
	Int8u,
	Int16u,
	Int8,
	Int16,
	Int32u,
	Int32,
	Float32,
	Float64,
	Int64,
	Int64u,
  }=require('moduler-numbers')
```

List Possible Number Types
```javascript
  //GET A DICTORNARY OF ALL POSSIBLE NUMBER TYPES
  LET {types}=require('moduler-numbers')
  
```

USAGE:
```javascript
  var {Int8u as char}=require('moduler-numbers')
  var modulerValue=char`257` //or char('256')
  console.log(modulerValue==256)  //false
  console.log(modulerValue) //1
```
