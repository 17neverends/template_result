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
        "Примерка на дому": {
            "cost": "0₽",
            "desc": "да"
        },
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
            "cost": ["200₽","300₽","12500₽","200₽","300₽","500₽"],
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

    "collecting": {
        "delivery_cost" : "100 ₽",
        "nds_cost_common": "20 ₽",
        "total_cost": "120 ₽",
        "places": {
            "place_1":
                        {
                            "item_1": {
                                "code": "12121",
                                "name_item": "Место 1 Товар 1",
                                "cost": "10000 ₽",
                                "weight": "10 кг.",
                                "count": "3 шт.",
                                "amount": "30000 ₽",
                                "nds_count": "200 ₽",
                                "nds_cost": "30200 ₽"
                            },
                            "item_2": {
                                "code": "12121",
                                "name_item": "Место 1 Товар 1",
                                "cost": "10000 ₽",
                                "weight": "10 кг.",
                                "count": "3 шт.",
                                "amount": "30000 ₽",
                                "nds_count": "200 ₽",
                                "nds_cost": "30200 ₽"
                            },
                            "item_3": {
                                "code": "12121",
                                "name_item": "Место 1 Товар 1",
                                "cost": "10000 ₽",
                                "weight": "10 кг.",
                                "count": "3 шт.",
                                "amount": "30000 ₽",
                                "nds_count": "200 ₽",
                                "nds_cost": "30200 ₽"
                            }
                        },
            "place_2":
                        {
                            "item_1": {
                                "code": "12121",
                                "name_item": "Место 1 Товар 1",
                                "cost": "10000 ₽",
                                "weight": "10 кг.",
                                "count": "3 шт.",
                                "amount": "30000 ₽",
                                "nds_count": "200 ₽",
                                "nds_cost": "30200 ₽"
                            },
                            "item_2": {
                                "code": "12121",
                                "name_item": "Место 1 Товар 1",
                                "cost": "10000 ₽",
                                "weight": "10 кг.",
                                "count": "3 шт.",
                                "amount": "30000 ₽",
                                "nds_count": "200 ₽",
                                "nds_cost": "30200 ₽"
                            },
                            "item_3": {
                                "code": "12121",
                                "name_item": "Место 1 Товар 1",
                                "cost": "10000 ₽",
                                "weight": "10 кг.",
                                "count": "3 шт.",
                                "amount": "30000 ₽",
                                "nds_count": "200 ₽",
                                "nds_cost": "30200 ₽"
                            }
                        }        
        }
    },
    "info": {
        "Стоимость": "100.00 ₽",
        "Срок доставки":"1-2 дня"
    }
};

const labels = {
    "name": "ФИО/Компания:",
    "contact": "Контактное лицо:",
    "number": "Номер:",
    "address": "Адрес:",
    "date": "Дата:",
    "time": "Время:",
    "break": "Перерыв:",
    "code": "Код артикула:",
    "cost": "Стоимость ед. товара:",
    "weight": "Вес ед. товара:",
    "count": "Кол-во ед.:",
    "amount": "Оплата получателя за ед. товара:",
    "nds_count": "Ставка НДС:",
    "nds_cost": "Сумма НДС:",
    "name_item": "Наименование:",
    "delivery_cost":"Доп. сбор за доставку с получателя, в т.ч. НДС:",
    "nds_cost_common":"Ставка НДС за доп. сбор с получателя:",
    "total_cost":"Сумма за доп. сбор с получателя:"

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

function createKeyValueDiv() {
    let container = document.querySelector('.collecting-details');

    for (let key in data.collecting) {
        if (key !== 'places') {
            let div = document.createElement('div');
            div.classList.add('rowitems');

            let keyElement = document.createElement('p');
            keyElement.classList.add('key');
            keyElement.textContent = labels[key] || key;

            let valueElement = document.createElement('p');
            valueElement.classList.add('value');
            valueElement.textContent = data.collecting[key]; 

            div.appendChild(keyElement);
            div.appendChild(valueElement);

            container.appendChild(div);
        }
    }

    for (let placeNum in data.collecting.places) {
        let placeDiv = document.createElement('div');
        placeDiv.className = 'place';
        
        let placeHeader = document.createElement('h3');
        placeHeader.textContent = "Место " + placeNum.slice(-1);
        placeDiv.appendChild(placeHeader);

        let placeData = data.collecting.places[placeNum];
        for (let itemNum in placeData) {
            let itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            let itemHeader = document.createElement('h4');
            itemHeader.textContent = "Товар " + placeNum.slice(-1) + "." + itemNum.slice(-1);
            itemDiv.appendChild(itemHeader);

            let itemData = placeData[itemNum];
            for (let itemInfoKey in itemData) {
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
            placeDiv.appendChild(itemDiv);
        }
        container.appendChild(placeDiv);
    }
}

createKeyValueDiv();



function push_to_page(divname, get_from) {
    let div_to_push = document.querySelector(`.${divname}`);

    for (let key in data[`${get_from}`]) {
        let div = document.createElement('div');
        div.classList.add('rowitems');
    
        let keyElement = document.createElement('p');
        keyElement.classList.add('key');
        keyElement.textContent = labels[key] || key;
    
        let valueElement = document.createElement('p');
        valueElement.classList.add('value');
        valueElement.textContent = data[`${get_from}`][key];
    
        div.appendChild(keyElement);
        div.appendChild(valueElement);
    
        div_to_push.appendChild(div);
    }
}

push_to_page('sender-details', 'sender');
push_to_page('recepient-details', 'recepient');

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}