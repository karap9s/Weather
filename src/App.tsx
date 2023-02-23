import { observer } from 'mobx-react-lite';
import styles from './App.module.css';
import { store } from './components/store/store';

const App: React.FC = observer(() => {
  const { getData, setWeather, setCity, coords, data } = store;

  return (
    <div className={styles.App}>
      <p>lat: {coords.lat}</p>
      <p>lon: {coords.lon}</p>
      {data && (
        <p>
          temperature:{' '}
          {data.hourly.temperature_2m.map((x: any, index: number) => (
            <span className={styles.el} key={`${x}-${index}`}>
              {x}
            </span>
          ))}
        </p>
      )}
      <br />
      {data && (
        <p>
          time:{' '}
          {data.hourly.time.map((x: any, index: number) => (
            <span className={styles.el} key={`${x}-${index}`}>
              {index < 24 && x}
            </span>
          ))}
        </p>
      )}
      <button
        onClick={async () => {
          console.log('start');
          await setCity();
          console.log('city');
          const date = new Date();
          console.log(date.getDay());
          // await setWeather();
          // console.log('end');
        }}
      >
        Click me!
      </button>
    </div>
  );
})

export default App;
