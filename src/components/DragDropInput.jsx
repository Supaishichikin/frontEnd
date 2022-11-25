import React, {useState} from 'react';
import { FileUploader } from "react-drag-drop-files";
import { styled } from '@mui/system';

const InputTitle = styled('h2')({
    margin: 0,
    marginBottom: '16px'
});

const InputPreview = styled('img')({
    width: '100%',
    height: '100%',

    borderRadius: '10px',
});

const InputContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    aspectRatio: "1/1",
    height: '50%',
    marginTop: '128px',

    background: '#ffffff',
    borderRadius: '10px',
});

const Box = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    height: '100vh',
    width: '100%',

    background: '#12c2e9',
    background: 'linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)'
})

const DragDropInput = () => {
    const fileTypes = ["JPG", "PNG", "GIF"];

    const [file, setFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [aiAnswer] = useState('Hello there !');

    const handleChange = (file) => {
      let createImage = URL.createObjectURL(file);
      setPreviewImage(createImage);
      setFile(file);
    };

    return (
        <Box>
            <InputContainer>
                {!file &&
                    <>
                        <InputTitle>Put your cover here !</InputTitle>
                        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                    </>
                }

                {file &&
                    <InputPreview width="200px" height="200px" alt="preview" src={ previewImage??'' } />
                }
            </InputContainer>

            <h1>{aiAnswer}</h1>
        </Box>
    );
}

export default DragDropInput;
