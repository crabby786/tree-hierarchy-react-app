import logo from './logo.svg';
import './App.css';
import Tree from 'react-d3-tree';
// import orgChart from "./utils/data.json"
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import AppBarComponent from "../AppBar"

function ReactTree() {

  const orgChart = {
    name: 'Main Org',
    children: [
      {
        name: 'Engr Dept',
        // attributes: {
        //   department: 'Production',
        // },
        children: [
          {
            name: 'QA team',
            // attributes: {
            //   department: 'Fabrication',
            // },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
      {
        name: 'Finance Dept',
        // attributes: {
        //   department: 'Production',
        // },
        children: [
          {
            name: 'Accounting',
            // attributes: {
            //   department: 'Fabrication',
            // },
          },
          {
            name: 'HR Dept',
            // attributes: {
            //   department: 'Assembly',
            // },
            children: [
              {
                name: 'Payroll team',
              },
            ],
          },
          {
            name: 'Legal Team',
            // attributes: {
            //   department: 'Assembly',
            // },
          },
        ],
      },
      {
        name: 'Sales',
        // attributes: {
        //   department: 'Production',
        // },
      },
    ],
  };

  const Card = ({ nodeData }) => (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 style={{ margin: "5px" }} className="card-title">
            {nodeData.attributes.title}
          </h5>
          <h6 style={{ margin: "5px" }} className="card-subtitle mb-2 text-muted">
            {nodeData.attributes.subtitle}
          </h6>
          <p style={{ margin: "5px" }} className="card-text">
            {nodeData.attributes.text}
          </p>
        </div>
      </div>
    </div>
  );

  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <rect width="20" height="20" x="-10" onClick={toggleNode} />
      <text fill="black" strokeWidth="1" x="20">
        {nodeDatum.name}
      </text>
      {nodeDatum.attributes?.department && (
        <text fill="black" x="20" dy="20" strokeWidth="1">
          Department: {nodeDatum.attributes?.department}
        </text>
      )}
    </g>
  );

  return (
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
          <Box sx= {{backgroundColor: "white", width: '100%', height: '50em'}}>
              <Tree 
                orientation="vertical" 
                translate={{x:700, y: 100}}
                data={orgChart} 
                rootNodeClassName="node__root"
                branchNodeClassName="node__branch"
                leafNodeClassName="node__leaf"
                // renderCustomNodeElement={renderRectSvgNode}
              />
          </Box>
      </Box>
  );
}

export default ReactTree;
