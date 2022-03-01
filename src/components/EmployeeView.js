import EmployeeCard from "./EmployeeCard";

const EmployeeView = ({ data }) => (
	<div className="cards-panel">
		{
			data?.map(item => <EmployeeCard key={item.id} item={item} />)
		}
	</div>
);

export default EmployeeView;