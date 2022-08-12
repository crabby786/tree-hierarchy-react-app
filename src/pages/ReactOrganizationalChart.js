import React, {useState, useEffect} from "react"
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import {HEIRARCHY_DATA} from "../utils/AppConstant"
import HEIRARCHY_JSON_DATA from "../utils/data.json"
import { Tree, TreeNode } from 'react-organizational-chart';
import LabelBox from "../components/LabelBox"
import RecursiveComponent from "../components/RecursiveComponent"
import { isEmpty } from "lodash";

const ReactOrganizationalChart = (props) => {

    const [selectedChild, setSelectedChild] = useState({})

    const handleSelectedChild = (childObj) => {
        // childObj.isEditing = true
        setSelectedChild(childObj)
    }

    const [copyDataArr, setCopyDataArr] = useState(HEIRARCHY_JSON_DATA)

    // let abc = [...copyDataArr]

    const updateCopyDataArr = (selectedChildren) => {
        console.log('yooo')
        selectedChildren.isSelected = true
        // console.log('selectedChildren', selectedChildren.label)
        // let newCopy = [...copyDataArr]
        // let activeChild = {}
        // // const selectedItemIndex = newCopy.findIndex(obj => obj.id === activeChild.id)
        // const selectedItemIndex = newCopy.findIndex(obj => obj.id === selectedChildren.id)
        // console.log('selectedItemIndex', selectedItemIndex)
        // if(selectedItemIndex !== -1) {
        //     // newCopy[selectedItemIndex] = selectedChildren
        //     // newCopy[selectedItemIndex].isSelected = true

        //     //

        //     setCopyDataArr(newCopy)
        //     console.log('asddd', newCopy[selectedItemIndex], copyDataArr[selectedItemIndex])
        // }
        // newCopy[selectedItemIndex] = selectedChildren
        // newCopy[selectedItemIndex].isSelected = true
        // setCopyDataArr(newCopy)
        // console.log('asddd', newCopy[selectedItemIndex], copyDataArr[selectedItemIndex])
        if(selectedChildren && selectedChildren.children && selectedChildren.children.length > 0) {
            console.log("child-parent", selectedChildren)

            selectedChildren.children.map(obj => {
                console.log("hrrrrr", obj.label)
                updateCopyDataArr(obj)
                // console.log("child-parent", obj)
                // if(obj?.children.length> 0) {
                //     updateCopyDataArr(obj)
                // }
            })
        }
        else {
           console.log("selectedChildren", selectedChildren, selectedChildren.isSelected)
           selectedChildren.isSelected = true
        }
    }

    useEffect(() => {
        if(selectedChild && !isEmpty(selectedChild) && !selectedChild?.isSelected) {
            // selectedChild.isEditing = true
            updateCopyDataArr(selectedChild)
        }
    }, [selectedChild])
    
    useEffect(() => {
        console.log('copyDataArr', copyDataArr)
    }, [copyDataArr])

    return (
        <Box w= {1} pt= {6} px= {5} display= "flex" justifyContent= "center" alignItems= "center" my= "auto">
            {/* <Tree label={<div>Root</div>} lineWidth={'2px'} lineHeight= "40px" lineColor={'black'} lineBorderRadius={'10px'}> */}
            <Tree label={<LabelBox text= "Main Org" isSelected= {false} isEditing= {false} />} lineWidth={'2px'} lineHeight= "40px" lineColor={'black'} lineBorderRadius={'10px'}>
                {/* {HEIRARCHY_JSON_DATA.map((dataItem, index) => ( */}
                {copyDataArr.map((dataItem, index) => (
                    // <RecursiveComponent key= {index} {...dataItem} handleSelectedChild= {handleSelectedChild}  />
                    <RecursiveComponent key= {index} dataItem= {dataItem} {...dataItem} handleSelectedChild= {handleSelectedChild}  />
                ))}
            </Tree>
        </Box>
    )
}

export default ReactOrganizationalChart