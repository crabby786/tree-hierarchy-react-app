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
        setSelectedChild(childObj)
    }

    const [copyDataArr, setCopyDataArr] = useState(HEIRARCHY_JSON_DATA)

    const updateCopyDataArr = (selectedChildren) => {
        let newCopy = [...HEIRARCHY_JSON_DATA]
        const isParentItem = selectedChildren.parentId == "main";
        let activeChild = !isParentItem ? newCopy.find(obj => obj.id === selectedChildren.rootItem) : selectedChildren

        const selectedRootItemIndex = newCopy.findIndex(obj => obj.id === activeChild.id)
        
        if(selectedRootItemIndex !== -1) {
            let currentItem = {...selectedChildren}
            currentItem.isSelected = true
            currentItem.isEditing = true

            if(isParentItem) {
                currentItem.children.length && (currentItem.children = handleChilds(currentItem.children, {isSelected:true}))
                newCopy[selectedRootItemIndex] = currentItem
            }
            else {
                const currentRootItem = newCopy[selectedRootItemIndex];
                newCopy[selectedRootItemIndex] = {...currentRootItem, children :handleNest(currentRootItem.children, currentItem, {isSelected:true})}
            }
            setCopyDataArr(newCopy)
        }

        function handleChilds(childs, {isSelected}) {
            if(!childs.length) 
            return []

            let newChilds = childs.map(obj=>  {
                return {...obj,isSelected, children: handleChilds(obj.children, {isSelected}) } 
            } );
            return newChilds
        }
        function handleNest(childs,currentItem, {isSelected}) {
            if(!childs.length) 
            return []

            let newChilds = childs.map(obj=>  {
                return obj.id == currentItem.id ? {...obj,isSelected, children: handleChilds(obj.children, {isSelected}) } : obj
            } );
            return newChilds
        }
    }

    useEffect(() => {
        if(selectedChild && !isEmpty(selectedChild) && !selectedChild?.isSelected) {
            // selectedChild.isEditing = true
            updateCopyDataArr(selectedChild)
        }
    }, [selectedChild])
    
    // useEffect(() => {
    //     console.log('copyDataArr', copyDataArr)
    // }, [copyDataArr])

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