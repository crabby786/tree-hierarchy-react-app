import React from "react"
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";


const LabelBox = (props) => {
    const {text= "", boxProps, handleSelectedChild, ...rest} = props

    const {isSelected= false, isEditing= false, parentId, id} = {...rest}

    const handleBoxClick = () => {
        console.log('222', rest)
        handleSelectedChild(...rest)
    }
    
    return (
        <>
            {isEditing ? (
                <div>Editing</div>
            ) : (
                <Box onClick = {handleBoxClick} p= {1} sx= {{border: `3px solid ${isSelected ? "green" : "blue" }`, borderRadius: "5px", "&:hover": { cursor: "pointer"}, ...boxProps}} {...rest}>
                    <Typography align= "center">{text}</Typography>
                </Box>
            )}
        </>
    )
}

export default LabelBox