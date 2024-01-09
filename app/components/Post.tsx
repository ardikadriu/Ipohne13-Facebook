import backgroundImage from "../../public/profile-icon.png";

const Post = () => {
  return (
    <div className="flex mt-[4px] w-full bg-white py-[10px] items-center ">
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          width: "57px",
          height: "56px",
          marginLeft: "10px",
        }}
      ></div>
      <h1 className="text-[19px] tracking-[-0.38px] ml-2.5">
        Whats on your mind?
      </h1>
    </div>
  );
};

export default Post;
