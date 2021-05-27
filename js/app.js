var inputA = document.getElementById('inputA');
var test = '';
var simbolo = '';
var resultado = false;

function concat(value)
{
	if (resultado) {
		reset()
	}

	inputA.value = inputA.value + value;
}

function ejecutarOperacion()
{
	switch (simbolo) {
		case 'sum':
			return Number(test) + Number(inputA.value);

		case 'sub':
			return Number(test) - Number(inputA.value);

		case 'mul':
			return Number(test) * Number(inputA.value);

		case 'div':
			if (Number(inputA.value) != 0) {

			return Number(test) / Number(inputA.value);

			}


	}

	return 0;
}

function operation(signo)
{
	if (simbolo) {
		test = ejecutarOperacion();
	}
	else {
		test = inputA.value;
	}

	simbolo = signo
	inputA.value = ''
	resultado = false;
}

function igual()
{
	inputA.value = ejecutarOperacion();
	resultado = true;
	simbolo = "";
}

function reset()
{
	inputA.value = ''
	test = ''
	simbolo = ''
	resultado = false
}