import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Main from '../components/Main';
import Navigation from '../components/Navigation';

function Home() {
  return (
    <div className="home container ">
      <Navigation />
      <Main />
    </div>
  );
}

export default Home;
