const celsius = prompt("Введите температуру в градусах Цельсия: ")

function converting(celsius) {
    const fahrenheit = (9 / 5) * celsius + 32;
    const result = fahrenheit.toFixed(1);
    alert(`Цельсий: ${celsius}, Фаренгейт: ${result}`);
    }

converting(celsius);