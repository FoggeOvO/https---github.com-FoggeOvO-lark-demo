import axios from "axios";

const app_id = 'cli_a577e7444cb9d010';
const app_secret = 'FhZy5MufEokcoy285TJ3XdPRwMpWDs8E';


// 获取 Access Token 的函数
export const getTenantAccessToken = async () => {
    try {
      const response = await axios({
        method:'post',
        url: `https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal/`,
        headers:{
            'Content-Type': 'application/json; charset=utf-8'
        },
        data:{
            app_id,
            app_secret
        }
      });
      return response.data.app_access_token;
    } catch (error) {
      console.error('Error getting access token:', error);
      throw error;
    }
  }

  // 获取 Access Token 的函数
export const getUserAuthCode = async () => {
    const redirect_uri = 'https%3A%2F%2F127.0.0.1%2Fsalary'
    const scope = 'contact:user.employee_id:readonly'
    try {
      const response = await axios({
        method:'get',
        url: `/api/open-apis/authen/v1/authorize?app_id=${app_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=123`,
        headers:{
            'Content-Type': 'application/json; charset=utf-8'
        },
        data:{
            app_id,
            app_secret
        }
      });
      return response.data.app_access_token;
    } catch (error) {
      console.error('Error getting access token:', error);
      throw error;
    }
  }

  
 // 获取当前用户信息的函数
 export const getUserAccessToken = async () => {
    try {
      const accessToken = await getTenantAccessToken();
      const response = await axios.get('https://open.larksuite.com/open-apis/authen/v1/oidc/access_token', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error getting current user info:', error);
      throw error;
    }
  }
  


  // 获取当前用户信息的函数
  export const getCurrentUserInfo = async () => {
    try {
      const userAccessToken = await getUserAccessToken();
      const response = await axios.get('https://open.larksuite.com/open-apis/authen/v1/user_info', {
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error getting current user info:', error);
      throw error;
    }
  }
  
