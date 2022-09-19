import './FormInput.scss';

function FormInput(props) {
	return (<div className="form-input">
		<label className="form-input__label" htmlFor={props.id}>{props.name || 'Test Label'}</label>
		<input className="form-input__field" id={props.id} type="text"/>
	</div>)
}

export default FormInput;