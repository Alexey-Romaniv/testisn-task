import styled from 'styled-components'
// import {ErrorMessage, Field, Form} from "formik";


export const AuthBackground = styled.div`
background: ${p => p.theme.colors.white};
  width: 100vw;
  height: 100vh;
`;
export const AuthWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);

`
export const FormWrapper = styled.form`
display: flex;
  flex-direction: column;
  gap: 40px;
`
export const InputWrapper = styled.div`
position: relative;
`
export const Input = styled.input`
  color: ${p => p.theme.colors.mainText};
background-color: transparent;  
  border: none;
  border-bottom: 1px solid #E0E0E0 ;
  
  padding: 0 0 8px 54px;
  
  &::placeholder{
    color: ${p => p.theme.colors.secondaryText};

  }
  &:focus {
   
    outline: none;
  }
  &:hover ~ svg, 
  &:focus ~ svg{
    //fill: #000000;
    transform: scale(1.2);


  }
  
`;

export const Svg = styled.svg`
  fill: #E0E0E0;

  position: absolute;
  top: 0;
  left: 10px;
  
  width: 24px;
  height: 24px;
    
  transition: transform ease-in-out 500ms;
`;

// export const FormError = styled`
//   position: absolute;
//   left: 5px;
//   bottom: -20px;
//   font-size: 12px;
//   line-height: 1.3;
//   color: red;
// `