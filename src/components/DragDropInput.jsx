import React, {useState} from 'react';
import { FileUploader } from "react-drag-drop-files";
import { styled } from '@mui/system';
import {Box, GlobalStyles} from "@mui/material";

const InputTitle = styled('h1')({

});

const InputInfos = styled('p')({

});

const InputPreview = styled('img')({

});

const InputContainer = styled('div')({
    width: 'fit-content',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});

const DragDropInput = () => {
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const handleChange = (file) => {
      let createImage = URL.createObjectURL(file);
      setPreviewImage(createImage);
      setFile(file);
    };

    return (
        <Box component="div" sx={{ width: '100%', height: '100vh', display: 'flex',
            justifyContent: 'center', alignItems: 'center' }}>
            <InputContainer>
                <GlobalStyles styles={{ body: {minHeight: '100vh'}, '&.lkjDVC': {border: '1px black solid'} }} />
                <InputTitle>Put your image !</InputTitle>
                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />

                <InputInfos>{file ? `${file.name}` : "no files uploaded yet"}</InputInfos>
                {file?
                    <InputPreview width="200px" height="200px" alt="preview" src={ previewImage??'' } />
                    : null
                }
            </InputContainer>
        </Box>
    );
}

export default DragDropInput;
