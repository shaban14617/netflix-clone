import styled from "styled-components";

// import { Container, Row, Column, Link, Title, Text, Break }

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  padding: 70px 56px;
  margin: auto;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
`;
export const Title = styled.p`
  font-size: 19px;
  color: #757575;
  margin-bottom: 40px;
`;
export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
