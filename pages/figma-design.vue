<template>
  <div class="figma-design-page">
    <DinosawHeader />
    
    <!-- What We Do Section -->
    <section class="what-we-do-section">
      <div class="container">
        <!-- Title and Description -->
        <div class="section-header">
          <h2 class="section-title">What We Do</h2>
          <p class="section-description">
            Quanzhou Dinosaw Machinery Technology Co., Ltd. (Dinosaw) is the one of world's most trusted CNC wire saw machine brand from China.
            20 years' practical experience in the superhard materials machinery industry contributes to rich experience and technological advantage of
            machinery and diamond tools. For the persistent pursuit of technology and product quality, we have built a complete set of R&D and production
            systems, and passed ISO9001, OHSAS18001, CE certification.
          </p>
        </div>
        
        <!-- Product Cards Grid -->
        <div class="products-grid">
          <!-- Wire Saw Machine Series -->
          <div class="product-card">
            <div class="product-badge most-trusted">
              <svg class="badge-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="2"/>
                <path d="m5 8 2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Most Trusted</span>
            </div>
            <h3 class="product-title">Wire Saw<br>Machine Series</h3>
            <div class="product-image">
              <div class="machine-placeholder wire-saw">
                <!-- Wire Saw Machine Illustration -->
                <svg width="280" height="160" viewBox="0 0 280 160" fill="none">
                  <g transform="translate(40, 30)">
                    <!-- Main body -->
                    <rect x="0" y="20" width="200" height="80" rx="8" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="1"/>
                    <!-- Left motor -->
                    <circle cx="30" cy="60" r="25" fill="#DC2626"/>
                    <circle cx="30" cy="60" r="15" fill="#B91C1C"/>
                    <!-- Right motor -->
                    <circle cx="170" cy="60" r="25" fill="#DC2626"/>
                    <circle cx="170" cy="60" r="15" fill="#B91C1C"/>
                    <!-- Wire line -->
                    <line x1="55" y1="60" x2="145" y2="60" stroke="#374151" stroke-width="2"/>
                    <!-- Base -->
                    <rect x="-10" y="100" width="220" height="15" rx="4" fill="#6B7280"/>
                  </g>
                </svg>
              </div>
            </div>
            <div class="materials-section">
              <p class="materials-title">Machinable Materials</p>
              <div class="materials-icons">
                <div class="material-icon granite"></div>
                <div class="material-icon marble"></div>
                <div class="material-icon luxurystone"></div>
                <div class="material-icon concrete"></div>
              </div>
              <div class="material-labels">
                <span>Granite</span>
                <span>Marble</span>
                <span>Luxurystone</span>
                <span>Concrete</span>
              </div>
            </div>
            <button class="discover-btn">Discover More</button>
          </div>
          
          <!-- Circle Saw Machine -->
          <div class="product-card">
            <div class="product-badge established">
              <svg class="badge-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="2"/>
                <path d="m5 8 2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Established</span>
            </div>
            <h3 class="product-title">Circle Saw<br>Machine</h3>
            <div class="product-image">
              <div class="machine-placeholder circle-saw">
                <!-- Circle Saw Machine Illustration -->
                <svg width="280" height="160" viewBox="0 0 280 160" fill="none">
                  <g transform="translate(40, 20)">
                    <!-- Base platform -->
                    <rect x="0" y="90" width="200" height="20" rx="4" fill="#D97706"/>
                    <!-- Control unit -->
                    <rect x="80" y="30" width="40" height="60" rx="4" fill="#1E40AF"/>
                    <!-- Cutting head -->
                    <rect x="70" y="10" width="60" height="20" rx="4" fill="#374151"/>
                    <!-- Cutting line -->
                    <line x1="100" y1="30" x2="100" y2="90" stroke="#8B5CF6" stroke-width="3"/>
                    <!-- Work piece -->
                    <rect x="20" y="70" width="160" height="20" rx="2" fill="#F59E0B"/>
                  </g>
                </svg>
              </div>
            </div>
            <div class="materials-section">
              <p class="materials-title">Machinable Materials</p>
              <div class="materials-icons">
                <div class="material-icon granite"></div>
                <div class="material-icon marble"></div>
                <div class="material-icon quartz"></div>
                <div class="material-icon slab"></div>
              </div>
              <div class="material-labels">
                <span>Granite</span>
                <span>Marble</span>
                <span>Quartz</span>
                <span>Slab</span>
              </div>
            </div>
            <button class="discover-btn">Discover More</button>
          </div>
          
          <!-- Grinding and Polishing Machine -->
          <div class="product-card">
            <div class="product-badge innovative">
              <svg class="badge-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="2"/>
                <path d="m5 8 2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Innovative</span>
            </div>
            <h3 class="product-title">Grinding and Polishing<br>Machine</h3>
            <div class="product-image">
              <div class="machine-placeholder grinding">
                <!-- Grinding Machine Illustration -->
                <svg width="280" height="160" viewBox="0 0 280 160" fill="none">
                  <g transform="translate(40, 30)">
                    <!-- Main body -->
                    <rect x="0" y="20" width="160" height="80" rx="8" fill="#374151"/>
                    <!-- Grinding head -->
                    <rect x="160" y="40" width="20" height="40" rx="4" fill="#1E40AF"/>
                    <!-- Work surface -->
                    <rect x="20" y="50" width="120" height="20" rx="4" fill="#E5E7EB"/>
                    <!-- Control panel -->
                    <rect x="20" y="30" width="40" height="15" rx="2" fill="#10B981"/>
                  </g>
                </svg>
              </div>
            </div>
            <div class="materials-section">
              <p class="materials-title">Machinable Materials</p>
              <div class="materials-icons">
                <div class="material-icon granite"></div>
                <div class="material-icon marble"></div>
                <div class="material-icon limestone"></div>
              </div>
              <div class="material-labels">
                <span>Granite</span>
                <span>Marble</span>
                <span>Limestone</span>
              </div>
            </div>
            <button class="discover-btn">Discover More</button>
          </div>
          
          <!-- Drilling and Engraving Machine -->
          <div class="product-card">
            <div class="product-badge new-trend">
              <svg class="badge-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="2"/>
                <path d="m5 8 2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>New Trend</span>
            </div>
            <h3 class="product-title">Drilling and Engraving<br>Machine</h3>
            <div class="product-image">
              <div class="machine-placeholder drilling">
                <!-- Drilling Machine Illustration -->
                <svg width="280" height="160" viewBox="0 0 280 160" fill="none">
                  <g transform="translate(40, 40)">
                    <!-- Base -->
                    <rect x="0" y="60" width="200" height="40" rx="8" fill="#374151"/>
                    <!-- Drilling head -->
                    <rect x="90" y="0" width="20" height="60" rx="4" fill="#1E40AF"/>
                    <!-- Support structure -->
                    <rect x="70" y="10" width="60" height="20" rx="4" fill="#1E40AF"/>
                    <!-- Drill bit -->
                    <circle cx="100" cy="20" r="4" fill="#FBBF24"/>
                    <!-- Work table -->
                    <rect x="50" y="45" width="100" height="15" rx="2" fill="#6B7280"/>
                  </g>
                </svg>
              </div>
            </div>
            <div class="materials-section">
              <p class="materials-title">Machinable Materials</p>
              <div class="materials-icons">
                <div class="material-icon granite"></div>
                <div class="material-icon marble"></div>
                <div class="material-icon steel"></div>
                <div class="material-icon quartz"></div>
              </div>
              <div class="material-labels">
                <span>Granite</span>
                <span>Marble</span>
                <span>Steel</span>
                <span>Quartz</span>
              </div>
            </div>
            <button class="discover-btn">Discover More</button>
          </div>
        </div>
      </div>
    </section>
    

    <ContactType :contentDetail="contentDetail" />
    <WhatsApp :contentDetail="contentDetail" />
    <DinosawFooter :contentDetail="contentDetail" />
  </div>
</template>

<script setup>
// Import components
import DinosawHeader from '~/components/DinosawHeader.vue'
import DinosawFooter from '~/components/DinosawFooter.vue'
import ContactType from '~/components/ContactType.vue'
import WhatsApp from '~/components/WhatsApp.vue'

let contentDetail = {}

const { data: contentDetailRes, pending: contentPending, error: contentError } = await useApi('/public-page-infos?filters[get_a_free_quote_btn_text][$eq]=Get A Free Quote')

watch(contentDetailRes, (newPosts) => {
    if (newPosts) {
        let data = newPosts.data[0]
        contentDetail = data
        console.log('contentDetail:', contentDetail)
    }
}, { immediate: true })

// SEO and meta data
useHead({
  title: 'Advanced CNC Stone Cutting Technology - Dinosaw',
  meta: [
    {
      name: 'description',
      content: 'Revolutionary CNC stone cutting machines with precision diamond wire technology. Industry-leading automation and quality assurance.'
    },
    {
      name: 'keywords', 
      content: 'CNC stone cutting, diamond wire saw, precision machinery, industrial automation'
    }
  ]
})
</script>

<style scoped lang="scss">
.figma-design-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #fff;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
}

// What We Do Section
.what-we-do-section {
  padding: 80px 0;
  background: #f8fafc;
  
  .section-header {
    text-align: center;
    margin-bottom: 60px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    
    .section-title {
      font-size: 48px;
      font-weight: 800;
      color: #1a202c;
      margin-bottom: 24px;
    }
    
    .section-description {
      font-size: 16px;
      line-height: 1.6;
      color: #64748b;
      text-align: center;
    }
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .product-card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    }
    
    .product-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 16px;
      width: fit-content;
      
      .badge-icon {
        width: 14px;
        height: 14px;
      }
      
      &.most-trusted {
        background: #dbeafe;
        color: #1e40af;
        
        .badge-icon {
          color: #1e40af;
        }
      }
      
      &.established {
        background: #dbeafe;
        color: #1e40af;
        
        .badge-icon {
          color: #1e40af;
        }
      }
      
      &.innovative {
        background: #dbeafe;
        color: #1e40af;
        
        .badge-icon {
          color: #1e40af;
        }
      }
      
      &.new-trend {
        background: #dbeafe;
        color: #1e40af;
        
        .badge-icon {
          color: #1e40af;
        }
      }
    }
    
    .product-title {
      font-size: 18px;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 20px;
      line-height: 1.3;
      text-align: center;
    }
    
    .product-image {
      margin-bottom: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 160px;
      
      .machine-placeholder {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
    
    .materials-section {
      margin-bottom: 24px;
      flex-grow: 1;
      
      .materials-title {
        font-size: 14px;
        font-weight: 600;
        color: #64748b;
        margin-bottom: 12px;
        text-align: center;
      }
      
      .materials-icons {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin-bottom: 8px;
        
        .material-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          
          &.granite {
            background: radial-gradient(circle, #8b7355 0%, #5d4e37 100%);
          }
          
          &.marble {
            background: radial-gradient(circle, #f5f5f5 0%, #e0e0e0 100%);
          }
          
          &.luxurystone {
            background: radial-gradient(circle, #4682b4 0%, #2f4f4f 100%);
          }
          
          &.concrete {
            background: radial-gradient(circle, #a0a0a0 0%, #808080 100%);
          }
          
          &.quartz {
            background: radial-gradient(circle, #ffd700 0%, #ffb347 100%);
          }
          
          &.slab {
            background: radial-gradient(circle, #d2b48c 0%, #bc9a6a 100%);
          }
          
          &.limestone {
            background: radial-gradient(circle, #f5deb3 0%, #deb887 100%);
          }
          
          &.steel {
            background: radial-gradient(circle, #708090 0%, #2f4f4f 100%);
          }
        }
      }
      
      .material-labels {
        display: flex;
        justify-content: center;
        gap: 12px;
        
        span {
          font-size: 11px;
          color: #64748b;
          text-align: center;
          width: 40px;
        }
      }
    }
    
    .discover-btn {
      background: #000;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 25px;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: #333;
        transform: translateY(-1px);
      }
    }
  }
}

// Get Easy Solution Section
.get-solution-section {
  padding: 80px 0;
  background: #fff;
  
  .solution-content {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    
    @media (max-width: 1024px) {
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
            padding: 0 12px;
            cursor: pointer;
            
            &:hover {
              border-color: rgba(136, 136, 136, 0.2);
            }
            
            .select-display {
              flex: 1;
              
              .select-text {
                font-family: Inter;
                font-weight: 300;
                font-size: 14px;
                line-height: 1.2;
                color: #666666;
              }
            }
            
            .select-icon {
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
    .contact-header {
      text-align: center;
      margin-bottom: 40px;
      
      .contact-title {
        font-family: Inter;
        font-weight: 800;
        font-size: 48px;
        line-height: 1.2;
        text-transform: uppercase;
        color: #000000;
        margin-bottom: 24px;
      }
      
      .contact-description {
        max-width: 517px;
        margin: 0 auto;
        
        p {
          font-family: Inter;
          font-weight: 300;
          font-size: 18px;
          line-height: 1em;
          color: #000000;
          margin-bottom: 16px;
          
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    
    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 414px;
      margin: 0 auto;
      
      .contact-card {
        background: #F7FAFC;
        border: 1px solid rgba(136, 136, 136, 0.1);
        border-radius: 16px;
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 29px;
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
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
          flex: 1;
          
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
  }
}

// Responsive Design
@media (max-width: 768px) {
  .what-we-do-section {
    padding: 40px 0;
    
    .section-header {
      margin-bottom: 40px;
      
      .section-title {
        font-size: 32px;
      }
      
      .section-description {
        font-size: 14px;
      }
    }
    
    .products-grid {
      gap: 16px;
    }
    
    .product-card {
      padding: 20px;
      
      .product-title {
        font-size: 16px;
      }
      
      .materials-icons {
        gap: 8px;
        
        .material-icon {
          width: 32px;
          height: 32px;
        }
      }
      
      .material-labels {
        gap: 8px;
        
        span {
          font-size: 10px;
          width: 32px;
        }
      }
    }
  }
  
  .get-solution-section {
    padding: 40px 0;
    
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
            margin-bottom: 6px;
          }
          
          .select-container,
          .input-container {
            height: 44px;
          }
          
          .textarea-container {
            .form-textarea {
              min-height: 80px;
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
        
        .contact-title {
          font-size: 32px;
          margin-bottom: 16px;
        }
        
        .contact-description {
          p {
            font-size: 16px;
            margin-bottom: 12px;
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
            
            &.whatsapp svg {
              width: 28px;
              height: 28px;
            }
          }
          
          .contact-details {
            .contact-method-title {
              font-size: 16px;
              margin-bottom: 2px;
            }
            
            .contact-method-desc,
            .contact-link {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>