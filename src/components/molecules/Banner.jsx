import Button from "../atoms/Button";

const Banner = () => {
  return (
    <div className="flex flex-row gap-x-8 p-8 my-14">
      <div className="text-start">
        <h2 className="capitalize text-[3.5rem] pb-3">
          Discover The
          <br /> Pathway to Mastering <br />
          the Art of Profitable
          <br />
          Forex Trading.
        </h2>
        <p className="text-[#979797] text-[16px] leading-7 pb-4">
          Firepips is your sure guide to financial freedom. We're a supportive
          community dedicated to teaching you the art of profitable forex
          trading.
        </p>
        <div className="">
          <Button
            text="Join Free Class"
            color="#fff"
            textColor="#fc1d4d"
            border={true}
            borderColor="#fc1d4d"
          />
          <Button
            text="Enroll now"
            color="#fff"
            border={true}
            borderColor="#fc1d4d"
            className="pl-6"
          />
        </div>
      </div>
      <div>
        {/* <div className="section-head right shape bg-yellow-400 rounded-br-3xl h-204 w-143 absolute transform -translate-y-30 -translate-x-35 transition duration-1000 ease-in-out">

    </div> */}
        <img
          src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="banner"
          className="h-[500px] rounded"
        />
      </div>
    </div>
  );
};

export default Banner;
