import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  const updateCount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <h2>{t('title')}</h2>
      <div className="card">
        <Button active={true} className={'bg-slate-700'} onClick={updateCount}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
