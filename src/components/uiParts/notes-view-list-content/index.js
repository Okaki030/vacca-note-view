import React, { useState, useEffect } from "react";
import "./index.scss";
import NotesViewListContentCard from "~/components/uiParts/notes-view-list-content-card/index.js";

import { Card } from "semantic-ui-react";
import axios from "axios";
import useMedia from "use-media";

const NotesViewListContent = (props) => {
	const [notes, setNotes] = useState([]);
	const [jwt, setJWT] = useState(localStorage.getItem("jwt"));
	const isWide = useMedia({ minWidth: "767px" });

	useEffect(() => {
		const fetchData = async () => {
			let token;
			if (jwt == null) {
				const jwtAPI = process.env.REACT_APP_SERVER_API + "/auth";
				const response = await axios(jwtAPI);
				setJWT(response.data.token);
				token = response.data.token;
				window.localStorage.setItem("jwt", token);
			} else {
				token = jwt;
			}

			const api = process.env.REACT_APP_SERVER_API + "/notes";
			const response = await axios.get(api, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setNotes(response.data);
			props.setNotesCount(response.data.length);
		};
		fetchData();
	}, []);

	return (
		<Card.Group itemsPerRow={isWide ? 2 : 1}>
			{notes.map((note) => {
				return <NotesViewListContentCard note={note} />;
			})}
		</Card.Group>
	);
};

export default NotesViewListContent;
