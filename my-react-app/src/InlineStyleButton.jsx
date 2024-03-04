function InlineStyleButton() {
	const styles = {
		backgroundColor: "hsl(150, 50%, 50%)",
		color: "white",
		padding: "10px 20px",
		borderRadius: "5px",
		border: "none",
		cursor: "pointer",
		margin: "5px",
	}

	return(
		<button style={styles}>Inline styled button</button>
	);
}

export default InlineStyleButton
