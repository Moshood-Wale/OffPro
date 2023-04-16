import React from "react";
import Image_one from "../assets/smart-home.png";

function NavBar() {
    return (
        <div class="max-w-screen-xl mx-auto mt-3 font-Grotesk shadow-lg w-full">
  <nav class="flex items-center justify-between bg-white-200 text-black px-4 py-2">
    <div class="flex items-center flex-mobile">
      <img src={Image_one} alt="Logo"/>
      <h1 class="ml-2 text-xl font-bold"><a href="/">Off<span className="text-[#6666FF]">Pro</span></a></h1>
    </div>
    <div class="hidden md:flex items-center flex-1 justify-center space-x-4 px-4">
      <a href="/about" class="hover:text-gray-300">About</a>
      <a href="#" class="hover:text-gray-300">Device</a>
      <a href="/faq" class="hover:text-gray-300">FAQ</a>
    </div>
    <div class="ml-auto mr-2 flex items-center">
      <button class="hidden md:block bg-indigo-600 text-white rounded-full px-4 py-2 hover:bg-indigo-700">Contact Us</button>
      <a href="#" class="md:hidden text-xl font-bold text-gray-800 ml-4" id="mobile-menu-button">
        <svg class="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </a>
      <div class="hidden absolute top-0 left-0 mt-16 w-full bg-white shadow-lg z-20" id="mobile-menu">
        <div class="px-4 py-2">
          <a href="/about" class="block text-gray-800 font-semibold py-2 hover:bg-gray-200">About</a>
          <a href="#" class="block text-gray-800 font-semibold py-2 hover:bg-gray-200">Device</a>
          <a href="/faq" class="block text-gray-800 font-semibold py-2 hover:bg-gray-200">FAQ</a>
          <a href="#" class="block text-gray-800 font-semibold py-2 hover:bg-gray-200">Contact Us</a>
        </div>
      </div>
    </div>
  </nav>
</div>

//         <div class="max-w-screen-xl mx-auto mt-3 font-Grotesk shadow-lg w-full">
//   <nav class="flex items-center justify-between bg-white-200 text-black px-4 py-2">
//     <div class="flex items-center">
//       <img src={Image_one} alt="Logo"/>
//       <h1 class="ml-2 text-xl font-bold"><a href="/">Off<span className="text-[#6666FF]">Pro</span></a></h1>
//     </div>
//     <div class="hidden md:flex items-center flex-1 justify-center space-x-4 px-4">
//       <a href="/about" class="hover:text-gray-300">About</a>
//       <a href="#" class="hover:text-gray-300">Device</a>
//       <a href="/faq" class="hover:text-gray-300">FAQ</a>
//     </div>
//     <div class="ml-auto mr-2 flex items-center">
//       <button class="hidden md:block bg-indigo-600 text-white rounded-full px-4 py-2 hover:bg-indigo-700">Contact Us</button>
//       <a href="#" class="md:hidden text-xl font-bold text-gray-800 ml-4" id="mobile-menu-button">
//         <svg class="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//       </a>
//       <div class="hidden absolute top-0 left-0 mt-16 w-full bg-white shadow-lg z-20" id="mobile-menu">
//         <div class="px-4 py-2">
//           <a href="/about" class="block text-gray-800 font-semibold py-2 hover:bg-gray-200">About</a>
//           <a href="#" class="block text-gray-800 font-semibold py-2 hover:bg-gray-200">Device</a>
//           <a href="/faq" class="block text-gray-800 font-semibold py-2 hover:bg-gray-200">FAQ</a>
//           <a href="#" class="block text-gray-800 font-semibold py-2 hover:bg-gray-200">Contact Us</a>
//         </div>
//       </div>
//     </div>
//   </nav>
// </div>
    );
  }
  
  export default NavBar;