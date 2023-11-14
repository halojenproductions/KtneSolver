export const Group = (props) => {

	return (
		<div
			className="btn-group d-flex"
			role="group"
		>
			{props.children}
		</div>
	)
};
export default Group;
