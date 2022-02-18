import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    return (
        <>
            <h1>{number}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "INCREASE" });
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "DECREASE" });
                }}
            >
                -
            </button>
        </>
    );
};

export default Counter;
