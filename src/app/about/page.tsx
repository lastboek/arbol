'use client'
 
import { useState } from 'react'

export default function About() {
    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter + 1);
    }
    function decrement() {
        setCounter(counter - 1);
    }
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}