import React from 'react'
// using alert as a prop

function Alert(props) {
  return (
    <>
     <div class="alert alert-warning alert-dismissible fade show"  id="alerty"role="alert">
       <strong> {props.alerty}</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </>
  )
}
export default Alert;


