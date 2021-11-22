import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    min-height: 74px;
    margin-top: 132px;
    background: ${props => props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};
    border-radius: 14px;
    border:${props => props.isBack ? "1px solid #FFFFFF" : "none"};
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color:#FFFFFF;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 0.7;
    }
    img{
        transform: ${props => props.isBack && "rotateY(190deg)"};
    }
`;