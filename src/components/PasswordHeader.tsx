import './PasswordHeader.css';
import Copy from '../images/Copy';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const copyToCLipboard = (textToCopy: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = textToCopy;
  document.body.appendChild(textArea);

  // Select the text in the input element
  textArea.select();

  try {
    // Execute the copy command
    document.execCommand('copy');
  } catch (err) {
    console.error(err);
  }

  // Remove the temporary input element
  document.body.removeChild(textArea);
}

const PasswordHeader = () => {
  const [copied, setCopied] = useState(false);
  const password = useSelector((state) => state.passwordGenerator.password);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500);
    copyToCLipboard(password);
  }

  return (
    <div className="PasswordHeader">
        <div className='password'>{password}</div>
        <div className='copyContainer'>
          {copied && <div className='copyText'>COPIED</div>}
          <div className='copyIcon' onClick={handleCopy}>
            <Copy />
          </div>
        </div>
    </div>
  )
}

export default PasswordHeader