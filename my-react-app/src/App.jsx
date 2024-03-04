import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import DefaultButton from './DefaultButton.jsx'
import Button from './Button/Button.jsx'
import InlineStyleButton from './InlineStyleButton.jsx'
import PropCard from './PropCard.jsx'

function App() {
	return(
		<>
			<Header/>
			<Card/>
			<DefaultButton/>
			<InlineStyleButton/>
			<Button/>
			<Food/>
			<PropCard name="First Test" score={99} status={true}/>
			<PropCard name="Second Test" score={453} status={false}/>
			<PropCard/>
			<Footer/>
		</>
	);
}

export default App
