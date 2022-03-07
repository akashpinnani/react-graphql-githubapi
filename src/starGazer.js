import React from 'react';
import { BoldPara } from "./topic";

const StarGazer = ({stargazerCount}) => {
    return (
        <>
            <p>Stars</p>
            <BoldPara>
                {stargazerCount} </BoldPara>
        </>
    )
}

export default StarGazer;