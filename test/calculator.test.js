/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {
	beforeEach(function() {
		// inject the HTML fixture for the tests
		// Why this line? See: https://github.com/billtrik/karma-fixture/issues/3
		fixture.setBase('test');
		fixture.load('calculator.fixture.html');
	});

	// remove the html fixture from the DOM
	afterEach(function() {
		fixture.cleanup();
	});

	// call the init function of calculator to register DOM elements
	beforeEach(function() {
		window.calculator.init();
	});

	it('should return 3 for 1 + 2', function() {
		document.getElementById('x').value = 1;
		document.getElementById('y').value = 2;
		document.getElementById('add').click();
		expect(document.getElementById('result').innerHTML).equal('3');
	});

	it('should calculate zero for invalid x value', function() {
		document.getElementById('x').value = 'hello';
		document.getElementById('y').value = 2;
		document.getElementById('add').click();
		expect(document.getElementById('result').innerHTML).equal('0');
	});

	it('should calculate zero for invalid y value', function() {
		document.getElementById('x').value = 1;
		document.getElementById('y').value = 'goodbye';
		document.getElementById('add').click();
		expect(document.getElementById('result').innerHTML).equal('0');
	});
});
