function PropCard(props){
	const styles = {
		border: "2px solid hsl(200, 100%, 20%)",
		borderRadius: "10px",
		boxShadow: "5px 5px 5px hsla(0, 0%, 0%, 0.3)",
		padding: "10px",
		margin: "10px",
		width: "150px",
		display: "inline-block",
	}

	const styles_p = {
		margin: "0",
	}

	return(
		<div style={styles}>
			<p style={styles_p}>Name: {props.name}</p>
			<p style={styles_p}>Score: {props.score}</p>
			<p style={styles_p}>Status: {props.status ? "On" : "Off"}</p>
		</div>

	);
}

PropCard.defaultProps = {
	name: "Default",
	score: 0,
	status: false,
}

export default PropCard
