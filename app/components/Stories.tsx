import Image from "next/image";
import Profile from "@/public/profile.png";
import Flower from "@/public/flowers.png";
import backgroundImage from "@/public/backgroundgradinet.png";
import porfileImage from "@/public/profile.2.png";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";

const Stories = () => {
  return (
    <div className="mb-[17px]">
      <div className="flex justify-center bg-white mt-[8px] py-[17px] text-[#000000A6] text-center text-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <h1 className="hover:text-[#2C6DEC] mr-[125px] hover:cursor-pointer font-medium">
          Stories
        </h1>
        <h1 className="hover:text-[#2C6DEC]  hover:cursor-pointer font-medium">
          Reels
        </h1>
      </div>
      <div className="mt-[16px] flex">
        <div
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            width: "131px",
            height: "222px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <div className="w-[60px] h-[58px] bg-[#FFFFFF] rounded-full flex  justify-center items-center ">
            <IoMusicalNotesSharp className="w-[24px] h-[30px]" />
          </div>
          <h2 className="text-white text-[20px] text-medium mt-[7px]">Music</h2>
        </div>

        <div className=" mx-[13px] w-[131px] h-[222px] flex flex-col relative items-center">
          <Image src={Profile} width={131} height={165} alt="profile" />

          <div className="bg-white w-[131px] absolute bottom-0 h-[84px] rounded-b-[25px] flex  flex-col items-center ">
            <div className="w-[35px] h-[35px] rounded-full bg-white absolute top-[-10px] flex justify-center items-center ">
              <FaCirclePlus className="w-[28px] h-[26px] " color="#2697FF" />
            </div>
            <h1 className="text-center max-w-[73px] text-medium tracking-[-0.36px] mt-[29px]">
              Create story
            </h1>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${porfileImage.src})`,
            width: "131px",
            height: "222px",
            display: "flex",
          }}
        >
          <div className="border-4 border-[#2C6DEC] w-[50px] rounded-full h-[50px] mt-[7px] ml-[9px]">
            <Image src={Flower} width={50} height={50} alt="flowers" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
