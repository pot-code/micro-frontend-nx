// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Link, Route, Routes } from 'react-router-dom';
import VueRemote from './vue-remote';
import ReactRemote from './react-remote';

import style from './app.module.css';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul className={style['nav-list']}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vue-remote">Vue Remote</Link>
          </li>
          <li>
            <Link to="/react-remote">React Remote</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<h1>This is the generated root route. </h1>} />
        <Route path="/vue-remote" element={<VueRemote />} />
        <Route path="/react-remote" element={<ReactRemote />} />
      </Routes>
    </div>
  );
}

export default App;
