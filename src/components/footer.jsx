import React from "react";
import Image_one from "../assets/smart-home.png";
import Dribble from "../assets/dribbble.png";
import Github from "../assets/github.png";


function Footer() {
    return (
<div class="max-w-screen-xl mx-auto mt-20 font-Grotesk">
  <footer class="flex flex-col items-center justify-center bg-white-200 text-black py-4">
    <div class="flex items-center flex-mobile mb-4 border-t-2 border-gray-400">
      <a href="#"><img src={Image_one} alt="Logo" /></a>
      <h1 class="ml-2 text-xl font-bold"><a href="/">Off<span className="text-[#6666FF]">Pro</span></a></h1>
      <div class="flex-1"></div>
    {/* </div> */}
    <div class="flex items-center space-x-4 px-4 flex-1">
      <div class="ml-auto">
        <a href="/about" class="hover:text-gray-300">About</a>
        <a href="#" class="hover:text-gray-300">Terms & Condition</a>
        <a href="#" class="hover:text-gray-300">Contact Us</a>
        <a href="#" class="hover:text-gray-300">Device</a>
      </div> </div>
      <div class="pl-8">
        <div class="px-4 py-2 text-black-100">
           &copy; 2023 OffPro, Inc. All Rights Reserved.
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <img class="h-6 w-6" src={Github} alt="Github Logo"/>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <img class="h-6 w-6" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter Logo"/>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <img class="h-6 w-6" src={Dribble} alt="Dribbble Logo"/>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <img class="h-6 w-6" src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook Logo"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>

      
    );
  }
  
  export default Footer;