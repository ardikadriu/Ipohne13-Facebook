import Image from "next/image";
import Controls from "@/public/Controls.png";
import { FaSearch } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";

const Topbar = () => {
  return (
    <div className="pb-[12px] bg-white">
      <div className="flex justify-between items-center pt-[22px]">
        <h1 className="w-[76px] text-center font-medium font-medium">09:41</h1>
        <Image
          className="mr-[12px]"
          src={Controls}
          width={65}
          height={12}
          alt="controls"
        />
      </div>
      <div className="flex mx-[15px] mt-[27px] justify-between tracking-[-0.64px]">
        <h1 className="text-[32px] text-[#2c6decd9] font-bold">facebook</h1>
        <div className="flex">
          <div className="w-[46px] h-[42px] bg-[#DEDEDE] rounded-full flex justify-center items-center">
            <FaSearch size="24px" />
          </div>
          <div className="w-[46px] h-[42px] bg-[#DEDEDE] rounded-full flex justify-center items-center ml-[20px]">
            <FaFacebookMessenger size="27px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
