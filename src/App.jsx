import { Children, useState } from "react";
import "./App.css";
import {
	Cont,
	Main,
	Section,
	SectionSelectedTurn,
	Square,
	Title,
	WinnerCont,
	WinnerFooter,
	WinnerSimbol,
	WinnerSquare,
	WinnerText,
} from "./components/AppStyled";
import confetti from "canvas-confetti";

function App() {
	const Turns = {
		x: "✕",
		o: "Ｏ",
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

	const checkEnd = (newBoard) => {
		return newBoard.every((square) => square !== null);
	};

	const Square2 = ({ children, isSelected, update, index }) => {
		const className = `${isSelected ? "is-selected" : ""}`;
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
			confetti();
			setWinner(newWinner);
		} else if (checkEnd(newBoard)) {
			setWinner(false);
		}
	};

	const reset = () => {
		setBoard(Array(9).fill(null)), setTurn(Turns.x), setWinner(null);
	};

	return (
		<>
			<Main>
				<Title>TA TE TI</Title>
				<Section>
					{board.map((_, index) => {
						return (
							<Square2 update={update} key={index} index={index}>
								{board[index]}
							</Square2>
						);
					})}
				</Section>
				<SectionSelectedTurn>
					<Square2 isSelected={turn === Turns.x}>{Turns.x}</Square2>
					<Square2 isSelected={turn === Turns.o}>{Turns.o}</Square2>
				</SectionSelectedTurn>
				{winner == null ? <WinnerFooter onClick={reset}>RESET</WinnerFooter> : ""}

				{winner !== null && (
					<WinnerCont>
						<WinnerText>{winner === false ? "TIE" : `THE WINNER IS`}</WinnerText>
						<WinnerSimbol>{winner && <WinnerSquare>{winner}</WinnerSquare>}</WinnerSimbol>
						<WinnerFooter onClick={reset}>RESET</WinnerFooter>
					</WinnerCont>
				)}
			</Main>
		</>
	);
}

export default App;
