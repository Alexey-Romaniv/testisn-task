import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 320px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 768px;

    padding: 0 32px;
  };
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  };
`