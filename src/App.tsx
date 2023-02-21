import { observer } from 'mobx-react-lite';
import styles from './App.module.css';
import { store } from './components/store/store';

const App: React.FC = observer(() => {
  return (
    <div className={styles.App}></div>
  )
})

export default App;
