import AppBar from "./components/appbar";
import firebase from "./firebase/firebase.config";
import HomePage from "./pages/home";
import GlobalStyles from "./global/globalStyles";
function App() {
  return (
    <GlobalStyles>
      <AppBar isUser={false} />
      <HomePage />
    </GlobalStyles>
  );
}

export default App;
