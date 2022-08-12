import './App.css';
import { Box } from "@mui/material";
import AppBarComponent from "./components/AppBar"
import ReactOrganizationalChart from "./pages/ReactOrganizationalChart"

function App() {

  return (
    <div className="App">
      <Box sx= {{
            backgroundColor: "white",
            minHeight: "100vh",
          }}
        >
          <AppBarComponent />
          <ReactOrganizationalChart />
      </Box>
    </div>
  );
}

export default App;
