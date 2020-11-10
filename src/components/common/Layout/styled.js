import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 30px auto 0 auto;
  box-shadow: 0px 3px 18px 0px rgba(168, 168, 255, 0.4);
`;

const Header = styled.header`
  background-color: #858585;
`;

const Title = styled.h1`
  padding: 30px 0;
  text-align: center;
  color: #fff;
  font-weight: 600;
`;

export default { Wrapper, Header, Title };
