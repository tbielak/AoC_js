AoC_2017_03 =
{
	part_one: function(input)
	{
		const update_x = [ 1, 0, -1, 0 ];
		const update_y = [ 0, -1, 0, 1 ];
		const count_update = [ 0, 1, 0, 1 ];

		var x = 0, y = 0, value = 1, count = 1;
		var target = parseInt(input);

		while (true)
		{
			for (var j = 0; j < 4; j++)
			{
				for (var i = 0; i < count; i++)
				{
					if (value == target)
						return Math.abs(x) + Math.abs(y);

					x += update_x[j];
					y += update_y[j];
					value++;
				}

				count += count_update[j];
			}
		}
	},

	toString: function(p)
	{
		return p.x.toString() + "x" + p.y.toString();
	},

	neighbours: function(p, spiral)
	{
		var sum = 0;
		for (var x = -1; x <= 1; x++)
			for (var y = -1; y <= 1; y++)
			{
				var s = AoC_2017_03.toString({x: p.x + x, y: p.y + y});
				if (s in spiral)
					sum += spiral[s];
			}

		return sum;
	},

	part_two: function(input)
	{
		const update_x = [ 1, 0, -1, 0 ];
		const update_y = [ 0, -1, 0, 1 ];
		const count_update = [ 0, 1, 0, 1 ];

		var spiral = {};
		var target = parseInt(input);

		var p = {x: 0, y: 0};
		spiral[AoC_2017_03.toString(p)] = 1;

		var count = 1;
		while (true)
		{
			for (var j = 0; j < 4; j++)
			{
				for (var i = 0; i < count; i++)
				{
					var value = AoC_2017_03.neighbours(p, spiral);
					if (value > target)
						return value;

					spiral[AoC_2017_03.toString(p)] = value;
					p.x += update_x[j];
					p.y += update_y[j];
				}

				count += count_update[j];
			}
		}
	}
}

add_solution(3, 2017, AoC_2017_03);
