import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import BusinessInformation from './components/BusinessInformation';

function App() {
  return (
   
      <div className="App">
        <Routes>
          <Route>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/businessInfo" element={<BusinessInformation/>} />
          </Route>
        </Routes>
        
      </div>
    
  );
}

export default App;
