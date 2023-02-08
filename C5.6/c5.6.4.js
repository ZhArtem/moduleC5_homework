// Задание 4

// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
// Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
// После получения данных вывести ниже картинку на экран.

const btnNode = document.querySelector('button');
const inputNode1 = document.querySelector(".width");
const inputNode2 = document.querySelector(".height");
const resultNode = document.querySelector('.result');

const useRequest = (val1, val2) => {
    return fetch(`https://picsum.photos/${val1}/${val2}`)
        .then((response) => {
            return response;
        })
        .then(data => data.url)
        .catch(() => {
            console.log('error')
        });
}

btnNode.addEventListener('click', async () => {
    value1 = Number(inputNode1.value);
    value2 = Number(inputNode2.value);
    if (value1 < 100 || value1 > 300 || isNaN(value1) || value2 < 100 || value2 > 300 || isNaN(value2)) {
        resultNode.textContent = 'одно из чисел вне диапазона от 100 до 300';
    } else {
        const requestResult = await useRequest(value1, value2);
        image = document.createElement('img');
        image.src = requestResult;
        resultNode.append(image);
    }
})

