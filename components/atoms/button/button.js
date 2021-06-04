/* @flow */
import * as React from 'react'
import styled from 'styled-components';

const getBackgroundColor = (type) => {
  switch(type){
    case "white": return "#FFFFFF";
    default: return "rgb(0, 171, 73)";
  }
} 

const getBorder = (type) => {
  switch(type){
    case "white": return "2px solid #E0E0E0";
    default: return "none";
  }
} 

const getColor = (type) => {
  switch(type){
    case "white": return "#000000";
    default: return "#ffffff";
  }
} 

const Mainbutton = styled.button`
  background: ${props => getBackgroundColor(props.type)};
  color: ${props => getColor(props.type)};
  border: ${props =>getBorder(props.type)};
  margin: ${({margin})=>margin};
  padding: ${props => props.padding  ? "7px 0" : "15px 0"};
  box-shadow: ${props => props.shadow ? "none" : "0px 15px 30px rgba(0, 171, 73, 0.25)"};
  width: ${props => props.width ? "100px" : "100%"};
  cursor: pointer;
  border-radius: 100px;
  font-style: normal;
  font-weight: normal;
  font-size: ${({fs})=>fs};
  line-height: 17px;
  text-align: center;
`;

const Button = ({ type, onClick, children, disabled, margin="1.5em 0", padding, shadow, width, fs="18px"}) => {
  return (
    <Mainbutton type={type} margin={margin} padding={padding} width={width} shadow={shadow} type={type} onClick={onClick} disabled={disabled} fs={fs}>
      {children}
    </Mainbutton>
  )
}

export default Button