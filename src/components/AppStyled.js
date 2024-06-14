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
	&.is-selected {
		color: whitesmoke;
		background: #008f39;
	}
`;

export const WinnerCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: greenyellow;
	font-size: 30px;
	font-weight: 900;
`;
