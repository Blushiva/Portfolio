
import styles from './App.module.css';
import Navbar from 'portfolio/src/components navbar/navbar.jsx';

// Is this because navbar is js and not jsx?
function App() {
  return (
    <div className={styles.App}> 
      <Navbar/>
    </div>
  );
}

export default App;
