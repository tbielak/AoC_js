AoC_2021_01 =
{
	part_one: function(input)
	{
		const x = input.map(s => { return parseInt(s); });

		var c = 0;
		for (var i = 1; i < x.length; i++)
			if (x[i] > x[i - 1])
				c++;

		return c;
	},

	part_two: function(input)
	{
		const x = input.map(s => { return parseInt(s); });

		var c = 0;
		for (var i = 3; i < x.length; i++)
			if (x[i] + x[i - 1] + x[i - 2] > x[i - 1] + x[i - 2] + x[i - 3])
				c++;

		return c;
	}
}

add_solution(1, 2021, AoC_2021_01);
