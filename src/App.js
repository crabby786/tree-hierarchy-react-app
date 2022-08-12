import logo from './logo.svg';
import './App.css';
import Tree from 'react-d3-tree';
// import orgChart from "./utils/data.json"
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import AppBarComponent from "./AppBar"
import Hierarchy from "./pages/Hierarchy"
import ReactOrganizationalChart from "./pages/ReactOrganizationalChart"

function App() {

  return (
    <div className="App">
      <Box sx= {{
            backgroundColor: "white",
            minHeight: "100vh",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            // fontSize: "calc(10px + 2vmin)",
            // color: "white"
          }}
        >
          <AppBarComponent />
          {/* <Hierarchy /> */}
          <ReactOrganizationalChart />
      </Box>
    </div>
  );
}

export default App;
