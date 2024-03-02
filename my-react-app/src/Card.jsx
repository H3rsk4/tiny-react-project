import profilePic from './assets/profile.png'

function Card() {
	return(
		<div className="card">
			<img className="card-image" src={profilePic} alt="profile picture"></img>
			<h2 className="card-title">Title Card</h2>
			<p className="card-text">This card consists of an image, a title and a paragraph.</p>
		</div>
	);
}

export default Card
