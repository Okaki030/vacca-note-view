import React, { useState, useEffect } from "react";
import * as constants from "~/constants.js";
import NoteHeader from "~/components/uiParts/note-header/index.js";
import NoteContent from "~/components/uiParts/note-content/index.js";
import NoteRecommend from "~/components/uiParts/note-recommend/index.js";

import axios from "axios";
import { Dimmer, Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom";

const Detail = () => {
	const [note, setNote] = useState({});
	const [jwt, setJWT] = useState(localStorage.getItem("jwt"));
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

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

			const api = process.env.REACT_APP_SERVER_API + "/note/" + id;
			const response = await axios.get(api, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setNote(response.data);
			setLoading(false);
		};
		fetchData();
	}, [id]);

	let gender;
	constants.GENDER_TYPE[note.gender]
		? (gender = constants.GENDER_TYPE[note.gender])
		: (gender = "不明");

	let age;
	constants.AGE_TYPE[note.age]
		? (age = constants.AGE_TYPE[note.age])
		: (age = "不明");

	let vaccineType;
	constants.VACCINE_TYPE[note.vaccine_type]
		? (vaccineType = constants.VACCINE_TYPE[note.vaccine_type])
		: (vaccineType = "不明");

	let numberOfVaccination;
	constants.NUMBER_OF_VACCINATION[note.number_of_vaccination]
		? (numberOfVaccination =
				constants.NUMBER_OF_VACCINATION[note.number_of_vaccination])
		: (numberOfVaccination = "不明");

	let maxTemperature;
	constants.MAX_TEMPERATURE[note.max_temperature]
		? (maxTemperature = constants.MAX_TEMPERATURE[note.max_temperature])
		: (maxTemperature = "不明");

	let log;
	if (note.log !== undefined) {
		log = note.log.split("\n").map((str, index) => (
			<React.Fragment key={index}>
				{str}
				<br />
			</React.Fragment>
		));
	}

	let remarks;
	if (note.remarks !== undefined) {
		remarks = note.remarks.split("\n").map((str, index) => (
			<React.Fragment key={index}>
				{str}
				<br />
			</React.Fragment>
		));
	}

	let loader = (
		<Dimmer active inverted>
			<Loader>Loading</Loader>
		</Dimmer>
	);

	let loadingComponent;
	if (loading) {
		loadingComponent = loader;
	} else {
		loadingComponent = null;
	}

	return (
		<div>
			{loadingComponent}
			<NoteHeader
				age={age}
				gender={gender}
				name={note.name}
				vaccineType={vaccineType}
				numberOfVaccination={numberOfVaccination}
				maxTemperature={maxTemperature}
			/>
			<NoteContent log={log} remarks={remarks} />
			<NoteRecommend
				id={id}
				vaccineType={note.vaccine_type}
				numberOfVaccination={note.number_of_vaccination}
				age={note.age}
			/>
		</div>
	);
};

export default Detail;
