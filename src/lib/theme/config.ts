import Color from '../base/Color';

type ThemeConfig = {
    primary: Color;
    background: Color;
    spacingBase: number;
};

const defaultBackground = Color.white().lighten(-25);
const defaultPrimary = new Color(234, 97, 43);

function ThemeConfig(primary: Color = defaultPrimary, background: Color = defaultBackground): ThemeConfig 
{
    return {
        primary,
        background,
        spacingBase: 5
    };
}

export default ThemeConfig;