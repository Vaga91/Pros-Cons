import React from "react";
import PropTypes from "prop-types";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, green, orange } from "@material-ui/core/colors";
import Header from "./Header";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
    error: orange
  }
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
