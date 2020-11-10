import React, { useState } from "react";
import styles from "./ProsConsList.module.scss";

const ProsConsList = () => {
  const [list, setList] = useState({
    pros: [{ name: "pros", value: "", new: true }],
    cons: [{ name: "cons", value: "", new: true }]
  });

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const cloneList = [...list[name]];

    cloneList[i].value = value;

    if (value.length && cloneList[i].new) {
      cloneList[i].new = false;
      cloneList.push({ new: true, name });
      setList({ ...list, [name]: cloneList });
    }

    if (!value.length) {
      const filtered = cloneList.filter((el, index) => index !== i);
      setList({ ...list, [name]: filtered });
    } else {
      setList({ ...list, [name]: cloneList });
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div>
          {list.pros.map((el, i) => (
            <input key={el.value} type="text" name="pros" value={el.value || ""} onChange={e => handleChange(e, i)} />
          ))}
        </div>
        <h3>Divider</h3>
        <div>
          {list.cons.map((el, i) => (
            <input key={el.value} type="text" name="cons" value={el.value || ""} onChange={e => handleChange(e, i)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProsConsList;
