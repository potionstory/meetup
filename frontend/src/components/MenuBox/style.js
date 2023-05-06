import styled from "styled-components";

export const MenuBoxStyled = styled.header`
  position: relative;
  padding-top: calc(50% - 6px);
  width: calc(50% - 6px);
  .menu-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 12px;
    border-radius: 6px;
    background-color: var(--color-line);
    .menu-title {
      height: 40px;
      font-size: var(--size-20);
      font-weight: var(--weight-700);
      color: var(--color-title);
      line-height: 40px;
      text-transform: uppercase;
    }
    .menu-icon {
      display: flex;
      align-items: center;
      position: relative;
      svg {
        font-size: var(--size-32);
        color: ${(props) => props.color};
      }
    }
    .menu-link {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 12px;
      width: 100%;
      height: 40px;
      border-radius: 6px;
      background-color: var(--color-bg);
      font-size: var(--size-12);
      font-weight: var(--weight-700);
      color: var(--color-text);
      text-align: center;
      text-transform: uppercase;
    }
  }
`;
