import React from 'react'
import styles from'./NotFound.module.css'
import notF from '../../Assets/imges/000-404.png'

const NotFound = () => {
  return (
    <div className='w-50 mx-auto my-5'>
  <img height={''} className='w-100 rounded-5 p-4 border border-2 border-primary'  src={notF} />
  </div>
  )
}

export default NotFound