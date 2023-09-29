import { useEffect, useState } from "react";
import './Checkbox.css';
import Checkmark from "../images/Checkmark";

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
            {isHidden && <Checkmark/>}
        </div>
    );
}

export default Checkbox