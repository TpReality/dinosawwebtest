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
                                <h2 v-if="getEasySolutionType == 1" class="contact-title">{{ contentDetail.get_easy_solution }}</h2>
                                <template v-else>
                                    <h1 v-if="isContact" class="contact-title">
                                        <p>{{contentDetail.contact_text}} Dinosaw</p>
                                        {{ contentDetail.get_easy_solution }}
                                    </h1>
                                    <h2 v-else class="contact-title">
                                        <p>{{contentDetail.contact_text}} Dinosaw</p>
                                        {{ contentDetail.get_easy_solution }}
                                    </h2>
                                    
                                </template>
                                
                                <div class="contact-description">
                                    <div class="rich-text" v-html="contentDetail.get_easy_solution_description"></div>
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
                                        <p class="contact-method-title">{{ contentDetail.prefer_email_title }}</p>
                                        <p class="contact-method-desc">{{ contentDetail.prefer_email_remark }}</p>
                                        <a href="mailto:gma@dinosawmachine.com"
                                            class="contact-link">gma@dinosawmachine.com</a>
                                    </div>
                                </div>

                                <!-- WhatsApp Contact -->
                                <div class="contact-card">
                                    <div class="contact-icon whatsapp">
                                        <svg class="icon" viewBox="0 0 1024 1024" width="200" height="200"><path d="M849.92 51.2H174.08c-67.866 0-122.88 55.014-122.88 122.88v675.84c0 67.866 55.014 122.88 122.88 122.88h675.84c67.866 0 122.88-55.014 122.88-122.88V174.08c0-67.866-55.014-122.88-122.88-122.88zM512.015 819.21h-.117c-55.127-.02-109.205-14.812-156.355-42.808l-11.233-6.651-116.27 30.48 31.047-113.311-7.316-11.623A306.422 306.422 0 0 1 204.8 511.852c.077-169.319 137.882-307.062 307.313-307.062 82.068.02 159.18 32.005 217.185 90.05 58.01 58.046 89.917 135.214 89.902 217.262-.061 169.35-137.861 307.108-307.185 307.108z" fill="#40C351"></path><path d="M680.5 589.21c-9.232-4.629-54.641-26.962-63.11-30.03s-14.618-4.607-20.792 4.63c-6.154 9.23-23.844 30.038-29.24 36.187-5.392 6.17-10.778 6.948-20.015 2.32-9.22-4.639-38.968-14.372-74.26-45.83-27.448-24.468-45.978-54.696-51.374-63.943-5.392-9.226-.584-14.228 4.05-18.842 4.147-4.147 9.226-10.782 13.86-16.179 4.613-5.391 6.154-9.247 9.226-15.396 3.077-6.174 1.536-11.56-.778-16.179-2.279-4.633-20.224-50.299-28.442-68.562-6.912-15.375-14.193-15.687-20.792-15.964-5.392-.23-11.54-.215-17.695-.215-6.15 0-16.154 2.32-24.627 11.566-8.469 9.247-32.333 31.575-32.333 77.01 0 45.44 33.09 89.344 37.704 95.503 4.613 6.15 63.892 102.37 157.752 139.392 78.003 30.761 93.89 24.648 110.827 23.112 16.943-1.53 54.641-22.318 62.331-43.899 7.696-21.56 7.696-40.038 5.397-43.888-2.314-3.86-8.464-6.155-17.69-10.793z" fill="#40C351"></path></svg>
                                    </div>
                                    <div class="contact-details">
                                        <p class="contact-method-title">{{ contentDetail.whats_app_title }}?</p>
                                        <a href="https://wa.me/8619859013937" class="contact-link">+86 198-5901-3937</a>
                                    </div>
                                </div>

                                <!-- Phone Contact -->
                                <div class="contact-card">
                                    <div class="contact-icon">
                                        <svg class="icon" style="transform: scale(1.35);" viewBox="0 0 1219 1024" width="238.086" height="200"><path d="M763.096 211.709c-170.42-74.347-369.507 3.777-443.966 174.14-74.346 170.405 3.778 369.55 174.17 443.894 49.87 21.839 102.265 30.506 153.246 27.672 43.923-2.499 86.707-13.67 126.132-32.285l.083.224c4-1.5 39.093-15.338 48.9-48.787 6.057-20.78.5-43.01-16.006-65.787 4.947-5.559 5.7-13.394 1.891-19.505v-.057l-62.843-99.57c-4.835-7.836-14.89-9.834-22.53-5.169l-32.037 27.115c-15.557 7.504-30.056-8.167-55.868-41.173l-53.65-84.835c-10.696-21.837-19.36-44.062-4.33-55.284l36.839-19.393v-.057c8.002-5.057 9.724-15.226 5.058-22.504v-.057l-62.848-99.682c-4.78-7.726-14.835-9.893-22.449-5.113l-32.81 25.78c-19.31 16.895-66.54 95.129 36.48 262.643 106.824 173.919 203.81 170.032 228.093 157.86l10.67-5.001-3.447 2.167c9.668 12.78 16.893 27.615 14.504 36.117-3.086 10.89-22.172 23.618-29.56 27.283-36.062 17.116-75.406 27.005-115.579 28.782-44.45 2-89.96-5.833-133.355-24.838-151.998-66.344-221.677-243.818-155.249-395.833 66.316-151.968 243.875-221.648 395.902-155.359 151.25 66.068 220.87 242.318 156.079 393.776-1.637 1.72-3.39 7.888-3.973 10.279-2.139 8.443 4.918 13.113 15.34 15.669 10.388 2.669 11.917 2.669 18.752-4.221.222-.78 3.835-7.778 3.835-8.56 71.735-169.618-6.224-366.485-175.474-440.331" fill="#2c2c2c"></path></svg>
                                    </div>
                                    <div class="contact-details">
                                        <p class="contact-method-title">{{contentDetail.telephone_title}}?</p>
                                        <a href="tel:+8619859013937" class="contact-link">+86 198-5901-3937</a>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Trusted Companies Section -->
                            <div class="trusted-companies" v-if="getEasySolutionType == 3">
                                <div class="companies-logos">
                                    <div class="logo-row">
                                        <div class="company-logo logo-1">
                                            <NuxtImg sizes="sm:100vw" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/9VBNkEzTsVqAIvrdaB9TM98Mm4.png" />
                                        </div>
                                        <div class="company-logo logo-2">
                                            <NuxtImg sizes="sm:100vw" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/Dn8kbOm6roEzSQcWFSOWeQDoo.jpg" />
                                        </div>
                                    </div>
                                    <div class="logo-row">
                                        <div class="company-logo logo-3">
                                            <NuxtImg sizes="sm:100vw" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/9gfhjO5p4BndZRR1S6iyCOd0.png" />
                                        </div>
                                        <div class="company-logo logo-4">
                                            <NuxtImg sizes="sm:100vw" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/SRkkRttgodeVP1UDwBpzx3CXM.png" />
                                        </div>
                                        <div class="company-logo logo-5">
                                            <NuxtImg sizes="sm:100vw" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/f6JbMVOW0aC3lmb8RmX75F0hsjM.jpg" />
                                        </div>
                                        
                                        <div class="company-logo logo-6">
                                            <NuxtImg sizes="sm:100vw" src="https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/FpnleAPIN4IV2mdwRpgLUNOF6w.png" />
                                        </div>
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
                                            <h4 class="form-title">{{ contentDetail.what_type_of_CNC_machine_or_diamond_title }}</h4>
                                            <div class="select-container">
                                                <div class="select-wrapper">
                                                    <select class="select-display" required v-model="form.types">
                                                        <option value="" disabled="" selected="">{{ contentDetail.what_type_of_CNC_machine_or_diamond_placeholder_text }}</option>
                                                        <template v-for="type in topProduct" :key="type.id">
                                                        <option :value="type.column_attr_name">{{ type.category_name }}</option>
                                                        </template>
                                                        
                                                        <!-- <option value="Wire saw machine series">Wire saw machine series</option>
                                                        <option value="Circular Saw Machine">Circular Saw Machine</option>
                                                        <option value="Drilling and Engraving Machine">Drilling and Engraving Machine</option>
                                                        <option value="Grinding and Polishing Machine">Grinding and Polishing Machine</option>
                                                        <option value="Mining and Quarrying Machine">Mining and Quarrying Machine</option>
                                                        <option value="Other Industry Machine">Other Industry Machine</option>
                                                        <option value=" Diamond Tools"> Diamond Tools</option> -->
                                                    </select>
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
                                            <h4 class="form-title">{{ contentDetail.what_materials_will_you_title }}</h4>
                                            <div class="select-container">
                                                <div class="select-wrapper">
                                                    <select class="select-display" required v-model="form.materials">
                                                        <option value="" disabled="" selected="">{{ contentDetail.what_materials_will_you_placeholder_text }}</option>
                                                        <template v-for="(stone, index) in selectStones" :key="index">
                                                            <option :value="stone.category_value">{{stone.category_name}}</option>
                                                        </template>
                                                        
                                                        
                                                        <!-- <option value="Marble">Marble</option>
                                                        <option value="Granite">Granite</option>
                                                        <option value="Quartz">Quartz</option>
                                                        <option value="Ceramic">Ceramic</option>
                                                        <option value="Steel">Steel</option>
                                                        <option value="Concrete">Concrete</option>
                                                        <option value="Other">Other</option> -->
                                                    </select>
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
                                            <h4 class="form-label">{{ contentDetail.what_is_your_name_title }}</h4>
                                            <div class="input-container">
                                                <input type="text" :placeholder="contentDetail.what_is_your_name_placeholder_text" class="form-input" v-model="form.name" />
                                            </div>
                                        </div>

                                        <!-- Phone Input -->
                                        <div class="form-group">
                                            <h4 class="form-title">手机号</h4>
                                            <div class="phone-input-container">
                                                <div class="country-code-wrapper">
                                                    <select class="country-code-select" v-model="form.countryCode">
                                                        <option v-for="country in countryCodes" :key="country.code" :value="country.code">
                                                            <template v-if="supportsEmoji">{{ country.flag }} {{ country.code }}</template>
                                                            <template v-else>[{{ country.name.substring(0,2).toUpperCase() }}] {{ country.code }}</template>
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="phone-number-wrapper">
                                                    <input type="tel" placeholder="请输入手机号" class="form-input phone-input" v-model="form.phone" />
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Email Input -->
                                        <div class="form-group">
                                            <h4 class="form-title">邮箱</h4>
                                            <div class="input-container">
                                                <input type="email" placeholder="请输入邮箱地址" class="form-input" v-model="form.email" />
                                            </div>
                                        </div>

                                        <!-- Country Selection -->
                                        <div class="form-group">
                                            <h4 class="form-title">国家/地区</h4>
                                            <div class="select-container">
                                                <div class="select-wrapper">
                                                    <select class="select-display" v-model="form.country">
                                                        <option value="" disabled selected>请选择您的国家/地区</option>
                                                        <option v-for="country in countries" :key="country.code" :value="country.name">
                                                            <template v-if="supportsEmoji">{{ country.flag }} {{ country.chinese }}</template>
                                                            <template v-else>[{{ country.code }}] {{ country.chinese }}</template>
                                                        </option>
                                                    </select>
                                                    <div class="select-icon">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M4 6L8 10L12 6" stroke="#999999" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Requirements Textarea -->
                                        <div class="form-group">
                                            <h4 class="form-title">{{ contentDetail.what_specific_requirements_title }}</h4>
                                            <div class="textarea-container">
                                                <textarea
                                                    :placeholder="contentDetail.what_specific_requirements_placeholder_text"
                                                    class="form-textarea" v-model="form.yourRequirements"></textarea>
                                            </div>
                                        </div>

                                        <!-- Submit Button -->
                                        <div class="form-group">
                                            <button class="submit-btn" @click="submitForm" :disabled="isSubmitting">
                                                {{ isSubmitting ? 'Submitting...' : contentDetail.get_a_free_solution_btn_text }}
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
                    <div class="solution-content reverse">
                        <!-- Left Side - Product Image -->

                        <!-- Right Side - Form and Contact Info -->
                        <div class="form-contact-wrapper">
                            <!-- Inquiry Form -->
                            <div class="inquiry-form">
                                <div class="form-container">
                                    <div class="form-content">

                                        <!-- Name Input -->
                                        <div class="form-group">
                                            <h4 class="form-label">{{ contentDetail.what_is_your_name_title }}</h4>
                                            <div class="input-container">
                                                <input type="text" :placeholder="contentDetail.what_is_your_name_placeholder_text" class="form-input" v-model="form.name" />
                                            </div>
                                        </div>

                                        <!-- Phone Input -->
                                        <div class="form-group">
                                            <h4 class="form-title">手机号</h4>
                                            <div class="phone-input-container">
                                                <div class="country-code-wrapper">
                                                    <select class="country-code-select" v-model="form.countryCode">
                                                        <option v-for="country in countryCodes" :key="country.code" :value="country.code">
                                                            <template v-if="supportsEmoji">{{ country.flag }} {{ country.code }}</template>
                                                            <template v-else>[{{ country.name.substring(0,2).toUpperCase() }}] {{ country.code }}</template>
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="phone-number-wrapper">
                                                    <input type="tel" placeholder="请输入手机号" class="form-input phone-input" v-model="form.phone" />
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Email Input -->
                                        <div class="form-group">
                                            <h4 class="form-title">邮箱</h4>
                                            <div class="input-container">
                                                <input type="email" placeholder="请输入邮箱地址" class="form-input" v-model="form.email" />
                                            </div>
                                        </div>

                                        <!-- Country Selection -->
                                        <div class="form-group">
                                            <h4 class="form-title">国家/地区</h4>
                                            <div class="select-container">
                                                <div class="select-wrapper">
                                                    <select class="select-display" v-model="form.country">
                                                        <option value="" disabled selected>请选择您的国家/地区</option>
                                                        <option v-for="country in countries" :key="country.code" :value="country.name">
                                                            <template v-if="supportsEmoji">{{ country.flag }} {{ country.chinese }}</template>
                                                            <template v-else>[{{ country.code }}] {{ country.chinese }}</template>
                                                        </option>
                                                    </select>
                                                    <div class="select-icon">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M4 6L8 10L12 6" stroke="#999999" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Requirements Textarea -->
                                        <div class="form-group">
                                            <h4 class="form-title">{{ contentDetail.what_specific_requirements_title }}</h4>
                                            <div class="textarea-container">
                                                <textarea
                                                    :placeholder="contentDetail.what_specific_requirements_placeholder_text"
                                                    class="form-textarea" v-model="form.yourRequirements"></textarea>
                                            </div>
                                        </div>

                                        <!-- Submit Button -->
                                        <div class="form-group">
                                            <button class="submit-btn" @click="submitForm" :disabled="isSubmitting">
                                                {{ isSubmitting ? 'Submitting...' : contentDetail.get_a_free_solution_btn_text }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <!-- Contact Information -->
                        <div class="contact-info small">
                            <div class="contact-header">
                                <h2 class="contact-title">{{ contentDetail.need_technical_support_text }}</h2>
                                <div class="contact-description">
                                    <div class="rich-text" v-html="contentDetail.get_easy_solution_description_1"></div>
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
                                        <p class="contact-method-title">{{ contentDetail.prefer_email_title }}</p>
                                        <p class="contact-method-desc">{{ contentDetail.prefer_email_remark }}</p>
                                        <a href="mailto:gma@dinosawmachine.com"
                                            class="contact-link">gma@dinosawmachine.com</a>
                                    </div>
                                </div>

                                <!-- WhatsApp Contact -->
                                <div class="contact-card">
                                    <div class="contact-icon whatsapp">
                                        <svg class="icon" viewBox="0 0 1024 1024" width="200" height="200"><path d="M849.92 51.2H174.08c-67.866 0-122.88 55.014-122.88 122.88v675.84c0 67.866 55.014 122.88 122.88 122.88h675.84c67.866 0 122.88-55.014 122.88-122.88V174.08c0-67.866-55.014-122.88-122.88-122.88zM512.015 819.21h-.117c-55.127-.02-109.205-14.812-156.355-42.808l-11.233-6.651-116.27 30.48 31.047-113.311-7.316-11.623A306.422 306.422 0 0 1 204.8 511.852c.077-169.319 137.882-307.062 307.313-307.062 82.068.02 159.18 32.005 217.185 90.05 58.01 58.046 89.917 135.214 89.902 217.262-.061 169.35-137.861 307.108-307.185 307.108z" fill="#40C351"></path><path d="M680.5 589.21c-9.232-4.629-54.641-26.962-63.11-30.03s-14.618-4.607-20.792 4.63c-6.154 9.23-23.844 30.038-29.24 36.187-5.392 6.17-10.778 6.948-20.015 2.32-9.22-4.639-38.968-14.372-74.26-45.83-27.448-24.468-45.978-54.696-51.374-63.943-5.392-9.226-.584-14.228 4.05-18.842 4.147-4.147 9.226-10.782 13.86-16.179 4.613-5.391 6.154-9.247 9.226-15.396 3.077-6.174 1.536-11.56-.778-16.179-2.279-4.633-20.224-50.299-28.442-68.562-6.912-15.375-14.193-15.687-20.792-15.964-5.392-.23-11.54-.215-17.695-.215-6.15 0-16.154 2.32-24.627 11.566-8.469 9.247-32.333 31.575-32.333 77.01 0 45.44 33.09 89.344 37.704 95.503 4.613 6.15 63.892 102.37 157.752 139.392 78.003 30.761 93.89 24.648 110.827 23.112 16.943-1.53 54.641-22.318 62.331-43.899 7.696-21.56 7.696-40.038 5.397-43.888-2.314-3.86-8.464-6.155-17.69-10.793z" fill="#40C351"></path></svg>
                                    </div>
                                    <div class="contact-details">
                                        <p class="contact-method-title">{{ contentDetail.whats_app_title }}?</p>
                                        <a href="https://wa.me/8619859013937" class="contact-link">+86 198-5901-3937</a>
                                    </div>
                                </div>

                                <!-- Phone Contact -->
                                <div class="contact-card">
                                    <div class="contact-icon">
                                        <svg class="icon" style="transform: scale(1.35);" viewBox="0 0 1219 1024" width="238.086" height="200" ><path d="M763.096 211.709c-170.42-74.347-369.507 3.777-443.966 174.14-74.346 170.405 3.778 369.55 174.17 443.894 49.87 21.839 102.265 30.506 153.246 27.672 43.923-2.499 86.707-13.67 126.132-32.285l.083.224c4-1.5 39.093-15.338 48.9-48.787 6.057-20.78.5-43.01-16.006-65.787 4.947-5.559 5.7-13.394 1.891-19.505v-.057l-62.843-99.57c-4.835-7.836-14.89-9.834-22.53-5.169l-32.037 27.115c-15.557 7.504-30.056-8.167-55.868-41.173l-53.65-84.835c-10.696-21.837-19.36-44.062-4.33-55.284l36.839-19.393v-.057c8.002-5.057 9.724-15.226 5.058-22.504v-.057l-62.848-99.682c-4.78-7.726-14.835-9.893-22.449-5.113l-32.81 25.78c-19.31 16.895-66.54 95.129 36.48 262.643 106.824 173.919 203.81 170.032 228.093 157.86l10.67-5.001-3.447 2.167c9.668 12.78 16.893 27.615 14.504 36.117-3.086 10.89-22.172 23.618-29.56 27.283-36.062 17.116-75.406 27.005-115.579 28.782-44.45 2-89.96-5.833-133.355-24.838-151.998-66.344-221.677-243.818-155.249-395.833 66.316-151.968 243.875-221.648 395.902-155.359 151.25 66.068 220.87 242.318 156.079 393.776-1.637 1.72-3.39 7.888-3.973 10.279-2.139 8.443 4.918 13.113 15.34 15.669 10.388 2.669 11.917 2.669 18.752-4.221.222-.78 3.835-7.778 3.835-8.56 71.735-169.618-6.224-366.485-175.474-440.331" fill="#2c2c2c"></path></svg>
                                    </div>
                                    <div class="contact-details">
                                        <p class="contact-method-title">{{ contentDetail.telephone_title }}?</p>
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

<script setup>
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG, sendEmailViaEmailJS } from '../utils/emailConfig.js';

// Props 定义
const props = defineProps({
  contentDetail: {
    type: Object,
    default: () => ({})
  },
  getEasySolutionType: {
    type: Number,
    default: 0
  },
  isContact:{
    type: Boolean,
    default: false
  }
})

// 响应式数据
const topProduct = ref([])
const selectStone = ref([])
const form = ref({
  types: "",
  materials: "",
  name: "",
  countryCode: "+86",
  phone: "",
  email: "",
  country: "",
  yourRequirements: ""
})
const isSubmitting = ref(false)

// 完整的国家代码列表
const countryCodes = ref([
  { code: "+86", flag: "🇨🇳", name: "China", short: "CN" },
  { code: "+1", flag: "🇺🇸", name: "United States", short: "US" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom", short: "GB" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "+971", flag: "🇦🇪", name: "United Arab Emirates" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+93", flag: "🇦🇫", name: "Afghanistan" },
  { code: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "+376", flag: "🇦🇩", name: "Andorra" },
  { code: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "+374", flag: "🇦🇲", name: "Armenia" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+994", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+375", flag: "🇧🇾", name: "Belarus" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+501", flag: "🇧🇿", name: "Belize" },
  { code: "+229", flag: "🇧🇯", name: "Benin" },
  { code: "+975", flag: "🇧🇹", name: "Bhutan" },
  { code: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "+387", flag: "🇧🇦", name: "Bosnia and Herzegovina" },
  { code: "+267", flag: "🇧🇼", name: "Botswana" },
  { code: "+673", flag: "🇧🇳", name: "Brunei" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+226", flag: "🇧🇫", name: "Burkina Faso" },
  { code: "+257", flag: "🇧🇮", name: "Burundi" },
  { code: "+855", flag: "🇰🇭", name: "Cambodia" },
  { code: "+237", flag: "🇨🇲", name: "Cameroon" },
  { code: "+238", flag: "🇨🇻", name: "Cape Verde" },
  { code: "+236", flag: "🇨🇫", name: "Central African Republic" },
  { code: "+235", flag: "🇹🇩", name: "Chad" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+269", flag: "🇰🇲", name: "Comoros" },
  { code: "+242", flag: "🇨🇬", name: "Congo" },
  { code: "+243", flag: "🇨🇩", name: "Congo (DRC)" },
  { code: "+506", flag: "🇨🇷", name: "Costa Rica" },
  { code: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "+53", flag: "🇨🇺", name: "Cuba" },
  { code: "+357", flag: "🇨🇾", name: "Cyprus" },
  { code: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "+253", flag: "🇩🇯", name: "Djibouti" },
  { code: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "+503", flag: "🇸🇻", name: "El Salvador" },
  { code: "+240", flag: "🇬🇶", name: "Equatorial Guinea" },
  { code: "+291", flag: "🇪🇷", name: "Eritrea" },
  { code: "+372", flag: "🇪🇪", name: "Estonia" },
  { code: "+251", flag: "🇪🇹", name: "Ethiopia" },
  { code: "+679", flag: "🇫🇯", name: "Fiji" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+241", flag: "🇬🇦", name: "Gabon" },
  { code: "+220", flag: "🇬🇲", name: "Gambia" },
  { code: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "+224", flag: "🇬🇳", name: "Guinea" },
  { code: "+245", flag: "🇬🇼", name: "Guinea-Bissau" },
  { code: "+592", flag: "🇬🇾", name: "Guyana" },
  { code: "+509", flag: "🇭🇹", name: "Haiti" },
  { code: "+504", flag: "🇭🇳", name: "Honduras" },
  { code: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "+354", flag: "🇮🇸", name: "Iceland" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+98", flag: "🇮🇷", name: "Iran" },
  { code: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+225", flag: "🇨🇮", name: "Ivory Coast" },
  { code: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "+7", flag: "🇰🇿", name: "Kazakhstan" },
  { code: "+686", flag: "🇰🇮", name: "Kiribati" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+996", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "+856", flag: "🇱🇦", name: "Laos" },
  { code: "+371", flag: "🇱🇻", name: "Latvia" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "+266", flag: "🇱🇸", name: "Lesotho" },
  { code: "+231", flag: "🇱🇷", name: "Liberia" },
  { code: "+218", flag: "🇱🇾", name: "Libya" },
  { code: "+423", flag: "🇱🇮", name: "Liechtenstein" },
  { code: "+370", flag: "🇱🇹", name: "Lithuania" },
  { code: "+352", flag: "🇱🇺", name: "Luxembourg" },
  { code: "+853", flag: "🇲🇴", name: "Macau" },
  { code: "+389", flag: "🇲🇰", name: "Macedonia" },
  { code: "+261", flag: "🇲🇬", name: "Madagascar" },
  { code: "+265", flag: "🇲🇼", name: "Malawi" },
  { code: "+960", flag: "🇲🇻", name: "Maldives" },
  { code: "+223", flag: "🇲🇱", name: "Mali" },
  { code: "+356", flag: "🇲🇹", name: "Malta" },
  { code: "+692", flag: "🇲🇭", name: "Marshall Islands" },
  { code: "+222", flag: "🇲🇷", name: "Mauritania" },
  { code: "+230", flag: "🇲🇺", name: "Mauritius" },
  { code: "+691", flag: "🇫🇲", name: "Micronesia" },
  { code: "+373", flag: "🇲🇩", name: "Moldova" },
  { code: "+377", flag: "🇲🇨", name: "Monaco" },
  { code: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "+382", flag: "🇲🇪", name: "Montenegro" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+258", flag: "🇲🇿", name: "Mozambique" },
  { code: "+95", flag: "🇲🇲", name: "Myanmar" },
  { code: "+264", flag: "🇳🇦", name: "Namibia" },
  { code: "+674", flag: "🇳🇷", name: "Nauru" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+505", flag: "🇳🇮", name: "Nicaragua" },
  { code: "+227", flag: "🇳🇪", name: "Niger" },
  { code: "+850", flag: "🇰🇵", name: "North Korea" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+680", flag: "🇵🇼", name: "Palau" },
  { code: "+970", flag: "🇵🇸", name: "Palestine" },
  { code: "+507", flag: "🇵🇦", name: "Panama" },
  { code: "+675", flag: "🇵🇬", name: "Papua New Guinea" },
  { code: "+595", flag: "🇵🇾", name: "Paraguay" },
  { code: "+51", flag: "🇵🇪", name: "Peru" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "+250", flag: "🇷🇼", name: "Rwanda" },
  { code: "+685", flag: "🇼🇸", name: "Samoa" },
  { code: "+378", flag: "🇸🇲", name: "San Marino" },
  { code: "+239", flag: "🇸🇹", name: "Sao Tome and Principe" },
  { code: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "+248", flag: "🇸🇨", name: "Seychelles" },
  { code: "+232", flag: "🇸🇱", name: "Sierra Leone" },
  { code: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "+677", flag: "🇸🇧", name: "Solomon Islands" },
  { code: "+252", flag: "🇸🇴", name: "Somalia" },
  { code: "+211", flag: "🇸🇸", name: "South Sudan" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+249", flag: "🇸🇩", name: "Sudan" },
  { code: "+597", flag: "🇸🇷", name: "Suriname" },
  { code: "+268", flag: "🇸🇿", name: "Swaziland" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "+886", flag: "🇹🇼", name: "Taiwan" },
  { code: "+992", flag: "🇹🇯", name: "Tajikistan" },
  { code: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "+670", flag: "🇹🇱", name: "Timor-Leste" },
  { code: "+228", flag: "🇹🇬", name: "Togo" },
  { code: "+676", flag: "🇹🇴", name: "Tonga" },
  { code: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "+993", flag: "🇹🇲", name: "Turkmenistan" },
  { code: "+688", flag: "🇹🇻", name: "Tuvalu" },
  { code: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+598", flag: "🇺🇾", name: "Uruguay" },
  { code: "+998", flag: "🇺🇿", name: "Uzbekistan" },
  { code: "+678", flag: "🇻🇺", name: "Vanuatu" },
  { code: "+379", flag: "🇻🇦", name: "Vatican City" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "+263", flag: "🇿🇼", name: "Zimbabwe" }
])

// Emoji 支持检测
const supportsEmoji = ref(true)

// 检测浏览器是否支持 emoji
const checkEmojiSupport = () => {
  if (process.client) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    ctx.fillText('🇨🇳', 0, 0)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const hasPixels = imageData.data.some(pixel => pixel !== 0)
    supportsEmoji.value = hasPixels
    console.log('Emoji support detected:', hasPixels)
  }
}

// 页面加载后检测
onMounted(() => {
  checkEmojiSupport()
})

// 完整的国家列表
const countries = ref([
  { code: "CN", flag: "🇨🇳", name: "China", chinese: "中国" },
  { code: "US", flag: "🇺🇸", name: "United States", chinese: "美国" },
  { code: "GB", flag: "🇬🇧", name: "United Kingdom", chinese: "英国" },
  { code: "DE", flag: "🇩🇪", name: "Germany", chinese: "德国" },
  { code: "FR", flag: "🇫🇷", name: "France", chinese: "法国" },
  { code: "IT", flag: "🇮🇹", name: "Italy", chinese: "意大利" },
  { code: "ES", flag: "🇪🇸", name: "Spain", chinese: "西班牙" },
  { code: "JP", flag: "🇯🇵", name: "Japan", chinese: "日本" },
  { code: "KR", flag: "🇰🇷", name: "South Korea", chinese: "韩国" },
  { code: "IN", flag: "🇮🇳", name: "India", chinese: "印度" },
  { code: "AU", flag: "🇦🇺", name: "Australia", chinese: "澳大利亚" },
  { code: "BR", flag: "🇧🇷", name: "Brazil", chinese: "巴西" },
  { code: "RU", flag: "🇷🇺", name: "Russia", chinese: "俄罗斯" },
  { code: "TR", flag: "🇹🇷", name: "Turkey", chinese: "土耳其" },
  { code: "AE", flag: "🇦🇪", name: "United Arab Emirates", chinese: "阿联酋" },
  { code: "SA", flag: "🇸🇦", name: "Saudi Arabia", chinese: "沙特阿拉伯" },
  { code: "MY", flag: "🇲🇾", name: "Malaysia", chinese: "马来西亚" },
  { code: "SG", flag: "🇸🇬", name: "Singapore", chinese: "新加坡" },
  { code: "TH", flag: "🇹🇭", name: "Thailand", chinese: "泰国" },
  { code: "VN", flag: "🇻🇳", name: "Vietnam", chinese: "越南" },
  { code: "CA", flag: "🇨🇦", name: "Canada", chinese: "加拿大" },
  { code: "MX", flag: "🇲🇽", name: "Mexico", chinese: "墨西哥" },
  { code: "AR", flag: "🇦🇷", name: "Argentina", chinese: "阿根廷" },
  { code: "CL", flag: "🇨🇱", name: "Chile", chinese: "智利" },
  { code: "ZA", flag: "🇿🇦", name: "South Africa", chinese: "南非" },
  { code: "EG", flag: "🇪🇬", name: "Egypt", chinese: "埃及" },
  { code: "NG", flag: "🇳🇬", name: "Nigeria", chinese: "尼日利亚" },
  { code: "KE", flag: "🇰🇪", name: "Kenya", chinese: "肯尼亚" },
  { code: "AF", flag: "🇦🇫", name: "Afghanistan", chinese: "阿富汗" },
  { code: "AL", flag: "🇦🇱", name: "Albania", chinese: "阿尔巴尼亚" },
  { code: "DZ", flag: "🇩🇿", name: "Algeria", chinese: "阿尔及利亚" },
  { code: "AM", flag: "🇦🇲", name: "Armenia", chinese: "亚美尼亚" },
  { code: "AT", flag: "🇦🇹", name: "Austria", chinese: "奥地利" },
  { code: "AZ", flag: "🇦🇿", name: "Azerbaijan", chinese: "阿塞拜疆" },
  { code: "BH", flag: "🇧🇭", name: "Bahrain", chinese: "巴林" },
  { code: "BD", flag: "🇧🇩", name: "Bangladesh", chinese: "孟加拉国" },
  { code: "BY", flag: "🇧🇾", name: "Belarus", chinese: "白俄罗斯" },
  { code: "BE", flag: "🇧🇪", name: "Belgium", chinese: "比利时" },
  { code: "BG", flag: "🇧🇬", name: "Bulgaria", chinese: "保加利亚" },
  { code: "KH", flag: "🇰🇭", name: "Cambodia", chinese: "柬埔寨" },
  { code: "CO", flag: "🇨🇴", name: "Colombia", chinese: "哥伦比亚" },
  { code: "HR", flag: "🇭🇷", name: "Croatia", chinese: "克罗地亚" },
  { code: "CZ", flag: "🇨🇿", name: "Czech Republic", chinese: "捷克" },
  { code: "DK", flag: "🇩🇰", name: "Denmark", chinese: "丹麦" },
  { code: "EC", flag: "🇪🇨", name: "Ecuador", chinese: "厄瓜多尔" },
  { code: "EE", flag: "🇪🇪", name: "Estonia", chinese: "爱沙尼亚" },
  { code: "FI", flag: "🇫🇮", name: "Finland", chinese: "芬兰" },
  { code: "GE", flag: "🇬🇪", name: "Georgia", chinese: "格鲁吉亚" },
  { code: "GH", flag: "🇬🇭", name: "Ghana", chinese: "加纳" },
  { code: "GR", flag: "🇬🇷", name: "Greece", chinese: "希腊" },
  { code: "HK", flag: "🇭🇰", name: "Hong Kong", chinese: "香港" },
  { code: "HU", flag: "🇭🇺", name: "Hungary", chinese: "匈牙利" },
  { code: "IS", flag: "🇮🇸", name: "Iceland", chinese: "冰岛" },
  { code: "ID", flag: "🇮🇩", name: "Indonesia", chinese: "印度尼西亚" },
  { code: "IR", flag: "🇮🇷", name: "Iran", chinese: "伊朗" },
  { code: "IQ", flag: "🇮🇶", name: "Iraq", chinese: "伊拉克" },
  { code: "IE", flag: "🇮🇪", name: "Ireland", chinese: "爱尔兰" },
  { code: "IL", flag: "🇮🇱", name: "Israel", chinese: "以色列" },
  { code: "JO", flag: "🇯🇴", name: "Jordan", chinese: "约旦" },
  { code: "KZ", flag: "🇰🇿", name: "Kazakhstan", chinese: "哈萨克斯坦" },
  { code: "KW", flag: "🇰🇼", name: "Kuwait", chinese: "科威特" },
  { code: "LV", flag: "🇱🇻", name: "Latvia", chinese: "拉脱维亚" },
  { code: "LB", flag: "🇱🇧", name: "Lebanon", chinese: "黎巴嫩" },
  { code: "LT", flag: "🇱🇹", name: "Lithuania", chinese: "立陶宛" },
  { code: "LU", flag: "🇱🇺", name: "Luxembourg", chinese: "卢森堡" },
  { code: "MO", flag: "🇲🇴", name: "Macau", chinese: "澳门" },
  { code: "MA", flag: "🇲🇦", name: "Morocco", chinese: "摩洛哥" },
  { code: "NL", flag: "🇳🇱", name: "Netherlands", chinese: "荷兰" },
  { code: "NZ", flag: "🇳🇿", name: "New Zealand", chinese: "新西兰" },
  { code: "KP", flag: "🇰🇵", name: "North Korea", chinese: "朝鲜" },
  { code: "NO", flag: "🇳🇴", name: "Norway", chinese: "挪威" },
  { code: "OM", flag: "🇴🇲", name: "Oman", chinese: "阿曼" },
  { code: "PK", flag: "🇵🇰", name: "Pakistan", chinese: "巴基斯坦" },
  { code: "PE", flag: "🇵🇪", name: "Peru", chinese: "秘鲁" },
  { code: "PH", flag: "🇵🇭", name: "Philippines", chinese: "菲律宾" },
  { code: "PL", flag: "🇵🇱", name: "Poland", chinese: "波兰" },
  { code: "PT", flag: "🇵🇹", name: "Portugal", chinese: "葡萄牙" },
  { code: "QA", flag: "🇶🇦", name: "Qatar", chinese: "卡塔尔" },
  { code: "RO", flag: "🇷🇴", name: "Romania", chinese: "罗马尼亚" },
  { code: "SK", flag: "🇸🇰", name: "Slovakia", chinese: "斯洛伐克" },
  { code: "SI", flag: "🇸🇮", name: "Slovenia", chinese: "斯洛文尼亚" },
  { code: "LK", flag: "🇱🇰", name: "Sri Lanka", chinese: "斯里兰卡" },
  { code: "SE", flag: "🇸🇪", name: "Sweden", chinese: "瑞典" },
  { code: "CH", flag: "🇨🇭", name: "Switzerland", chinese: "瑞士" },
  { code: "TW", flag: "🇹🇼", name: "Taiwan", chinese: "台湾" },
  { code: "UA", flag: "🇺🇦", name: "Ukraine", chinese: "乌克兰" },
  { code: "UY", flag: "🇺🇾", name: "Uruguay", chinese: "乌拉圭" },
  { code: "VE", flag: "🇻🇪", name: "Venezuela", chinese: "委内瑞拉" },
  { code: "YE", flag: "🇾🇪", name: "Yemen", chinese: "也门" },
  { code: "OTHER", flag: "🌍", name: "Other", chinese: "其他" }
])

// 调试：输出前几个国家以验证 emoji
if (process.client) {
  console.log('Countries sample:', countries.value.slice(0, 5))
}

// 获取产品数据
const { data: topProductDetailRes, pending: topPending, error: topError } = await useApi('/product-categories?filters[parent_category_value][$eq]=Products&fields=sort,parent_category_value,category_name,menu_select_down_panel_is_show,column_attr_name,category_value')

// 监听产品数据变化
watch(topProductDetailRes, (newPosts) => {
  if (newPosts) {
    let data = newPosts.data
    // console.log('Product',newPosts)
    // 根据 sort 字段从小到大排序
    if (Array.isArray(data)) {
      data = data.sort((a, b) => {
        // 确保 sort 字段存在，如果不存在则视为最大值
        const sortA = a.sort !== undefined ? a.sort : Number.MAX_SAFE_INTEGER
        const sortB = b.sort !== undefined ? b.sort : Number.MAX_SAFE_INTEGER
        return sortA - sortB
      })

      data.forEach(val=>{
            val.column_attr_name = val.column_attr_name.replace("_"," ")
      })
    }
    
    topProduct.value = data
  }
}, { immediate: true })

// 计算属性
const topProducts = computed(() => topProduct.value)

// 获取石材数据
const { data: selectStoneDetailRes, pending: selectStonePending, error: selectStoneError } = await useApi('/stone-categories')

// 监听石材数据变化
watch(selectStoneDetailRes, (newPosts) => {
  if (newPosts) {
    let data = newPosts.data
    
    selectStone.value = data
  }
}, { immediate: true })

// 计算属性
const selectStones = computed(() => selectStone.value)

// 方法
const submitForm = async () => {
  // 验证表单
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    // 构建邮件内容
    const emailContent = buildEmailContent();
    
    // 发送邮件
    await sendEmail(emailContent);
    
    // 显示成功消息
    showMessage('success', 'Your inquiry has been submitted successfully! We will contact you within 12 hours.');
    
    // 重置表单
    resetForm();
    
  } catch (error) {
    console.error('Failed to submit form:', error);
    showMessage('error', 'Failed to submit your inquiry. Please try again or contact us directly.');
  } finally {
    isSubmitting.value = false;
  }
}

const validateForm = () => {
  const { types, materials, name, phone, email } = form.value;
  
  // 对于产品询价表单（类型1和3），需要验证 types 和 materials
  if (props.getEasySolutionType === 1 || props.getEasySolutionType === 3) {
    if (!types || types.trim() === '') {
      showMessage('warning', 'Please select a CNC machine type.');
      return false;
    }
    
    if (!materials || materials.trim() === '') {
      showMessage('warning', 'Please select the materials you will be working with.');
      return false;
    }
  }
  
  if (!name.trim()) {
    showMessage('warning', 'Please enter your name.');
    return false;
  }
  
  // 验证手机号和邮箱，至少填写一个
  const hasPhone = phone && phone.trim() !== '';
  const hasEmail = email && email.trim() !== '';
  
  if (!hasPhone && !hasEmail) {
    showMessage('warning', '请至少填写手机号或邮箱其中一项');
    return false;
  }
  
  // 如果填写了手机号，验证格式
  if (hasPhone) {
    const phoneRegex = /^[1-9]\d{6,14}$/; // 简化的手机号验证
    if (!phoneRegex.test(phone.replace(/[\s\-]/g, ''))) {
      showMessage('warning', '请输入有效的手机号');
      return false;
    }
  }
  
  // 如果填写了邮箱，验证格式
  if (hasEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage('warning', '请输入有效的邮箱地址');
      return false;
    }
  }
  
  return true;
}

const buildEmailContent = () => {
  const { types, materials, name, countryCode, phone, email, country, yourRequirements } = form.value;
  
  // 构建联系方式信息
  const contactInfo = [];
  if (phone && phone.trim()) {
    contactInfo.push(`Phone: ${countryCode} ${phone}`);
  }
  if (email && email.trim()) {
    contactInfo.push(`Email: ${email}`);
  }
  const contactString = contactInfo.join('\n');
  
  let subject = '';
  let content = '';
  
  if (props.getEasySolutionType === 2) {
    subject = `Support Request from ${name}`;
    content = `
New Support Request:

Name: ${name}
${contactString}
Country: ${country || 'Not specified'}
Support Needed: ${yourRequirements || 'Not specified'}

Submitted at: ${new Date().toLocaleString()}
    `.trim();
  } else {
    subject = `New Inquiry from ${name}`;
    content = `
New Customer Inquiry:

Name: ${name}
${contactString}
Country: ${country || 'Not specified'}
CNC Type: ${types || 'Not specified'}
Materials: ${materials || 'Not specified'}
Requirements: ${yourRequirements || 'Not specified'}

Submitted at: ${new Date().toLocaleString()}
    `.trim();
  }
  
  return { subject, content };
}

const sendEmail = async ({ subject, content }) => {
  try {
    // 初始化 EmailJS
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

    // 构建邮件参数
    const templateParams = {
      to_email: EMAIL_CONFIG.RECIPIENT_EMAIL,  // jun524404@gmail.com
      to_name: EMAIL_CONFIG.RECIPIENT_NAME,
      from_name: form.value.name,
      from_email: form.value.email || 'noreply@dinosawmachine.com',
      subject: subject,
      message: content,
      cnc_type: form.value.types || '',
      raw_materials: form.value.materials || '',
      requirements: form.value.yourRequirements || '',
      contact_info: `${form.value.countryCode || ''} ${form.value.phone || ''} | ${form.value.email || ''}`,
      phone: `${form.value.countryCode || ''} ${form.value.phone || ''}`,
      email: form.value.email || '',
      country: form.value.country || '',
      submit_time: new Date().toLocaleString(),
      // 额外的表单类型标识
      form_type: props.getEasySolutionType === 2 ? 'Support Request' : 'Product Inquiry',
      // 确保收件人正确
      recipient_email: 'jun524404@gmail.com'
    };

    console.log('📧 发送邮件参数:', templateParams);

    return
    // 使用配置文件发送邮件
    const response = await sendEmailViaEmailJS(templateParams);
    
    // console.log('✅ 邮件发送成功:', response);
    return response;

  } catch (error) {
    console.error('❌ EmailJS 发送失败:', error);
    
    // 备用方案：使用 mailto
    const mailtoLink = `mailto:${EMAIL_CONFIG.RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
    window.open(mailtoLink, '_blank');
    
    // 抛出友好的错误信息
    throw new Error('邮件发送失败，已为您打开邮件客户端作为备用方案');
  }
}

const resetForm = () => {
  form.value = {
    types: "",
    materials: "",
    name: "",
    countryCode: "+86",
    phone: "",
    email: "",
    country: "",
    yourRequirements: ""
  };
}

const showMessage = (type, message) => {
  // 使用 Nuxt 3 推荐的通知方式
  if (process.client) {
    // 可以使用 useNuxtApp() 来访问应用实例
    const { $toast } = useNuxtApp()
    
    if ($toast && $toast[type]) {
      $toast[type](message);
    } else {
      // 备用方案：使用原生alert
      alert(message);
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
            &.reverse{
                flex-direction: column-reverse;
            }
            
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
                            font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", Inter, sans-serif;

                            .select-text {
                                font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", Inter, sans-serif;
                                font-weight: 300;
                                font-size: 14px;
                                line-height: 1.2;
                                color: #666666;
                            }

                            option {
                                font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", Inter, sans-serif;
                                padding: 4px 8px;
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

                .phone-input-container {
                    height: 50px;
                    display: flex;
                    gap: 8px;

                    .country-code-wrapper {
                        width: 120px;
                        flex-shrink: 0;

                        .country-code-select {
                            width: 100%;
                            height: 100%;
                            background: white;
                            border: 1px solid rgba(136, 136, 136, 0.1);
                            border-radius: 10px;
                            padding: 0 8px;
                            font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", Inter, sans-serif;
                            font-weight: 300;
                            font-size: 14px;
                            color: #666666;
                            appearance: none;
                            cursor: pointer;

                            &:focus {
                                outline: none;
                                border-color: #439DF1;
                            }

                            option {
                                font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", Inter, sans-serif;
                                padding: 4px 8px;
                            }
                        }
                    }

                    .phone-number-wrapper {
                        flex: 1;

                        .phone-input {
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
                }

                .required {
                    color: #e53e3e;
                    font-weight: 500;
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
            .contact-header {
                padding-bottom:30px;
                &:before {
                    transform: scaleX(-1);
                }
            }
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
                background:url("https://honghaieim.obs.cn-east-3.myhuaweicloud.com/strapicms/images/SYeSFS3u4PFwsxPOJexfUKMfE.webp") no-repeat left top;
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

                p, .rich-text {
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
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    &.logo-1 {
                        width: 262px;
                        height: 31px;
                    }
                    
                    &.logo-2 {
                        width: 107px;
                        height: 45px;
                    }
                    
                    &.logo-3 {
                        width: 63px;
                        height: 52px;
                    }
                    
                    &.logo-4 {
                        width: 119px;
                        height: 35px;
                    }
                    
                    &.logo-5 {
                        width: 122px;
                        height: 41px;
                    }
                    
                    &.logo-6 {
                        width: 82px;
                        height: 34px;
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
                    .input-container,
                    .phone-input-container {
                        height: 44px;
                    }

                    .phone-input-container {
                        .country-code-wrapper {
                            width: 100px;
                        }
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
                    p, .rich-text {
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
