import { Children } from "react";

const Module = (props) => {
	return (
		<div /*className="col module pt-3"*/ className="module" id={props.id}>
			<div className="card">
				<div className="card-header">
					<span className="float-start">{props.title}</span>
					<button type="reset" form={`${props.id}Form`} className="btn btn-sm btn-outline-secondary float-end" />


				</div>
				<div className="card-body">
					<form id={`${props.id}Form`} className="">
						{props.children}
					</form>

					<hr className="solution d-none" />
					<div className="solution d-none  fs-2 d-flex justify-content-around"></div>
				</div>
			</div>
		</div>
	);
}
export default Module;
