import React from "react"
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import {HEIRARCHY_DATA} from "../utils/AppConstant"
import HEIRARCHY_JSON_DATA from "../utils/data.json"

const TextBox = (props) => {
    const {text= "", boxProps, ...rest} = props
    return (
        <Box p= {1} sx= {{border: "2px solid green", height: "max-content", borderRadius: "5px", width: "100px", "&:hover": { cursor: "pointer"}, ...boxProps}} {...rest}>
            <Typography align= "center">{text}</Typography>
        </Box>
    )
}

const RecursiveComponent = ({ label, children }, xPadding) => {
    const hasChildren = children && children.length > 0
  
    return (
      <>
        {!hasChildren ? (
            <TextBox text= {label} mb= {2} mx= {xPadding ? 4 : 0} />
            // <TextBox text= {label} mb= {2} mr= {xPadding ? 8 : 0} />
        ) : (
            <>
                <Box display= "flex" justifyContent= "space-between" flexDirection= "column">
                    <TextBox text= {label} mb= {4} mx= {xPadding ? 4 : 0} />
                    {/* <TextBox text= {label} mb= {2} mr= {xPadding ? 1 : 0} /> */}

                    {children.map((item, index) => (
                        <RecursiveComponent key={index} {...item} xPadding= {true} />
                    ))}
                </Box> 
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

const Hierarchy = (props) => {
    return (
        <Box pt= {2} display= "flex" justifyContent= "center" alignItems= "center">
            {/* ROOT NODE */}
            <Box>
                <Box mb= {5} display= "flex" justifyContent= "center" alignItems= "center">
                    <TextBox text= "Main Org" />
                </Box>
                <Box display= "flex" justifyContent= "space-between">
                    {HEIRARCHY_JSON_DATA.map((dataItem, index) => (
                        // <TextBox w={1} key= {index} text= {dataItem.label} />
                        <RecursiveComponent key= {index} {...dataItem}  />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Hierarchy