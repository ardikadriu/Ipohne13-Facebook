import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const Secondcontainer = () => {
  return (
    <div className=" border-t-[1px] border-[#00000033] border-solid pb-[9px]  bg-white ">
      <div className="flex text-[20px] justify-between pt-[14px] font-medium text-[0, 0, 0, 0.65]">
        <h2 className="hover:text-[#2C6DEC] hover:cursor-pointer ml-[36px] hover:underline decoration-[3px] underline-offset-[14px] ">
          {" "}
          Your feed
        </h2>
        <h2 className="hover:text-[#2C6DEC] hover:cursor-pointer ml-[36px] hover:underline decoration-[3px] underline-offset-[14px] ">
          Favourites
        </h2>
        <h2 className="hover:text-[#2C6DEC] hover:cursor-pointer ml-[36px] hover:underline decoration-[3px] underline-offset-[14px] ">
          Recent
        </h2>
        <HiAdjustmentsHorizontal className="mr-[15px]" size="28px" />
      </div>
    </div>
  );
};

export default Secondcontainer;
