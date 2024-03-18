const Subscribe = () => {
    return(
        <div className="px-[8rem]">
          <div className="flex items-center justify-center flex-col w-[100%] bg-[#fd9bb0] h-auto rounded-[20px] py-[50px] px-[20px] gap-5">
            <h1 className="font-bold text-[36px] text-white">Subscribe to our
newsletter</h1>
<form className="flex items-center justify-center gap-6">
<input type="email" placeholder="Email address" className="rounded-[5px] min-h-[45px]"/>
<button className="bg-black text-white p-3">Subscribe Now</button>
</form>

          </div>
        </div>
    )
}

export default Subscribe;