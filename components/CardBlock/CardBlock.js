import { useContext } from 'react';
import IconCard from "../IconCard/IconCard";
import s from "./styles.module.css"
import DataContext from "../../contexts/DataContext";

const CardBlock = () => {
    const { data } = useContext(DataContext);

    return (
        <div className={s.cardContainer}>
            {data && data.map((card) => (
                <IconCard card={card} key={card.id} />
            ))}
        </div>)
}
export default CardBlock;