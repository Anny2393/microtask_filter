import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

// Определен тип FilterType, который представляет собой строковые значения "All", "Ruble" и "Dollar".
// Эти значения будут использоваться для фильтрации денежных данных.
type FilterType = "All" | "Ruble" | "Dollar"

function App() {
    // Внутри компонента App определено состояние, используя useState. В данном случае, есть два состояния:
    // money: это массив объектов, представляющих различные банкноты с их номиналами и номерами.
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    // Эта строка кода объявляет состояние filter с помощью хука useState.
    // filter представляет текущее значение фильтра, и изначально устанавливается
    // в "All", что означает, что начально отображаются все элементы.
    const [filter, setFilter] = useState<FilterType>("All");

    // Это функция onClickFilterHandler, которая принимает nameButton в качестве
    // аргумента (предполагается, что nameButton может быть "All", "Ruble" или "Dollar")
    // и использует функцию setFilter для обновления состояния filter в соответствии
    // с выбором пользователя. Это означает, что при нажатии на кнопку
    // "All", "Ruble" или "Dollar" значение filter будет изменено.
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }

    // Исходно переменная currentMoney устанавливается равной массиву money.
    let currentMoney = money;

    // После этого следует блок условий: if (filter === "Dollar") и if (filter === "Ruble").
    // В зависимости от значения filter, переменная currentMoney будет переопределена
    // с использованием метода filter, который фильтрует элементы массива money на
    // основе значения banknote в соответствии с выбранным фильтром ("Dollar" или "Ruble").
    // Это позволяет отобразить только элементы, которые соответствуют выбранному фильтру.
    if (filter === "Dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar");
    }
    if (filter === "Ruble") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble");
    }

    return (

    // Возвращается компонента NewComponent, которой передаются обновленные
    // данные currentMoney и функция onClickFilterHandler.
        <NewComponent
            currentMoney={currentMoney}
            onClickFilterHandler={onClickFilterHandler}
        />
    );
}

export default App;