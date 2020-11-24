import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Title from './Title'
import About from './About'
import POPOSList from './POPOSList'
import Footer from './Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
