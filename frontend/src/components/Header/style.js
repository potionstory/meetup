import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 48px;
  border-bottom: 1px solid var(--color-line);
  background-color: rgba(22, 22, 23, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  font-size: var(--size-24);
  transition: background 320ms cubic-bezier(0.4, 0, 0.6, 1) 80ms;
  font-weight: bold;
  color: var(--color-title);
  text-transform: uppercase;
  h1 {
    a {
      display: flex;
      align-items: center;
      gap: 0 12px;
      padding: 0 12px;
      line-height: 48px;
      color: var(--color-title);
      .icon {
        position: relative;
        top: 2px;
      }
    }
  }
`;
