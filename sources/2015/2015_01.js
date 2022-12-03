AoC_2015_01 =
{
	part_one: function(input)
	{
		return input.split('(').length - input.split(')').length;
	},

	part_two: function(input)
	{
		var c = 0;
		for (var i = 0; i < input.length; i++)
		{
			if ('(' == input[i]) c++;
			if (')' == input[i]) c--;
			if (-1 == c)
				return i + 1;
		}
	}
}

add_solution(1, 2015, AoC_2015_01);
