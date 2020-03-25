import { css } from 'styled-components';

type Props = {
	rows?: 1 | 2 | 3;
	cols?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Element = css`
  align-items: center;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  margin-right: 4rem;
  height: 100%;
	width: 100%;

	grid-column-end : span ${(p: Props) => p.cols ?? 1};
	grid-row-end : span ${(p: Props) => p.rows ?? 1};
`;