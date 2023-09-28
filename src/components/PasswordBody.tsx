import Condition from './Condition'
import { conditions } from '../constants'
import './PasswordBody.css'
import RangeSlider from './RangeSlider'
import DifficultyBar from './DifficultyBar'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generatePassword } from '../reducer'


const style = {
  color: 'var(--Neon-Green, #A4FFAF)',
  fill: 'var(--Neon-Green, #A4FFAF)'
}

const PasswordBody = () => {
  const dispatch = useDispatch();
  const [buttonTextStyle, setButtonTextStyle] = useState({});

  const handleMouseOver = () => {
    setButtonTextStyle(style);
  }

  const handleMouseOut = () => {
    setButtonTextStyle({});
  }

  const handleSubmit = () => {
    dispatch(generatePassword());
  }

  return (
    <div className="PasswordBody">
      <RangeSlider />
      <div className='forms'>
        {conditions.map(condition => <Condition condition={condition} />)}
      </div>
      <DifficultyBar />
      <div className='buttonContainer' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleSubmit}>
        <div className='buttonText' style={buttonTextStyle}>GENERATE</div>
        <svg className="custom-svg" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path style={buttonTextStyle} fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
        </svg>
      </div>
    </div>
  )
}

export default PasswordBody