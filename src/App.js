import Routing from './Routing';
import axios from 'axios';

axios.defaults.withCredentials = true;
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const SERVER_URL_BACKUP = process.env.REACT_APP_BACKUP_SERVER_URL;

function App() {
  return (
      <Routing></Routing>
  );
}

export default App;
