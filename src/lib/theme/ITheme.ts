import { BackgroundColorProperty } from 'csstype';

export default interface ITheme {
  background: BackgroundColorProperty;
  primaryColor: BackgroundColorProperty;
}

const defaultTheme: ITheme = {
  background: 'green',
  primaryColor: 'blue'
};

export { defaultTheme };
