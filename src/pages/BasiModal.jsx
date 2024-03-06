import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddTask from '../component/AddTask';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  outerRadius: 100,
  boxShadow: 24,
  padding: 4,
  raduis:"10px"


};

  


export default function BasicModal({ open,close}) {
 
    function closeModel (){
        close();
    }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={closeModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      
      >
        <Box sx={style} >
         
         <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Task
            </Typography>
          
 
         <AddTask closeModal={closeModel}/>
         </div>

        </Box>
      </Modal>
    </div>
  );
}
