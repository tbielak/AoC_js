AoC_2017_01 =
{
	count: function(input, add = 1)
	{
		var sum = 0;
		for (var i = 0; i < input.length; i++)
			if (input[i] == input[(i + add) % input.length])
				sum += input.charCodeAt(i) - 48;
		return sum;
	},

	part_one: function(input)
	{
		return AoC_2017_01.count(input);
	},

	part_two: function(input)
	{
		return AoC_2017_01.count(input, input.length / 2);
	}
}

add_solution(1, 2017, AoC_2017_01);
