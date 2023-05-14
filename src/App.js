import './App.css';
import image from './images/rightSection1.png'

function App() {
  return (
    <div className='block justify-center
     sm:block md:flex h-[100vh]'>

      <div className='bg-pink-50 md:w-[50%]' >
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col w-2/3 max-w-md">
            <h1
              className='text-[#1f345d] text-center mb-[20px] font-lato font-semibold text-[1.75rem]'
            >
              Sign Up
            </h1>
            <input
              type="text"
              className="border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-300"
              placeholder="Name"
            />
            <input
              type="text"
              className="border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-300"
              placeholder="Work email"
            />
            <input
              type="text"
              className="border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-300"
              placeholder="Password"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>

      </div>


      <div className='md:w-[50%] bg-[#20335d]' >
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col w-2/3 max-w-md">
            <img src={image} />
            <div className='mt-[20px]'>
              <h1 className=' text-white text-center' >Engage the right prospects, at the right time, on the right channels - always!</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default App;
