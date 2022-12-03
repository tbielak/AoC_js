AoC_2016_03 =
{
	load: function(input)
	{
		var data = [];
		input.forEach(s => { data.push(
			[parseInt(s.substring(0, 5)), parseInt(s.substring(5, 10)), parseInt(s.substring(10, 15))]
		); });
		return data;
	},

	is_triangle: function(x)
	{
		x.sort(function(a, b) { return a - b; });
		return (x[0] + x[1] > x[2]) ? 1 : 0;
	},

	part_one: function(input)
	{
		return AoC_2016_03.load(input).reduce((s, x) => s + AoC_2016_03.is_triangle(x), 0);
	},

	part_two: function(input)
	{
		var data = AoC_2016_03.load(input);

		var count = 0;
		const col_sets = data.length / 3;
		for (var i = 0; i < col_sets; i++)
			for (var j = 0; j < 3; j++)
			{
				v = [0, 0, 0];
				for (var k = 0; k < 3; k++)
					v[k] = data[i * 3 + k][j];

				count += AoC_2016_03.is_triangle(v);
			}

		return count;
	}
}

add_solution(3, 2016, AoC_2016_03);
