import React from "react";

// Здесь определен тип currentMoneyPropsType, который представляет структуру объекта,
// содержащего информацию о деньгах. Этот тип используется для определения структуры данных,
// которые будут передаваться в компоненту NewComponent.
export type currentMoneyPropsType = {
    banknote: string
    nominal: number
    number: string
}

// Здесь определен тип FilterType, который представляет допустимые значения для фильтра.
// Этот тип используется для обеспечения типовой безопасности при выборе фильтра.
type FilterType = "All" | "Ruble" | "Dollar";

// Здесь определен тип NewComponentPropsType, который представляет структуру пропсов
// (параметров) для компоненты NewComponent. Этот тип описывает, что компонента ожидает
// получить массив объектов currentMoneyPropsType и функцию onClickFilterHandler,
// которая принимает аргумент типа FilterType и не возвращает значения.
export type NewComponentPropsType = {
    currentMoney: Array<currentMoneyPropsType>
    onClickFilterHandler: (nameButton: FilterType) => void;
}

// Эта часть кода определяет саму компоненту NewComponent. Она является функциональной
// компонентой, принимающей параметры (пропсы) в качестве аргумента props, который
// соответствует ожидаемой структуре NewComponentPropsType.
export const NewComponent =(props: NewComponentPropsType)=>{
    return (
        <>
            <ul>
{/*// Внутри компоненты отображается список элементов на основе данных из props.currentMoney.*/}
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote} </span>
                            <span> {objFromMoneyArr.nominal} </span>
                            <span> {objFromMoneyArr.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
{/*// Кроме того, создаются кнопки "All", "Ruble" и "Dollar", каждая из которых вызывает*/}
{/*// функцию props.onClickFilterHandler с соответствующим аргументом при нажатии.*/}
                <button onClick={()=>props.onClickFilterHandler("All")}>All</button>
                <button onClick={()=>props.onClickFilterHandler("Ruble")}>Ruble</button>
                <button onClick={()=>props.onClickFilterHandler("Dollar")}>Dollar</button>
            </div>

        </>
    );
}
