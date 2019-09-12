import React from 'react';

type Component<T extends InnerProps> = (props: T) => React.ReactElement;
type InnerProps = { disabled?: boolean } & BaseProps;
type Props<T extends InnerProps> = InnerProps & {
  InlineComponent: Component<T>;
  valueProp: keyof T;
};

function StoryVariants<T extends InnerProps>({
  InlineComponent,
  valueProp,
  ...props
}: Props<T>) {
  const Inline = InlineComponent as Component<InnerProps>;
  return (
    <>
      <p>
        <Inline {...{ [valueProp]: 'default', ...props }} />
      </p>
      <p>
        <Inline {...{ [valueProp]: 'primary', ...props }} variant="primary" />
      </p>
    </>
  );
}

export default StoryVariants;
