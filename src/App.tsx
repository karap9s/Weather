import { observer } from 'mobx-react-lite';
import styles from './App.module.css';
import { store } from './components/store/store';

const App: React.FC = observer(() => {
  const { getData, setWeather, setCity, coords, data } = store;

  return (
    <div className={styles.App}></div>
  );
})

export default App;
