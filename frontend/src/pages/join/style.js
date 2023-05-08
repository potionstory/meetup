import styled from "styled-components";

export const JoinStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;
  .avatar-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px 0;
    .avatar {
      width: 50%;
    }
    .btn {
      width: 40px;
      height: 40px;
      background-color: var(--color-transparent);
      svg {
        width: 100%;
        height: 100%;
        color: var(--color-text);
      }
    }
  }
`;
