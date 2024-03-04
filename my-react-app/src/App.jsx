import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import DefaultButton from './DefaultButton.jsx'
import Button from './Button/Button.jsx'
import InlineStyleButton from './InlineStyleButton.jsx'

function App() {
	return(
		<>
			<Header/>
			<Card/>
			<DefaultButton/>
			<InlineStyleButton/>
			<Button/>
			<Food/>
			<Footer/>
		</>
	);
}

export default App
