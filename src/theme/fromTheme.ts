import ThemeConfig from './ThemeConfig';
import { ThemedStyledProps, StyledComponentPropsWithRef } from 'styled-components';
import Color from '../lib/base/Color';

type ComponentKey = keyof JSX.IntrinsicElements | React.ComponentType<any>;

type Selector<T> = (theme: ThemeConfig) => T;

const defaultTheme = ThemeConfig();
function fromTheme<C extends ComponentKey, T>(selector: Selector<T>)
{
    type Props = ThemedStyledProps<StyledComponentPropsWithRef<C>, ThemeConfig>;
    return (props: Props): T => 
    {
        const theme = props.theme && props.theme.colors ? props.theme : defaultTheme;
        const result = selector(theme);
        return result;
    }
}

type ColorFromTheme = (props: BaseProps) => Color | string;

function colorFromTheme(): ColorFromTheme;
function colorFromTheme(defaultColor: string): ColorFromTheme;
function colorFromTheme(disabled: boolean): ColorFromTheme;
function colorFromTheme(defaultColor: string, disabled?: boolean): ColorFromTheme;
function colorFromTheme(arg1?: string | boolean, arg2?: boolean): ColorFromTheme
{
    const defaultColor = typeof arg1 === 'string' ? arg1 : 'default';
    const disabled = typeof arg1 === 'boolean' ? arg1 : arg2;
    return function({variant, ...props}: BaseProps): Color | string
    {
        if (!variant) return defaultColor;
        const color = fromTheme(t => t.colors[variant])(props);
        return disabled ? color.lighten(20).saturate(-20) : color;
    }
}

export default fromTheme;
export { colorFromTheme };