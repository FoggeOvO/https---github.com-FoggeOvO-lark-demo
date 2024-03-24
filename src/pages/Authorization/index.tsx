import {FC, useEffect} from 'react'
import { getUserAuthCode  } from '../../util/auth'

const Authorization: FC = () => {
    useEffect( () => {
        console.log('@@')
        getUserAuthCode()
        .then(data => {
          console.log('Current user info:', data);
        })
        .catch(error => {
          console.error('Failed to get current user info:', error);
        });
    },[])
  return (
    <div>
        Authorization!
    </div>
  )
}


export default Authorization