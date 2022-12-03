AoC_2018_01 =
{
	part_one: function(input)
	{
		return input.reduce((sum, v) => sum + parseInt(v), 0);
	},

	part_two: function(input)
	{
		var known = new Set();
		var freq = 0;

		while (true)
		{
			for (var i = 0; i < input.length; i++)
			{
				freq += parseInt(input[i]);
				if (known.has(freq))
					return freq;

				known.add(freq);
			}
		}
	}
}

add_solution(1, 2018, AoC_2018_01);
