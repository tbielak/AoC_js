AoC_2015_03 =
{
	toString: function(x, y)
	{
		return x.toString() + "x" + y.toString();
	},

	part_one: function(input)
	{
		var x = 0, y = 0;
		var visited = new Set();
		visited.add(AoC_2015_03.toString(x, y));

		for (var i = 0; i < input.length; i++)
		{
			if ('^' == input[i]) y--;
			if ('v' == input[i]) y++;
			if ('>' == input[i]) x--;
			if ('<' == input[i]) x++;
			visited.add(AoC_2015_03.toString(x, y));
		}

		return visited.size;
	},

	part_two: function(input)
	{
		var x = [0, 0], y = [0, 0];
		var visited = new Set();
		visited.add(AoC_2015_03.toString(x[0], y[0]));

		var j = 0;
		for (var i = 0; i < input.length; i++)
		{
			if ('^' == input[i]) y[j]--;
			if ('v' == input[i]) y[j]++;
			if ('>' == input[i]) x[j]--;
			if ('<' == input[i]) x[j]++;
			visited.add(AoC_2015_03.toString(x[j], y[j]));
			j ^= 1;
		}

		return visited.size;
	}
}

add_solution(3, 2015, AoC_2015_03);
