import React from 'react';
import styled from 'styled-components';
import Logo from 'evelyn.png';


const Container = styled.div`
    min-width: 100%;
    min-height: 80px;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content:space-around;
    // background: linear-gradient(#F9F8F8, #CBE896);
    // background-color:#B5935F;
    // border-bottom: 1px solid #98E3F9;
    // box-shadow: 0px 5px 20px #AFDEDC;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 25%);
    color: #A57548;
    padding: 2% 0 2% 0;
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
`;
const Right = styled.div`
    display: flex;
    // justify-content: center;
    align-items: flex-end;
    margin: 0px 20px;
    & > span {
        min-width: 100px;
        max-width: 100px;
        // border: 1px solid red;
}
`;
const Img = styled.img`
    max-width: 50px;
    margin: 2%;
`;



const Header = () => {
    return <Container>
        <Left>
            <span>Evelyn Zhao</span>
            <span>Front-End Developer</span>
        </Left>
        <Right>
            <span>Home</span>
            <span>About</span>
            <span>Works</span>
            <span>Contact</span>
            <Img src={Logo} />
        </Right>
    </Container>
}
Header.defaultProps = {

}
export default Header;