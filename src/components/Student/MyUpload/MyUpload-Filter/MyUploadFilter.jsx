import React from "react";
import Select from "../../../Utilities/Select";
import { MYUPLOAD_FILTER_DATA } from "../../../../FilterData";
import classes from "./MyUploadFilter.module.css";

const MyUploadFilter = ({filter, filterChangeHandler}) => {
  return (
    <div className={classes.filter__container}>
      <div className={classes.filter}>
        {Object.keys(MYUPLOAD_FILTER_DATA).map((key, index) => (
          <div key={index} className={classes.filter__item}>
            <label htmlFor={key}>{key[0].toUpperCase() + key.slice(1)}</label>
            <Select
              name={key}
              className={classes.filter__select}
              value={filter[key]}
              options={MYUPLOAD_FILTER_DATA[key]}
              onChange={filterChangeHandler}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyUploadFilter;
