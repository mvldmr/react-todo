import './Form.scss'
import FormInput from './FormInput';
import {useState} from 'react';

function Form(props) {
	function onSubmit(e) {
		e.preventDefault();
		if (Object.values(cardObj).every((value) => value)) {
			cardObj.id = Math.floor(Math.random() * 10000);
			props.onAddTodo(cardObj);
			clearFields();
		}

	}
	const [titleValue, changedTitleValue] = useState('');
	const [subtitleValue, changedSubtitleValue] = useState('');
	const cardObj = {
		title: titleValue,
		subtitle: subtitleValue
	}
	function onChangeField(e) {
		e.target.name === 'title' ? changedTitleValue(e.target.value) : changedSubtitleValue(e.target.value);
	}
	function clearFields() {
		changedTitleValue('');
		changedSubtitleValue('');
	}
	return (<form className="form" onSubmit={onSubmit}>
		{props.keyList.map((key, i) => {
			return <FormInput value={i === 0 ? titleValue : subtitleValue} onChangeVal={onChangeField} name={key} id={(i + 1) + '-form-field'} key={i+ 'input'}/>
		})}
		<div className="form-input"><button type="submit" className="form__submit">Append to List</button></div>
	</form>)
}

export default Form;