// // Props
// import './Props/style.css';
import "./App.css";
//import Project from "./Props/Project";
// import Image from './assets/image.png';
// import Image1 from './assets/image1.png';
// import StyleProps from './Props/StyleProps';
// import Props from './Props/Props';
// // Button
import Button from './Button/Button';
import State from './States/UseState';
// Like Button
import LikeButton from './States/LikeButton';
import Practice from './States/pratice';
import Todo from "./Todo/Todo";

function App() {
  return (
    <div>
      <Practice/>
      <Todo/>

      <Button />
      <State />
      <hr />
      <LikeButton />
      {/* <Project title="Iphone 12" idx={0} /> */}
    </div>
  );
}
export default App;
