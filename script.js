let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = ' ';
}

function CalculateResult() {
    try {
        const result = new Function('return ' + display.value)();
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

