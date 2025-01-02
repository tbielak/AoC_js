AoC_2024_03 =
{
	part_one: function(input)
	{
		return input
			.map(s => [...s.matchAll(/mul\((\d+),(\d+)\)/g)]).flat(1)
			.reduce((sum, m) => sum + parseInt(m[1]) * parseInt(m[2]), 0);
	},

	part_two: function(input)
	{
		return input
			.toString().split("do()").map(s => s.split("don\'t()")[0])
			.map(s => [...s.matchAll(/mul\((\d+),(\d+)\)/g)]).flat(1)
			.reduce((sum, m) => sum + parseInt(m[1]) * parseInt(m[2]), 0);
	}
}

add_solution(3, 2024, AoC_2024_03);
