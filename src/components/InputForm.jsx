import { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { TitleContext } from "../context/TitleContext";
import "../styles/Home.css"

const InputForm = () => {
    const [ name, setName ] = useState('');
    const { updateTitle } = useContext(TitleContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTitle(name);
        setName('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2}}>
            <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Enter your name"
                variant="outlined"
                size="small"
                sx={{ mr: 1 }}
            />
            <Button type="submit" variant="contained">
                Change title
            </Button>
        </Box>
    );
};

export default InputForm;
