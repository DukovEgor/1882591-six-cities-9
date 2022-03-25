import ReactLoading from 'react-loading';
export default function LoadingScreen() {
  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#a2d9ff',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
    >
      <ReactLoading type={'spinningBubbles'} color={'#fff'} />
      <p className={'places__found'}>Loading...</p>
    </div>
  );
}
