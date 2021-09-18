import ReactPlayer from 'react-player';
import './App.css';

function App() {
  return (
    <div className="App" style={{border:"solid 1px black",maxWidth:1700}}>
      <header className="App-header">
         <img src="/tom marvolo.jpg" className="tompic" alt="tom"/>
         <p>
           <h2 className="title">Tom riddle<h1>VOLDEMORT</h1></h2>
        </p>

        <ReactPlayer url='https://www.youtube.com/watch?v=9FXD6rl7Tic&t=42s' className="video"/>
  
      </header>
    </div>
  );
}

export default App;
