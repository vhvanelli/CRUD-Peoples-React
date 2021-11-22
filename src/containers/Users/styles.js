import styled from 'styled-components'

import Background from '../../assets/background1.svg'

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 40px;
height: 100vh;
`;
export const Image = styled.img`
    margin-top: 30px;
`;
export const ContainerItems = styled.div`
    display: flex;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    flex-direction: column;
    height: 100%;
    backdrop-filter: blur(45px);
`;
export const User = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    align-items: center;
    margin-top: 20px;
    width: 342px;
    min-height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border:none;
    outline: none;
    p{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    }
    button{
        background:none;
        border: none;
        cursor: pointer;
    }
`;