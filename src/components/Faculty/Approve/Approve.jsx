import React from 'react'
import ApproveCard from './ApproveCard/ApproveCard'
import DATA from "../../../../DATA/Approve-ReviewData"
import classes from './Approve.module.css'

const Approve = () => {
  return (
    <div className={classes.approve__container}>
      {DATA.map((data) => (
        <ApproveCard
          key={data.id}
          subject={data.subject}
          unit={data.unit}
          submittedBy={data.submittedBy}
          date={data.date}
        />
      ))}
    </div>
  )
}

export default Approve