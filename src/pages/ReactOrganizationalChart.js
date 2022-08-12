import React, {useState, useEffect} from "react"
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import {HEIRARCHY_DATA} from "../utils/AppConstant"
import HEIRARCHY_JSON_DATA from "../utils/data.json"
import { Tree, TreeNode } from 'react-organizational-chart';
import LabelBox from "../components/LabelBox"
import RecursiveComponent from "../components/RecursiveComponent"

const ReactOrganizationalChart = (props) => {

    const [selectedChild, setSelectedChild] = useState({})

    const handleSelectedChild = (childObj) => {
        setSelectedChild(childObj)
    }

    console.log("222", selectedChild)

    return (
        <Box w= {1} pt= {2} display= "flex" justifyContent= "center" alignItems= "center" my= "auto">
            <Tree label={<div>Root</div>} lineWidth={'2px'} lineHeight= "40px" lineColor={'black'} lineBorderRadius={'10px'}>
                {HEIRARCHY_JSON_DATA.map((dataItem, index) => (
                    // <RecursiveComponent key= {index} {...dataItem} handleSelectedChild= {handleSelectedChild}  />
                    <RecursiveComponent key= {index} {...dataItem} handleSelectedChild= {handleSelectedChild}  />
                ))}
            </Tree>
        </Box>
    )
}

export default ReactOrganizationalChart