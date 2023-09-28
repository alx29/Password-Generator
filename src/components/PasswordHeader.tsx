import './PasswordHeader.css';
import Copy from "../assets/icon-copy.svg?react";
import { useSelector } from 'react-redux';

const PasswordHeader = () => {
  const password = useSelector((state) => state.passwordGenerator.password);

  return (
    <div className="PasswordHeader">
        <div className='password'>{password}</div>
        <Copy className="copyIcon"/>
    </div>
  )
}

export default PasswordHeader