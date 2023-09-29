import { ChangeEvent } from 'react'
import CharacterLength from './CharacterLength'
import './RangeSlider.css'
import { useSelector, useDispatch } from 'react-redux';
import { setPasswordLength } from '../reducer';
import { IGeneralState } from '../interfaces';

const RangeSlider = () => {
    const dispatch = useDispatch();
    const length = useSelector((state: IGeneralState) => state.passwordGenerator.length);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPasswordLength(parseInt(e.target.value, 10)));
    }

    const getBackgroundSize = () => {
        return { backgroundSize: `${(length * 100) / 20}%` };
    };

    return (
        <div>
            <CharacterLength length={length}/>
            <div className='rangeSlider'>
                <input
                    type="range"
                    min="0"
                    max="20"
                    value={length}
                    onChange={handleChange}
                    style={getBackgroundSize()}
                />
            </div>
        </div>
    )
}

export default RangeSlider