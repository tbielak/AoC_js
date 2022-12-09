AoC_2022_02 =
{
	part_one: function(input)
	{
		let score = 0;
		input.forEach(line =>
		{
			// 1 = rock, 2 = paper, 3 = scissors
			let op = line.charCodeAt(0) - 64;
			let me = line.charCodeAt(2) - 87;

			if (op == me)
				score += me + 3;
			else
				score += me + (((me == 1 && op == 3) || (me == 3 && op == 2) || (me == 2 && op == 1)) ? 6 : 0);
		});

		return score;
	},

	part_two: function(input)
	{
		let score = 0;
		input.forEach(line =>
		{
			// 1 = rock, 2 = paper, 3 = scissors
			let op = line.charCodeAt(0) - 64;
			let me = line.charCodeAt(2) - 87;

			if (me == 2)
				score += op + 3;
			else
				score += ((op + (me % 3)) % 3) + (me - 1) * 3 + 1;
		});

		return score;
	}
}

add_solution(2, 2022, AoC_2022_02);
