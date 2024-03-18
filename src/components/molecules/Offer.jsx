import OfferCard from "../atoms/OfferCard";

const Offer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center ">
      <div className="w-[350px] mb-8">
        <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl mb-4">
          What we have to <span className="text-[#fc1d4d]">offer</span>
        </h2>
        <p className="text-[#444] text-sm leading-7 mb-4">
          Your dreams deserve a solid training academy, we&apos;ve got you
          covered!
        </p>
        <div className="flex items-center justify-center">
          <div className="w-1/3 h-[1px] bg-[#fc1d4d]"></div>
          <div className="w-5 h-5 bg-[#fc1d4d] rounded-full flex items-center justify-center">
            {" "}
          </div>
          <div className="w-1/3 h-[1px] bg-[#fc1d4d]"></div>
        </div>
      </div>
      {/* <div className="flex gap-10">
        <div className="mt-12">
          <OfferCard
            header="Trading Community"
            description="We foster a trading community of over 100,000 subscribers where high quality signals, trading resources and tools are shared for free. Click the button below to join now.."
            buttonText="Join Telegram Channel"
            hoverColor="#f"
            buttonColor="#fff"
            buttonBorder={true}
            buttonBorderColor="#fc1d4d"
          />
        </div>
        <OfferCard
          header="Forex Education"
          description="We provide a robust curriculum that covers everything from forex basics to advanced trading strategies. Our aim is to equip you with the knowledge and skills you need to thrive in the forex market. Click the button below to enroll now.."
          buttonText="Enroll Now"
          hoverColor="#fc1d4d"
          buttonColor="#fff"
          buttonBorder={true}
          buttonBorderColor="#fc1d4d"
        />
        <div className="mt-12">
          <OfferCard
            header="Live Trading Session"
            description="Our free live trading session on YouTube every Monday 1:00 PM GMT+1 was created to help traders improve their trading and be consistently profitable. Click the button below to subscribe to the channel."
            buttonText="Click here to Subscribe"
            hoverColor="#f"
            buttonColor="#fff"
            buttonBorder={true}
            buttonBorderColor="#fc1d4d"
          />
        </div>
      </div> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  <div className="mt-12">
    <OfferCard
      header="Trading Community"
      description="We foster a trading community of over 100,000 subscribers where high quality signals, trading resources and tools are shared for free. Click the button below to join now.."
      buttonText="Join Telegram Channel"
      hoverColor="#f"
      buttonColor="#fff"
      buttonBorder={true}
      buttonBorderColor="#fc1d4d"
    />
  </div>
  <OfferCard
    header="Forex Education"
    description="We provide a robust curriculum that covers everything from forex basics to advanced trading strategies. Our aim is to equip you with the knowledge and skills you need to thrive in the forex market. Click the button below to enroll now.."
    buttonText="Enroll Now"
    hoverColor="#fc1d4d"
    buttonColor="#fff"
    buttonBorder={true}
    buttonBorderColor="#fc1d4d"
  />
  <div className="mt-12">
    <OfferCard
      header="Live Trading Session"
      description="Our free live trading session on YouTube every Monday 1:00 PM GMT+1 was created to help traders improve their trading and be consistently profitable. Click the button below to subscribe to the channel."
      buttonText="Click here to Subscribe"
      hoverColor="#f"
      buttonColor="#fff"
      buttonBorder={true}
      buttonBorderColor="#fc1d4d"
    />
  </div>


</div> */}

<div className="flex flex-col justify-center md:flex-row md:flex-wrap lg:flex-row gap-10">
  <div className="mt-12">
    <OfferCard
      header="Trading Community"
      description="We foster a trading community of over 100,000 subscribers where high quality signals, trading resources and tools are shared for free. Click the button below to join now.."
      buttonText="Join Telegram Channel"
      hoverColor="#f"
      buttonColor="#fff"
      buttonBorder={true}
      buttonBorderColor="#fc1d4d"
    />
  </div>
  <OfferCard
    header="Forex Education"
    description="We provide a robust curriculum that covers everything from forex basics to advanced trading strategies. Our aim is to equip you with the knowledge and skills you need to thrive in the forex market. Click the button below to enroll now.."
    buttonText="Enroll Now"
    hoverColor="#fc1d4d"
    buttonColor="#fff"
    buttonBorder={true}
    buttonBorderColor="#fc1d4d"
  />
  <div className="mt-12 md:mt-0 md:w-full flex justify-center">
    <OfferCard
      header="Live Trading Session"
      description="Our free live trading session on YouTube every Monday 1:00 PM GMT+1 was created to help traders improve their trading and be consistently profitable. Click the button below to subscribe to the channel."
      buttonText="Click here to Subscribe"
      hoverColor="#f"
      buttonColor="#fff"
      buttonBorder={true}
      buttonBorderColor="#fc1d4d"
    />
  </div>
</div>


    </div>
  );
};

export default Offer;
