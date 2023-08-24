import IconCard from "../IconCard/IconCard";
import s from "./styles.module.css"

const CardBlock = ({ data }) => {

    return (
        <div className={s.cardContainer}>
            {data && data.map((card) => (
                <IconCard card={card} key={card.id} />
            ))}
        </div>)
}
export default CardBlock;