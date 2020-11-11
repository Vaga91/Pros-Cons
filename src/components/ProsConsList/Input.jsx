import React from "react";
import PropTypes from "prop-types";
import Styled from "./styled";

const Input = ({ data }) => {
  const { list, name, handleChange } = data;

  return (
    <>
      <Styled.Items>
        <Styled.Title>{name.toUpperCase()}</Styled.Title>
        <Styled.Ol>
          {list.map((el, i) => {
            const key = `${el.name}${i}`;
            return (
              <Styled.Li key={key}>
                <Styled.Input type="text" name={name} value={el.value || ""} onChange={e => handleChange(e, i)} />
              </Styled.Li>
            );
          })}
        </Styled.Ol>
      </Styled.Items>
    </>
  );
};

Input.propTypes = {
  data: PropTypes.object.isRequired
};

export default Input;
