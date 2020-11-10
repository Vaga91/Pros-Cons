import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./header.module.scss";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={`header ${styles.header}`}>
      <h1>{t("header.content")}</h1>
    </header>
  );
};

export default Header;
