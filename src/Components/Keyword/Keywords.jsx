import style from './Keyword.module.css';
const Keywords = ({ Text,gradient,clr}) => {
    return (
            <span className={style.keywordBox} clr={clr} gradient={gradient}>
              {Text}
            </span>
    );
}

export default Keywords;