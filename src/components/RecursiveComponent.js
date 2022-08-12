import React from "react"
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { Tree, TreeNode } from 'react-organizational-chart';
import LabelBox from "./LabelBox"

const RecursiveComponent = ({ label, children, isSelected, isEditing }, xPadding) => {
    const hasChildren = children && children.length > 0
    
    console.log('111', isSelected, isEditing)
    return (
      <>
        {!hasChildren ? (
            <TreeNode label={<LabelBox text= {label} isSelected= {isSelected} isEditing= {isEditing} mx= {xPadding ? 4 : 0} />} />
        ) : (
            <>
                <TreeNode label={<LabelBox text= {label} isSelected= {isSelected} isEditing= {isEditing} mx= {xPadding ? 4 : 0} />}>
                    {children.map((item, index) => (
                        <RecursiveComponent key={index} {...item} xPadding= {true} />
                    ))}
                </TreeNode>
            </>
        )}
      </>
    )
}

export default RecursiveComponent