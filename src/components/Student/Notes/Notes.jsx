import React from "react";
import classes from "./Notes.module.css";
import NotesFilter from "./Notes-Filter/NotesFilter";
import DATA from "../../../StudentNotesData";
import Card from "../Card/Card";

const Notes = () => {
  /*Notes filter state*/
  const [filter, setFilter] = React.useState({
    branch: "Any",
    semester: "Any",
    subject: "Any",
    unit: "Any",
  });

  /*Notes filter handler*/
  const filterHandler = (event) => {
    const { name, value } = event.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredNotes = DATA.filter((note) => {
    return (
      (filter.branch === "Any" || note.branch === filter.branch) &&
      (filter.semester === "Any" || note.semester === filter.semester) &&
      (filter.subject === "Any" || note.subject === filter.subject) &&
      (filter.unit === "Any" || note.unit === filter.unit)
    );
  });

  return (
    <div className={classes.notes__container}>
      <NotesFilter filter={filter} filterHandler={filterHandler} />
      <div className={classes.cards__section}>
        {filteredNotes.map((note) => {
          return (
            <Card
              key={note.id}
              branch={note.branch}
              semester={note.semester}
              subject={note.subject}
              unit={note.unit}
              submittedBy={note.submittedBy}
              approvedBy={note.approvedBy}
              date={note.date}
              likes={note.likes}
              dislikes={note.dislikes}
              views={note.views}
              downloads={note.downloads}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
