import './App.css';
import image from './images/rightSection1.png'

function App() {
  return (
    <div className='block justify-center
     sm:block md:flex' style={{ height: "100vh" }}>

      <div className='bg-pink-50 md:w-[50%]' >
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col w-2/3 max-w-md">
            <h1
              style={{
                textAlign: 'center',
                marginBottom: '20px',
                fontFamily: 'Lato-Bold',
                fontSize: '1.75rem',
                fontWeight: 'bold'
              }}
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


      <div className='md:w-[50%] bg' style={{ backgroundColor: "rgb(35 50 93)" }}>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col w-2/3 max-w-md">
            <img src={image} />
            <div style={{ marginTop: '20px' }}>
              <h1 style={{ color: 'white', textAlign: 'center' }}>Engage the right prospects, at the right time, on the right channels - always!</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default App;
