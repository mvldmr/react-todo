import './FormInput.scss';

function FormInput(props) {
	return (<div className="form-input">
		<label className="form-input__label" htmlFor={props.id}>{props.name}</label>
		<input value={props.value} onInput={props.onChangeVal} className="form-input__field" name={props.name} id={props.id} type="text"/>
	</div>)
}

export default FormInput;