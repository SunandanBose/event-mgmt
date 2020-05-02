const { fetchData } = require('./code.js');
test('My first test with a callback', (done) => {	
	function callback(data) {
	    try {
	    	// console.log(data);
	        expect(data).toBe('Asynchronous tests suck');
	        done();
	    } catch (error) {
	        done(error);
	    }
  	}

	fetchData(callback);
});

test('This is a bad test as the test cannot run the callback before exiting. See above for how to do it', () => {	
	function callback(data) {    
	    // console.log(data);
	    expect(data).toBe('Asynchronous tests suck');
  	}

	fetchData(callback);
});
