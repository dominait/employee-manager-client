import Logo from '../../assets/img/logo.png'
import HomePageStyles from './styles'



function HomePage (props){
    return(
         <HomePageStyles>
             <header>
                 
                 <img src={Logo} alt="employee manager company logo"/>
                 <h1>
                   The Employee Manager
                 </h1>

                 <p>focus on the people and not on the paperwork</p>

              
               
                 <ul>
                    <li><button>login</button></li>
                    <li><button>sign up</button></li>
                 </ul>
             </header>
         </HomePageStyles>
    )
}

export default HomePage