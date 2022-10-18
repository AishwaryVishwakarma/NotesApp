import React from "react";
import classes from "./MyUpload.module.css";
import MyUploadFilter from "./MyUpload-Filter/MyUploadFilter";
import DATA from "../../../../DATA/MyUploadData";
import MyUploadCard from "./MyUploadCard/MyUploadCard";

const MyUpload = () => {
  /*State for the filter*/
  const [filter, setFilter] = React.useState({
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
      (filter.subject === "Any" || data.subject === filter.subject) &&
      (filter.unit === "Any" || data.unit === filter.unit)
    );
  });
  return (
    <>
      <div className={classes.myUpload__container}>
        <div className={classes.myUpload__filter__section}>
          <MyUploadFilter
            filter={filter}
            filterChangeHandler={filterChangeHandler}
          />
        </div>
        <div className={classes.card__section}>
          {filteredData.map((data, index) => (
            <MyUploadCard
              key={index}
              subject={data.subject}
              unit={data.unit}
              date={data.date}
            />
          ))}
          {filteredData.map((data, index) => (
            <MyUploadCard
              key={index}
              subject={data.subject}
              unit={data.unit}
              date={data.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyUpload;
