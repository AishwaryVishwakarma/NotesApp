import React from "react";
import MyUploadFilter from "./MyUpload-Filter/MyUploadFilter";
import classes from "./MyUpload.module.css";
import MyUploadCard from "./MyUploadCard/MyUploadCard";
import DATA from "../../../MyUploadData";

const MyUpload = () => {
  /*State for the filter*/
  const [filter, setFilter] = React.useState({
    semester: "Any",
    subject: "Any",
    unit: "Any",
  });

  /*Filter change handler*/
  const filterChangeHandler = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  /*Filtering the data*/
  const filteredData = DATA.filter((data) => {
    return (
      (filter.semester === "Any" || data.semester === filter.semester) &&
      (filter.subject === "Any" || data.subject === filter.subject) &&
      (filter.unit === "Any" || data.unit === filter.unit)
    );
  });

  console.log(filteredData);

  return (
    <>
      <div className={classes.myUpload__filter__section}>
        <MyUploadFilter filter={filter} filterChangeHandler={filterChangeHandler} />
      </div>
      <div className={classes.card__section}>
        {filteredData.map((data, index) => (
          <MyUploadCard key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default MyUpload;
