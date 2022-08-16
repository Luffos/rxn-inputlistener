import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import Documentation from './pages/Documentation';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <TopNavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
    </Router>
  );
}

export default App;