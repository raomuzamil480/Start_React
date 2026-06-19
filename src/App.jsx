import Index from './Index';
//
import './Props/style.css';
import Image from './assets/image.png';
import Image1 from './assets/image1.png';
import Props from './Props/Props';
//
function App(){
  return (
    <div>
      <h1>Hello React</h1>
      <Index />
      
      <Props title="My second Prop" name="Jane" age={25} image={Image1} />
      <Props title="My First Prop" name="John" age={30} image={Image} />
    </div>
  )
}
export default App; 