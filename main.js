let data = {
    "parametrs": {
        "Размер посылки": "10x10x10 см",
        "Физический вес посылки": "10кг",
        "Расчётный вес посылки": "20кг",
        "Город отправителя": "Ростов-на-Дону, Ростовская область, Россия",
        "Город получателя": "Краснодар, Краснодарский край, Россия",
        "Тип доставки": "Дверь - магистраль - склад"
    },
    "additional": {
        "Примерка на дому": "",
        "Воздушно-пузырчатая плёнка": {
            "cost": "700₽",
            "desc": "(10м)"
        },
        "Подъем на этаж":{
            "cost": "1000₽",
            "desc": "(7 этаж ручная)"
        },
        "Погрузка-разгрузочные работы":{
            "cost": "1200₽",
            "desc": ""
        },
        "Коробка": {
            "cost": ["200₽","300₽","500₽","200₽","300₽","500₽"],
            "desc": ["Вес до 5кг (1х2х7) 1шт", "Вес до 15кг (10х12х7) 1шт", "Вес до 12кг (1х12х7) 2шт"
        ,"Вес до 5кг (1х2х7) 1шт", "Вес до 15кг (10х12х7) 1шт", "Вес до 12кг (1х12х7) 2шт"]
        }
    },
    "sender": {
        "name" : "Компания 1",
        "contact": "ФИО 1",
        "number": "Номер 1",
        "address": "Адрес 1"
    },

    "recepient": {
        "name" : "Компания 2",
        "contact": "ФИО 2",
        "number": "Номер 2",
        "address": "Адрес 2"
    },

    "courier": {
        "date" : "Дата 1",
        "time": " Время 1",
        "break": "Перерыв 1"
    },

    "collecting": {
        "delivery_cost" : "100",
        "nds_cost": "20",
        "total_cost": "120",
        "places": {
            "place_1":
                        {
                            "item_1": {
                                "code": "12121",
                                "name": "Место 1 Товар 1",
                                "cost": "10000",
                                "weight": "10 кг.",
                                "count": "3",
                                "amount": "30000",
                                "nds_count": "200",
                                "nds_cost": "30200"
                            },
                            "item_2": {
                                "code": "12121",
                                "name": "Место 1 Товар 1",
                                "cost": "10000",
                                "weight": "10 кг.",
                                "count": "3",
                                "amount": "30000",
                                "nds_count": "200",
                                "nds_cost": "30200"
                            },
                            "item_3": {
                                "code": "12121",
                                "name": "Место 1 Товар 1",
                                "cost": "10000",
                                "weight": "10 кг.",
                                "count": "3",
                                "amount": "30000",
                                "nds_count": "200",
                                "nds_cost": "30200"
                            }
                        },
            "place_2":
                        {
                            "item_1": {
                                "code": "12121",
                                "name": "Место 1 Товар 1",
                                "cost": "10000",
                                "weight": "10 кг.",
                                "count": "3",
                                "amount": "30000",
                                "nds_count": "200",
                                "nds_cost": "30200"
                            },
                            "item_2": {
                                "code": "12121",
                                "name": "Место 1 Товар 1",
                                "cost": "10000",
                                "weight": "10 кг.",
                                "count": "3",
                                "amount": "30000",
                                "nds_count": "200",
                                "nds_cost": "30200"
                            },
                            "item_3": {
                                "code": "12121",
                                "name": "Место 1 Товар 1",
                                "cost": "10000",
                                "weight": "10 кг.",
                                "count": "3",
                                "amount": "30000",
                                "nds_count": "200",
                                "nds_cost": "30200"
                            }
                        }        
        }
    },
    "info": {
        "Стоимость": "100.00₽",
        "Срок доставки":"1-2 дня"
    }
};

let parametrsDiv = document.querySelector('.parametrs-details');
let additionalDiv = document.querySelector('.additional');
let totalCostElement = document.querySelector('.totalcost');
let deliveryDateElement = document.querySelector('.delivery_date');

totalCostElement.textContent = `Стоимость: ${data.info.Стоимость}`;
deliveryDateElement.textContent = `Срок доставки: ${data.info['Срок доставки']}`;
for (let key in data.parametrs) {
    let div = document.createElement('div');
    div.classList.add('rowitems');

    let keyElement = document.createElement('p');
    keyElement.classList.add('key');
    keyElement.textContent = `${key}`;

    let valueElement = document.createElement('p');
    valueElement.classList.add('value');
    valueElement.textContent = data.parametrs[key];

    div.appendChild(keyElement);
    div.appendChild(valueElement);

    parametrsDiv.appendChild(div);
}

for (let key in data.additional) {
    let div = document.createElement('div');
    div.classList.add('additional-item');

    let keyElement = document.createElement('p');
    keyElement.classList.add('key');
    keyElement.textContent = `${key}:`;

    let valueElement = document.createElement('div');
    valueElement.classList.add('value');

    if (typeof data.additional[key] === 'object') {
        if (Array.isArray(data.additional[key].cost)) {
            for (let i = 0; i < data.additional[key].cost.length; i++) {
                let itemDiv = document.createElement('div');
                itemDiv.classList.add('sub-item');
    
                let costElement = document.createElement('p');
                costElement.textContent = data.additional[key].cost[i];
                costElement.classList.add('cost-element');
    
                let descElement = document.createElement('p');
                descElement.textContent = data.additional[key].desc[i];
                descElement.classList.add('desc-element');
    
                itemDiv.appendChild(costElement);
                itemDiv.appendChild(descElement);
    
                valueElement.appendChild(itemDiv);
            }
        } else {
            let divElse = document.createElement('div'); 
            divElse.classList.add('sub1-item');
    
            let costElement = document.createElement('p');
            costElement.textContent = data.additional[key].cost;
            costElement.classList.add('cost-element');
            divElse.appendChild(costElement);
    
            let descElement = document.createElement('p');
            descElement.textContent = data.additional[key].desc;
            descElement.classList.add('desc-element');
            divElse.appendChild(descElement);
    
            valueElement.appendChild(divElse); 
        }
    } else {
        let element = document.createElement('p');
        element.textContent = `${data.additional[key]}`;
        element.classList.add('non-object-value');
        valueElement.appendChild(element);
    }

    div.appendChild(keyElement);
    div.appendChild(valueElement);

    additionalDiv.appendChild(div);
}


let senderDiv = document.querySelector('.sender-details');

const labels = {
    "name": "ФИО/Компания",
    "contact": "Контактное лицо",
    "number": "Номер",
    "address": "Адрес",
    "date": "Дата",
    "time": "Время",
    "break": "Перерыв",
    "code": "Артикуль",
    "cost": "Стоимость ед. товара",
    "weight": "Вес ед. товара",
    "count": "Кол-во ед.",
    "amount": "Стоимость доставки",
    "nds_count": "Стоимость НДС",
    "nds_cost": "Общая стоимость"
};

for (let key in data.sender) {
    let div = document.createElement('div');
    div.classList.add('rowitems');

    let keyElement = document.createElement('p');
    keyElement.classList.add('key');
    keyElement.textContent = labels[key] || key;

    let valueElement = document.createElement('p');
    valueElement.classList.add('value');
    valueElement.textContent = data.sender[key];

    div.appendChild(keyElement);
    div.appendChild(valueElement);

    senderDiv.appendChild(div);
}

let recepientDiv = document.querySelector('.recepient-details');

for (let key in data.sender) {
    let div = document.createElement('div');
    div.classList.add('rowitems');

    let keyElement = document.createElement('p');
    keyElement.classList.add('key');
    keyElement.textContent = labels[key] || key;

    let valueElement = document.createElement('p');
    valueElement.classList.add('value');
    valueElement.textContent = data.sender[key];

    div.appendChild(keyElement);
    div.appendChild(valueElement);

    recepientDiv.appendChild(div);
}


let courierDiv = document.querySelector('.courier-details');


for (let key in data.courier) {
    let div = document.createElement('div');
    div.classList.add('rowitems');

    let keyElement = document.createElement('p');
    keyElement.classList.add('key');
    keyElement.textContent = labels[key] || key;

    let valueElement = document.createElement('p');
    valueElement.classList.add('value');
    valueElement.textContent = data.courier[key];

    div.appendChild(keyElement);
    div.appendChild(valueElement);

    courierDiv.appendChild(div);
}


function createKeyValueDiv(data) {
    let container = document.querySelector('.collecting-details');

    for (let placeNum in data) {
        let placeDiv = document.createElement('div');
        placeDiv.className = 'place';
        
        let placeHeader = document.createElement('h3');
        placeHeader.textContent = "Место " + placeNum.slice(-1);
        placeDiv.appendChild(placeHeader);

        let placeData = data[placeNum];
        for (let itemNum in placeData) {
            let itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            let itemHeader = document.createElement('h4');
            itemHeader.textContent = "Товар " + placeNum.slice(-1) + "." + itemNum.slice(-1);
            itemDiv.appendChild(itemHeader);

            let itemData = placeData[itemNum];
            for (let itemInfoKey in itemData) {
                if (itemInfoKey !== 'name') {
                    let row = document.createElement('div');
                    row.className = 'rowitems';

                    let keyElement = document.createElement('p');
                    keyElement.className = 'key';
                    keyElement.textContent = labels[itemInfoKey];

                    let valueElement = document.createElement('p');
                    valueElement.className = 'value';
                    valueElement.textContent = itemData[itemInfoKey];

                    row.appendChild(keyElement);
                    row.appendChild(valueElement);
                    itemDiv.appendChild(row);
                }
            }
            placeDiv.appendChild(itemDiv);
        }
        container.appendChild(placeDiv);
    }
}

createKeyValueDiv(data.collecting.places);
