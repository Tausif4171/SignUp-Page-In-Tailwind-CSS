import './App.css';
import image from './images/leftSection.png'

function App() {
  const INPUT_CLASSNAME = "bg-[#171717] text-white outline-none py-4 pl-6 focus:border-tag border-[1px] border-transparent rounded-xl mb-8";
  return (
    <div className='block justify-center
     sm:block md:flex h-[auto] bg-[#000] overflow-hidden'>
      {/* <header className='w-[100%] h-[20px]'></header> */}

      <div className=' md:w-[50%] border-[0px] border-solid border-gray-300' >
        <div className="flex items-center justify-center md:h-screen mt-[130px] md:mt-0">
          <div className="flex flex-col w-2/3">
            <div className="flex flex-row md:flex-col">
              <img className="w-[105px] h-[105px]" src={image} />
              <div className="mt-[14px] pl-5 md:pl-[0px]">
                <h1 className="text-white text-[30px] pb-0 md:text-[78px] md:pb-[2.25rem] md:max-w-[479px] md:leading-[84px] font-semibold">Apply for early access</h1>
                <h5 className="md:hidden text-[#ADADAD] text-[16px]">Currently in Beta</h5>
              </div>
            </div>

            <div className='hidden md:block'>
              <h1 className=' text-white text-left font-semibold text-[1.5rem]' >We are still fine tuning the product and would love your help. Join our Beta to help contribute to the future of presentations.</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[470px] md:w-1/2' >
        <div className="flex items-center justify-center md:h-screen mt-[40px]">
          <div className="flex flex-col w-2/3">

            <label className='text-[#ADADAD] text-[17px] pb-[6px]'>First name</label>
            <input
              type="text"
              className={INPUT_CLASSNAME}
              placeholder="John"
            />
            <label className='text-[#ADADAD] text-[17px] pb-[6px]'>Email address</label>
            <input
              type="text"
              className={INPUT_CLASSNAME}
              placeholder="john.doe@email.com"
            />

            <button className="bg-[#7053FF] hover:bg-[#4338ca] text-white font-bold py-2 px-4 rounded-xl mb-5 h-[56px]">
              Join Beta
            </button>
            <p className='text-[#ADADAD] text-[17px]'>By signing up, you agree to our Privacy Policy and Terms of Service</p>
          </div>
        </div>

      </div>


    </div>
  )
}
export default App;
