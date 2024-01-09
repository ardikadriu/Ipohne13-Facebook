import Image from "next/image";
import Profilepicture from "@/public/profile-picture2.png";
import Imagepost from "@/public/image-post.png";
import { GiWorld } from "react-icons/gi";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Profileicon from "@/public/profile-icon.png";
import { GoTriangleDown } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";

const Firstpost = () => {
  return (
    <div className="bg-white">
      <div className="flex ml-2.5 pt-[12px]">
        <Image
          src={Profilepicture}
          width={57}
          height={56}
          alt="profilepicture
        "
        />
        <div className="justify-center flex flex-col ml-3">
          <h1 className="tracking-[-0.4px] leading-[20.605px] text-[20px]">
            RAP Lyrics
          </h1>

          <div className="flex items-center text-[#00000080]">
            <h2>5 d &#x2022;</h2>
            <GiWorld size="12px" />
          </div>
        </div>
        <div className="flex items-center ml-[180px] ">
          <PiDotsThreeOutlineFill size="27px" className="mr-[12px]" />
          <MdCancel size="26px" />
        </div>
      </div>
      <p className="max-w-[297px] ml-[10px] text-[20px] tracking-[-0.4px] leading-[142.023%]">
        Respect to the these legends the really worked hard to make our
        childhoods in... <span className="text-[#00000080] ">see more</span>
      </p>
      <Image src={Imagepost} width={429} height={234} alt="postimage" />
      <div className="flex ">
        <div className="pt-[12px] flex ml-[15px] items-center">
          <div className="w-[26px] h-[28px] bg-[#2697FFCC] rounded-full flex justify-center items-center hover:cursor-pointer">
            <FaRegThumbsUp color="white" size="18px" />
          </div>
          <div className="w-[26px] h-[28px] bg-[#FF3030] rounded-full flex justify-center items-center hover:cursor-pointer">
            <FaHeart size="18px" color="white" />
          </div>
          <h1 className="text-[#000000A6] text-[18px] tracking-[-0.36px] leading-[26px] ml-[16px]">
            112k
          </h1>
        </div>
        <div className="flex ml-[37px] items-end text-[18px] text-[#000000A6] ">
          <h2 className="tracking-[-0.36px ] leading-[25.564px]">
            1.9k comments
          </h2>
          <h2 className="tracking-[-0.36px ] leading-[25.564px] ml-[2px]">
            1.2k shares
          </h2>
          <Image src={Profileicon} width={26} height={28} alt="profileicon" />
          <GoTriangleDown size="18px" />
        </div>
      </div>
      <div className="w-full border-[1px]  border-[#00000033] mt-[16px] text-[20px] font-medium "></div>

      <div className="flex justify-between text-[#00000080] items-center">
        <div className="flex ml-[41px] ">
          <AiOutlineLike size="24px" />
          <h3 className="ml-[10px] text-black">Like</h3>
        </div>
        <div className="flex py-[13px]">
          <FaRegCommentAlt size="24px" />
          <h3 className="ml-[9px] text-black">comment</h3>
        </div>
        <div className="flex mr-[13px]">
          {" "}
          <PiShareFatLight size="24px" />
          <h3 className="text-black">shares</h3>
        </div>
      </div>
    </div>
  );
};

export default Firstpost;
