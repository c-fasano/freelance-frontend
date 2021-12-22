import React from 'react';
import moment from 'moment'

const InvoiceCard = (props) => {
  return (
    <>
      <h1>{props.invoice.title}</h1>
      <h2>{props.invoice.is_Paid ? "Paid" : "Pending"}</h2>
      <h3>Client: {props.invoice.clientList.name}</h3>
      <h3>Date Created: {moment(props.invoice.dateCreated).format('MM/DD/YYYY')}</h3>
      {props.invoice.dueDate && 
        <h3>Due Date: {moment(props.invoice.dueDate).format('MM/DD/YYYY')}</h3>
      }
      <h3>Hourly Rate: ${props.invoice.hourlyRate}/hr</h3>
      <h3>Hours Worked: {props.invoice.hoursWorked}</h3>
      <h3>Total: ${props.invoice.invoiceTotal}</h3>
    </>
  )
}

export default InvoiceCard