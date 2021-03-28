import StyleWrapper from './styles'
import UserIcon from '../icon/User'

function AppBar (props){
    return(
    <StyleWrapper>
        <ul>
            <li><h2>Employee Manager</h2></li>
            
            <li> <UserIcon/></li>
        </ul>
    </StyleWrapper>
    )
}

export default AppBar