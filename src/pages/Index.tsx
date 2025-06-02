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
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
        

          {/* Connections Section - Updated to match image */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Connections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* WhatsApp Connection - Green */}
              <div className="bg-white border-2 border-green-300 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900">Watsapp</span>
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
              <div className="bg-white border-2 border-green-300 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900">Star Force</span>
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

              {/* Black App Connection - Orange */}
              <div className="bg-white border-2 border-orange-300 rounded-lg p-4">
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
              <div className="flex items-center justify-between mb-6">
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
                  <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                    View Dashboard
                  </button>
                </div>
              </div>
              
              <div className="h-64">
                {/* Chart content will be rendered by CustomLineChart component */}
                <CustomLineChart />
              </div>
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
    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
      View More
    </button>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
    <ProductCard color="bg-[#FAF0DA]">
      {/* You can add an icon or text here */}
    </ProductCard>
    <ProductCard color="bg-[#F0E6DA]">
      {/* <img src="" alt=" " className="max-w-full max-h-full" /> */}
    </ProductCard>
    <ProductCard color="bg-[#E0BBE4]">
      {/* You can add an icon or text here */}
    </ProductCard>
    <ProductCard color="bg-[#B5EAEA]">
      {/* You can add an icon or text here */}
    </ProductCard>
    <ProductCard color="bg-[#B8A0D2]">
      {/* You can add an icon or text here */}
    </ProductCard>
  </div>

  {/* Configure Chatbot */}
  <div className="bg-[#6639B6] rounded-lg p-6 text-white">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* <img src=" " alt="Chatbot Illustration" className="w-16 h-16" /> */}
        <div>
          <h3 className="font-semibold text-lg">Configure Chatbot</h3>
          <p className="text-[#D0BFFF] text-sm">
            Configure Chatbot allows you to customize the behavior, appearance, and responses of your chatbot, ensuring it
            meets your specific needs and user preferences. With intuitive settings, you can easily adjust the chatbot's
            parameters for optimal performance and user engagement.
          </p>
        </div>
      </div>
      <button className="px-6 py-2 bg-white text-[#6639B6] font-medium rounded-lg hover:bg-gray-100 transition-colors">
        Configure Chatbot
      </button>
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
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                      </svg>
                    </div>
      
            <h3 className="font-medium text-gray-900">Whatsapp</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect Watsapp with Feelix.al</p>
          <button className="text-sm text-[#6639B6] hover:underline flex items-center">
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
          <div className="w-8 h-8 bg-black-500 rounded flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF4A00">
  <path d="M15.6 11.998l5.4-5.399-3.6-3.6-5.4 5.4V0H7.2v7.999L1.8 2.6l-3.6 3.6 5.4 5.399-5.4 5.399 3.6 3.6 5.4-5.4V24h3.6v-7.999l5.4 5.4 3.6-3.6-5.4-5.401z"/>
</svg>
                    </div>
            <h3 className="font-medium text-gray-900">Zapier</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect Zapier with Feelix.al</p>
          <button className="text-sm text-[#6639B6] hover:underline flex items-center">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
</svg>
        
            <h3 className="font-medium text-gray-900">Black App</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect Black App with Feelix.al</p>
          <button className="text-sm text-[#6639B6] hover:underline flex items-center">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF5722">
  <path d="M9 2L7 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3l-2-2H9zm3 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#FFC107"/>
  <path d="M13 10h-2v2H9v2h2v2h2v-2h2v-2h-2z"/>
</svg>
            <h3 className="font-medium text-gray-900">Fierypix</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect Fierypix with Feelix.al</p>
          <button className="text-sm text-[#6639B6] hover:underline flex items-center">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4CAF50">
  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
</svg>
          
            <h3 className="font-medium text-gray-900">Fedey Pro</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect zapier with Feelix.al</p>
          <button className="text-sm text-[#6639B6] hover:underline flex items-center">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#9C27B0">
  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
  <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 5c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
</svg>
         
            <h3 className="font-medium text-gray-900">Vitmake</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Connect Vitmake with Feelix.al</p>
          <button className="text-sm text-[#6639B6] hover:underline flex items-center">
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