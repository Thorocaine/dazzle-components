import React, { useCallback, ChangeEventHandler } from 'react';
import Switch from './Toggle/Switch';
import ToggleInput from './Toggle/ToggleInput';
import Slider from './Toggle/Slider';
import styled from 'styled-components';

type Props = BaseProps & {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (value: boolean) => void;
};

const ToggleLabel = styled.span`
  padding-left: 70px;
  height: 100%;
  display: inline-block;
  line-height: 2rem;
`;

function Toggle({ checked, disabled, onChange, label, variant }: Props) {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    e => onChange && onChange(e.currentTarget.checked),
    [onChange]
  );
  return (
    <Switch>
      {!!label && <ToggleLabel>{label}</ToggleLabel>}
      <ToggleInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        variant={variant}
      />
      <Slider disabled={disabled} />
    </Switch>
  );
}

export default Toggle;
