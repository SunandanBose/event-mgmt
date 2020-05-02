// https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js
code = {};
code.sum = function(a, b) {
	return a + b;
}

code.fetchData = function(callback){
	const data = 'Asynchronous tests suck';
	setTimeout(() => callback(data), 1000);
}

module.exports = code;

