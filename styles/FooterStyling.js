import styled from "styled-components"

export const FooterText = styled.div`
  font-size: 18px;
  color: white;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3em;

  img {
    width: 50px;
    margin-left: 0.2rem;
    display: block;
    align-self: center;
    animation: rotate 8s linear infinite;

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
