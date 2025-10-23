// EmailJS 配置文件
// 使用前需要在 https://www.emailjs.com/ 注册账户并配置

export const EMAIL_CONFIG = {
  // 替换为你的 EmailJS 配置
  SERVICE_ID: 'service_a164qal',     // Gmail/QQ邮箱等服务ID
  TEMPLATE_ID: 'template_o7vbbj6',   // 邮件模板ID
  PUBLIC_KEY: 'Dy7mKsQhLE7M6Ik9L',              // 公钥
  
  // 收件人邮箱
  RECIPIENT_EMAIL: 'jun524404@gmail.com',
  RECIPIENT_NAME: 'Support Team'
};

// EmailJS 初始化函数
import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
};

// 发送邮件函数
export const sendEmailViaEmailJS = async (templateParams) => {
    // console.log(templateParams)
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('EmailJS 发送失败:', error);
    throw error;
  }
};