import { Children, useState } from "react";
import "./App.css";
import { Cont, Main, Section, Square, WinnerCont } from "./components/AppStyled";

function App() {
	const Turns = {
		x: "x",
		o: "o",
	};

	const WinnerCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const [board, setBoard] = useState(Array(9).fill(null));

	const [turn, setTurn] = useState(Turns.x);

	const [winner, setWinner] = useState(null);

	const checkWinner = (boardChecking) => {
		for (const combo of WinnerCombos) {
			const [a, c, b] = combo;
			if (boardChecking[a] && boardChecking[a] === boardChecking[b] && boardChecking[a] === boardChecking[c]) {
				return boardChecking[a];
			}
		}
		return null;
	};

	const Square2 = ({ children, isSelected, update, index }) => {
		const className = `${isSelected ? "is-selected" : " "} `;
		const handleClick = () => {
			update(index);
		};
		return (
			<Square onClick={handleClick} className={className}>
				{children}
			</Square>
		);
	};

	const update = (index) => {
		if (board[index] || winner) return;
		const newBoard = [...board];
		newBoard[index] = turn;
		setBoard(newBoard);
		const newTurn = turn === Turns.x ? Turns.o : Turns.x;
		setTurn(newTurn);
		const newWinner = checkWinner(newBoard);
		if (newWinner) {
			setWinner(newWinner);
		}
	};

	return (
		<>
			<Main>
				<h1>ta te ti</h1>
				<Section>
					{board.map((_, index) => {
						return (
							<Square2 update={update} key={index} index={index}>
								{board[index]}
							</Square2>
						);
					})}
				</Section>
				<Section style={{ marginTop: "20px", flexDirection: "column" }}>
					<Square2 isSelected={turn === Turns.x}>{Turns.x}</Square2>
					<Square2 isSelected={turn === Turns.o}>{Turns.o}</Square2>
				</Section>
				<WinnerCont>{winner ? `${winner} WON` : null} </WinnerCont>
			</Main>
		</>
	);
}

export default App;
