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
    font-weight: var(--weight-700);
    color: var(--color-text);
    line-height: var(--size-32);
    text-align: center;
    b {
      color: var(--color-title);
    }
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    .menu-box {
      position: relative;
      padding-top: calc(50% - 6px);
      width: calc(50% - 6px);
      .menu-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px 0;
          width: 100%;
          height: 100%;
          background-color: var(--color-line);
          .icon {
            svg {
              font-size: var(--size-24);
              color: var(--color-green);
            }
          }
          .name {
            font-size: var(--size-16);
            font-weight: var(--weight-700);
            color: var(--color-title);
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
