import React from "react"
import { Box, Typography, TextField } from "@mui/material";


const LabelBox = (props) => {
    const {text= "", boxProps, handleSelectedChild, dataItem, isSelected= false, isEditing= false, ...rest} = props

    const handleBoxClick = () => {
        handleSelectedChild(dataItem)
    }
    
    return (
        <>
            {isEditing ? (
                <TextField 
                    label="Update Text" 
                    variant="outlined"
                    size="small"
                />
            ) : (
                <Box onClick = {handleBoxClick} p= {1} sx= {{border: `3px solid ${isSelected ? "green" : "blue" }`, borderRadius: "5px", "&:hover": { cursor: "pointer"}, ...boxProps}} {...rest}>
                    <Typography align= "center">{text}</Typography>
                </Box>
            )}
        </>
    )
}

export default LabelBox