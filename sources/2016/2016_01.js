AoC_2016_01 =
{
	load: function(input)
	{
		var x = [];
		[...input.replaceAll(" ", "").split(",")].forEach(s => {
			x.push({ direction: s[0] == 'R' ? 1 : -1, steps: parseInt(s.substring(1)) });
		});

		return x;
	},

	update: function(position, face, steps = 1)
	{
		const update_x = [0, 1, 0, -1];
		const update_y = [-1, 0, 1, 0];
		return ({ x: position.x + update_x[face] * steps, y: position.y + update_y[face] * steps });
	},

	distance: function(position)
	{
		return Math.abs(position.x) + Math.abs(position.y);
	},

	toString: function(position)
	{
		return position.x.toString() + "x" + position.y.toString();
	},

	part_one: function(input)
	{
		var face = 0;
		var position = { x: 0, y: 0 };
		AoC_2016_01.load(input).forEach(x =>
		{
			face = (face + x.direction) & 3;
			position = AoC_2016_01.update(position, face, x.steps);
		});

		return AoC_2016_01.distance(position);
	},

	part_two: function(input)
	{
		var face = 0;
		var position = { x: 0, y: 0 };
		var visited = new Set();
		var route = AoC_2016_01.load(input);
		for (var i = 0; i < route.length; i++)
		{
			var x = route[i];
			face = (face + x.direction) & 3;
			for (var j = 0; j < x.steps; j++)
			{
				position = AoC_2016_01.update(position, face);
				if (visited.has(AoC_2016_01.toString(position)))
					return AoC_2016_01.distance(position);

				visited.add(AoC_2016_01.toString(position));
			}
		}
	}
}

add_solution(1, 2016, AoC_2016_01);
