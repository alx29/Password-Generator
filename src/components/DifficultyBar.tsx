import { useSelector } from 'react-redux';
import './DifficultyBar.css'
import { useEffect, useState } from 'react';

const DIFFICULTY = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];
const styles = [
  {
    backgroundColor: '#F64A4A'
  },
  {
    backgroundColor: '#FB7C58'
  },
  {
    backgroundColor: '#F8CD65'
  },
  {
    backgroundColor: '#A4FFAF'
  }
];

function DifficultyBar() {
  const [text, setText] = useState('');
  const [currentStyle, setCurrentStyle] = useState({});
  const uppercase = useSelector((state) => state.passwordGenerator.includeUppercase);
  const lowercase = useSelector((state) => state.passwordGenerator.includeLowercase);
  const numbers = useSelector((state) => state.passwordGenerator.includeNumbers);
  const specialChars = useSelector((state) => state.passwordGenerator.includeSpecialChars);
  const password = useSelector((state) => state.passwordGenerator.password);

  useEffect(() => {
    const arr = [uppercase, lowercase, numbers, specialChars];
    const length = arr.filter(el => el === true).length;
    setText(DIFFICULTY[length - 1]);
    setCurrentStyle(styles[length - 1]);
  }, [password]);

  return (
    <div className='difficultyBarContainer'>
        <div className='difficultyBarBox'>
            <div className='textStyle strength'>STRENGTH</div>
            <div className='difficulty'>
                <div className='difficultyText'>{text}</div>
                {DIFFICULTY.map((el, i) => {
                  return <div className='square' key={el} style={i <= DIFFICULTY.indexOf(text) ? currentStyle : {}}></div>
                })}
            </div>
        </div>
    </div>
  )
}

export default DifficultyBar