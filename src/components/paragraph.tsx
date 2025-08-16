interface ParagraphProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

export const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return <p {...props}>{children}</p>;
};
