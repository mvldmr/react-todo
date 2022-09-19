import Card from './Card';
import './List.scss';

function List(props) {
	return (<ul className="card-list">
		{props.cardList.map(card => {
			return (<li className="card-list__item" key={card.id + '-list'}>
				<Card title={card.title} subtitle={card.subtitle} />
			</li>)
		})}
	</ul>)
}

export default List;