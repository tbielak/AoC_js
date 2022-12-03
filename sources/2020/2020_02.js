AoC_2020_02 =
{
	load: function(input)
	{
		var data = [];
		input.forEach(item =>
		{
			const s = item.split(" ");
			const range = s[0].split("-");
			data.push({min: parseInt(range[0]), max: parseInt(range[1]), letter: s[1][0], password: s[2]});
		});

		return data;
	},

	part_one: function(input)
	{
		const inRange = (x, a, b) => x >= a && x <= b;
		return AoC_2020_02.load(input).reduce((sum, x) => sum + inRange(x.password.split(x.letter).length - 1, x.min, x.max), 0);
	},

	part_two: function(input)
	{
		return AoC_2020_02.load(input).reduce((sum, x) => sum + (x.password[x.min - 1] == x.letter ^ x.password[x.max - 1] == x.letter), 0);
	}
}

add_solution(2, 2020, AoC_2020_02);
