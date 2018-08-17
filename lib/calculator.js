window.calculator = window.calculator || {};

(function() {
	var getIntById = (id) => {
		return parseInt(document.getElementById(id).value, 10);
	};
	var calculate = () => {
		var sum = getIntById('y') + getIntById('x');
		document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
	};

	window.calculator.init = function() {
		document.getElementById('add').addEventListener('click', calculate);
	};
})();
