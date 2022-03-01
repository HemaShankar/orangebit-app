import Button from '@mui/material/Button'
import { useEffect, useState } from 'react';
import './App.css';
import CreateModal from './components/CreateModal';
import EmployeeView from './components/EmployeeView';
import { getHTTPHeaders } from './utils/constants';

function App() {
	const [modal, setModal] = useState(false);
	const [data, setData] = useState([]);

	function handleModal() {
		setModal(!modal)
	}
	
	function fetchEmpData() {
		fetch(`/users`, getHTTPHeaders())
			.then(respose => respose.json())
			.then(empData => {
				setData(empData);
			}).catch(e => {
				console.warn(e);
			});
	}

	useEffect(() => {
		fetchEmpData()
	}, []);

	function onSubmit(payload) {
		fetch(`/users`, getHTTPHeaders("PUT", payload))
		.then(respose => respose.json())
		.then(res => {
			console.log("Submitted Sucessfully ", res);
			setData(res);
		}).catch(e => {
			console.warn(e);
		});
		handleModal();
	}

  return (
    <div className="app">
			<Button variant="contained" size="large" onClick={handleModal}>
				Create +
			</Button>
			<EmployeeView data={data}/>
			<CreateModal open={modal} onCloseModal={handleModal} onClickCreate={onSubmit} />
    </div>
  );
}

export default App;
