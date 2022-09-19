import './Card.scss';

function Card(props) {
	return (<div className="card" id={'card-' + props.id}>
		<p className="card__title">{props.title}</p>
		<p className="card__subtitle">{props.subtitle}</p>
		<button className="card__btn">Mark as Done</button>
		<button className="card__btn">Remove</button>
	</div>)
}

export default Card;