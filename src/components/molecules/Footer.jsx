const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center p-6">
        <div className="p-4">
          <img
            src="	https://firepipsfx.com/static/media/logo.010dfe0e1df606a52c6a.png"
            alt="logo"
            className="w-[134px] h-[42px]"
          />
        </div>
        <p className="max-w-[322px]">
          FirePips FX Academy provides general information and educational
          materials only. Please recognize that your ultimate success or failure
          will be the result of your own efforts
        </p>
      </div>
      <div class="px-[10rem] pb-6">
    <ul class="flex justify-between">
        <li class="text-[#fc1d4d] text-[14px] cursor-pointer transition-colors duration-300 hover:bg-[whitesmoke] hover:text-[#fc1d4d] px-4 py-2 rounded-[5px]">Mentorship Plan</li>
        <li class="text-[#fc1d4d] text-[14px] cursor-pointer transition-colors duration-300 hover:bg-[whitesmoke] hover:text-[#fc1d4d] px-4 py-2 rounded-[5px]">Mentorship Courses</li>
        <li class="text-[#fc1d4d] text-[14px] cursor-pointer transition-colors duration-300 hover:bg-[whitesmoke] hover:text-[#fc1d4d] px-4 py-2 rounded-[5px]">FAQs</li>
    </ul>
</div>

      <div class="flex justify-between items-center border-t border-gray-800 py-4">
        <h3 class="text-lg">© 2024 FirePipsFx Academy. All Rights Reserved</h3>
        <p class="text-sm">Built with ❤ by John</p>
        <div class="icons">icons</div>
      </div>
    </div>
  );
};

export default Footer;
