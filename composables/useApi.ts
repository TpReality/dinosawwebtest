export const useApi = (url) => {
    // let authToken = useCookie('auth_token') // 假设您将 token 存储在 cookie 中
    let authToken = "ae29b76ec76e6add8e79622c953ec8b2aaec9198d7990d0aa59e83327f79af8daaaca22b249f52b47d749979e2ba9e4ed428c5071e74d8ef7de6b462239081d605ff5cda3ba853944ca70320ed8578471cd1c8274f4ec8f2cb77b70a584c1c8f196bf68fd348ca98fa52d0d672175fde5afb1649eb17cb39de574769cb9eb1ec"
    return useFetch(url, {
      baseURL: '/api', // 统一设置基础 URL
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  };