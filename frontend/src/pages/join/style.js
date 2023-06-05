import styled, { css } from "styled-components";

export const JoinStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px 0;
  padding: 64px 0;
  .avatar-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px 0;
    width: 100%;
    .avatar {
      width: 50%;
    }
    .avatar-btn {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      background-color: var(--color-blue);
      svg {
        font-size: var(--size-24);
        color: var(--color-bg);
      }
    }
  }
  .join-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px 0;
    width: 50%;
    .nick {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      input {
        width: 100%;
        height: 40px;
        border: 0;
        border-radius: 6px;
        background-color: var(--color-title);
        font-size: var(--size-20);
        font-weight: var(--weight-700);
        text-align: center;
      }
      .vaildate {
        font-size: var(--size-12);
        color: var(--color-blue);
        text-transform: uppercase;
        line-height: var(--size-24);
      }
    }
    .join-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 12px;
      width: 100%;
      height: 40px;
      border-radius: 6px;
      font-size: var(--size-12);
      font-weight: var(--weight-700);
      color: var(--color-text);
      ${(props) =>
        props.isJoinActive
          ? css`
              background-color: var(--color-blue);
              color: var(--color-bg);
            `
          : css`
              background-color: var(--color-line);
            `};
      text-align: center;
      text-transform: uppercase;
    }
  }
`;
