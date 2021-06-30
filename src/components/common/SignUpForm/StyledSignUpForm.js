import styled from "styled-components";

import spaceBackgroundImage from "../../../images/form/space-background.jpg?webp";

export const FormOuter = styled.div`
  width: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: #4f4e4e;
  background-image: url(${spaceBackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FormContainer = styled.div`
  width: 80%;
  min-height: 60vh;
  padding: 2%;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (orientation: portrait) {
    width: 90%;
  }
`;

export const StyledForm = styled.div`
  background-color: transparent;
  text-align: center;
  font-size: 4rem;
  color: white;
`;
