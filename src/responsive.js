import { css } from "styled-components";
export const mobile = (props) => {
  return css`
    @media (max-device-width: 480px) {
      ${props}
    }
  `;
};