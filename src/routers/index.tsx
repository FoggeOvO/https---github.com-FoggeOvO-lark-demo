import IRouter from "../interfaces/IRouter";
import Authorization from "../pages/Authorization";
import Salary from "../pages/Salary";

const routers: IRouter[] = [
    {
        path:'/index',
        title:'default',
        key:'0001'
    },
    {
        path:'/auth',
        title:'权限鉴定',
        key:'0002',
        element:<Authorization/>
    },
    {
        path:'/salary',
        title:'薪资单',
        key:'0003',
        element:<Salary/>
    }
]

export default routers