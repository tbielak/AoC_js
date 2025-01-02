AoC_2024_02 =
{
	load: function(input)
	{
		return input.map(s => s.split(' ').map((v) => parseInt(v)));
	},

	is_safe: function(v)
	{
		let inc = v[1] > v[0];
		for (let i = 1; i < v.length; i++)
		{
			if (inc)
			{
				if (v[i] <= v[i-1] || v[i] - v[i-1] > 3)
					return 0;
			}
			else
			{
				if (v[i-1] <= v[i] || v[i-1] - v[i] > 3)
					return 0;
			}
		}

		return 1;
	},

	part_one: function(input)
	{
		return AoC_2024_02.load(input).reduce((sum, v) => sum + AoC_2024_02.is_safe(v), 0);
	},

	part_two: function(input)
	{
		let safe = 0;
		AoC_2024_02.load(input).forEach (function(v)
		{
			for (let i = v.length; i >= 0; i--)
			{
				let t = [...v];
				t.splice(i, 1);
				if (AoC_2024_02.is_safe(t))
				{
					safe++;
					break;
				}
			}
		});

		return safe;
	}
}

add_solution(2, 2024, AoC_2024_02);
