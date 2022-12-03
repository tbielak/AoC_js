AoC_2017_02 =
{
	load: function(input)
	{
		var data = [];
		input.forEach(s => { data.push(s.split("\t").map(function(v) { return parseInt(v); })); });
		return data;
	},

	part_one: function(input)
	{
		return AoC_2017_02.load(input).reduce((sum, row) => sum + Math.max(...row) - Math.min(...row), 0);
	},

	part_two: function(input)
	{
		var sum = 0;
		AoC_2017_02.load(input).forEach(row =>
		{
			for (var i = 0; i < row.length; i++)
				for (var j = i + 1; j < row.length; j++)
				{
					var a = row[i];
					var b = row[j];
					if (a < b)
						[a, b] = [b, a];

					if ((a % b) == 0)
					{
						sum += a / b;
						break;
					}
				}
		});

		return sum;
	}
}

add_solution(2, 2017, AoC_2017_02);
