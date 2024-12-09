# UI/UX E-commerce Website Hackathon 🚀  

This is a modern e-commerce website built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The project was created for a hackathon, focusing on delivering an intuitive and user-friendly shopping experience.

---

## 🌟 Features  

- **Modern UI/UX Design**: Attractive and responsive design optimized for all devices.  
- **Next.js Framework**: Blazing fast performance with server-side rendering (SSR) and static site generation (SSG).  
- **TypeScript Integration**: Type safety and improved developer experience.  
- **Tailwind CSS**: Rapid styling with utility-first CSS framework.  
- **E-commerce Functionalities**:  
  - Product catalog with categories and filters.  
  - Shopping cart and checkout system.  
  - User authentication and profile management.  
- **Dynamic Routing**: Seamless navigation between product pages.  

---

## 🛠️ Tech Stack  

- **Frontend**:  
  - [Next.js](https://nextjs.org/)  
  - [TypeScript](https://www.typescriptlang.org/)  
  - [Tailwind CSS](https://tailwindcss.com/)  

- **Backend** (Optional for API integration):  
  - [Node.js](https://nodejs.org/)   


## 🚀 Getting Started  

### Prerequisites  
- Node.js v16+  
- npm or yarn  


 **TBC**



### Custom CSS breakpoints
```
@layer base {
  /* Mobile Small */
  @media (max-width: 480px) {
    html {
      font-size: 14px;
    }
  }
  
  /* Mobile Large */
  @media (min-width: 481px) and (max-width: 768px) {
    html {
      font-size: 15px;
    }
  }
  
  /* Tablet */
  @media (min-width: 769px) and (max-width: 1024px) {
    html {
      font-size: 16px;
    }
  }
  
  /* Small Laptop */
  @media (min-width: 1025px) and (max-width: 1440px) {
    html {
      font-size: 16px;
    }
  }
  
  /* Large Desktop */
  @media (min-width: 1441px) {
    html {
      font-size: 18px;
    }
  }
}
```

### Tailwind.config.ts alternative
```
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '481px',     // Mobile Large starts
        'sm': '769px',     // Tablet starts
        'md': '1025px',    // Small Laptop starts
        'lg': '1441px',    // Large Desktop starts
      },
      spacing: {
        // Common spacing values.
        '0': '0',
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
      },
      fontSize: {
        // Typography scale.
        'xs': '0.75rem',      // 12px
        'sm': '0.875rem',     // 14px
        'base': '1rem',       // 16px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
        '6xl': '3.75rem',     // 60px
      },
    },
  },
  plugins: [],
}

export default config
```


### Top & Main Headbar with Navbar - 99.9% 
```
// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { RiArrowDropDownLine } from 'react-icons/ri';
// import { FaCheck } from "react-icons/fa6";
// import { AiOutlineExclamationCircle } from "react-icons/ai";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="w-full">
//       {/* Top Header */}
//       <div className="bg-[#272343] h-[45px] flex items-center justify-center">
//         <div className="w-[1920px] px-[300px] flex items-center justify-between">
//           {/* Free Shipping Message */}
//           <div className="flex items-center text-white opacity-70">
//             <FaCheck className="h-5 w-5 mr-2" />
//             <span className="text-sm">Free shipping on all orders over $50</span>
//           </div>

//           {/* Right Side Menu */}
//           <div className="flex items-center space-x-8 text-white opacity-70">
//             <div className="flex items-center gap-1">
//               <span className="text-sm">Eng</span>
//               <RiArrowDropDownLine className="text-xl" />
//             </div>

//             <div className="text-sm">
//               FAQs
//             </div>

//             <div className="flex items-center gap-2">
//               <AiOutlineExclamationCircle className="h-5 w-5" />
//               <span className="text-sm">Need Help</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="bg-[#F0F2F3] h-[84px] flex items-center justify-center">
//         <div className="w-[1920px] px-[300px] flex items-center justify-between">
//           {/* Logo Section */}
//           <div className="flex items-center h-[40px] gap-2">
//           <Image
//             src="/comforty.png"
//             alt="Comforty Logo"
//             width={40}
//             height={23.34}
//             className="ml-3"
//           />
//             <div className="text-2xl font-bold">Comforty</div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden flex items-center justify-center p-2"
//             onClick={toggleMenu}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={
//                   isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
//                 }
//               />
//             </svg>
//           </button>

//           {/* Cart Section */}
//           <div className="relative w-[120px] h-[44px] bg-white rounded-lg p-[11px_16px] flex items-center py-6 px-4">
//             <div className="flex items-center gap-2 cursor-pointer">
//               <Image 
//                 src="/info.svg"
//                 alt="Cart Icon"
//                 width={24}
//                 height={24}
//                 className="w-16 h-16"
//                 priority
//               />
//               {/* Cart Items Count */}
//               <div className="absolute top-[14px] right-3 w-5 h-5 bg-[#007580] rounded-full flex items-center justify-center">
//               <span className="text-[#FFFFFF] text-xs">2</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Items */}
//       {isMenuOpen && (
//         <div className="md:hidden flex flex-col gap-4 mt-4 px-4 bg-[#F0F2F3] py-4">
//           <a href="#" className="text-[#007580] text-[14px] font-medium">
//             Home
//           </a>
//           <a href="#" className="text-[14px] font-medium">
//             Shop
//           </a>
//           <a href="#" className="text-[14px] font-medium">
//             Product
//           </a>
//           <a href="#" className="text-[14px] font-medium">
//             Pages
//           </a>
//           <a href="#" className="text-[14px] font-medium">
//             About
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }
```