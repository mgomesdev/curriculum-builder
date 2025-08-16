interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export const Heading = ({ children, ...props }: HeadingProps) => {
  return <h1 {...props}>{children}</h1>;
};
