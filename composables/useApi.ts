export const useApi = (url) => {
    // let authToken = useCookie('auth_token') // 假设您将 token 存储在 cookie 中
    let authToken = "8f80d6094edcd486411ddc90d4fa4f18ed87f9fe9edae7fe7cb423e3ce261b23ce76afdedfc3cf2e3689bd1b03e9f504cbded28e7645eed305db44f61e914053e9fb4b4999d30c743b67fe2a052bff812b6165825f1502f22f991ff41a44536c67a88f99ae0f525ee710ee010834ffddaa1501dc60c7da7dac18060f46612708"
    return useLazyFetch(url, {
      baseURL: 'https://cms.stoneboss.vip/api', // 统一设置基础 URL
      server: true,
      key: url, // 添加缓存键
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  };