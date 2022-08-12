import React from "react"
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import {HEIRARCHY_DATA} from "../utils/AppConstant"
import HEIRARCHY_JSON_DATA from "../utils/data.json"
import { Tree, TreeNode } from 'react-organizational-chart';

const TextBox = (props) => {
    const {text= "", boxProps, ...rest} = props

    const {isSelected= false, isEditing= false} = {...rest}
    
    return (
        // <Box p= {1} sx= {{border: "2px solid green", height: "max-content", borderRadius: "5px", width: "100px", "&:hover": { cursor: "pointer"}, ...boxProps}} {...rest}>
        // <Box p= {1} sx= {{border: "3px solid green", borderRadius: "5px", "&:hover": { cursor: "pointer"}, ...boxProps}} {...rest}>
        <Box p= {1} sx= {{border: `3px solid ${isSelected ? "green" : "blue" }`, borderRadius: "5px", "&:hover": { cursor: "pointer"}, ...boxProps}} {...rest}>
            <Typography align= "center">{text}</Typography>
        </Box>
    )
}

const RecursiveComponent = ({ label, children, isSelected, isEditing }, xPadding) => {
    const hasChildren = children && children.length > 0
    
    console.log('111', isSelected, isEditing)
    return (
      <>
        {!hasChildren ? (
            // <TextBox text= {label} mb= {2} mx= {xPadding ? 4 : 0} />
            // <TextBox text= {label} mb= {2} mr= {xPadding ? 8 : 0} />
            <TreeNode label={<TextBox text= {label} isSelected= {isSelected} isEditing= {isEditing} mx= {xPadding ? 4 : 0} />} />
            
        ) : (
            <>
                <TreeNode label={<TextBox text= {label} isSelected= {isSelected} isEditing= {isEditing} mx= {xPadding ? 4 : 0} />}>
                    {/* <TextBox text= {label} mb= {4} mx= {xPadding ? 4 : 0} /> */}
                    {/* <TextBox text= {label} mb= {2} mr= {xPadding ? 1 : 0} /> */}

                    {children.map((item, index) => (
                        <RecursiveComponent key={index} {...item} xPadding= {true} />
                    ))}
                </TreeNode>
            </>
        )}
        
        {/* {hasChildren && children.map((item) => (
            <Box display= "flex" alignItems= "center">
                <RecursiveComponent key={item.name} {...item} />
            </Box>
        ))} */}
      </>
    )
  }

const CopyOrganizationalChart = (props) => {
    return (
        // <Box pt= {2} display= "flex" justifyContent= "center" alignItems= "center">
        //     {/* ROOT NODE */}
        //     <Box>
        //         <Box mb= {5} display= "flex" justifyContent= "center" alignItems= "center">
        //             <TextBox text= "Main Org" />
        //         </Box>
        //         <Box display= "flex" justifyContent= "space-between">
        //             {HEIRARCHY_JSON_DATA.map((dataItem, index) => (
        //                 // <TextBox w={1} key= {index} text= {dataItem.label} />
        //                 <RecursiveComponent key= {index} {...dataItem}  />
        //             ))}
        //         </Box>
        //     </Box>
        // </Box>

        // package
        <Box w= {1} pt= {2} display= "flex" justifyContent= "center" alignItems= "center" my= "auto">
            <Tree label={<div>Root</div>} lineWidth={'2px'} lineHeight= "40px" lineColor={'black'} lineBorderRadius={'10px'}>
                {HEIRARCHY_JSON_DATA.map((dataItem, index) => (
                    // <TextBox w={1} key= {index} text= {dataItem.label} />
                    <RecursiveComponent key= {index} {...dataItem}  />
                ))}
                {/* <TreeNode label={<div>Child 1</div>}>
                <TreeNode label={<div>Grand Child</div>} />
                </TreeNode> */}
            </Tree>
        </Box>
    )
}

export default CopyOrganizationalChart