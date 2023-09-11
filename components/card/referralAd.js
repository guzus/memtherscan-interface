import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ReferralAdDiv = styled.div`
    border-radius: 10px;
    border-style: dotted;
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
  
    .card__header {
      margin-bottom: 20px;
    }
`;
export default function ReferralAd({title, text, website}) {
    return (
        <ReferralAdDiv>
            <div className="card__header">
                <h3 className="card__header__title">
                    {title}
                </h3>
                <Link className="card__header__webiste__link" href={website} >
                    <p>[website]</p>
                </Link>
            </div>
            <div className="card__body">
                {text.split('\n').map((line, index) => {
                    return (
                        <span key={index}>
                            {line}
                            <button
                                onClick={() => navigator.clipboard.writeText(line)}
                                style={{"color": "black", "background": "white", "padding": "4px", "margin": "5px"}}
                            >
                                copy
                            </button>
                            <br/>
                        </span>
                    )
                })}
            </div>
            <div className="card__footer"></div>
        </ReferralAdDiv>
    );
}
