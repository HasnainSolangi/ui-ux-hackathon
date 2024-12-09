"use client";
import { useState } from "react";
import Image from "next/image";
import check from "../../public/check 1.png";
import { RiArrowDropDownLine, RiErrorWarningLine } from "react-icons/ri";
import Logo from "../../public/Logo Icon.png";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");

  const languages = ["English", "Urdu", "Sindhi", "Balochi", "Pashtu", "Punjabi"]; // List of languages

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#272343] w-full py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Free Shipping Notice */}
          <div className="flex items-center gap-1">
            <Image
              src={check}
              alt="check"
              height={16}
              width={16}
              className="w-auto h-auto"
            />
            <p className="font-inter font-normal text-xs sm:text-sm text-white text-center">
              Free shipping on all orders over $50
            </p>
          </div>

          {/* Language Selector and Other Options */}
          <div className="flex items-center gap-4 sm:gap-8 relative">
            {/* Language Dropdown */}
            <div
              className="flex items-center text-white cursor-pointer relative"
              onClick={toggleDropdown}
            >
              <p className="font-inter font-normal text-xs sm:text-sm">
                {selectedLanguage}
              </p>
              <RiArrowDropDownLine className="text-xl" />
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-lg py-2 w-24 z-10">
                  {languages.map((lang) => (
                    <div
                      key={lang}
                      className="px-4 py-2 text-sm text-[#272343] cursor-pointer hover:bg-gray-100"
                      onClick={() => handleLanguageChange(lang)}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other Options */}
            <Link href="/faq" className="font-inter font-normal text-xs sm:text-sm text-white">
              Faqs
            </Link>
            <div className="flex items-center gap-1">
              <RiErrorWarningLine className="text-white/70" />
              <p className="font-inter font-normal text-xs sm:text-sm text-white">
                Need Help
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#F0F2F3] py-4 sm:py-5 px-4 sm:px-6 lg:px-8 hidden md:inline-block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="w-8 sm:w-10 h-auto"
            />
            <Link
              href="/"
              className="font-inter font-medium text-xl sm:text-2xl lg:text-[26px] text-[#272343]"
            >
              Comforty
            </Link>
          </div>

          {/* Cart Section */}
          <div className="flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-4 sm:w-5 h-auto" />
              <Link
                href="/cart"
                className="font-inter font-medium text-xs sm:text-sm text-[#272343]"
              >
                Cart
              </Link>
              <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#007580] rounded-full flex items-center justify-center">
                <p className="font-medium text-[10px] text-white">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
