import Main from '../../pages/main/main';


type PropsType = {
  placesToStay: number;
}

function App({placesToStay}: PropsType): JSX.Element {
  return <Main placesToStay={placesToStay}/>;
}

export default App;
