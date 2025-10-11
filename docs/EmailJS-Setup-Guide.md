# EmailJS 配置指南

## 🚀 快速开始

### 1. 注册 EmailJS 账户
访问 [https://www.emailjs.com/](https://www.emailjs.com/) 并注册账户

### 2. 添加邮件服务
在 EmailJS 控制台中添加邮件服务：

#### 选择 QQ 邮箱服务：
1. 点击 "Add New Service"
2. 选择 "Gmail" (QQ邮箱使用Gmail配置)  
3. 填写配置：
   - **Service ID**: `service_xxxxxxx` (自动生成)
   - **邮箱地址**: `huangjunjiecursor@gmail.com`
   - **密码**: QQ邮箱的授权码 (不是登录密码)

#### 获取QQ邮箱授权码：
1. 登录QQ邮箱 → 设置 → 账户
2. 开启 SMTP 服务
3. 生成授权码 (16位字符)

### 3. 创建邮件模板
在 EmailJS 控制台创建邮件模板：

#### 模板变量：
```
收件人: {{to_email}}
发件人: {{from_name}} <{{from_email}}>
主题: {{subject}}

邮件内容：
===================
表单类型: {{form_type}}
提交时间: {{submit_time}}

客户信息：
姓名: {{from_name}}
联系方式: {{contact_info}}

产品信息（如适用）：
CNC类型: {{cnc_type}}
原材料: {{raw_materials}}

客户需求：
{{requirements}}

详细信息：
{{message}}
===================

请及时回复客户！
```

### 4. 获取配置信息
从 EmailJS 控制台获取：
- **Service ID**: `service_xxxxxxx`
- **Template ID**: `template_xxxxxxx`  
- **Public Key**: 在 Account 页面找到

### 5. 更新配置文件
编辑 `utils/emailConfig.js`：

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_你的服务ID',      // 替换这里
  TEMPLATE_ID: 'template_你的模板ID',    // 替换这里  
  PUBLIC_KEY: '你的公钥',               // 替换这里
  
  RECIPIENT_EMAIL: 'huangjunjiecursor@gmail.com',
  RECIPIENT_NAME: 'Support Team'
};
```

## 📧 邮件模板示例

### 产品询价邮件模板：
```
主题: 新的产品询价 - {{from_name}}

您收到一份新的产品询价：

客户信息：
- 姓名：{{from_name}}
- 联系方式：{{contact_info}}
- 提交时间：{{submit_time}}

产品需求：
- CNC类型：{{cnc_type}}
- 加工材料：{{raw_materials}}
- 具体要求：{{requirements}}

请及时联系客户！
```

### 技术支持邮件模板：
```
主题: 技术支持请求 - {{from_name}}

您收到一份技术支持请求：

客户信息：
- 姓名：{{from_name}}  
- 联系方式：{{contact_info}}
- 提交时间：{{submit_time}}

支持需求：
{{requirements}}

请安排技术人员及时响应！
```

## 🔧 测试配置

配置完成后，在组件中测试：

1. 填写表单
2. 点击提交按钮
3. 检查控制台日志
4. 确认邮件是否发送到 `huangjunjiecursor@gmail.com`

## ⚠️ 注意事项

1. **QQ邮箱限制**：每天发送邮件有数量限制
2. **授权码安全**：不要将授权码提交到代码仓库
3. **测试环境**：建议先在测试环境验证
4. **错误处理**：代码已包含备用方案（mailto链接）

## 🆘 常见问题

### Q: 邮件发送失败？
A: 检查授权码是否正确，QQ邮箱SMTP是否开启

### Q: 收不到邮件？
A: 检查垃圾邮件文件夹，确认模板配置正确

### Q: 提示网络错误？
A: 检查 EmailJS 服务配置，确认公钥正确

## 📞 技术支持

如有问题，请检查：
1. EmailJS 控制台配置
2. 浏览器控制台错误信息
3. QQ邮箱SMTP设置