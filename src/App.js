import Navbar from "./components/NavBar/NavBar.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import initialData  from "./data.js";

function App() {
  return (
    <div>
      <Navbar/>
      <Dashboard initialData={initialData}/>
    </div>
  );
}

export default App;
