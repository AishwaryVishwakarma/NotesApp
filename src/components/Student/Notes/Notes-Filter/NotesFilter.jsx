import React from "react";
import classes from "./NotesFilter.module.css";
import Select from "../../../Utilities/Select";
import {NOTES_FILTER_DATA} from "../../../../FilterData";

const NotesFilter = ({filter, filterHandler}) => {
  // /*Notes filter state*/
  // const [filter, setFilter] = React.useState({
  //   branch: "Any",
  //   semester: "Any",
  //   subject: "Any",
  //   unit: "Any",
  // });

  // /*Handle filter change*/
  // const handleFilterChange = (event) => {
  //   const { name, value } = event.target;
  //   setFilter((prev) => ({ ...prev, [name]: value }));
  // };
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
