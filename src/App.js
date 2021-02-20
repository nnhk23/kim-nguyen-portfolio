import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/NavBar.js'
import { NavBar } from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* original tagline */}
      {/* about me */}
      {/* technical projects */}
      {/* contact form (send an email) */}
      {/* resume (download in pdf form button) - tbd */}
      {/* footer with linkedin/facebook/twitter/dev */}
      <h1>Hello</h1>
    </div>
  );
}

export default App;
