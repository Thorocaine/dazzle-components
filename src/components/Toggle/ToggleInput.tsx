import styled from 'styled-components';
import Slider from './Slider';
import { colorFromTheme } from 'theme/fromTheme';

const ToggleInput = styled.input<BaseProps>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${p => colorFromTheme('#ccc', p.disabled)(p)};
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }
`;

export default ToggleInput;
