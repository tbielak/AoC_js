AoC_2015_02 =
{
	load: function(input)
	{
		var x = [];
		for (var i = 0; i < input.length; i++)
		{
			var line = input[i].split("x");
			x.push({l: parseInt(line[0]), w: parseInt(line[1]), h: parseInt(line[2])});
		}

		return x;
	},

	part_one: function(input)
	{
		var area = 0;
		var s = [0, 0, 0];
		AoC_2015_02.load(input).forEach(x =>
		{
			s[0] = x.l * x.w;
			s[1] = x.w * x.h;
			s[2] = x.h * x.l;
			s.sort(function(a, b) { return a - b; });
			area += (s[0] + s[1] + s[2]) * 2 + s[0];
		});

		return area;
	},

	part_two: function(input)
	{
		var ribbon = 0;
		var s = [0, 0, 0];
		AoC_2015_02.load(input).forEach(x =>
		{
			s[0] = x.l;
			s[1] = x.w;
			s[2] = x.h;
			s.sort(function(a, b) { return a - b; });
			ribbon += 2 * (s[0] + s[1]) + s[0] * s[1] * s[2];
		});

		return ribbon;
	}
}

add_solution(2, 2015, AoC_2015_02);
