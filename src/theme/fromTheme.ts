import ThemeConfig from './ThemeConfig';
import { InterpolationFunction, Interpolation, ThemedStyledProps, StyledComponentPropsWithRef } from 'styled-components';

type ComponentKey = keyof JSX.IntrinsicElements | React.ComponentType<any>;

type Func<C extends ComponentKey> 
= InterpolationFunction<ThemedStyledProps<StyledComponentPropsWithRef<C>, ThemeConfig>>

type Selector<P> = (theme: ThemeConfig) => Interpolation<P>;

const defaultTheme = ThemeConfig();
function fromTheme<C extends ComponentKey>(selector: Selector<C>): Func<C>
{
    return (p) => 
    {
        const theme = p.theme && p.theme.colors ? p.theme : defaultTheme;
        const result = selector(theme);
        return result;
    }
}

export default fromTheme;