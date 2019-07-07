import Color from '../base/Color';

export default interface ITheme {
  background: Color;
  primaryColor: Color;
  spacingBase: number;
}

const defaultTheme: ITheme = {
  background: Color.white().lighten(-25),
  primaryColor: new Color(234, 97, 43),
  spacingBase: 5
};

export { defaultTheme };
