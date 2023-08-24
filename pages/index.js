import { useState, useEffect } from 'react';
import Heading from '../components/Heading/Heading';
import s from './styles.module.css';
import IconCard from '../components/IconCard/IconCard';

export default function Index() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./api/cards');
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);


  return (
    <div>
      <Heading />
      <div className={s.cardContainer}>
        {data && data.map((card) => (
          <IconCard card={card} key={card.id} />
        ))}
      </div>

    </div>

  )
}
