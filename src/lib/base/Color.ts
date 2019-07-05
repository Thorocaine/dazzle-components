import { css, InterpolationValue } from 'styled-components';

const t = new Array();

class Color extends Array<InterpolationValue> {
  constructor(
    public readonly hue: number,
    public readonly saturation: number,
    public readonly light: number
  ) {
    super(1);
    this[0] = `hsl(${hue}, ${saturation}%, ${light}%)`;
  }

  public static red = () => new Color(360, 100, 50);
  public static green = () => new Color(120, 100, 50);
  public static blue = () => new Color(240, 100, 50);

  public turn = (x: number) =>
    new Color(this.hue + x, this.saturation, this.light);

  public complementary = () => this.turn(180);
  public narrow = (): [Color, Color] => this.triadic(30);
  public split = (): [Color, Color] => this.triadic(60);
  public tetradic = (): [Color, Color, Color] => [
    this.turn(60),
    this.turn(210),
    this.turn(270)
  ];

  public triadic = (arch: number = 120): [Color, Color] => {
    const first = (360 - arch) / 2;
    return [this.turn(first), this.turn(first + arch)];
  };
}

const test = css`
  background: blue;
  color: ${x => 'blue'};
`;

const test2 = css`
  ${test}
`;

// const t = Color.red();
// const b = t['color'];

export default Color;
export { test2 };
