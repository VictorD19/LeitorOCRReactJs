import styled from "styled-components";

export const BodyMain = styled.div`
  width: 500px;
  margin: auto;
  margin-top: 8rem;
  h1 {
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  button {
    margin-top: 0.5rem;
  }
  @media only screen and (max-width: 750px) {
    margin: 1rem;
    width: 100%;
    .AreaText {
      width: 24rem;
    }
    margin-top: 3rem;
  }
`;
