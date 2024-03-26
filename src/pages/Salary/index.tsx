import { FC, useEffect, useState } from 'react'
import { getUserAccessToken } from '../../util/auth'

interface UserInfo{
   name:string;
   email:string;
   user_id:string
}
const Salary: FC = () => {
  const [code, setCode] = useState<string>();
  const [info, setInfo] = useState<UserInfo>();
  const { name, email, user_id } = info || {};

  const getUrlParams = () => {
    let search = window.location.search.slice(1)
    let param = search.split('&');
    //根据lark官方文档，重定向后得url第一个参数为code
    console.log('param11', param[0].split('=')[1])
    setCode(param[0].split('=')[1])
  }

  const getRandomNumber = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    getUrlParams();
    console.log('@@', code)
    if (code != null) {
      console.log('@@进入了获取登录用户信息函数')
      alert('@@进入了获取登录用户信息函数')
      getUserAccessToken(code)
        .then(res => {
          setInfo(res.data)
          console.log(res.data.name)
        })
        .catch(error => {
          alert(error)
          console.log('@@')
        })
    }
  }, [code])

  return (
    <div>
      当前登录用户为:{name}<hr/>
      邮箱为:{email}<hr/>
      user_id为:{user_id}<hr/>
      基本薪资为:{getRandomNumber(5000,10000)}
    </div>
  )
}

export default Salary
