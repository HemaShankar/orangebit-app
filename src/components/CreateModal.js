import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import StatusDropDown from "./StatusDropDown";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0 px',
	borderRadius: '8px',
  boxShadow: 24,
  p: 2,
	display: 'flex',
	flexDirection: 'column',
	rowGap: '18px',
};

const CreateModal = ({ open, onCloseModal, onClickCreate }) => {
	const userName = useRef("");
	const [status, setStatus] = useState("");

	function onStatusChange(value) {
		setStatus(value);
	}
	function onSubmitClick() {
		const payload = {name: userName.current?.value, status: status};
		onClickCreate(payload);
	}
	return (
		<Modal
			open={open}
			onClose={onCloseModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h6">
					Create New User
				</Typography>
				<TextField inputRef={userName} label="User Name: " variant="standard" />
				<StatusDropDown header="Status: " onStatusChange={onStatusChange} />
				<Stack direction="row" spacing={2} sx={{ marginTop: 4}}>
					<Button variant="contained" onClick={onSubmitClick}>Create</Button>
					<Button onClick={onCloseModal}>Cancel</Button>
				</Stack>
			</Box>
		</Modal>
	)
}

export default CreateModal;