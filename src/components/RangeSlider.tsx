import { ChangeEvent, useState } from 'react'
import CharacterLength from './CharacterLength'
import './RangeSlider.css'

const RangeSlider = () => {
    const [passwordLength, setPasswordLength] = useState(10);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordLength(parseInt(e.target.value));
    }

    const getBackgroundSize = () => {
        return { backgroundSize: `${(passwordLength * 100) / 20}%` };
    };

    return (
        <div>
            <CharacterLength length={passwordLength}/>
            <div className='rangeSlider'>
                <input
                    type="range"
                    min="0"
                    max="20"
                    value={passwordLength}
                    onChange={handleChange}
                    style={getBackgroundSize()}
                />
            </div>
        </div>
    )
}

export default RangeSlider