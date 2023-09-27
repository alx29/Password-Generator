import { useState } from "react"
import Checkbox from "./Checkbox"
import './Condition.css'

interface ICondition {
    condition: string;
}

const Condition: React.FC<ICondition> = ({ condition }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleConditionClick = () => {
        setIsChecked(!isChecked);
    }

    const setChecked = (checked: boolean) => {
        setIsChecked(checked);
    }

    return (
        <div className='conditionContainer'>
            <Checkbox checked={isChecked} setChecked={setChecked}/>
            <div className="condition" onClick={handleConditionClick}>{condition}</div>
        </div>
    )
}

export default Condition