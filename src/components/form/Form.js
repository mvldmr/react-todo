import './Form.scss'
import FormInput from './FormInput';
import {useState} from 'react';

function Form(props) {
	function onSubmit(e) {
		e.preventDefault();
		props.onAddTodo();
	}
	let [disabled, updatedDisabled] = useState(true);

	function onChangeForm(value) {
		updatedDisabled(!value);
	}
	return (<form className="form" onSubmit={onSubmit}>
		{props.keyList.map((key, i) => <FormInput onChangeForm={onChangeForm} name={key} id={i + '-form-field'} key={i+ 'input'}/>)}
		<div className="form-input"><button type="submit" disabled={disabled} className="form__submit">Append to List</button></div>
	</form>)
}

export default Form;