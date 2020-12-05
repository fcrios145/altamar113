import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #C5E4FC;
  padding: 1.5em 1.8em;
`;

export const Wrapper = styled.div`
  margin: 2em 2em 0em 2em;
`;

export const Input = styled.input`
  width: 100%
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 8.5em;
  background-color: #E7F4FE;
  border: 0px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.7em;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 1em 2.5em;
  color: #E7F4FE;
  border: 0px;
  font-weight: bold;
`;

export const ButtonGreen = styled(Button)`
  background-color: #0BC699;
  padding: 1em 2.5em;
  color: #E7F4FE;
  border: 0px;
  font-weight: bold;
`;

export const ButtonRed = styled(Button)`
   background-color: #F44336;
`;

export const ButtonBlue = styled(Button)`
   background-color: #2196F3;
`;

export const ButtonOrange = styled(Button)`
   background-color: #E28A62;
`;

export const FloatingButton = styled.button`
    position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    background-color:#0C9;
    color:#FFF;
    border-radius:50px;
    border: 0px;
    text-align:center;
    box-shadow: 2px 2px 3px #999;
`;
