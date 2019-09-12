import styled from 'styled-components';

const Slider = styled.span<BaseProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${p => (p.disabled ? '#ccc' : 'white')};
    border-radius: 50%;
  }
`;

export default Slider;
