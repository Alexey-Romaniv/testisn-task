import styled from 'styled-components';

const Button = styled.button`
  border: none;
  
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  width: 100%;
  max-width: 280px;
  height: 50px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px){
    max-width: 300px;
  }
`
export const MainBtn = styled(Button)`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.mainBtn};
`;

export const SecondBtn = styled(Button)`
  color: ${p => p.theme.colors.secondaryBtn};
  background-color: white;
  
  border: 1px solid ${p => p.theme.colors.secondaryBtn};
`