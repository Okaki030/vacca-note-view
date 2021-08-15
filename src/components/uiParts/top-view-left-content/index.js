import React from "react";
import "./index.scss";
import character from "~/img/top-view-character.png";

import { Image } from "semantic-ui-react";

const TopViewLeftContent = () => {
	return (
		<Image
			src={character}
			className="top-view-left-character"
			alt="character"
		/>
	);
};

export default TopViewLeftContent;
