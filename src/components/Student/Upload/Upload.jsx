import React from "react";
import classes from "./Upload.module.css";
import Select from "../../Utilities/Select";
import FileUpload from "../../Utilities/FileUpload";
import {UPLOAD_FILTER_DATA} from "../../../FilterData";

const Upload = () => {
  /*Notes upload filter state*/
  const [filter, setFilter] = React.useState({
    branch: "Any",
    semester: "Any",
    subject: "Any",
    unit: "Any",
  });

  /*Handle filter change*/
  const filterHandler = (event) => {
    const { name, value } = event.target;
    setFilter((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <div className={classes.upload__container}>
      <div className={classes.upload}>
        {Object.keys(UPLOAD_FILTER_DATA).map((key, index) => (
          <div key={index} className={classes.upload__item}>
            <label htmlFor={key}>
              {key[0].toUpperCase() + key.slice(1) + ": "}
            </label>
            <Select
              name={key}
              className={classes.upload__select}
              value={filter[key]}
              options={UPLOAD_FILTER_DATA[key]}
              onChange={filterHandler}
            />
          </div>
        ))}
        <FileUpload className={classes.upload__file} />
        <button className={classes.submit__button}>Submit</button>
      </div>
    </div>
  );
};

export default Upload;
