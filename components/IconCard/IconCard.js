import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import s from './styles.module.css';

const IconCard = ({ card }) => {
    return (
        <div className={s.container} tabIndex="0">
            <Icon icon={card.icon} />
            <Card card={card} key={card.id} />
        </div>
    )
};


export default IconCard;
