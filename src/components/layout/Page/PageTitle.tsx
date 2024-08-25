import { Outlined, type OutlinedProps } from "../../Outlined/Outlined";

type Props = OutlinedProps;

export const PageTitle = (props: Props) => {
  const { children, style, className = "", ...otherProps } = props;

  return (
    <Outlined
      strokeColor="white"
      className={`absolute left-4 top-4 text-8xl font-black ${className}`}
      style={{
        fontFamily: "'Noto Serif', serif",
        ...style,
      }}
      {...otherProps}
    >
      <h1>{children}</h1>
    </Outlined>
  );
};
