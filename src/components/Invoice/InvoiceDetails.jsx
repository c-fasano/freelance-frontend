import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
// Services
import * as invoiceService from '../../services/invoiceService'
// Components
import InvoiceCard from './InvoiceCard';
import InvoiceActions from './InvoiceActions';

const InvoiceDetails = (props) => {
  const { id } = useParams()
  const [invoice, setInvoice] = useState()

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const invoiceData = await invoiceService.getInvoiceById(id)
        setInvoice(invoiceData)
      } catch (error) {
        throw error
      }
    }
    fetchInvoice()
  }, [id])

  const markInvoicePaid = async (invoiceId) => {
    try {
      const updatedInvoice = await invoiceService.markPaid(invoiceId)
      setInvoice(updatedInvoice)
      props.handleUpdateInvoiceList(updatedInvoice)
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <h1>Invoice Details</h1>
      {invoice && 
        <InvoiceCard 
          invoice={invoice}
          key={invoice._id}
        />
      }
      {invoice && 
        <InvoiceActions 
          invoice={invoice}
          markInvoicePaid={markInvoicePaid}
        />
      }
    </>
  )
}

export default InvoiceDetails