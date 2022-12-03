AoC_2020_01 =
{
	part_one: function(input)
	{
		const x = input.map(s => { return parseInt(s); });

		for (var a = 0; a < x.length; a++)
			for (var b = 0; b < x.length; b++)
				if (2020 == x[a] + x[b])
					return x[a] * x[b];
	},

	part_two: function(input)
	{
		const x = input.map(s => { return parseInt(s); });

		for (var a = 0; a < x.length; a++)
			for (var b = 0; b < x.length; b++)
				for (var c = 0; c < x.length; c++)
					if (2020 == x[a] + x[b] + x[c])
						return x[a] * x[b] * x[c];
	}
}

add_solution(1, 2020, AoC_2020_01);
