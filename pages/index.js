import { useState, useEffect } from 'react';
import Heading from '../components/Heading/Heading';
import CardBlock from '../components/CardBlock/CardBlock';
import s from './styles.module.css';

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
    <div className={s.container}>
      <Heading />
      <div className={s.cardBlockContainer}>
        <CardBlock data={data} />
      </div>
    </div>

  )
}
