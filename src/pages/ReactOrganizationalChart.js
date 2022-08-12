import React, {useState, useEffect} from "react"
import { Box } from "@mui/material";
import HEIRARCHY_JSON_DATA from "../utils/data.json"
import { Tree} from 'react-organizational-chart';
import LabelBox from "../components/LabelBox"
import RecursiveComponent from "../components/RecursiveComponent"
import { isEmpty } from "lodash";

const ReactOrganizationalChart = (props) => {

    const [selectedChild, setSelectedChild] = useState({})

    const handleSelectedChild = (childObj) => {
        //for showing input field
        // childObj.isEditing = true
        setSelectedChild(childObj)
    }

    const [copyDataArr, setCopyDataArr] = useState(HEIRARCHY_JSON_DATA)

    const updateCopyDataArr = (selectedChildren) => {
        selectedChildren.isSelected = true
        let newCopy = [...copyDataArr]
        setCopyDataArr(newCopy)
        if(selectedChildren && selectedChildren.children && selectedChildren.children.length > 0) {
            selectedChildren.children.map(obj => {
                updateCopyDataArr(obj)
            })
        }
        else {
           selectedChildren.isSelected = true
        }
    }

    useEffect(() => {
        if(selectedChild && !isEmpty(selectedChild) && !selectedChild?.isSelected) {
            updateCopyDataArr(selectedChild)
        }
    }, [selectedChild])
    
    return (
        <Box w= {1} pt= {6} px= {5} display= "flex" justifyContent= "center" alignItems= "center" my= "auto">
            <Tree label={<LabelBox text= "Main Org" isSelected= {false} isEditing= {false} />} lineWidth={'2px'} lineHeight= "40px" lineColor={'black'} lineBorderRadius={'10px'}>
                {copyDataArr.map((dataItem, index) => (
                    <RecursiveComponent key= {index} dataItem= {dataItem} {...dataItem} handleSelectedChild= {handleSelectedChild}  />
                ))}
            </Tree>
        </Box>
    )
}

export default ReactOrganizationalChart