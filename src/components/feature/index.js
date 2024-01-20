import { Container, Title, Subtitle } from "./styles/feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function TitleFeature({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.Subtitle = function SubtitleFeature({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
