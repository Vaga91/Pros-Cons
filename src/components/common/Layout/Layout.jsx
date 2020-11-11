import React from "react";
import PropTypes from "prop-types";
import Styled from "./styled";

const Layout = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Title>Should I eat at McDonalds?</Styled.Title>
      </Styled.Header>
      {children}
    </Styled.Wrapper>
  );
};

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
