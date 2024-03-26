import axios from "axios";

const app_id = 'cli_a577e7444cb9d010';
const app_secret = 'FhZy5MufEokcoy285TJ3XdPRwMpWDs8E';


// 获取 Access Token 的函数
export const getTenantAccessToken = async () => {
  try {
    const response = await axios({
      method: 'post',
      url: `/api/open-apis/auth/v3/tenant_access_token/internal/`,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      data: {
        app_id,
        app_secret
      }
    });
    return response.data.tenant_access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}


// 获取 Access Token 的函数
export const getUserAuthCode = async () => {
  const redirect_uri = 'http%3A%2F%2F223.26.76.18:3000%2Fsalary/'
  const scope = 'contact:user.employee_id:readonly'
  window.location.href = `https://open.larksuite.com/open-apis/authen/v1/authorize?app_id=${app_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=123`;
}


// 获取当前用户信息的函数
export const getUserAccessToken = async (code: string) => {
  try {
    console.log('请求拿到得code是:', code)
    const accessToken = await getTenantAccessToken();
    console.log('请求拿到得accessToken是:', accessToken)

    const response = await axios({
      method:'post',
      url: '/api/open-apis/authen/v1/access_token',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data:{
        'grant_type': 'authorization_code',
        'code': code
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting current user info:', error);
    throw error;
  }
}




