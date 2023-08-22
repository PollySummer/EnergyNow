import { Children, useState } from "react";


//оба варианта функции, первый - более минималистичный

function Counter({ firstName = 'SomeName', lastName = 'someLastName', age = 20, children }) {
    const [newAge, setNewAge] = useState(age);

    const title = 'Counter Component';

    const ButtonMinus = () => <button onClick={() => setNewAge(newAge - 1)}>-</button>;
    const ButtonAdd = () => <button onClick={() => setNewAge(newAge + 1)}>+</button>;

    return (
        <div>
            <div>{title}</div>
            <div>First name:{firstName}</div>
            <div>Last name:{lastName}</div>
            <div>Age: {age}</div>
            <div>New age:

                {/* //кнопке передали новое состояние и описали тут же функцию  */}
                {/* <button onClick={() => setNewAge(newAge + 1)}>+</button> */}
                <ButtonAdd setNewAge={setNewAge} newAge={newAge} />
                {newAge}
                <ButtonMinus setNewAge={setNewAge} newAge={newAge} />
            </div>
            {/* <Test setNewAge={setNewAge} newAge={newAge}/> */}
            {children}
        </div>
        // <div>{title}</div>
    );
};

// Counter.defaultProps = {
//     firstName: 'Haruki',
//     lastName: 'Polinovich',
//     age: 6
// };



export default Counter;
//props используется для передачи из откуда-то в Counter.jsx, тут мы их поменять не можем
// создать файл
// создать в нем функцию которая возвращает хтмл
// экспортировать в том же документе
// импортировать в любом файле
// вызвать в любом месте вот так: <Counter/>