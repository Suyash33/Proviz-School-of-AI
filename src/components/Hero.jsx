import React from 'react';
import { GraduationCap, Brain, ChevronRight } from 'lucide-react';

export default function Hero({ onApplyClick }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] opacity-10 bg-cover bg-center" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-medium">Welcome to the Future</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Proviz School of
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"> AI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Empowering the next generation of AI innovators through cutting-edge education, hands-on experience, and industry-leading expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onApplyClick}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 transition-colors text-white font-semibold text-lg group"
              >
                Apply Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* <button className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-purple-400 hover:bg-purple-400/10 transition-colors text-white font-semibold text-lg">
                Learn More
              </button> */}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full animate-pulse" />
              <Brain className="w-full h-full text-purple-300 animate-float" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

