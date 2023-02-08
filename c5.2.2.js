// Задание 2

// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

const jsonString = `
{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}
`

const result = {
    list: []
}

const data = JSON.parse(jsonString);
const list = data.list;

console.log(data)

for (let item of list) {
    result.list.push(
        {
            name: item.name,
            age: Number(item.age),
            prof: item.prof
        }
    )
}

console.log(result)