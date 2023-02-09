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

