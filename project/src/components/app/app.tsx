import Main from '../main/main';

type AppPageProps = {
  placesToStay: number;
}

function App({placesToStay}: AppPageProps): JSX.Element {
  return <Main placesToStay={placesToStay}/>;
}

export default App;
