import RedirectionComponent from '@/components/commonRedirection/RedirectionComponent'
import React from 'react'

const page = () => {
  return (
    <RedirectionComponent url={'/home'} statusCode={301}/>
  )
}

export default page