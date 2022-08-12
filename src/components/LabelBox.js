import React from "react"
import { Box, useTheme, useMediaQuery, Typography, TextField  } from "@mui/material";


const LabelBox = (props) => {
    const {text= "", boxProps, handleSelectedChild, dataItem, isSelected= false, isEditing= false, ...rest} = props

    // const {isSelected= false, isEditing= false, parentId, id} = {...rest}
    console.log('nine', isSelected)

    const handleBoxClick = () => {
        console.log('222', dataItem)
        handleSelectedChild(dataItem)
    }
    
    return (
        <>
            {isEditing ? (
                <div>Editing</div>
                // <TextField 
                //     label="Update Text" 
                //     variant="outlined"
                //     size="small"
                // />
            ) : (
                <Box onClick = {handleBoxClick} p= {1} sx= {{border: `3px solid ${isSelected ? "green" : "blue" }`, borderRadius: "5px", "&:hover": { cursor: "pointer"}, ...boxProps}} {...rest}>
                    <Typography align= "center">{text}</Typography>
                </Box>
            )}
        </>
    )
}

export default LabelBox