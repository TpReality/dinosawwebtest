<template>
    <div>
   <!-- Get Easy Solution Section -->
            <section class="get-solution-section" v-if="getEasySolutionType == 1 || getEasySolutionType == 3">
                <div class="container">
                    <div class="solution-content">
                        <!-- Left Side - Product Image -->
                        <!-- Contact Information -->
                        <div class="contact-info">
                            <div class="contact-header" :class="getEasySolutionType == 3?'biger':''">
                                <h2 v-if="getEasySolutionType == 1" class="contact-title">Get Easy Solution</h2>
                                <h2 v-else class="contact-title">
                                    <p>Contact Dinosaw</p>
                                    Get Easy Solution
                                </h2>
                                <div class="contact-description">
                                    <p>Are you looking for the perfect cutting machines or processing solutions for hard
                                        and brittle materials?</p>
                                    <p>Facing challenges in stone quarrying, countertop cutting, concrete and underwater
                                        pipeline cutting, stainless steel rust removal and grinding, luxury thin slab
                                        cutting, agate and gemstone cutting, graphite cutting, or even building
                                        demolition?</p>
                                    <p>Leave your inquiry, and you can expect a reply within 12 hours with tailored
                                        solutions!</p>
                                </div>
                            </div>

                            <div class="contact-methods">
                                <!-- Email Contact -->
                                <div class="contact-card">
                                    <div class="contact-icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M5.33 8L16 16L26.67 8" stroke="#000000" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <rect x="4" y="6" width="24" height="20" rx="2" stroke="#000000"
                                                stroke-width="2" />
                                        </svg>
                                    </div>
                                    <div class="contact-details">
                                        <p class="contact-method-title">Prefer email?</p>
                                        <p class="contact-method-desc">You can also reach us at</p>
                                        <a href="mailto:gma@dinosawmachine.com"
                                            class="contact-link">gma@dinosawmachine.com</a>
                                    </div>
                                </div>

                                <!-- WhatsApp Contact -->
                                <div class="contact-card">
                                    <div class="contact-icon whatsapp">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path
                                                d="M16 2C8.268 2 2 8.268 2 16c0 2.76.8 5.32 2.16 7.48L2 30l6.52-2.16C10.68 29.2 13.24 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
                                                fill="#40C351" />
                                            <path
                                                d="M12.5 9.5c-.3 0-.6.1-.8.3-.2.2-.7.7-.7 1.7s.7 2 .8 2.1c.1.1 1.6 2.5 3.9 3.5.5.2 1 .4 1.3.5.5.2 1 .2 1.4.1.4-.1 1.3-.5 1.5-1s.2-1-.1-1.1c-.1-.1-.3-.2-.6-.3s-1.3-.6-1.5-.7c-.2-.1-.3-.1-.4.1s-.5.6-.6.7c-.1.1-.2.2-.4.1s-.8-.3-1.5-.9c-.6-.5-1-1.1-1.1-1.3s0-.3.1-.4c.1-.1.2-.2.3-.3s.1-.2.2-.3c.1-.1.1-.2 0-.3s-.4-1-.6-1.4c-.2-.4-.4-.3-.6-.3z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div class="contact-details">
                                        <p class="contact-method-title">Whatsapp?</p>
                                        <a href="https://wa.me/8619859013937" class="contact-link">+86 198-5901-3937</a>
                                    </div>
                                </div>

                                <!-- Phone Contact -->
                                <div class="contact-card">
                                    <div class="contact-icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path
                                                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                                                stroke="#2C2C2C" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="contact-details">
                                        <p class="contact-method-title">Telephone?</p>
                                        <a href="tel:+8619859013937" class="contact-link">+86 198-5901-3937</a>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Trusted Companies Section -->
                            <div class="trusted-companies" v-if="getEasySolutionType == 3">
                                <div class="companies-logos">
                                    <div class="logo-row">
                                        <div class="company-logo logo-1"></div>
                                        <div class="company-logo logo-2"></div>
                                    </div>
                                    <div class="logo-row">
                                        <div class="company-logo logo-3"></div>
                                        <div class="company-logo logo-4"></div>
                                        <div class="company-logo logo-5"></div>
                                        <div class="company-logo logo-6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right Side - Form and Contact Info -->
                        <div class="form-contact-wrapper">
                            <!-- Inquiry Form -->
                            <div class="inquiry-form">
                                <div class="form-container">
                                    <div class="form-content">
                                        <!-- CNC Type Selection -->
                                        <div class="form-group">
                                            <h4 class="form-title">What type of CNC machine or diamond tools are you
                                                looking for?</h4>
                                            <div class="select-container">
                                                <div class="select-wrapper">
                                                    <select class="select-display" required v-model="form.types"><option value="" disabled="" selected="">CNC Types</option><option value="Wire saw machine series">Wire saw machine series</option><option value="Circular Saw Machine">Circular Saw Machine</option><option value="Drilling and Engraving Machine">Drilling and Engraving Machine</option><option value="Grinding and Polishing Machine">Grinding and Polishing Machine</option><option value="Mining and Quarrying Machine">Mining and Quarrying Machine</option><option value="Other Industry Machine">Other Industry Machine</option><option value=" Diamond Tools"> Diamond Tools</option></select>
                                                    <div class="select-icon">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M4 6L8 10L12 6" stroke="#999999" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Materials Selection -->
                                        <div class="form-group">
                                            <h4 class="form-title">What materials will you be working with?</h4>
                                            <div class="select-container">
                                                <div class="select-wrapper">
                                                    <select class="select-display" required v-model="form.materials"><option value="" disabled="" selected="">Raw Materials</option><option value="Marble">Marble</option><option value="Granite">Granite</option><option value="Quartz">Quartz</option><option value="Ceramic">Ceramic</option><option value="Steel">Steel</option><option value="Concrete">Concrete</option><option value="Other">Other</option></select>
                                                    <div class="select-icon">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M4 6L8 10L12 6" stroke="#999999" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Name Input -->
                                        <div class="form-group">
                                            <h4 class="form-label">What's your name?</h4>
                                            <div class="input-container">
                                                <input type="text" placeholder="Name" class="form-input" v-model="form.name" />
                                            </div>
                                        </div>

                                        <!-- Contact Input -->
                                        <div class="form-group">
                                            <h4 class="form-title">What's your Whatsapp phone number or email address.
                                            </h4>
                                            <div class="input-container">
                                                <input type="text" placeholder="Whatsapp phone number& Email"
                                                    class="form-input" v-model="form.contactInfo" />
                                            </div>
                                        </div>

                                        <!-- Requirements Textarea -->
                                        <div class="form-group">
                                            <h4 class="form-title">What specific requirements do you have?</h4>
                                            <div class="textarea-container">
                                                <textarea
                                                    placeholder="You can propose other customization requirements here, such as processing materials, dimensions, voltage, dust prevention requirements, etc"
                                                    class="form-textarea" v-model="form.yourRequirements"></textarea>
                                            </div>
                                        </div>

                                        <!-- Submit Button -->
                                        <div class="form-group">
                                            <button class="submit-btn" @click="submitForm" :disabled="isSubmitting">
                                                {{ isSubmitting ? 'Submitting...' : 'Get A Free Solution' }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        <section class="get-solution-section" v-if="getEasySolutionType == 2">
                <div class="container">
                    <div class="solution-content">
                        <!-- Left Side - Product Image -->

                        <!-- Right Side - Form and Contact Info -->
                        <div class="form-contact-wrapper">
                            <!-- Inquiry Form -->
                            <div class="inquiry-form">
                                <div class="form-container">
                                    <div class="form-content">

                                        <!-- Name Input -->
                                        <div class="form-group">
                                            <h4 class="form-label">What's your name?</h4>
                                            <div class="input-container">
                                                <input type="text" placeholder="Name" class="form-input" v-model="form.name" />
                                            </div>
                                        </div>

                                        <!-- Contact Input -->
                                        <div class="form-group">
                                            <h4 class="form-title">What's your Whatsapp phone number or email address.
                                            </h4>
                                            <div class="input-container">
                                                <input type="text" placeholder="Whatsapp phone number& Email"
                                                    class="form-input" v-model="form.contactInfo" />
                                            </div>
                                        </div>

                                        <!-- Requirements Textarea -->
                                        <div class="form-group">
                                            <h4 class="form-title">What support do you need?</h4>
                                            <div class="textarea-container">
                                                <textarea
                                                    placeholder="You can write down what type of support you need so that we can arrange for assistance as soon as possible, for installation, training, after-sales, or other usage issues and enquiries"
                                                    class="form-textarea" v-model="form.yourRequirements"></textarea>
                                            </div>
                                        </div>

                                        <!-- Submit Button -->
                                        <div class="form-group">
                                            <button class="submit-btn" @click="submitForm" :disabled="isSubmitting">
                                                {{ isSubmitting ? 'Submitting...' : 'Get A Free Solution' }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <!-- Contact Information -->
                        <div class="contact-info small">
                            <div class="contact-header">
                                <h2 class="contact-title">Get Easy Solution</h2>
                                <div class="contact-description">
                                    <p>Need some customized industry machines,diamond tools or technical support?</p>
                                    <p>Get in touch with us and we will contact you within 15 minutes!</p>
                                </div>
                            </div>

                            <div class="contact-methods">
                                <!-- Email Contact -->
                                <div class="contact-card">
                                    <div class="contact-icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M5.33 8L16 16L26.67 8" stroke="#000000" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <rect x="4" y="6" width="24" height="20" rx="2" stroke="#000000"
                                                stroke-width="2" />
                                        </svg>
                                    </div>
                                    <div class="contact-details">
                                        <p class="contact-method-title">Prefer email?</p>
                                        <p class="contact-method-desc">You can also reach us at</p>
                                        <a href="mailto:gma@dinosawmachine.com"
                                            class="contact-link">gma@dinosawmachine.com</a>
                                    </div>
                                </div>

                                <!-- WhatsApp Contact -->
                                <div class="contact-card">
                                    <div class="contact-icon whatsapp">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path
                                                d="M16 2C8.268 2 2 8.268 2 16c0 2.76.8 5.32 2.16 7.48L2 30l6.52-2.16C10.68 29.2 13.24 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
                                                fill="#40C351" />
                                            <path
                                                d="M12.5 9.5c-.3 0-.6.1-.8.3-.2.2-.7.7-.7 1.7s.7 2 .8 2.1c.1.1 1.6 2.5 3.9 3.5.5.2 1 .4 1.3.5.5.2 1 .2 1.4.1.4-.1 1.3-.5 1.5-1s.2-1-.1-1.1c-.1-.1-.3-.2-.6-.3s-1.3-.6-1.5-.7c-.2-.1-.3-.1-.4.1s-.5.6-.6.7c-.1.1-.2.2-.4.1s-.8-.3-1.5-.9c-.6-.5-1-1.1-1.1-1.3s0-.3.1-.4c.1-.1.2-.2.3-.3s.1-.2.2-.3c.1-.1.1-.2 0-.3s-.4-1-.6-1.4c-.2-.4-.4-.3-.6-.3z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div class="contact-details">
                                        <p class="contact-method-title">Whatsapp?</p>
                                        <a href="https://wa.me/8619859013937" class="contact-link">+86 198-5901-3937</a>
                                    </div>
                                </div>

                                <!-- Phone Contact -->
                                <div class="contact-card">
                                    <div class="contact-icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path
                                                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                                                stroke="#2C2C2C" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="contact-details">
                                        <p class="contact-method-title">Telephone?</p>
                                        <a href="tel:+8619859013937" class="contact-link">+86 198-5901-3937</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG, sendEmailViaEmailJS } from '../utils/emailConfig.js';

export default {
  name: 'GetEasySolution',
  data(){
    return {
        form:{
            types:"",
            materials:"",
            name:"",
            contactInfo:"",
            yourRequirements:""
        },
        isSubmitting: false
    }
  },

  props:{
        getEasySolutionType:{
            type:Number,
            default:1
        }
  },

  methods:{
    async submitForm() {
      // 验证表单
      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      try {
        // 构建邮件内容
        const emailContent = this.buildEmailContent();
        
        // 发送邮件
        await this.sendEmail(emailContent);
        
        // 显示成功消息
        this.showMessage('success', 'Your inquiry has been submitted successfully! We will contact you within 12 hours.');
        
        // 重置表单
        this.resetForm();
        
      } catch (error) {
        console.error('Failed to submit form:', error);
        this.showMessage('error', 'Failed to submit your inquiry. Please try again or contact us directly.');
      } finally {
        this.isSubmitting = false;
      }
    },

    validateForm() {
      const { types, materials, name, contactInfo } = this.form;
      
      // 对于产品询价表单（类型1和3），需要验证 types 和 materials
      if (this.getEasySolutionType === 1 || this.getEasySolutionType === 3) {
        if (!types || types.trim() === '') {
          this.showMessage('warning', 'Please select a CNC machine type.');
          return false;
        }
        
        if (!materials || materials.trim() === '') {
          this.showMessage('warning', 'Please select the materials you will be working with.');
          return false;
        }
      }
      
      if (!name.trim()) {
        this.showMessage('warning', 'Please enter your name.');
        return false;
      }
      
      if (!contactInfo.trim()) {
        this.showMessage('warning', 'Please enter your contact information.');
        return false;
      }
      
      // 验证邮箱或电话格式
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      const cleanContact = contactInfo.replace(/[\s\-]/g, '');
      
      if (!emailRegex.test(contactInfo) && !phoneRegex.test(cleanContact)) {
        this.showMessage('warning', 'Please enter a valid email address or phone number.');
        return false;
      }
      
      return true;
    },

    buildEmailContent() {
      const { types, materials, name, contactInfo, yourRequirements } = this.form;
      
      let subject = '';
      let content = '';
      
      if (this.getEasySolutionType === 2) {
        subject = `Support Request from ${name}`;
        content = `
New Support Request:

Name: ${name}
Contact: ${contactInfo}
Support Needed: ${yourRequirements || 'Not specified'}

Submitted at: ${new Date().toLocaleString()}
        `.trim();
      } else {
        subject = `New Inquiry from ${name}`;
        content = `
New Customer Inquiry:

Name: ${name}
Contact: ${contactInfo}
CNC Type: ${types || 'Not specified'}
Materials: ${materials || 'Not specified'}
Requirements: ${yourRequirements || 'Not specified'}

Submitted at: ${new Date().toLocaleString()}
        `.trim();
      }
      
      return { subject, content };
    },

    async sendEmail({ subject, content }) {
      try {
        // 初始化 EmailJS
        emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

        // 构建邮件参数
        const templateParams = {
          to_email: EMAIL_CONFIG.RECIPIENT_EMAIL,  // jun524404@gmail.com
          to_name: EMAIL_CONFIG.RECIPIENT_NAME,
          from_name: this.form.name,
          from_email: this.form.contactInfo,
          subject: subject,
          message: content,
          cnc_type: this.form.types || '',
          raw_materials: this.form.materials || '',
          requirements: this.form.yourRequirements || '',
          contact_info: this.form.contactInfo,
          submit_time: new Date().toLocaleString(),
          // 额外的表单类型标识
          form_type: this.getEasySolutionType === 2 ? 'Support Request' : 'Product Inquiry',
          // 确保收件人正确
          recipient_email: 'jun524404@gmail.com'
        };

        console.log('📧 发送邮件参数:', templateParams);

        // 使用配置文件发送邮件
        const response = await sendEmailViaEmailJS(templateParams);
        
        console.log('✅ 邮件发送成功:', response);
        return response;

      } catch (error) {
        console.error('❌ EmailJS 发送失败:', error);
        
        // 备用方案：使用 mailto
        const mailtoLink = `mailto:${EMAIL_CONFIG.RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
        window.open(mailtoLink, '_blank');
        
        // 抛出友好的错误信息
        throw new Error('邮件发送失败，已为您打开邮件客户端作为备用方案');
      }
    },

    resetForm() {
      this.form = {
        types: "",
        materials: "",
        name: "",
        contactInfo: "",
        yourRequirements: ""
      };
    },

    showMessage(type, message) {
      // 如果有UI框架的消息组件，使用它
      if (this.$message && this.$message[type]) {
        this.$message[type](message);
      } else if (this.$toast && this.$toast[type]) {
        this.$toast[type](message);
      } else {
        // 备用方案：使用原生alert
        alert(message);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Get Easy Solution Section
.get-solution-section {
    width: 1200px;
    margin: 0 auto;
    padding: 80px 0;
    background: #fff;

    .solution-content {
        display: flex;
        gap: 40px;
        align-items: flex-start;

        @media (max-width: 1440px) {
            flex-direction: column;
            gap: 60px;
        }
    }

    .product-showcase {
        flex: 1;
        max-width: 589px;

        .product-image-container {
            width: 100%;
            height: 370px;
            border-radius: 16px;
            overflow: hidden;
            background: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: center;

            .showcase-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .form-contact-wrapper {
        flex: 1;
        max-width: 618px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .inquiry-form {
        background: white;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.14);
        border: 1px solid #e2e8f0;

        .form-container {
            padding: 24px;

            .form-content {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }

            .form-group {
                display: flex;
                flex-direction: column;

                .form-title {
                    font-family: Inter;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 1.4;
                    letter-spacing: -0.04em;
                    color: #000000;
                    margin-bottom: 8px;
                }

                .form-label {
                    font-family: Inter;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 1.4;
                    letter-spacing: -0.04em;
                    color: #000000;
                    margin-bottom: 8px;
                }

                .select-container {
                    height: 50px;

                    .select-wrapper {
                        position: relative;
                        background: white;
                        border: 1px solid rgba(136, 136, 136, 0.1);
                        border-radius: 10px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        cursor: pointer;

                        &:hover {
                            border-color: rgba(136, 136, 136, 0.2);
                        }

                        .select-display {
                            width:100%;
                            height:100%;
                            padding-left:12px;
                            appearance:none;
                            border:none;
                            flex: 1;
                            outline:none;
                            box-sizing: border-box;
                            color:#666;

                            .select-text {
                                font-family: Inter;
                                font-weight: 300;
                                font-size: 14px;
                                line-height: 1.2;
                                color: #666666;
                            }
                        }

                        .select-icon {
                            position: absolute;
                            right: 12px;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 16px;
                            height: 16px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                }

                .input-container {
                    height: 50px;

                    .form-input {
                        width: 100%;
                        height: 100%;
                        background: white;
                        border: 1px solid rgba(136, 136, 136, 0.1);
                        border-radius: 10px;
                        padding: 16.5px 12px;
                        font-family: Inter;
                        font-weight: 300;
                        font-size: 14px;
                        line-height: 1.21;
                        color: #666666;

                        &::placeholder {
                            color: #666666;
                        }

                        &:focus {
                            outline: none;
                            border-color: #439DF1;
                        }
                    }
                }

                .textarea-container {
                    .form-textarea {
                        width: 100%;
                        min-height: 103px;
                        background: white;
                        border: 1px solid rgba(136, 136, 136, 0.1);
                        border-radius: 10px;
                        padding: 12px;
                        font-family: Inter;
                        font-weight: 300;
                        font-size: 14px;
                        line-height: 1.2;
                        color: #666666;
                        resize: vertical;

                        &::placeholder {
                            color: #666666;
                        }

                        &:focus {
                            outline: none;
                            border-color: #439DF1;
                        }
                    }
                }

                .submit-btn {
                    background: #439DF1;
                    color: white;
                    border: none;
                    border-radius: 100px;
                    padding: 15.59px 0 16.61px;
                    font-family: Inter;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 1.2;
                    cursor: pointer;
                    transition: all 0.3s ease;

                    &:hover {
                        background: #3182ce;
                        transform: translateY(-1px);
                    }
                }
            }
        }
    }

    .contact-info {
        
        &.small{
            width:427px;
            margin-left:50px;
        }
        
        .contact-header {
            position:relative;
            z-index:5;
            margin-bottom: 40px;
            text-align: left;
            &:before{
                content:"";
                position:absolute;
                left:-15px;
                top:0;
                width:100%;
                height:100%;
                background:url("https://framerusercontent.com/images/SYeSFS3u4PFwsxPOJexfUKMfE.webp") no-repeat left top;
                background-size:100% 100%;
                z-index:1;
            }
          
            .contact-title {
                position:relative;
                z-index:5;
                font-family: Inter;
                font-weight: 800;
                font-size: 48px;
                line-height: 1.2;
                color: #000000;
                margin-bottom: 24px;
            }

            .contact-description {
                position:relative;
                z-index:5;
                max-width: 517px;
                margin: 0 auto;

                p {
                    font-family: Inter;
                    font-weight: 300;
                    font-size: 16px;
                    line-height: 1.5em;
                    color: #000;
                }
            }
        }

        .contact-methods {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 414px;
            margin: 0 auto;
            box-sizing: border-box;

            .contact-card {

                background: rgb(250, 250, 250);
                border: 1px solid rgba(136, 136, 136, 0.1);
                border-radius: 16px;
                padding: 10px 10px 10px 32px;
                display: flex;
                align-items: center;
                gap: 29px;
                transition: all 0.3s ease;

                .contact-icon {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;

                    &.whatsapp {
                        svg {
                            width: 32px;
                            height: 32px;
                        }
                    }
                }

                .contact-details {

                    .contact-method-title {
                        font-family: Inter;
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 1.4;
                        letter-spacing: -0.04em;
                        color: #000000;
                        margin-bottom: 4px;
                    }

                    .contact-method-desc {
                        font-family: Inter;
                        font-weight: 300;
                        font-size: 18px;
                        line-height: 1em;
                        color: #000000;
                        margin-bottom: 4px;
                    }

                    .contact-link {
                        font-family: Inter;
                        font-weight: 300;
                        font-size: 18px;
                        line-height: 1em;
                        color: #439DF1;
                        text-decoration: underline;
                        transition: color 0.3s ease;

                        &:hover {
                            color: #3182ce;
                        }
                    }
                }
            }
        }
        
        .trusted-companies {
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            
            .companies-logos {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 33px;
                
                .logo-row {
                    display: flex;
                    align-items: center;
                    gap: 62px;
                    
                    &:first-child {
                        gap: 62px;
                    }
                    
                    &:last-child {
                        gap: 33px;
                    }
                }
                
                .company-logo {
                    background: #f0f0f0;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    &.logo-1 {
                        width: 262px;
                        height: 31px;
                        background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
                    }
                    
                    &.logo-2 {
                        width: 107px;
                        height: 45px;
                        background: linear-gradient(135deg, #059669 0%, #10B981 100%);
                    }
                    
                    &.logo-3 {
                        width: 63px;
                        height: 52px;
                        background: linear-gradient(135deg, #DC2626 0%, #EF4444 100%);
                    }
                    
                    &.logo-4 {
                        width: 119px;
                        height: 35px;
                        background: linear-gradient(135deg, #7C2D12 0%, #EA580C 100%);
                    }
                    
                    &.logo-5 {
                        width: 122px;
                        height: 41px;
                        background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
                    }
                    
                    &.logo-6 {
                        width: 82px;
                        height: 34px;
                        background: linear-gradient(135deg, #BE185D 0%, #EC4899 100%);
                    }
                }
            }
            
            .trusted-text {
                width: 454px;
                height: 26px;
                display: flex;
                align-items: center;
                justify-content: center;
                
                p {
                    font-family: 'Inter', sans-serif;
                    font-weight: 300;
                    font-size: 15px;
                    line-height: 1.27em;
                    text-align: center;
                    color: #000000;
                    margin: 0;
                }
            }
        }
    }
}
 @media (max-width: 1440px) {
.get-solution-section {
        padding: 40px 0;
        width:358px;
        margin:0 auto;
        text-align:center;
        .contact-info{
            width:100%;
            .trusted-companies{
                 display:none;
            }
        }
        .contact-info.small{
            margin: 0;
            width:auto;
        }
        .solution-content {
            gap: 40px;
        }

        .product-showcase {
            .product-image-container {
                height: 250px;
            }
        }

        .form-contact-wrapper {
            gap: 30px;
        }

        .inquiry-form {
            padding: 16px;

            .form-container {
                padding: 16px;

                .form-content {
                    gap: 12px;
                }

                .form-group {

                    .form-title,
                    .form-label {
                        font-size: 16px;
                        margin-bottom: 18px;
                    }

                    .select-container,
                    .input-container {
                        height: 44px;
                    }

                    .textarea-container {
                        .form-textarea {
                            min-height: 120px;
                        }
                    }

                    .submit-btn {
                        padding: 12px 0 13px;
                        font-size: 13px;
                    }
                }
            }
        }

        .contact-info {
            .contact-header {
                margin-bottom: 30px;
                text-align:center;

                .contact-title {
                    font-size: 24px;
                    margin-bottom: 16px;
                }

                .contact-description {
                    p {
                        font-size: 14px;
                        font-weight:400;
                        margin-bottom: 12px;
                        color:#666;
                    }
                }
                &.biger{
                    padding-top:20px;
                    .contact-title{
                        font-size:28px;
                    }
                }
            }

            .contact-methods {
                gap: 16px;

                .contact-card {
                    padding: 8px;
                    gap: 16px;

                    .contact-icon {
                        width: 28px;
                        height: 28px;
                        margin:0 20px 0 10px;

                        &.whatsapp svg {
                            width: 28px;
                            height: 28px;
                        }
                    }

                    .contact-details {
                        text-align:left;
                        .contact-method-title {
                            font-size: 16px;
                            margin-bottom: 2px;
                        }

                        .contact-method-desc,
                        .contact-link {
                            line-height:1.4;
                            font-size: 16px;
                            font-weight:700;
                        }
                        .contact-method-desc{
                            color:#666;
                            font-weight:normal;
                        }
                    }
                }
            }
        }
        
        .trusted-companies {
            margin-top: 30px;
           
            .companies-logos {
                gap: 20px;
                
                .logo-row {
                    gap: 30px;
                    
                    &:first-child {
                        gap: 30px;
                    }
                    
                    &:last-child {
                        gap: 20px;
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                }
                
                .company-logo {
                    &.logo-1 {
                        width: 200px;
                        height: 24px;
                    }
                    
                    &.logo-2 {
                        width: 80px;
                        height: 34px;
                    }
                    
                    &.logo-3 {
                        width: 48px;
                        height: 40px;
                    }
                    
                    &.logo-4 {
                        width: 90px;
                        height: 26px;
                    }
                    
                    &.logo-5 {
                        width: 92px;
                        height: 31px;
                    }
                    
                    &.logo-6 {
                        width: 62px;
                        height: 26px;
                    }
                }
            }
            
            .trusted-text {
                width: 100%;
                max-width: 350px;
                height: auto;
                
                p {
                    font-size: 13px;
                    line-height: 1.3em;
                }
            }
        }
    }
}
</style>
