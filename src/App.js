import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route path="/" component={POPOSList} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
