import './DifficultyBar.css'

const DIFFICULTY = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'HARD'];



function DifficultyBar() {
  return (
    <div className='difficultyBarContainer'>
        <div className='difficultyBarBox'>
            <div className='textStyle strength'>STRENGTH</div>
            <div className='difficulty'>
                <div className='difficultyText'>MEDIUM</div>
                <div className='square'></div>
                <div className='square'></div>
                <div className='square'></div>
                <div className='square'></div>
            </div>
        </div>
    </div>
  )
}

export default DifficultyBar