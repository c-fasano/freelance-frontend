import React, { useEffect, useRef } from 'react';

const ClientForm = ({handleCreateClient, handleChange, validForm, setValidForm, formData}) => {
  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
    <>
      <h1>Client Form</h1>
      <form onSubmit={(e) => handleCreateClient(e)} ref={formElement}>
        <label>Name: </label>
        <input
          required
          type='text'
          name='name'
          autoComplete='off'
          onChange={handleChange}
        /><br />
        <label>Email: </label>
        <input
          required
          type="text" 
          name="email"
          autoComplete='off'
          onChange={handleChange}
        />
        <button
          type='submit'
          disabled={!validForm}
        >
          Add Client
        </button>
      </form>
    </>
  )
}

export default ClientForm