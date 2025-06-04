import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ConnectionCard from '@/components/ConnectionCard';
import CustomLineChart from '@/components/LineChart';
import FeatureCard from '@/components/FeatureCard';
import ProductCard from '@/components/ProductCard';
import IntegrationCard from '@/components/IntegrationCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index = () => {
  const features = [
    
    {
      title: "Callbase",
      description: "Connect pages and posts, Callbase makes your best Content and posts with features."
    },
    {
      title: "Deframe", 
      description: "Connect pages and posts, Features, Callbase makes your best Content posts and features."
    },
    {
      title: "Copyier Rules",
      description: "Connect pages and posts, Features, Callbase makes your best Content posts and features."
    },
    {
      title: "Dynamic Analytics",
      description: "Connect pages and posts, Features, Callbase makes your best Content posts and features."
    },
    {
      title: "Rules to Merge",
      description: "Connect pages and posts, Features, Callbase makes your best Content posts and features."
    },
    {
      title: "Google Wave",
      description: "Connect pages and posts, Features, Callbase makes your best Content posts and features."
    }
  ];

  const integrations = [
    { name: "WhatsApp", description: "Connect pages with Features", logo: "bg-green-500" },
    { name: "Zapier", description: "Connect pages with Features", logo: "bg-orange-500" },
    { name: "Slack App", description: "Connect pages with Features", logo: "bg-purple-600" },
    { name: "Framer", description: "Connect pages with Features", logo: "bg-blue-500" },
    { name: "Figma Pro", description: "Connect pages with Features", logo: "bg-pink-500" },
    { name: "Webtunik", description: "Connect pages with Features", logo: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex ">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ">
        <Header />
        
        <main className="flex-1 p-6 md:ml-20 ">
        

          {/* Connections Section - Updated to match image */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Connections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* WhatsApp Connection - Green */}
              <div className="bg-white border-2 border-green-300 rounded-lg sm-12 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900">Whatsapp</span>
                  </div>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="border-t border-green-200 pt-3">
                  <button className="text-green-600 text-sm font-medium hover:text-green-700">
                    View Connection
                  </button>
                </div>
              </div>

              {/* Star Force Connection - Green */}
              <div className="bg-white border-2 border-green-300 rounded-lg sm-12 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2312_740)">
<path d="M21.4067 24H2.59333C1.16109 24 0 22.8389 0 21.4067V2.59333C0 1.16109 1.16109 0 2.59333 0H21.4066C22.8389 0 24 1.16109 24 2.59333V21.4066C24 22.8389 22.8389 24 21.4067 24Z" fill="black"/>
<path d="M21.4067 24H2.59333C1.16109 24 0 22.8389 0 21.4067V2.59333C0 1.16109 1.16109 0 2.59333 0H21.4066C22.8389 0 24 1.16109 24 2.59333V21.4066C24 22.8389 22.8389 24 21.4067 24Z" fill="black"/>
<path d="M16.2067 9.22282V7.28006C16.4638 7.15996 16.6815 6.96927 16.8345 6.7302C16.9874 6.49113 17.0693 6.21352 17.0705 5.92972V5.8843C17.0683 5.05863 16.3996 4.38985 15.5739 4.38765H15.5285C14.7028 4.38985 14.034 5.05868 14.0318 5.8843V5.92972C14.0331 6.21352 14.115 6.49112 14.2679 6.73019C14.4208 6.96926 14.6386 7.15995 14.8957 7.28006V9.22685C14.1564 9.33991 13.4601 9.64629 12.8772 10.115L7.53444 5.95397C7.77739 5.04444 7.23699 4.11019 6.32746 3.86724C5.41793 3.62429 4.48368 4.16469 4.24078 5.07422C3.99783 5.98375 4.53823 6.918 5.44776 7.1609C5.88262 7.27706 6.34579 7.21649 6.73616 6.9924L11.9891 11.0818C11.0208 12.5427 11.0468 14.4477 12.0547 15.8816L10.4562 17.4802C10.3278 17.4393 10.1942 17.4176 10.0595 17.4156C9.29315 17.4156 8.67189 18.0369 8.67189 18.8033C8.67189 19.5697 9.29319 20.1909 10.0595 20.1909C10.8259 20.1909 11.4472 19.5696 11.4472 18.8033C11.4453 18.6686 11.4236 18.535 11.3826 18.4067L12.964 16.8252C14.8355 18.2547 17.5114 17.8964 18.9408 16.0249C20.3703 14.1535 20.012 11.4775 18.1405 10.0481C17.574 9.61541 16.9081 9.33164 16.2036 9.22277M15.5487 15.6233C14.3403 15.6205 13.3629 14.6387 13.3657 13.4303C13.3685 12.2219 14.3503 11.2446 15.5587 11.2474C16.7655 11.2501 17.7422 12.2296 17.7417 13.4364C17.7417 14.6447 16.7621 15.6244 15.5537 15.6244" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2312_740">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

                    </div>
                    <span className="font-medium text-gray-900">Star Force</span>
                  </div>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4067 24H2.59333C1.16109 24 0 22.8389 0 21.4067V2.59333C0 1.16109 1.16109 0 2.59333 0H21.4066C22.8389 0 24 1.16109 24 2.59333V21.4066C24 22.8389 22.8389 24 21.4067 24Z" fill="#3D3C52"/>
<path d="M6.7434 4.85165H17.2286C18.2606 4.85165 19.1027 5.68964 19.1027 6.72573V17.2115C19.1027 18.2435 18.2647 19.085 17.2286 19.085H6.7434C5.71148 19.085 4.86932 18.2476 4.86932 17.2115V6.72095C4.86932 5.68964 5.7067 4.85165 6.7434 4.85165Z" fill="#3D3C52"/>
<path d="M13.4692 8.02911V7.54101C13.4689 7.19992 13.1923 6.92359 12.8512 6.92363H11.4107C11.0696 6.92359 10.793 7.19992 10.7927 7.54101V8.04212C10.7927 8.09789 10.8443 8.13703 10.9007 8.12396C11.3082 8.0063 11.7302 7.9468 12.1544 7.94722C12.5635 7.94736 12.9708 8.00241 13.3654 8.1109C13.3778 8.11405 13.3907 8.1143 13.4032 8.11165C13.4157 8.10899 13.4274 8.1035 13.4374 8.0956C13.4475 8.08769 13.4556 8.07758 13.4611 8.06605C13.4666 8.05452 13.4694 8.04188 13.4692 8.02911ZM9.52124 8.66783L9.27511 8.42169C9.03408 8.18048 8.64308 8.18034 8.40186 8.42137L8.10736 8.71526C7.86647 8.9547 7.86526 9.3441 8.1047 9.58499L8.10736 9.58766L8.34933 9.82962C8.38847 9.86816 8.4448 9.85926 8.47921 9.82073C8.62196 9.62467 8.77959 9.43989 8.95069 9.26802C9.12322 9.09488 9.30967 8.9362 9.50818 8.79359C9.55139 8.76746 9.55565 8.70697 9.52124 8.66783ZM12.1502 10.2175V12.3287C12.1502 12.3892 12.2154 12.4325 12.2711 12.4023L14.1482 11.4309C14.1909 11.4095 14.2039 11.3573 14.1826 11.3146C13.7935 10.632 13.0712 10.1659 12.2368 10.1356C12.1935 10.1356 12.1502 10.1701 12.1502 10.2175ZM12.1502 15.3036C10.5851 15.3036 9.31355 14.0338 9.31355 12.4711C9.31355 10.9084 10.585 9.6393 12.1502 9.6393C13.7158 9.6393 14.9868 10.9085 14.9868 12.4711C14.9868 14.0338 13.7201 15.3036 12.1502 15.3036ZM12.1502 8.44782C9.92736 8.44782 8.1245 10.2483 8.1245 12.4711C8.1245 14.6945 9.92741 16.4909 12.1502 16.4909C14.3729 16.4909 16.1758 14.6904 16.1758 12.467C16.1758 10.2436 14.3771 8.44782 12.1502 8.44782Z" fill="white"/>
</svg>

                  </div>
                </div>
                <div className="border-t border-green-200 pt-3">
                  <button className="text-green-600 text-sm font-medium hover:text-green-700">
                    View Connection
                  </button>
                </div>
              </div>

              {/* Black App Connection - Orange */}
              <div className="bg-white border-2 border-orange-300 rounded-lg sm-12 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">Black App</span>
                  </div>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="border-t border-orange-200 pt-3">
                  <button className="text-orange-600 text-sm font-medium hover:text-orange-700">
                    View Connection
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Line Graph Section with Weekly Dropdown */}
<div className="mb-8">
  <div className="bg-white rounded-lg border border-gray-200 p-6">
    {/* Desktop Header - hidden on mobile */}
    <div className="hidden md:flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold text-gray-900">Line Graph</h2>
      <div className="flex items-center space-x-3">
        <Select defaultValue="weekly">
          <SelectTrigger className="w-[120px] pointer-events-none cursor-default">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
        <button className="px-4 py-2 bg-[#3BC1C5] text-white text-sm rounded-lg  transition-colors">
          View Dashboard
        </button>
      </div>
    </div>
    
    {/* Mobile Header - shown only on mobile */}
    <div className="md:hidden flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-900">Line Graph</h2>
      <Select defaultValue="weekly" className="md:hidden">
        <SelectTrigger className="w-[100px] pointer-events-none cursor-default">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="weekly">Weekly</SelectItem>
          <SelectItem value="monthly">Monthly</SelectItem>
          <SelectItem value="yearly">Yearly</SelectItem>
        </SelectContent>
      </Select>
    </div>
    
    {/* Chart container */}
    <div className="h-64">
      <CustomLineChart />
    </div>
    
    {/* Mobile View Dashboard button - shown only on mobile */}
    <button className="md:hidden w-full mt-4 px-4 py-2 bg-[#3BC1C5] text-white text-sm rounded-lg  transition-colors">
      View Dashboard
    </button>
  </div>
</div>

          {/* Explore More Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Explore more</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
{/* How to use the product */}
<div className="mb-8">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold text-gray-900">How to use the product</h2>
    <button className="px-4 py-2 bg-[#3BC1C5] text-white text-sm rounded-lg  transition-colors">
      View More
    </button>
  </div>

  
{/* Product cards - Mobile version (grid layout) */}
<div className="md:hidden grid grid-cols-1 gap-4 mb-6">
  <ProductCard color="bg-[#FFE8B6]" className="w-full">
      {/* Empty first card */}
  </ProductCard>
  <div className="w-70 h-24 rounded-lg overflow-hidden"> {/* Remove background color wrapper */}
      <img src="/hover.png" alt="Product" className="w-full h-full object-cover" />
  </div>
  <ProductCard color="bg-[#FF1FA9]" className="w-full">
      {/* Empty third card */}
  </ProductCard>
  <ProductCard color="bg-[#DFD7FF]" className="w-full">
      {/* Empty fourth card */}
  </ProductCard>
  <ProductCard color="bg-[#4931A7]" className="w-full">
      {/* Empty fifth card */}
  </ProductCard>
</div>

{/* Product cards - Desktop version (grid layout) */}
<div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
  <ProductCard color="bg-[#FFE8B6]">
      {/* Empty first card */}
  </ProductCard>
  <div className="w-70 h-24 rounded-lg overflow-hidden"> {/* Remove background color wrapper */}
      <img src="/hover.png" alt="Product" className="w-full h-full object-cover" />
  </div>
  <ProductCard color="bg-[#FF1FA9]">
      {/* Empty third card */}
  </ProductCard>
  <ProductCard color="bg-[#DFD7FF]">
      {/* Empty fourth card */}
  </ProductCard>
  <ProductCard color="bg-[#4931A7]">
      {/* Empty fifth card */}
  </ProductCard>
</div>
 

  <div className="bg-[#6639B6] rounded-lg p-6 mb-6">
  {/* Image container - responsive layout */}
  <div className="flex flex-col md:flex-row items-center gap-6">
    {/* Mobile: Image above text (centered) */}
    <div className="md:hidden flex justify-center w-full">
      <img 
        src="/Chatbot.png" 
        alt=""
        className="w-40 h-40 object-contain"
      />
    </div>

    {/* Desktop: Image to the left */}  
    
    <div className="hidden md:block flex-shrink-0">
      <img 
        src="/Chatbot.png" 
        alt="Chatbot Configuration"
        className="w-48 h-48 object-contain"
      />
    </div>

    {/* Text content */}
    <div className="flex-1">
      <h3 className="font-semibold text-xl text-white mb-4 text-center md:text-left">Configure Chatbot</h3>
      <p className="text-[#D0BFFF] text-base mb-6 leading-relaxed text-center md:text-left">
        Configure Chatbot allows you to customize the behavior, appearance, and responses of your chatbot...
      </p>
      <div className="flex justify-center md:justify-start">
        <button className="px-6 py-2 bg-white text-black font-medium rounded-lg  transition-colors">
          Configure Chatbot
        </button>
      </div>
    </div>
  </div>
</div>
</div>

          {/* How to integrate - Exact match to screenshot */}
<div className="mt-8">
  <h2 className="text-lg font-semibold text-gray-900 mb-6">How to integrate?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* WhatsApp Box */}
    <div className="border border-gray-200 rounded-lg p-5">
      <div className="flex items-start">
        <div>
          <div className="flex items-center mb-2">
          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2312_1200)">
<path d="M41.4545 0.162109H6.54545C2.9305 0.162109 0 3.09261 0 6.70756V41.6167C0 45.2316 2.9305 48.1621 6.54545 48.1621H41.4545C45.0695 48.1621 48 45.2316 48 41.6167V6.70756C48 3.09261 45.0695 0.162109 41.4545 0.162109Z" fill="#29A71A"/>
<path d="M34.5818 13.5803C32.0848 11.0584 28.7688 9.51175 25.2319 9.21942C21.695 8.92709 18.1701 9.90829 15.2929 11.986C12.4158 14.0638 10.3758 17.1012 9.54093 20.5506C8.70609 24 9.13135 27.6341 10.74 30.7975L9.1609 38.4639C9.14452 38.5402 9.14406 38.6191 9.15954 38.6956C9.17503 38.7721 9.20613 38.8445 9.2509 38.9085C9.3165 39.0055 9.41012 39.0802 9.51928 39.1225C9.62844 39.1649 9.74794 39.173 9.86181 39.1457L17.3755 37.3648C20.53 38.9327 24.1385 39.3307 27.5589 38.4877C30.9792 37.6448 33.9896 35.6158 36.0544 32.7616C38.1192 29.9075 39.1044 26.4133 38.8347 22.901C38.5651 19.3886 37.0581 16.0858 34.5818 13.5803ZM32.2391 32.2785C30.5114 34.0013 28.2867 35.1385 25.8784 35.5299C23.4702 35.9214 20.9998 35.5472 18.8154 34.4603L17.7682 33.9421L13.1618 35.033L13.1755 34.9757L14.13 30.3394L13.6173 29.3275C12.5012 27.1356 12.1074 24.6466 12.4925 22.2171C12.8776 19.7877 14.0217 17.5424 15.7609 15.803C17.9463 13.6183 20.9099 12.391 24 12.391C27.0901 12.391 30.0537 13.6183 32.2391 15.803C32.2577 15.8243 32.2777 15.8444 32.2991 15.863C34.4574 18.0533 35.6622 21.0081 35.651 24.0831C35.6398 27.1581 34.4133 30.104 32.2391 32.2785Z" fill="white"/>
<path d="M31.8305 28.8774C31.266 29.7665 30.3742 30.8547 29.2533 31.1247C27.2896 31.5992 24.276 31.141 20.526 27.6447L20.4796 27.6038C17.1824 24.5465 16.326 22.0019 16.5333 19.9838C16.6478 18.8383 17.6024 17.8019 18.4069 17.1256C18.5341 17.017 18.6849 16.9397 18.8473 16.8999C19.0097 16.86 19.1792 16.8588 19.3422 16.8961C19.5052 16.9335 19.6572 17.0085 19.786 17.1151C19.9149 17.2217 20.017 17.357 20.0842 17.5101L21.2978 20.2374C21.3767 20.4142 21.4059 20.6092 21.3824 20.8014C21.3588 20.9936 21.2834 21.1757 21.1642 21.3283L20.5505 22.1247C20.4189 22.2891 20.3394 22.4892 20.3224 22.6991C20.3054 22.9091 20.3516 23.1194 20.4551 23.3028C20.7987 23.9056 21.6224 24.7919 22.536 25.6129C23.5614 26.5401 24.6987 27.3883 25.4187 27.6774C25.6114 27.7561 25.8232 27.7753 26.0269 27.7325C26.2305 27.6898 26.4167 27.587 26.5614 27.4374L27.2733 26.7201C27.4106 26.5847 27.5814 26.4881 27.7683 26.4402C27.9551 26.3923 28.1513 26.3948 28.3369 26.4474L31.2196 27.2656C31.3786 27.3144 31.5244 27.3989 31.6458 27.5126C31.7671 27.6264 31.8608 27.7663 31.9198 27.9219C31.9787 28.0774 32.0013 28.2444 31.9859 28.41C31.9704 28.5756 31.9173 28.7355 31.8305 28.8774Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2312_1200">
<rect width="48" height="48" fill="white" transform="translate(0 0.162109)"/>
</clipPath>
</defs>
</svg>

      
            <h3 className="font-medium text-[600] pl-2">Whatsapp</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect Watsapp with Feelix.al</p>
          <button className="text-sm text-[#3BC1C5] flex items-center">
            Discover
      
          </button>
        </div>
      </div>
    </div>

    {/* Zapier Box (Checked) */}
    <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
      <div className="flex items-start">
        <div>
        <div className="flex items-center mb-2">
         

          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Frame" clip-path="url(#clip0_2312_1212)">
<g id="Group">
<path id="Vector" d="M42.8133 48.1621H5.18665C2.32219 48.1621 0 45.8399 0 42.9755V5.34876C0 2.4843 2.32219 0.162109 5.18665 0.162109H42.8133C45.6778 0.162109 47.9999 2.4843 47.9999 5.34876V42.9754C48 45.8399 45.6778 48.1621 42.8133 48.1621Z" fill="black"/>
<path id="Vector_2" d="M42.8133 48.1621H5.18665C2.32219 48.1621 0 45.8399 0 42.9755V5.34876C0 2.4843 2.32219 0.162109 5.18665 0.162109H42.8133C45.6778 0.162109 47.9999 2.4843 47.9999 5.34876V42.9754C48 45.8399 45.6778 48.1621 42.8133 48.1621Z" fill="black"/>
<path id="Vector_3" d="M32.4133 18.6077V14.7222C32.9276 14.482 33.3631 14.1006 33.669 13.6225C33.9748 13.1444 34.1386 12.5892 34.1411 12.0215V11.9307C34.1367 10.2794 32.7991 8.94181 31.1478 8.93741H31.057C29.4056 8.94181 28.068 10.2795 28.0636 11.9307V12.0215C28.0662 12.5892 28.2299 13.1444 28.5358 13.6225C28.8417 14.1006 29.2771 14.482 29.7914 14.7222V18.6158C28.3128 18.8419 26.9201 19.4547 25.7545 20.3921L15.0689 12.0701C15.5548 10.251 14.474 8.38249 12.6549 7.89659C10.8359 7.41069 8.96736 8.49149 8.48155 10.3106C7.99565 12.1296 9.07645 13.9981 10.8955 14.4839C11.7652 14.7162 12.6916 14.5951 13.4723 14.1469L23.9783 22.3256C22.0416 25.2474 22.0937 29.0576 24.1095 31.9254L20.9123 35.1226C20.6557 35.0408 20.3884 34.9973 20.1191 34.9933C18.5863 34.9933 17.3438 36.2359 17.3438 37.7686C17.3438 39.3014 18.5864 40.544 20.1191 40.544C21.6519 40.544 22.8944 39.3014 22.8944 37.7686C22.8907 37.4993 22.8471 37.232 22.7652 36.9754L25.9281 33.8125C29.671 36.6715 35.0228 35.9548 37.8817 32.2119C40.7405 28.469 40.024 23.1172 36.2811 20.2583C35.1481 19.3929 33.8162 18.8254 32.4073 18.6077M31.0973 31.4088C28.6805 31.4032 26.7259 29.4395 26.7314 27.0227C26.737 24.606 28.7007 22.6513 31.1174 22.6569C33.531 22.6624 35.4845 24.6212 35.4833 27.0348C35.4833 29.4516 33.5242 31.4108 31.1073 31.4108" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_2312_1212">
<rect width="48" height="48" fill="white" transform="translate(0 0.162109)"/>
</clipPath>
</defs>
</svg>


  
                 
            <h3 className="font-medium text-[600] pl-2">Zapier</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect Zapier with Feelix.al</p>
          <button className="text-sm text-[#3BC1C5]  flex items-center">
            Discover
          
          </button>
        </div>
      </div>
    </div>

    {/* Black App Box */}
    <div className="border border-gray-200 rounded-lg p-5">
      <div className="flex items-start">
       
        <div>
          
          <div className="flex items-center mb-2">
         
 


          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2312_1222)">
<path d="M42.8134 48.1621H5.18665C2.32219 48.1621 0 45.8399 0 42.9755V5.34876C0 2.4843 2.32219 0.162109 5.18665 0.162109H42.8133C45.6778 0.162109 47.9999 2.4843 47.9999 5.34876V42.9754C48 45.8399 45.6778 48.1621 42.8134 48.1621Z" fill="#3D3C52"/>
<path d="M13.4864 9.86536H34.4569C36.5208 9.86536 38.2051 11.5413 38.2051 13.6135V34.5851C38.2051 36.649 36.5291 38.3321 34.4569 38.3321H13.4864C11.4226 38.3321 9.73828 36.6573 9.73828 34.5851V13.604C9.73828 11.5413 11.413 9.86536 13.4864 9.86536Z" fill="#3D3C52"/>
<path d="M26.9384 16.2203V15.2441C26.9378 14.562 26.3846 14.0093 25.7024 14.0094H22.8214C22.1392 14.0093 21.586 14.562 21.5854 15.2441V16.2464C21.5854 16.3579 21.6886 16.4362 21.8013 16.4101C22.6162 16.1747 23.4604 16.0557 24.3087 16.0566C25.127 16.0569 25.9416 16.167 26.7307 16.3839C26.7554 16.3902 26.7813 16.3907 26.8063 16.3854C26.8313 16.3801 26.8548 16.3691 26.8748 16.3533C26.8949 16.3375 26.9111 16.3173 26.9221 16.2942C26.9331 16.2712 26.9387 16.2459 26.9384 16.2203ZM19.0424 17.4978L18.5502 17.0055C18.0681 16.5231 17.2861 16.5228 16.8037 17.0049L16.2147 17.5926C15.7329 18.0715 15.7305 18.8503 16.2093 19.3321L16.2147 19.3374L16.6986 19.8214C16.7769 19.8984 16.8895 19.8807 16.9584 19.8036C17.2439 19.4115 17.5591 19.0419 17.9013 18.6982C18.2464 18.3519 18.6193 18.0345 19.0163 17.7493C19.1027 17.6971 19.1112 17.5761 19.0424 17.4978ZM24.3002 20.5971V24.8196C24.3002 24.9406 24.4307 25.0272 24.5422 24.9667L28.2963 23.0239C28.3816 22.9812 28.4078 22.8768 28.3651 22.7914C27.587 21.4262 26.1423 20.4939 24.4735 20.4334C24.3869 20.4334 24.3002 20.5022 24.3002 20.5971ZM24.3002 30.7693C21.1701 30.7693 18.627 28.2298 18.627 25.1044C18.627 21.979 21.17 19.4407 24.3002 19.4407C27.4316 19.4407 29.9736 21.979 29.9736 25.1044C29.9736 28.2297 27.4401 30.7693 24.3002 30.7693ZM24.3002 17.0578C19.8547 17.0578 16.2489 20.6588 16.2489 25.1044C16.2489 29.5511 19.8548 33.1439 24.3002 33.1439C28.7458 33.1439 32.3515 29.5429 32.3515 25.0961C32.3516 20.6493 28.7542 17.0578 24.3002 17.0578Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2312_1222">
<rect width="48" height="48" fill="white" transform="translate(0 0.162109)"/>
</clipPath>
</defs>
</svg>


        
            <h3 className="font-medium text-[600] pl-2">Black App</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect Black App with Feelix.al</p>
          <button className="text-sm text-[#3BC1C5]  flex items-center">
            Discover
            
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Second Row - 3 more boxes */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    {/* Fierypix Box */}
    <div className="border border-gray-200 rounded-lg p-5">
      <div className="flex items-start">
    
        <div>
          <div className="flex items-center mb-2">
          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2312_1233)">
<path d="M0 6.16211C0 2.8484 2.68629 0.162109 6 0.162109H42C45.3137 0.162109 48 2.8484 48 6.16211V42.1621C48 45.4758 45.3137 48.1621 42 48.1621H6C2.68629 48.1621 0 45.4758 0 42.1621V6.16211Z" fill="#6D00CC"/>
<path d="M16.7246 19.334C16.0964 19.9902 15.5433 20.7215 15.1027 21.509L14.4089 21.1527C14.359 20.9381 14.2323 20.7492 14.0527 20.6214C13.8732 20.4936 13.6531 20.4359 13.4339 20.459C12.9464 20.5152 12.5996 20.9652 12.6652 21.4621C12.6933 21.7434 12.8621 21.9965 13.1152 22.1371C13.3683 22.2777 13.6683 22.2871 13.9214 22.1559L14.5871 22.5215C14.2121 23.3559 13.9496 24.2184 13.7996 25.1184L14.9058 25.3246C15.2527 23.3652 16.1714 21.5652 17.5402 20.1309L16.7246 19.334ZM24.8152 15.8934L24.0652 15.9121L23.9621 14.9746C24.2246 14.759 24.3933 14.3934 24.3464 14.009C24.2246 13.4746 23.7277 13.1277 23.1839 13.1934C22.6402 13.259 22.2371 13.7184 22.2464 14.2715C22.2933 14.6465 22.5277 14.9652 22.8464 15.1059L22.9496 16.0434C21.8902 16.2121 20.8777 16.5402 19.9121 17.0184L20.3996 18.0402C22.4527 17.0465 24.7683 16.784 26.9902 17.2715L27.2246 16.1652C26.4464 15.9871 25.6496 15.8934 24.8152 15.8934ZM34.5558 19.6902C34.7902 19.6621 35.0058 19.5402 35.1558 19.3434C35.3058 19.1559 35.3621 18.9121 35.3339 18.6777C35.3058 18.4434 35.1839 18.2277 34.9964 18.0777C34.8089 17.9277 34.5746 17.8621 34.3402 17.8902C33.8902 17.9465 33.5527 18.3496 33.5527 18.7902L32.9339 19.334C32.3152 18.6871 31.6121 18.1152 30.8527 17.6277L30.2621 18.584C31.9214 19.6434 33.2339 21.1621 34.0402 22.9621L35.0621 22.5027C34.6964 21.6777 34.2277 20.8996 33.6746 20.1871L34.2558 19.6527C34.3777 19.709 34.4527 19.709 34.5558 19.6902ZM24.0183 31.1465C23.4465 31.184 22.8746 31.2027 22.3027 31.2027C21.0089 31.2027 19.7527 31.1184 18.6464 30.9309C18.0089 30.8277 17.3808 30.6777 16.7714 30.4809C18.5714 33.7152 22.1621 35.5246 25.8277 35.0746C29.4933 34.6246 32.5308 31.9809 33.4871 28.409C32.3527 29.1309 31.1339 29.6934 29.8589 30.0965C27.9652 30.6965 25.9965 31.0527 24.0183 31.1465Z" fill="white"/>
<path d="M33.7125 25.9246C33.7406 26.2152 33.7781 26.5058 33.7781 26.7871C31.7437 28.5965 28.1906 29.7683 23.9437 30.0215C20.0437 30.2558 17.0437 29.6465 16.05 28.9246C15.4969 26.2902 16.1625 23.5433 17.8594 21.4527C19.5562 19.3621 22.1156 18.1527 24.8062 18.1527C29.3344 18.1621 33.1594 21.4996 33.7125 25.9246ZM24.3656 25.1371C24.3656 23.6183 23.1562 22.3808 21.6469 22.3808C20.9156 22.3902 20.2219 22.6808 19.7156 23.1965C19.2094 23.7121 18.9187 24.4152 18.9281 25.1371C18.9281 26.6465 20.1375 27.8933 21.6469 27.8933C23.1562 27.884 24.375 26.6465 24.3656 25.1371ZM30.6281 24.4996C30.6281 23.3933 29.7375 22.4933 28.6219 22.484C27.5156 22.4933 26.625 23.3933 26.625 24.4996C26.6156 25.6058 27.5156 26.5152 28.6219 26.5246C29.7375 26.534 30.6281 25.634 30.6281 24.4996Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2312_1233">
<rect width="48" height="48" fill="white" transform="translate(0 0.162109)"/>
</clipPath>
</defs>
</svg>

            <h3 className="font-medium text-[600] pl-2 ">Fierypix</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect Fierypix with Feelix.al</p>
          <button className="text-sm text-[#3BC1C5] flex items-center">
            Discover
            
          </button>
        </div>
      </div>
    </div>

    {/* Fedey Pro Box */}
    <div className="border border-gray-200 rounded-lg p-5">
      <div className="flex items-start">
        {/* <input 
          type="checkbox" 
          className="mt-0.5 mr-3 h-5 w-5 rounded border-gray-300 text-[#6639B6] focus:ring-[#6639B6]" 
        /> */}
        <div>
          <div className="flex items-center mb-2">
          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2312_1243)">
<path d="M48 39.1621C48 44.1326 43.9705 48.1621 39 48.1621H9C4.02947 48.1621 0 44.1326 0 39.1621V9.16211C0 4.19148 4.02947 0.162109 9 0.162109H39C43.9705 0.162109 48 4.19148 48 9.16211V39.1621Z" fill="#336AEA"/>
<path d="M21 38.2246C21 38.7424 20.5803 39.1621 20.0625 39.1621H9.9375C9.41972 39.1621 9 38.7424 9 38.2246V35.5996C9 35.0818 9.41972 34.6621 9.9375 34.6621H20.0625C20.5803 34.6621 21 35.0818 21 35.5996V38.2246ZM38.0625 16.6623C38.5803 16.6623 39 16.2425 39 15.7248V10.0996C39 9.5818 38.5803 9.16208 38.0625 9.16208L9.9375 9.16199C9.41972 9.16199 9 9.58171 9 10.0995V30.7246C9 31.2424 9.41972 31.6621 9.9375 31.6621H20.0625C20.5803 31.6621 21 31.2424 21 30.7246V28.0996C21 27.5818 21.4197 27.1621 21.9375 27.1621H38.0625C38.5803 27.1621 39 26.7424 39 26.2246V20.5998C39 20.082 38.5803 19.6623 38.0625 19.6623H21.9375C21.4197 19.6623 21 19.2425 21 18.7248V17.5998C21 17.082 21.4197 16.6623 21.9375 16.6623H38.0625Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2312_1243">
<rect width="48" height="48" fill="white" transform="translate(0 0.162109)"/>
</clipPath>
</defs>
</svg>

          
            <h3 className="font-medium text-[600] pl-2">Fedey Pro</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect zapier with Feelix.al</p>
          <button className="text-sm text-[#3BC1C5]  flex items-center">
            Discover
         
          </button>
        </div>
      </div>
    </div>

    {/* Vitmake Box */}
    <div className="border border-gray-200 rounded-lg p-5">
      <div className="flex items-start">
    
        <div>
          <div className="flex items-center mb-2">
          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2312_1252)">
<path d="M42.8133 48.1621H5.18665C2.32219 48.1621 0 45.8399 0 42.9755V5.34876C0 2.4843 2.32219 0.162109 5.18665 0.162109H42.8133C45.6779 0.162109 48 2.4843 48 5.34876V42.9755C48 45.8399 45.6778 48.1621 42.8133 48.1621Z" fill="#F28F8F"/>
<path d="M10.8713 24.1621H15.6454L20.419 34.4004L32.3545 8.80505H37.1287L22.8061 39.5191H18.0325L10.8713 24.1621Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2312_1252">
<rect width="48" height="48" fill="white" transform="translate(0 0.162109)"/>
</clipPath>
</defs>
</svg>

         
            <h3 className="font-medium text-[600] pl-2">Vitmake</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect Vitmake with Feelix.al</p>
          <button className="text-sm text-[#3BC1C5]  flex items-center">
            Discover
        
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
        </main>
      </div>
    </div>
  );
};

export default Index;
