import React from 'react'
import { useParams } from 'react-router'

const NewPostScreen = () => {
  const params = useParams()
  console.log("new", params)
  
  return(
    <div>
      new post
    </div>
  )
}

export default NewPostScreen