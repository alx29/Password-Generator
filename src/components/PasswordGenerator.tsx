import PasswordBody from "./PasswordBody"
import PasswordHeader from "./PasswordHeader"

function PasswordGenerator() {
  return (
    <div>
        <PasswordHeader password="alex"/>
        <PasswordBody />
    </div>
  )
}

export default PasswordGenerator