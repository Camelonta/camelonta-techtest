import Heading from '../components/Heading/Heading';
import CardBlock from '../components/CardBlock/CardBlock';
import s from './styles.module.css';
import DataProvider from '../contexts/DataProvider';

function Index({ data }) {

  return (
    <DataProvider initialData={data}>
      <div className={s.container}>
        <Heading />
        <div className={s.cardBlockContainer}>
          <CardBlock />
        </div>
      </div>
    </DataProvider>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3000/api/cards');
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        data,
      },
      revalidate: 60,
    };

  } catch (error) {
    console.error('Unable to fetch data', error);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default Index;