import './App.css';
import ContestHackathon from './pages/ContestHackathon';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ContestHackathon userCred="admin" feat="hackathon" />
      {/* <ContestHackathon userCred="admin" feat="contest" /> */}
      {/* <ContestHackathon userCred="student" feat="hackathon" /> */}
      {/* <ContestHackathon userCred="student" feat="contest" /> */}
    </div>
  );
}

export default App;
