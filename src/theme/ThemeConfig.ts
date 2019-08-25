import Color from '../lib/base/Color';

type ThemeConfig = {
    colors: {
        primary: Color;
    };
};

const defaultPrimary = new Color(234, 97, 43);

function ThemeConfig(primary: Color = defaultPrimary): ThemeConfig 
{
    return { colors: { primary} };
}

export default ThemeConfig;