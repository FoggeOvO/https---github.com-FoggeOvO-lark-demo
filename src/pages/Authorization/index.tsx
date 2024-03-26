import { FC, useEffect, useState } from 'react'
import { getUserAuthCode } from '../../util/auth'

const Authorization: FC = () => {

  useEffect(() => {
    getUserAuthCode();
  }, [])
  return (
    <div>
      Authorization new02!
    </div>
  )
}


export default Authorization