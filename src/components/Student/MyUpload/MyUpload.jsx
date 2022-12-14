import React from "react";
import MyUploadFilter from "./MyUpload-Filter/MyUploadFilter";
import classes from "./MyUpload.module.css";
import MyUploadCard from "./MyUploadCard/MyUploadCard";
import DATA from "../../../../DATA/MyUploadData";

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
              semester={data.semester}
              subject={data.subject}
              unit={data.unit}
              approvedBy={data.approvedBy}
              date={data.date}
              credits={data.credits}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyUpload;
