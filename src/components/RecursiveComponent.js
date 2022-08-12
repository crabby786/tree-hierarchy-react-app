import React from "react"
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { Tree, TreeNode } from 'react-organizational-chart';
import LabelBox from "./LabelBox"

const RecursiveComponent = ({ label, children, isSelected, isEditing, dataItem, handleSelectedChild }, xPadding) => {
    const hasChildren = children && children.length > 0
    
    console.log('111', dataItem)
    return (
      <>
        {!hasChildren ? (
            <TreeNode label={<LabelBox text= {label} dataItem= {dataItem} handleSelectedChild= {handleSelectedChild} isSelected= {isSelected} isEditing= {isEditing} mx= {xPadding ? 4 : 0} />} />
        ) : (
            <>
                <TreeNode label={<LabelBox text= {label} dataItem= {dataItem} handleSelectedChild= {handleSelectedChild} isSelected= {isSelected} isEditing= {isEditing} mx= {xPadding ? 4 : 0} />}>
                    {children.map((item, index) => (
                        <RecursiveComponent dataItem= {item} key={index} {...item} xPadding= {true} handleSelectedChild= {handleSelectedChild} />
                    ))}
                </TreeNode>
            </>
        )}
      </>
    )
}

export default RecursiveComponent