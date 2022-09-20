import './Card.scss';

function Card(props) {
	const removeCard = (e) => {
		props.onRemove(parseInt(e.target.id.replace('del', ''), 10));
	}
	return (<div className="card" id={'card-' + props.id}>
		<p className="card__title">{props.title}</p>
		<p className="card__subtitle">{props.subtitle}</p>
		<button className="card__btn">Mark as Done</button>
		<button className="card__btn" id={props.id + 'del'} onClick={removeCard}>Remove</button>
	</div>)
}

export default Card;