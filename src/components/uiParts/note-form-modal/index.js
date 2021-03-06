import React, { useEffect, useState } from "react";
import SubTitle from "~/components/uiParts/sub-title/index.js";
import NoteCheckModal from "~/components/uiParts/note-check-modal/index.js";

import { Button, Modal, Form } from "semantic-ui-react";

const NoteFormModal = (props) => {
	const [name, setName] = useState("");
	const [nameError, setNameError] = useState(false);
	const [gender, setGender] = useState("1");
	const [age, setAge] = useState("1");
	const [numberOfVaccination, setNumberOfVaccination] = useState(1);
	const [vaccineType, setVaccineType] = useState("M");
	const [secondVaccineType, setSecondVaccineType] = useState("M");
	const [maxTemperature, setMaxTemperature] = useState("1");
	const [log, setLog] = useState("");
	const [logError, setLogError] = useState(false);
	const [remarks, setRemarks] = useState("");
	const [remarksError, setRemarksError] = useState(false);

	useEffect(() => {
		setName("");
		setNameError(false);
		setGender("1");
		setAge("1");
		setVaccineType("M");
		setNumberOfVaccination(1);
		setMaxTemperature("1");
		setLog("");
		setLogError(false);
		setRemarks("");
		setRemarksError(false);
	}, [props.openFormModal]);

	// 名前のバリデーションと更新
	const handleChangeName = (e) => {
		if (e.target.value.length > 50) {
			setNameError("50文字以下の名前を入力してください。");
		} else {
			setNameError(false);
		}
		setName(e.target.value);
	};

	// 性別の更新
	const handleChangeGender = (e, { value }) => {
		setGender(value);
	};

	// 年齢の更新
	const handleChangeAge = (e, { value }) => {
		setAge(value);
	};

	// ワクチンの種類の更新
	const handleChangeVaccineType = (e, { value }) => {
		setVaccineType(value);
	};

	// 最高体温の更新
	const handleChangeMaxTemperature = (e, { value }) => {
		setMaxTemperature(value);
	};

	// 回数の更新
	const handleChangeNumberOfVaccination = (e, { value }) => {
		setNumberOfVaccination(value);
	};

	// 回数の更新
	const handleSecondVaccineType = (e, { value }) => {
		setSecondVaccineType(value);
	};

	// 接種体験の更新
	const handleChangeLog = (e) => {
		if (e.target.value.length > 3000) {
			setLogError("3000文字以下の名前を入力してください。");
		} else {
			setLogError(false);
		}
		setLog(e.target.value);
	};

	// 自由記入欄の更新
	const handleChangeRemarks = (e) => {
		if (e.target.value.length > 3000) {
			setRemarksError("3000文字以下の名前を入力してください。");
		} else {
			setRemarksError(false);
		}
		setRemarks(e.target.value);
	};

	const ageOptions = [
		{ text: "10代以下", value: "1" },
		{ text: "20代", value: "2" },
		{ text: "30代", value: "3" },
		{ text: "40代", value: "4" },
		{ text: "50代", value: "5" },
		{ text: "60代", value: "6" },
		{ text: "70代", value: "7" },
		{ text: "80代", value: "8" },
		{ text: "90代以上", value: "9" },
	];

	const maxTemperatureOptions = [
		{ text: "発熱なしのため未検温", value: "10" },
		{ text: "36.9℃以下", value: "1" },
		{ text: "37.0~37.4℃", value: "2" },
		{ text: "37.5~37.9℃", value: "3" },
		{ text: "38.0~38.4℃", value: "4" },
		{ text: "38.5~38.9℃", value: "5" },
		{ text: "39.0~39.4℃", value: "6" },
		{ text: "39.5~39.9℃", value: "7" },
		{ text: "40℃以上", value: "8" },
		{ text: "不明", value: "9" },
	];

	return (
		<Modal
			closeIcon
			onClose={() => props.setOpenFormModal(false)}
			onOpen={() => props.setOpenFormModal(true)}
			open={props.openFormModal}
		>
			<Modal.Header>
				<SubTitle title={"ワクチン接種体験を共有する"} size={"h3"} />
			</Modal.Header>
			<Modal.Content>
				<Form>
					{/* 名前の入力 */}
					<Form.Input
						label="名前"
						error={nameError}
						placeholder="未入力の場合は「匿名」になります。"
						value={name}
						onChange={handleChangeName}
					/>
					{/* 性別の入力 */}
					<Form.Group inline>
						<label>性別</label>
						<Form.Radio
							label="男性"
							value="1"
							checked={gender === "1"}
							onChange={handleChangeGender}
						/>
						<Form.Radio
							label="女性"
							value="2"
							checked={gender === "2"}
							onChange={handleChangeGender}
						/>
						<Form.Radio
							label="不明"
							value="3"
							checked={gender === "3"}
							onChange={handleChangeGender}
						/>
					</Form.Group>
					{/* 年齢の入力 */}
					<Form.Select
						fluid
						required
						label="年齢"
						options={ageOptions}
						placeholder="年齢"
						onChange={handleChangeAge}
					/>
					{/* 回数の入力 */}
					<Form.Group inline>
						<label>接種回数</label>
						<Form.Radio
							label="1回目"
							value={1}
							checked={numberOfVaccination === 1}
							onChange={handleChangeNumberOfVaccination}
						/>
						<Form.Radio
							label="2回目"
							value={2}
							checked={numberOfVaccination === 2}
							onChange={handleChangeNumberOfVaccination}
						/>
						<Form.Radio
							label="3回目"
							value={3}
							checked={numberOfVaccination === 3}
							onChange={handleChangeNumberOfVaccination}
						/>
					</Form.Group>
					{/* 性別の入力 */}
					<Form.Group inline required>
						<label>ワクチンの種類</label>
						<Form.Radio
							label="モデルナ"
							value="M"
							checked={vaccineType === "M"}
							onChange={handleChangeVaccineType}
						/>
						<Form.Radio
							label="ファイザー"
							value="F"
							checked={vaccineType === "F"}
							onChange={handleChangeVaccineType}
						/>
						<Form.Radio
							label="アストラゼネカ"
							value="A"
							checked={vaccineType === "A"}
							onChange={handleChangeVaccineType}
						/>
					</Form.Group>
					{/* 2回目のワクチンの種類(3回目限定) */}
					<Form.Group inline required>
						<label>2回目のワクチンの種類 (3回目限定)</label>
						<Form.Radio
							label="モデルナ"
							value="M"
							checked={secondVaccineType === "M"}
							onChange={handleSecondVaccineType}
							disabled={numberOfVaccination === 3 ? false : true}
						/>
						<Form.Radio
							label="ファイザー"
							value="F"
							checked={secondVaccineType === "F"}
							onChange={handleSecondVaccineType}
							disabled={numberOfVaccination === 3 ? false : true}
						/>
						<Form.Radio
							label="アストラゼネカ"
							value="A"
							checked={secondVaccineType === "A"}
							onChange={handleSecondVaccineType}
							disabled={numberOfVaccination === 3 ? false : true}
						/>
					</Form.Group>
					{/* 最高体温の入力 */}
					<Form.Select
						fluid
						required
						label="最高体温"
						options={maxTemperatureOptions}
						placeholder="最高体温"
						onChange={handleChangeMaxTemperature}
					/>
					{/* 接種体験の入力 */}
					<Form.TextArea
						label="経過記録"
						error={logError}
						placeholder={`1時間後 左腕に若干の痺れを感じる\n3時間後 37.5℃の発熱\n...`}
						value={log}
						onChange={handleChangeLog}
					/>
					{/* 自由記入欄の入力 */}
					<Form.TextArea
						label="自由コメント"
						error={remarksError}
						placeholder={`事前に準備してよかったもの、後悔したこと、感想など...\n何でもご記入ください。`}
						value={remarks}
						onChange={handleChangeRemarks}
					/>
				</Form>
			</Modal.Content>
			<Modal.Actions>
				<Button color="gray" onClick={() => props.setOpenFormModal(false)}>
					キャンセル
				</Button>
				<Button
					content="投稿内容を確認する"
					labelPosition="right"
					icon="checkmark"
					onClick={() => {
						props.setOpenCheckModal(true);
					}}
					positive
					disabled={nameError || logError || remarksError}
				/>
			</Modal.Actions>

			<NoteCheckModal
				openCheckModal={props.openCheckModal}
				setOpenCheckModal={props.setOpenCheckModal}
				setOpenFormModal={props.setOpenFormModal}
				setOpenThanksModal={props.setOpenThanksModal}
				setPostNoteNum={props.setPostNoteNum}
				name={name}
				gender={gender}
				age={age}
				numberOfVaccination={numberOfVaccination}
				vaccineType={vaccineType}
				secondVaccineType={secondVaccineType}
				maxTemperature={maxTemperature}
				log={log}
				remarks={remarks}
			/>
		</Modal>
	);
};

export default NoteFormModal;
