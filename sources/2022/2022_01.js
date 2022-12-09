AoC_2022_01 =
{
	total_calories: function(input, top_count = 1)
	{
		let elfs = [];
		let calories = 0;
		input.forEach(line =>
		{
			if (line == "")
			{
				elfs.push(calories);
				calories = 0;
			}
			else
				calories += parseInt(line);
		});

		elfs.push(calories);
		elfs.sort(function(a, b) { return a - b; });
		return elfs.slice(-top_count).reduce((sum, v) => sum + v, 0); 
	},

	part_one: function(input)
	{
		return AoC_2022_01.total_calories(input);
	},

	part_two: function(input)
	{
		return AoC_2022_01.total_calories(input, 3);
	}
}

add_solution(1, 2022, AoC_2022_01);
