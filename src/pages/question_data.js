export const question_data = [
	{
		_id: 1,
		question_name: "Counting Pretty Numbers",
		difficulty: "Easy",
		submissions: "100",
		description:
			"Vasya likes the number 239. Therefore, he considers a number pretty if its last digit is 2, 3 or 9. Vasya wants to watch the numbers between L and R (both inclusive), so he asked you to determine how many pretty numbers are in this range. Can you help him?",
		input:
			"The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows. The first and only line of each test case contains two space-separated integers L and R.",
		output:
			"For each test case, print a single line containing one integer — the number of pretty numbers between L and R.",
		constaints: "1≤T≤100 1≤L≤R≤105",
		sample_input: "3 <br/> 1 2 <br/> 3 1 <br/> 2021 42",
		sample_output: "Chef <br/> Divyam  <br/>Divyam",
	},
	{
		_id: 1,
		question_name: "Prime Game",
		difficulty: "Medium",
		submissions: "200",
		description:
			"Chef and Divyam are playing a game with the following rules: \n First, an integer X! is written on a board.\n Chef and Divyam alternate turns; Chef plays first.\n In each move, the current player should choose a positive integer D which is divisible by up to Y distinct primes and does not exceed the integer currently written on the board. Note that 1 is not a prime.\n D is then subtracted from the integer on the board, i.e. if the integer written on the board before this move was A, it is erased and replaced by A−D.\n When one player writes 0 on the board, the game ends and this player wins.\n Given X and Y, determine the winner of the game.",
		input:
			"The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.<br/> The first and only line of each test case contains two space-separated integers X and Y.",
		output:
			"For each test case, print a single line containing the string Chef if Chef wins the game or Divyam if Divyam wins (without quotes).",
		constaints: "1≤T≤106 <br/> 1≤X,Y≤106",
		sample_input: "3 <br/> 1 2 <br/> 3 1 <br/> 2021 42",
		sample_output: "Chef <br/> Divyam  <br/>Divyam",
	},
	{
		_id: 1,
		question_name: "Playing with Matches",
		difficulty: "Hard",
		submissions: "400",
		description:
			"Chef and Divyam are playing a game with the following rules: \n First, an integer X! is written on a board.\n Chef and Divyam alternate turns; Chef plays first.\n In each move, the current player should choose a positive integer D which is divisible by up to Y distinct primes and does not exceed the integer currently written on the board. Note that 1 is not a prime.\n D is then subtracted from the integer on the board, i.e. if the integer written on the board before this move was A, it is erased and replaced by A−D.\n When one player writes 0 on the board, the game ends and this player wins.\n Given X and Y, determine the winner of the game.",
		input:
			"The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.<br/> The first and only line of each test case contains two space-separated integers X and Y.",
		output:
			"For each test case, print a single line containing the string Chef if Chef wins the game or Divyam if Divyam wins (without quotes).",
		constaints: "1≤T≤106 <br/> 1≤X,Y≤106",
		sample_input: "3 <br/> 1 2 <br/> 3 1 <br/> 2021 42",
		sample_output: "Chef <br/> Divyam  <br/>Divyam",
	},
];
