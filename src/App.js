
import './App.css';
import Testimonials from './components/Testimonials';
import reviews from './data'

function App() {
  return (
<div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-[#004953]">
      <div className='text-center'>

      <h1 className='text-4xl font-bold text-white'>Our Testimonials</h1>

      <div className='bg-white h-[4px] w-1/5 mx-auto mt-1'></div>

      <Testimonials reviews = {reviews}/>
      
      </div>
      
    </div>
  );
}

export default App;
