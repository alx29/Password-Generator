import './PasswordHeader.css';
import Copy from "../assets/icon-copy.svg?react";

interface PasswordHeaderProps {
    password: string;
}

const PasswordHeader: React.FC<PasswordHeaderProps> = ({ password }) => {
  return (
    <div className="PasswordHeader">
        <div className='password'>{password}</div>
        <Copy className="copyIcon"/>
    </div>
  )
}

export default PasswordHeader