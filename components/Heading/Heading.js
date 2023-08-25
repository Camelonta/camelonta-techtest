import s from './styles.module.css';

const Heading = () => {
    const heading = 'So much things to say right now - I know';

    return (
        <div>
            <h1 className={s.h1}>{heading}</h1>
        </div>
    )
};


export default Heading;
