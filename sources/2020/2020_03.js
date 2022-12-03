AoC_2020_03 =
{
	part_one: function(input)
	{
		var x = 0, c = 0;
		const width = input[0].length;
		input.forEach(s =>
		{
			if (s[x] == '#') c++;
			x = (x + 3) % width;
		});

		return c;
	},

	part_two: function(input)
	{
		var m = 1;
		const width = input[0].length;
		const height = input.length;
		const turns = [ [1, 1], [3, 1], [5, 1], [7, 1], [1, 2] ];
		turns.forEach(t =>
		{
			var x = 0, y = 0, c = 0;
			do
			{
				if (input[y][x] == '#') c++;
				x += t[0];
				y += t[1];
				x %= width;
			} while (y < height);

			m *= c;
		});

		return m;
	}
}

add_solution(3, 2020, AoC_2020_03);
