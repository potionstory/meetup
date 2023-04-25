import styled from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px 0;
  padding: 64px 0;
  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px 0;
    font-size: var(--size-48);
    font-weight: var(--weight-700);
    background: var(--color-orange);
    background: linear-gradient(90deg, var(--color-orange), var(--color-pink) 50%, var(--color-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    svg {
      font-size: var(--size-128);
      color: var(--color-title);
    }
  }
  .description {
    font-size: var(--size-16);
    color: var(--color-text);
    line-height: var(--size-32);
    text-align: center;
    em {
      /* font-weight: var(--weight-700);
      color: var(--color-title); */
    }
    b {
      font-weight: var(--weight-700);
      color: var(--color-title);
    }
  }
`;
