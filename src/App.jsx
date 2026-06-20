// // Props
// import './Props/style.css';
import "./App.css";
import Project from "./Props/Project";
// import Image from './assets/image.png';
// import Image1 from './assets/image1.png';
// import StyleProps from './Props/StyleProps';
// import Props from './Props/Props';
// //
function App() {
  return (
    <div>
      <Project title="Iphone 12" idx={0} />
      <Project title="MacBook Pro" idx={1} />
      <Project title="PlayStation 5" idx={2} />
    </div>
  );
}
export default App;
