AoC_2019_01 =
{
	part_one: function(input)
	{
		return input.reduce((sum, v) => sum + Math.floor(parseInt(v) / 3) - 2, 0);
	},

	fuel_req: function(v)
	{
		var sum = 0;
		while (v > 0)
		{
			v = Math.max(Math.floor(v / 3) - 2, 0);
			sum += v;
		}

		return sum;
	},

	part_two: function(input)
	{
		return input.reduce((sum, v) => sum + AoC_2019_01.fuel_req(parseInt(v)), 0);
	}
}

add_solution(1, 2019, AoC_2019_01);
