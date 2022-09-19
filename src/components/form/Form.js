import './Form.scss'
import FormInput from './FormInput';

function Form(props) {
	return (<form className="form">
		{props.keyList.map((key, i) => <FormInput name={key} id={i + '-form-field'} key={i+ 'input'}/>)}
		<div className="form-input"><button type="submit" className="form__submit">Append to List</button></div>
	</form>)
}

export default Form;