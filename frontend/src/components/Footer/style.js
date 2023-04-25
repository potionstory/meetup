import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  height: 48px;
  margin: 0 12px;
  border-top: 1px solid var(--color-line);
  font-size: var(--size-12);
  color: var(--color-text);
  .copyright {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 0 4px;
    a {
      color: var(--color-title);
    }
  }
`;
