import React from 'react'
import Styled from "styled-components";
import DownArrowImage from "../down-arrow.svg";
import Fade from 'react-reveal/Fade';

function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {
  return (
    <Wrap bgimage={backgroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
        <Buttons>
        <Fade bottom>
        <ButtonWrapper>
            <LeftButton>
                {leftBtnText}
            </LeftButton>

            <RightButton>{rightBtnText}</RightButton>
        </ButtonWrapper>
        </Fade>

        <DownArrow src={DownArrowImage} />
        </Buttons>
    </Wrap>
  )
}

export default Section;

const Wrap = Styled.div`
    background : red;
    width : 100vw;
    height : 100vh;
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    background-image : url('/images/model-s.jpg');
    display : flex;
    flex-direction : column;
    justify-content : space-between;  //vertical
    align-items : center;   //horizontal
    background-image : ${props => `url("/images/${props.bgimage}")`}
`

const ItemText = Styled.div`
    padding-top : 15vh;
    text-align : center;
`

const ButtonWrapper = Styled.div`
    display : flex;
    margin-bottom : 30px;
    @media (max-width : 768px){
        flex-direction : column;
    }
`

const LeftButton = Styled.div`
    background-color : rgba(23,26,32,0.8);
    height : 40px;
    width : 256px;
    display : flex;
    color : white;
    justify-content : center;
    align-items : center;
    border-radius : 100px;
    opacity : 0.85;
    text-transform :uppercase;
    font-size : 12px;
    cursor : pointer;
    margin : 8px;
`

const RightButton = Styled(LeftButton)`
    background : white;
    opacity : 0.65;
    color :black;
`

const DownArrow = Styled.img`
  height : 20px;
  overflow-x : hidden;
  animation : animateDown infinite 1.5s;
`

const Buttons = Styled.div``