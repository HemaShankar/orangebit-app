import { getHTTPHeaders } from "../utils/constants";
import StatusDropDown from "./StatusDropDown";

const { Card, CardContent, Typography, CardMedia } = require("@mui/material");

const EmployeeCard = ({item}) => {
	function onStatusChange(itemStatus) {
		const body = {id: item.id, status: itemStatus}
		fetch('/users', getHTTPHeaders("POST", body))
			.then(respose => respose.json())
			.then(res => {
				console.log("Submitted Sucessfully ", res);
			}).catch(e => {
				console.warn(e);
			});
	}
	return (
		<Card sx={{ width: 320, display: "flex", margin: '0 1% 20px', alignItems: 'center', padding: 2 }}>
				<CardMedia
					component="img"
					height="120"
					image={item.img}
					sx={{ borderRadius: 75, width: 120}}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{item.name}
					</Typography>
					<StatusDropDown empStatus={item.status} onStatusChange={onStatusChange} />
				</CardContent>
			</Card>
	);
	}

export default EmployeeCard;