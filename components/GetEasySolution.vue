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
                                            <h4 class="form-title">{{ contentDetail.what_is_your_phone_title }}</h4>
                                            <div class="phone-input-container">
                                                <div class="country-code-wrapper">
                                                    <div class="custom-select-wrapper">
                                                        <div class="custom-select-display" @click="toggleCountryCodeDropdown">
                                                            <div class="selected-option">
                                                                <template v-if="selectedCountryCode">
                                                                    <NuxtImg 
                                                                        :src="'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/country/'+selectedCountryCode.country_code+'.png'" 
                                                                        class="flag-icon"
                                                                        :alt="selectedCountryCode.country_name"
                                                                    />
                                                                    <span class="country-code-text">{{ selectedCountryCode.country_phone_code }}</span>
                                                                </template>
                                                                <span v-else class="placeholder-text">{{ contentDetail.country_or_area_text }}</span>
                                                            </div>
                                                            <div class="dropdown-arrow" :class="{ 'open': isCountryCodeDropdownOpen }">
                                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="custom-select-dropdown" v-show="isCountryCodeDropdownOpen">
                                                            <div class="dropdown-search">
                                                                <input 
                                                                    type="text" 
                                                                    v-model="countryCodeSearchTerm"
                                                                    class="search-input"
                                                                    @click.stop
                                                                />
                                                            </div>
                                                            <div class="dropdown-options">
                                                                <div 
                                                                    v-for="country in filteredCountriesForCode" 
                                                                    :key="country.country_code"
                                                                    class="dropdown-option"
                                                                    @click="selectCountryCode(country)"
                                                                >
                                                                    <NuxtImg 
                                                                        :src="'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/country/'+country.country_code+'.png'" 
                                                                        class="flag-icon"
                                                                        :alt="country.country_name"
                                                                    />
                                                                    <span class="country-info">
                                                                        <span class="country-name">{{ country.country_name }}</span>
                                                                        <span class="country-code">{{ country.country_phone_code }}</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="phone-number-wrapper">
                                                    <input type="tel" :placeholder="contentDetail.what_is_your_phone_placeholder_text" class="form-input phone-input" v-model="form.phone" />
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Email Input -->
                                        <div class="form-group">
                                            <h4 class="form-title">{{ contentDetail.what_is_your_email_title }}</h4>
                                            <div class="input-container">
                                                <input type="email" :placeholder="contentDetail.what_is_your_email_placeholder_text" class="form-input" v-model="form.email" />
                                            </div>
                                        </div>

                                        <!-- Country Selection -->
                                        <div class="form-group">
                                            <h4 class="form-title">{{ contentDetail.where_are_you_located_title }}</h4>
                                            <div class="select-container">
                                                <div class="custom-select-wrapper">
                                                    <div class="custom-select-display" @click="toggleCountryDropdown">
                                                        <div class="selected-option">
                                                            <template v-if="selectedCountry">
                                                                <NuxtImg 
                                                                    :src="'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/country/'+selectedCountry.country_code+'.png'" 
                                                                    class="flag-icon"
                                                                    :alt="selectedCountry.country_name"
                                                                />
                                                                <span class="country-name-text">{{ selectedCountry.country_name }}</span>
                                                            </template>
                                                            <span v-else class="placeholder-text">{{ contentDetail.country_or_area_text }}</span>
                                                        </div>
                                                        <div class="dropdown-arrow" :class="{ 'open': isCountryDropdownOpen }">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                <path d="M4 6L8 10L12 6" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="custom-select-dropdown" v-show="isCountryDropdownOpen">
                                                        <div class="dropdown-search">
                                                            <input 
                                                                type="text" 
                                                                v-model="countrySearchTerm"
                                                                class="search-input"
                                                                @click.stop
                                                            />
                                                        </div>
                                                        <div class="dropdown-options">
                                                            
                                                            <div 
                                                                v-for="country in filteredCountriesForCountry" 
                                                                :key="country.country_code"
                                                                class="dropdown-option"
                                                                @click="selectCountry(country)"
                                                            >
                                                                <NuxtImg 
                                                                    :src="'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/country/'+country.country_code+'.png'" 
                                                                    class="flag-icon"
                                                                    :alt="country.country_name"
                                                                />
                                                                <span class="country-info">
                                                                    <span class="country-name">{{ country.country_name }}</span>
                                                                    <span class="country-code">[{{ country.country_code }}]</span>
                                                                </span>
                                                            </div>
                                                        </div>
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
                                            <h4 class="form-title">{{ contentDetail.what_is_your_phone_title }}</h4>
                                            <div class="phone-input-container">
                                                <div class="country-code-wrapper">
                                                    <div class="custom-select-wrapper">
                                                        <div class="custom-select-display" @click="toggleCountryCodeDropdown">
                                                            <div class="selected-option">
                                                                <template v-if="selectedCountryCode">
                                                                    <NuxtImg 
                                                                        :src="'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/country/'+selectedCountryCode.country_code+'.png'" 
                                                                        class="flag-icon"
                                                                        :alt="selectedCountryCode.country_name"
                                                                    />
                                                                    <span class="country-code-text">{{ selectedCountryCode.country_phone_code }}</span>
                                                                </template>
                                                                <span v-else class="placeholder-text">{{ contentDetail.country_or_area_text }}</span>
                                                            </div>
                                                            <div class="dropdown-arrow" :class="{ 'open': isCountryCodeDropdownOpen }">
                                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="custom-select-dropdown" v-show="isCountryCodeDropdownOpen">
                                                            <div class="dropdown-search">
                                                                <input 
                                                                    type="text" 
                                                                    v-model="countryCodeSearchTerm"
                                                                    class="search-input"
                                                                    @click.stop
                                                                />
                                                            </div>
                                                            <div class="dropdown-options">
                                                                <div 
                                                                    v-for="country in filteredCountriesForCode" 
                                                                    :key="country.country_code"
                                                                    class="dropdown-option"
                                                                    @click="selectCountryCode(country)"
                                                                >
                                                                    <NuxtImg 
                                                                        :src="'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/country/'+country.country_code+'.png'" 
                                                                        class="flag-icon"
                                                                        :alt="country.country_name"
                                                                    />
                                                                    <span class="country-info">
                                                                        <span class="country-name">{{ country.country_name }}</span>
                                                                        <span class="country-code">{{ country.country_phone_code }}</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="phone-number-wrapper">
                                                    <input type="tel" :placeholder="contentDetail.telephone_title" class="form-input phone-input" v-model="form.phone" />
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Email Input -->
                                        <div class="form-group">
                                            <h4 class="form-title">{{ contentDetail.what_is_your_email_title }}</h4>
                                            <div class="input-container">
                                                <input type="email" :placeholder="contentDetail.what_is_your_email_placeholder_text" class="form-input" v-model="form.email" />
                                            </div>
                                        </div>

                                        <!-- Country Selection -->
                                        <div class="form-group">
                                            <h4 class="form-title">{{ contentDetail.where_are_you_located_title }}</h4>
                                            <div class="select-container">
                                                <div class="custom-select-wrapper">
                                                    <div class="custom-select-display" @click="toggleCountryDropdown">
                                                        <div class="selected-option">
                                                            <template v-if="selectedCountry">
                                                                <NuxtImg 
                                                                    :src="'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/country/'+selectedCountry.country_code+'.png'" 
                                                                    class="flag-icon"
                                                                    :alt="selectedCountry.country_name"
                                                                />
                                                                <span class="country-name-text">{{ selectedCountry.country_name }}</span>
                                                            </template>
                                                            <span v-else class="placeholder-text">{{ contentDetail.country_or_area_text }}</span>
                                                        </div>
                                                        <div class="dropdown-arrow" :class="{ 'open': isCountryDropdownOpen }">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                <path d="M4 6L8 10L12 6" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="custom-select-dropdown" v-show="isCountryDropdownOpen">
                                                        <div class="dropdown-search">
                                                            <input 
                                                                type="text" 
                                                                v-model="countrySearchTerm"
                                                                class="search-input"
                                                                @click.stop
                                                            />
                                                        </div>
                                                        <div class="dropdown-options">
                                                            <div 
                                                                v-for="country in filteredCountriesForCountry" 
                                                                :key="country.country_code"
                                                                class="dropdown-option"
                                                                @click="selectCountry(country)"
                                                            >
                                                                <NuxtImg 
                                                                    :src="'https://honghaieim.obs.cn-east-3.myhuaweicloud.com/country/'+country.country_code+'.png'" 
                                                                    class="flag-icon"
                                                                    :alt="country.country_name"
                                                                />
                                                                <span class="country-info">
                                                                    <span class="country-name">{{ country.country_name }}</span>
                                                                    <span class="country-code">[{{ country.country_code }}]</span>
                                                                </span>
                                                            </div>
                                                        </div>
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
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

// 自定义下拉框相关数据
const isCountryCodeDropdownOpen = ref(false)
const countryCodeSearchTerm = ref('')
const selectedCountryCode = ref(null)

const isCountryDropdownOpen = ref(false)
const countrySearchTerm = ref('')
const selectedCountry = ref(null)

// 计算属性：过滤后的国家列表（用于国家代码选择）
const filteredCountriesForCode = computed(() => {
  if (!countries.value || countries.value.length === 0) {
    return []
  }
  if (!countryCodeSearchTerm.value) {
    return countries.value
  }
  return countries.value.filter(country => 
    country.country_name?.toLowerCase().includes(countryCodeSearchTerm.value.toLowerCase()) ||
    country.country_phone_code?.includes(countryCodeSearchTerm.value) ||
    country.country_code?.toLowerCase().includes(countryCodeSearchTerm.value.toLowerCase())
  )
})

// 计算属性：过滤后的国家列表（用于国家选择）
const filteredCountriesForCountry = computed(() => {
  if (!countries.value || countries.value.length === 0) {
    return []
  }
  if (!countrySearchTerm.value) {
    return countries.value
  }
  return countries.value.filter(country => 
    country.country_name?.toLowerCase().includes(countrySearchTerm.value.toLowerCase()) ||
    country.country_code?.toLowerCase().includes(countrySearchTerm.value.toLowerCase())
  )
})

// 方法：切换国家代码下拉框
const toggleCountryCodeDropdown = () => {
  isCountryCodeDropdownOpen.value = !isCountryCodeDropdownOpen.value
  isCountryDropdownOpen.value = false // 关闭其他下拉框
  if (isCountryCodeDropdownOpen.value) {
    countryCodeSearchTerm.value = ''
  }
}

// 方法：切换国家下拉框
const toggleCountryDropdown = () => {
  isCountryDropdownOpen.value = !isCountryDropdownOpen.value
  isCountryCodeDropdownOpen.value = false // 关闭其他下拉框
  if (isCountryDropdownOpen.value) {
    countrySearchTerm.value = ''
  }
}

// 方法：选择国家代码
const selectCountryCode = (country) => {
  selectedCountryCode.value = country
  form.value.countryCode = country.country_phone_code
  isCountryCodeDropdownOpen.value = false
  countryCodeSearchTerm.value = ''
}

// 方法：选择国家
const selectCountry = (country) => {
  selectedCountry.value = country
  form.value.country = country.country_name
  isCountryDropdownOpen.value = false
  countrySearchTerm.value = ''
  console.log(form)
}

// 点击外部关闭下拉框
const closeDropdownOnClickOutside = (event) => {
  if (!event.target.closest('.custom-select-wrapper')) {
    isCountryCodeDropdownOpen.value = false
    isCountryDropdownOpen.value = false
  }
}


// 页面加载后检测
onMounted(() => {
    // 添加点击外部关闭下拉框的事件监听
    document.addEventListener('click', closeDropdownOnClickOutside)
})

// 组件卸载时移除事件监听
onUnmounted(() => {
    document.removeEventListener('click', closeDropdownOnClickOutside)
})

// 完整的国家列表
const countries = ref([])
const { data: countryDetailRes, pending: countryPending, error: countryError } = await useApi('/country-areas?pagination[page]=1&pagination[pageSize]=300&sort[0]=country_name:asc')

// 监听产品数据变化
watch(countryDetailRes, (newPosts) => {
  if (newPosts) {
    console.log('Country',newPosts)
    let data = newPosts.data
    
    countries.value = data
    
    // 设置默认选中的国家（中国）
    const defaultCountry = data.find(country => country.country_phone_code === '+86')
    if (defaultCountry) {
      selectedCountryCode.value = defaultCountry
      selectedCountry.value = defaultCountry
      form.value.country = defaultCountry.country_name
    }
  }
}, { immediate: true })

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
    showMessage('success', props.contentDetail.your_inquiry_has_been_submitted__within_12_hours_title);
    
    // 重置表单
    resetForm();
    
  } catch (error) {
    console.error('Failed to submit form:', error);
    showMessage('error', props.contentDetail.failed_to_submit_your_inquiry_contact_us_directly_title);
  } finally {
    isSubmitting.value = false;
  }
}

const validateForm = () => {
  const { types, materials, name, phone, email } = form.value;
  
  // 对于产品询价表单（类型1和3），需要验证 types 和 materials
  if (props.getEasySolutionType === 1 || props.getEasySolutionType === 3) {
    if (!types || types.trim() === '') {
      showMessage('warning', props.contentDetail.please_select_a_cnc_machine_type_title);
      return false;
    }
    
    if (!materials || materials.trim() === '') {
      showMessage('warning', props.contentDetail.please_select_the_materials_you_will_be_working_title);
      return false;
    }
  }
  
  if (!name.trim()) {
    showMessage('warning', props.contentDetail.please_enter_your_name_title);
    return false;
  }
  
  // 验证手机号和邮箱，至少填写一个
  const hasPhone = phone && phone.trim() !== '';
  const hasEmail = email && email.trim() !== '';
  
  if (!hasPhone && !hasEmail) {
    showMessage('warning', props.contentDetail.what_is_your_Whatsapp_or_email_title);
    return false;
  }
  
  // 如果填写了手机号，验证格式
//   if (hasPhone) {
//     const phoneRegex = /^[1-9]\d{6,14}$/; // 简化的手机号验证
//     if (!phoneRegex.test(phone.replace(/[\s\-]/g, ''))) {
//       showMessage('warning', '请输入有效的手机号');
//       return false;
//     }
//   }
  
//   // 如果填写了邮箱，验证格式
//   if (hasEmail) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       showMessage('warning', '请输入有效的邮箱地址');
//       return false;
//     }
//   }
  
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
      recipient_email: 'gma@dinosawmachine.com'
    };

    console.log('📧 发送邮件参数:', templateParams);

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
  selectCountry.value = null;
  selectCountryCode.value = null;
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
                    position: relative;

                    .select-wrapper {
                        position: relative;
                        background: white;
                        border: 1px solid rgba(136, 136, 136, 0.1);
                        border-radius: 10px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                    }

                    .custom-select-wrapper {
                        position: relative;
                        width: 100%;
                        height: 100%;

                        .custom-select-display {
                            width: 100%;
                            height: 100%;
                            background: white;
                            border: 1px solid rgba(136, 136, 136, 0.1);
                            border-radius: 10px;
                            padding: 0 16px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            cursor: pointer;
                            font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", Inter, sans-serif;
                            font-weight: 300;
                            font-size: 14px;
                            color: #666666;
                            transition: border-color 0.2s ease;

                            &:hover {
                                border-color: rgba(136, 136, 136, 0.3);
                            }

                            .selected-option {
                                display: flex;
                                align-items: center;
                                gap: 8px;
                                flex: 1;
                                min-width: 0;

                                .flag-icon {
                                    width: 20px;
                                    height: 15px;
                                    object-fit: cover;
                                    border-radius: 2px;
                                    flex-shrink: 0;
                                }

                                .country-name-text {
                                    font-size: 14px;
                                    color: #333;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }

                                .placeholder-text {
                                    color: #999;
                                    font-size: 14px;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                            }

                            .dropdown-arrow {
                                flex-shrink: 0;
                                transition: transform 0.2s ease;

                                &.open {
                                    transform: rotate(180deg);
                                }
                            }
                        }

                        .custom-select-dropdown {
                            position: absolute;
                            top: 100%;
                            left: 0;
                            right: 0;
                            background: white;
                            border: 1px solid rgba(136, 136, 136, 0.2);
                            border-radius: 10px;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                            z-index: 1000;
                            max-height: 300px;
                            overflow: hidden;
                            margin-top: 4px;

                            .dropdown-search {
                                padding: 8px;
                                border-bottom: 1px solid rgba(136, 136, 136, 0.1);

                                .search-input {
                                    width: 100%;
                                    padding: 8px 12px;
                                    border: 1px solid rgba(136, 136, 136, 0.2);
                                    border-radius: 6px;
                                    font-size: 14px;
                                    outline: none;

                                    &:focus {
                                        border-color: #007bff;
                                    }
                                }
                            }

                            .dropdown-options {
                                max-height: 240px;
                                overflow-y: auto;

                                .dropdown-option {
                                    padding: 12px;
                                    display: flex;
                                    align-items: center;
                                    gap: 10px;
                                    cursor: pointer;
                                    transition: background-color 0.2s ease;

                                    &:hover {
                                        background-color: #f8f9fa;
                                    }

                                    .flag-icon {
                                        width: 24px;
                                        height: 18px;
                                        object-fit: cover;
                                        border-radius: 2px;
                                        flex-shrink: 0;
                                    }

                                    .country-info {
                                        display: flex;
                                        flex-direction: column;
                                        flex: 1;
                                        min-width: 0;

                                        .country-name {
                                            font-size: 14px;
                                            color: #333;
                                            white-space: nowrap;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                        }

                                        .country-code {
                                            font-size: 12px;
                                            color: #666;
                                            margin-top: 2px;
                                        }
                                    }
                                }
                            }
                        }
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
                        position: relative;

                        .custom-select-wrapper {
                            position: relative;
                            width: 100%;
                            height: 100%;

                            .custom-select-display {
                                width: 100%;
                                height: 100%;
                                background: white;
                                border: 1px solid rgba(136, 136, 136, 0.1);
                                border-radius: 10px;
                                padding: 0 8px;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                cursor: pointer;
                                font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", Inter, sans-serif;
                                font-weight: 300;
                                font-size: 14px;
                                color: #666666;
                                transition: border-color 0.2s ease;

                                &:hover {
                                    border-color: rgba(136, 136, 136, 0.3);
                                }

                                .selected-option {
                                    display: flex;
                                    align-items: center;
                                    gap: 6px;
                                    flex: 1;
                                    min-width: 0;
                                    
                                    img {
                                        width: 16px;
                                        object-fit: cover;
                                        border-radius: 2px;
                                        flex-shrink: 0;
                                    }

                                    .country-code-text {
                                        font-size: 13px;
                                        color: #333;
                                        white-space: nowrap;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                    }

                                    .placeholder-text {
                                        color: #999;
                                        font-size: 12px;
                                        white-space: nowrap;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                    }
                                }

                                .dropdown-arrow {
                                    flex-shrink: 0;
                                    transition: transform 0.2s ease;

                                    &.open {
                                        transform: rotate(180deg);
                                    }
                                }
                            }

                            .custom-select-dropdown {
                                position: absolute;
                                top: 100%;
                                left: 0;
                                right: 0;
                                background: white;
                                border: 1px solid rgba(136, 136, 136, 0.2);
                                border-radius: 10px;
                                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                                z-index: 1000;
                                max-height: 300px;
                                overflow: hidden;
                                margin-top: 4px;
                                background:#fff;
                                z-index:4;

                                .dropdown-search {
                                    padding: 8px;
                                    border-bottom: 1px solid rgba(136, 136, 136, 0.1);

                                    .search-input {
                                        width: 100%;
                                        padding: 6px 8px;
                                        border: 1px solid rgba(136, 136, 136, 0.2);
                                        border-radius: 6px;
                                        font-size: 12px;
                                        outline: none;

                                        &:focus {
                                            border-color: #007bff;
                                        }
                                    }
                                }

                                .dropdown-options {
                                    max-height: 240px;
                                    overflow-y: auto;

                                    .dropdown-option {
                                        padding: 8px;
                                        display: flex;
                                        align-items: center;
                                        gap: 8px;
                                        cursor: pointer;
                                        transition: background-color 0.2s ease;

                                        &:hover {
                                            background-color: #f8f9fa;
                                        }

                                        .flag-icon {
                                            width: 20px;
                                            height: 15px;
                                            object-fit: cover;
                                            border-radius: 2px;
                                            flex-shrink: 0;
                                        }

                                        .country-info {
                                            display: flex;
                                            flex-direction: column;
                                            flex: 1;
                                            min-width: 0;

                                            .country-name {
                                                font-size: 12px;
                                                color: #333;
                                                white-space: nowrap;
                                                overflow: hidden;
                                                text-overflow: ellipsis;
                                            }

                                            .country-code {
                                                font-size: 11px;
                                                color: #666;
                                                margin-top: 1px;
                                            }
                                        }
                                    }
                                }
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
