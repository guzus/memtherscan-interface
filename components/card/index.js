import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    border-radius: 10px;
    border-style: dashed;
    overflow: hidden;
    width: 300px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 20px;  
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    border: red solid 1px;
    background: yellow;
    padding: 30px;
    font-family: Georgia;
`;
export default function Card({title, text}) {
    return (
        <CardDiv>
            <div className="card__header">
                <h3 className="card__header__title">
                    {title}
                </h3>
            </div>
            <div className="card__body">
                {text}
            </div>
            <div className="card__footer"></div>
        </CardDiv>
    );
}
