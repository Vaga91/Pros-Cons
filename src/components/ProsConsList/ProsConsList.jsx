import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Styled from "./styled";

const renderInputs = (data, name, handleChange) => {
  const { t } = useTranslation();
  return (
    <Styled.Items className="items">
      <Styled.Title>{t(name).toUpperCase()}</Styled.Title>
      <Styled.Ol>
        {data.map((el, i) => {
          const key = `${el.name}${i}`;
          return (
            <React.Fragment key={key}>
              <Styled.Li>
                <Styled.Input type="text" name={name} value={el.value || ""} onChange={e => handleChange(e, i)} />
              </Styled.Li>
            </React.Fragment>
          );
        })}
      </Styled.Ol>
    </Styled.Items>
  );
};

const ProsConsList = () => {
  const [list, setList] = useState({
    pros: [{ name: "pros", new: true }],
    cons: [{ name: "cons", new: true }]
  });

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const cloneList = [...list[name]];

    cloneList[i].value = value;

    if (value.length && cloneList[i].new) {
      cloneList[i].new = false;
      cloneList.push({ new: true, name });
    }

    if (!value.length) {
      cloneList.splice(i, 1);
    }

    setList({ ...list, [name]: cloneList });
  };

  return (
    <>
      <Styled.ItemsWrapper>
        {renderInputs(list.pros, "pros", handleChange)}
        {renderInputs(list.cons, "cons", handleChange)}
      </Styled.ItemsWrapper>
    </>
  );
};

export default ProsConsList;
