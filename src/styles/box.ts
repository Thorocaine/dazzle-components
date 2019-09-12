import { css } from 'styled-components';

type Props = { span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 };
const box = css`
  box-sizing: border-box;
  width: ${(p: Props) =>
    !p.span ? '100%' : `calc(${Math.round(p.span / 0.12)}% - 0.5rem)`};
`;

export default box;
