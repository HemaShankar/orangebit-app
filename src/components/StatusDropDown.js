import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const StatusDropDown = ({ empStatus, header, onStatusChange }) => {
	const [status, setStatus] = useState(empStatus);

	function onChangeStatus(event) {
		const value = event.target.value;
		setStatus(value);
		onStatusChange(value);
	}

	return (
		<FormControl variant="standard" sx={{ minWidth: 120 }}>
			{header && <InputLabel id="demo-simple-select-label">{header}</InputLabel>}
			<Select
				labelId="demo-simple-select-standard-label"
				id="demo-simple-select-standard"
				value={status}
				onChange={onChangeStatus}
				label="Status"
			>
				<MenuItem value="working">Working</MenuItem>
				<MenuItem value="onVacation">On Vacation</MenuItem>
				<MenuItem value="lunchTime">Lunch Time</MenuItem>
				<MenuItem value="businessTrip">Business Trip</MenuItem>				
		</Select>
	</FormControl>
	);
}

export default StatusDropDown;