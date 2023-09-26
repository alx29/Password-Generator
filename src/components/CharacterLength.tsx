import './CharacterLength.css';

interface ICharacterLength {
    length: number;
}

const CharacterLength: React.FC<ICharacterLength> = ({ length }) => {
  return (
    <div className='characterLength'>
        <div className='textStyle'>Character Length</div>
        <div className="numberStyle">{length}</div>
    </div>
  )
}

export default CharacterLength