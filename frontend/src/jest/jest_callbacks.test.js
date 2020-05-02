function fetchData(callback){
	const data = 'Asynchronous tests suck';
	return callback(data);
}

// function fetchData(callback){
// 	const data = 'Asynchronous tests suck';
// 	return setTimeout(500, () => callback(data));
// }

test('My first test with a callback', (done) => {	
	function callback(data) {
	    try {
	      expect(data).toBe('Asynchronous tests suck');
	      done();
	    } catch (error) {
	      done(error);
	    }
  	}

	fetchData(callback);
});

test.skip('This is a failing test as the test cannot run because of callback. See above for how to do it', () => {	
	function callback(data) {
	    try {
	      expect(data).toBe('Asynchronous tests suck');
	    } catch (error) {
	      console.log(error);
	    }
  	}

	fetchData(callback);
});
