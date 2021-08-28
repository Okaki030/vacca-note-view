import React from "react";
import "./index.scss";
import NotesViewListHeader from "~/components/uiParts/notes-view-list-header/index.js";
import NotesViewListContent from "~/components/uiParts/notes-view-list-content/index.js";

const NotesViewList = (props) => {
	return (
		<div>
			<NotesViewListHeader setOpenModal={props.setOpenModal} />
			<div className="notes-view-list-content">
				<NotesViewListContent />
			</div>
		</div>
	);
};

export default NotesViewList;
