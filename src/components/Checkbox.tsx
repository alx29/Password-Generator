import { useEffect, useState } from "react";
import './Checkbox.css';
import CheckMark from "../assets/icon-check.svg?react";

interface ICheckbox {
    checked: boolean;
    setChecked: Function;
}

const Checkbox: React.FC<ICheckbox> = ({ checked, setChecked }) => {
    const [isChecked, setIsChecked] = useState(checked);
    const [isHidden, setIsHidden] = useState(checked);

    useEffect(() => {
        setIsChecked(checked);
        if (checked) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    }, [checked]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setIsHidden(!isHidden);
        setChecked(!isChecked);
    };

    return (
        <div className={`checkmark ${isChecked ? 'checked' : ''}`} onClick={handleCheckboxChange}>
            {isHidden && <CheckMark/>}
        </div>
    );
}

export default Checkbox