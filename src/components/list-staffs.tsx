"use client"
interface DataProps {
    hoa: string
}
import React, { useState, useEffect } from 'react';
const JustAnotherCounter = ({ hoa }: DataProps) => {
    const [count, setCount] = useState(0);
    // Tương tự như componentDidMount và componentDidUpdate:  
    useEffect(() => {
        // Cập nhập document title sử dụng browser API    
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Count Up To The Hoa {hoa}</button>
        </div>
    );
}

export default JustAnotherCounter