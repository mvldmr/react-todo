import './Card.scss';
import {useState} from 'react';

function Card(props) {
	const removeCard = () => {
		props.onRemove(props.id);
	}
	const [done, setDone] = useState(props.done);
	const revertDoneValue = () => {
		setDone(!done);
	}
	const className = done ? 'card card__done' : 'card';
	const btnDoneText = done ? 'not completed' : 'done';

	return (<div className={className} id={'card-' + props.id}>
		<p className="card__title">{props.title}</p>
		<p className="card__subtitle">{props.subtitle}</p>
		<button className="card__btn" onClick={revertDoneValue}>Mark as {btnDoneText}</button>
		<button className="card__btn" onClick={removeCard}>Remove</button>
	</div>)
}

export default Card;