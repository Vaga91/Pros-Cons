import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Styled from "./styled";

const Layout = ({ children }) => {
  const { t } = useTranslation();
  return (
    <Styled.Wrapper className="wrapper">
      <Styled.Header className="header">
        <Styled.Title>{t("header.title")}</Styled.Title>
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
