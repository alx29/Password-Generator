import { useState } from "react"
import Checkbox from "./Checkbox"
import './Condition.css'
import { useDispatch } from "react-redux";
import { toggleLowercase, toggleNumbers, toggleSpecialChars, toggleUppercase } from "../reducer";

interface ICondition {
    condition: string;
}

const dispatchTheRightCondition = (condition: string, dispatch: Function) => {
    if (condition.toLowerCase().includes('uppercase')) {
        dispatch(toggleUppercase());
    } else if (condition.toLowerCase().includes('lowercase')) {
        dispatch(toggleLowercase());
    } else if (condition.toLowerCase().includes('numbers')) {
        dispatch(toggleNumbers());
    } else if (condition.toLowerCase().includes('symbols')) {
        dispatch(toggleSpecialChars());
    }
}

const Condition: React.FC<ICondition> = ({ condition }) => {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);

    const handleConditionClick = () => {
        setIsChecked(!isChecked);
        dispatchTheRightCondition(condition, dispatch);
    }

    const setChecked = (checked: boolean) => {
        setIsChecked(checked);
        dispatchTheRightCondition(condition, dispatch);
    }

    return (
        <div className='conditionContainer'>
            <Checkbox checked={isChecked} setChecked={setChecked}/>
            <div className="condition" onClick={handleConditionClick}>{condition}</div>
        </div>
    )
}

export default Condition