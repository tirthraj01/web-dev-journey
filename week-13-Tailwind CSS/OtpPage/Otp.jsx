export function Otp(){
    return <div className="flex justify-center">
        <SubOtpBox/>
        <SubOtpBox/>
        <SubOtpBox/>
        <SubOtpBox/>
        <SubOtpBox/>
        <SubOtpBox/>

    </div>
}

function SubOtpBox (){
    return <div>
        <input type="text" className="m-2 w-[40px] h-[50px] rounded-2xl
        bg-blue-500 outline-none px-4 text-white"></input>
    </div>
}
