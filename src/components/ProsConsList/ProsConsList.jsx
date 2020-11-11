import React, { useState } from "react";
import Input from "./Input";
import Styled from "./styled";

const ProsConsList = () => {
  const [list, setList] = useState({
    pros: [{ name: "pros", newInput: true }],
    cons: [{ name: "cons", newInput: true }]
  });

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const cloneList = [...list[name]];

    cloneList.forEach((el, index) => {
      if (index === i) {
        if (cloneList[i].newInput) {
          cloneList.push({ newInput: true, name });
        }
        cloneList[index] = { ...el, newInput: false, value };

        if (!value.length) {
          cloneList.splice(index, 1);
        }
      }
    });

    setList({ ...list, [name]: cloneList });
  };

  return (
    <>
      <Styled.ItemsWrapper>
        <Input data={{ list: list.pros, name: "pros", handleChange }} />
        <Input data={{ list: list.cons, name: "pros", handleChange }} />
      </Styled.ItemsWrapper>
    </>
  );
};

export default ProsConsList;
