AoC_2021_02 =
{
	load: function(input)
	{
		var course = [];
		input.forEach(line =>
		{
			const s = line.split(' ');
			course.push( {command: s[0][0], units: parseInt(s[1]) });
		});

		return course;
	},

	part_one: function(input)
	{
		var course = AoC_2021_02.load(input);

		var position = 0, depth = 0;
		course.forEach(x =>
		{
			switch (x.command)
			{
				case 'd': depth += x.units; break;
				case 'u': depth -= x.units; break;
				default: position += x.units; break;
			}
		});

		return position * depth;
	},

	part_two: function(input)
	{
		var course = AoC_2021_02.load(input);

		var position = 0, depth = 0, aim = 0;
		course.forEach(x =>
		{
			switch (x.command)
			{
				case 'd': aim += x.units; break;
				case 'u': aim -= x.units; break;
				default:
				{
					position += x.units;
					depth += aim * x.units;
					break;
				}
			}
		});

		return position * depth;
	}
}

add_solution(2, 2021, AoC_2021_02);
