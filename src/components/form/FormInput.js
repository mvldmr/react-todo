import './FormInput.scss';

function FormInput(props) {
	function updateForm(e) {
		props.onChangeForm({name: e.target.name, value: e.target.value});
	}
	return (<div className="form-input">
		<label className="form-input__label" htmlFor={props.id}>{props.name}</label>
		<input className="form-input__field" name={props.name} onInput={updateForm} id={props.id} type="text"/>
	</div>)
}

export default FormInput;