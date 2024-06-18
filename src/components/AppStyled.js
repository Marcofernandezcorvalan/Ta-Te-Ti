import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Section = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	color: white;
`;

export const SectionSelectedTurn = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	color: white;
	margin-top: 20px;
`;

export const Cont = styled.div`
	display: flex;
	color: white;
`;

export const Square = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 5px;
	border: 1px solid white;
	display: grid;
	place-items: center;
	cursor: pointer;
	font-size: 45px;
	font-weight: 600;
	&.is-selected {
		color: whitesmoke;
		background: #008f39;
	}
`;

export const WinnerCont = styled.section`
	/* display: flex;
	align-items: center;
	justify-content: center;
	color: greenyellow;
	font-size: 30px;
	font-weight: 900; */
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: rgba(0, 0, 0, 0.7);
`;

export const WinnerText = styled.h2`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const WinnerSimbol = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #242424;
`;

export const WinnerFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 120px;
	border-radius: 5px;
	border: 1px solid white;
	cursor: pointer;
	margin-top: 20px;
	padding: 5px;
	font-weight: 700;
	font-size: 13px;
	background-color: #242424;
`;

export const WinnerSquare = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 5px;
	border: 1px solid white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 50px;
	font-weight: 900;
	color: white;
`;
