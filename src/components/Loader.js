import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
const Loader1 = () => {
  return (
    <div style={{width:"100%",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
  </div>
  )
}

export default Loader1