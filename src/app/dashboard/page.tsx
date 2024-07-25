"use client"
import { useState } from "react";
export default function Dashboard() {

    /**
     * 1. Create a button
     * 2. create a text
     * 3. Create state to store the value of number
     * 4. Set state of number to +1 when button click
     * 5. Change the text correspond with click
     */

    let [num1, setNum1] = useState(0)
    const [walk, setWalk] = useState(true)
    const [person, setPerson] = useState({
        name: 'Niki',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: '6666'
        }
    })
    const [todos, setTodos] = useState(
        [
            {
                id: "1",
                name: "Today i met join wick",
                isChecked: false
            },
            {
                id: "2",
                name: "Today i read 2 article stoic",
                isChecked: false
            },
        ]
    )

    function handleNameChange(e) {
        setPerson({...person, name: e.target.value})
    }

    function handleWalk() {
        setWalk(!walk)
        alert(walk? "walk":"stop")
    }
    
    function increment() {
        setNum1(num1+1)
        console.log(num1)
    }

    function incrementTo3() {
        setNum1(num1 => num1+3)
        console.log(num1)
    }

    /**
     * 1. Create a simple check list
     * 2. Display the check box and the object data
     *      1. If the data is check then display check into the check box
     * 
     */
    return (
        <>
            <h1>Dashboard is coming</h1>
            <button type="button" onClick={increment}>Click me</button>
            <button type="button" onClick={incrementTo3}>Click me +3</button>
            <h2>Number count1: {num1}</h2>
            <hr/>
            <button onClick={() => {
                handleWalk();
            }}>
                change to {walk? 'stop':'walk'}
            </button>
            <h1 style={{color: walk? 'darkgreen':'red'}}>
                {walk? 'walk':'stop'}
            </h1>

            <hr />
            <label>
                Name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>

            <hr />
            <h1>What is your thought today?</h1>
            {todos.map(todo=>(
                <>
                    <input type="checkbox" key={todo.id} id="" value={todo.name} />
                    <label htmlFor={todo.id}>{todo.name}</label><br/>
                </>
            )
            )}
        </>
    );
}