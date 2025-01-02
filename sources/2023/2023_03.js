AoC_2023_03 =
{
	isdigit: function(c)
	{
		return c >= '0' && c <= '9';	
	},

	adjacent_to_symbol: function(input, y, x, xr)
	{
		for (let yy = y - 1; yy <= y + 1; yy++)
			for (let xx = x - 1; xx <= xr + 1; xx++)
				if (yy >= 0 && yy < input.length && xx >= 0 && xx < input[y].length &&
					input[yy][xx] != '.' && (!AoC_2023_03.isdigit(input[yy][xx])))
						return true;

		return false;
	},

	read_number: function(v, input, y, x)
	{
		if (y < 0 || y >= input.length || x < 0 || x >= input[y].length || !AoC_2023_03.isdigit(input[y][x]))
			return false;

		while (x > 0 && AoC_2023_03.isdigit(input[y][x])) x--;
		if (!AoC_2023_03.isdigit(input[y][x])) x++;

		v.push(parseInt(input[y].substr(x)));
		return true;
	},

	part_one: function(input)
	{
		let sum = 0;
		for (let y = 0; y < input.length; y++)
			for (let x = 0; x < input[y].length; x++)
				if (AoC_2023_03.isdigit(input[y][x]))
				{
					let xr = x;
					while (xr < input[y].length && AoC_2023_03.isdigit(input[y][xr])) xr++;
					if (xr < input[y].length && !AoC_2023_03.isdigit(input[y][xr])) xr--;
					if (AoC_2023_03.adjacent_to_symbol(input, y, x, xr))
						sum += parseInt(input[y].substr(x, xr + 1));

					x = xr;
				}

		return sum;
	},

	part_two: function(input)
	{
		let sum = 0;
		for (let y = 0; y < input.length; y++)
			for (let x = 0; x < input.length; x++)
				if (input[y][x] == '*')
				{
					let v = [];
					if (!AoC_2023_03.read_number(v, input, y - 1, x))
					{
						AoC_2023_03.read_number(v, input, y - 1, x - 1);
						AoC_2023_03.read_number(v, input, y - 1, x + 1);
					}

					AoC_2023_03.read_number(v, input, y, x - 1);
					AoC_2023_03.read_number(v, input, y, x + 1);

					if (!AoC_2023_03.read_number(v, input, y + 1, x))
					{
						AoC_2023_03.read_number(v, input, y + 1, x - 1);
						AoC_2023_03.read_number(v, input, y + 1, x + 1);
					}

					if (v.length == 2)
						sum += v[0] * v[1];
				}

		return sum;
	}
}

add_solution(3, 2023, AoC_2023_03);
