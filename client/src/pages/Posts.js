import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BasicModalDialog from '../components/modal'
import { getUserInfo } from '../slices/userSlice'

const Posts = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getUserInfo())
  }

  )
  return (
    <div>Posts
      <BasicModalDialog/>
    </div>
  )
}

export default Posts