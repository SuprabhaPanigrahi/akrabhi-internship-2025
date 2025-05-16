import { useState } from "react";

export const WelcomeUser = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <InputComponent 
                inputValue={inputValue} 
                setInputValue={setInputValue} 
            />
            <DisplayComponent inputValue={inputValue} />
        </>
    );
};

const InputComponent = ({ inputValue, setInputValue }) => {
    return (
        <input 
            type="text" 
            placeholder="Enter your name" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
};

const DisplayComponent = ({ inputValue }) => {
    return (
        <h1>Welcome to the Website {inputValue}</h1>
    );
};