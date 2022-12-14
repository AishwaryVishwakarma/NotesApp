import React from "react";
import classes from "./NotesFilter.module.css";
import Select from "../../../Utilities/Select";
import {NOTES_FILTER_DATA} from "../../../../../DATA/FilterData";

const NotesFilter = ({filter, filterHandler}) => {
  return (
    <div className={classes.filter__container}>
      <div className={classes.filter}>
        {Object.keys(NOTES_FILTER_DATA).map((key, index) => (
          <div key={index} className={classes.filter__item}>
            <label htmlFor={key}>{key[0].toUpperCase() + key.slice(1)}</label>
            <Select
              name={key}
              className={classes.filter__select}
              value={filter[key]}
              options={NOTES_FILTER_DATA[key]}
              onChange={filterHandler}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesFilter;
