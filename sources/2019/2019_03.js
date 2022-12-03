AoC_2019_03 =
{
	Wire: class
	{
		constructor(input)
		{
			this.points = {};
			this.path = [];
			input.split(',').forEach(s => { this.path.push({direction: s[0], distance: parseInt(s.substr(1))}); });
		}

		toString(x, y)
		{
			return x.toString() + "x" + y.toString();
		}

		twists_and_turns()
		{
			var x = 0, y = 0, step = 0;
			const turns = { 'R': [1, 0], 'U': [0, -1], 'L': [-1, 0], 'D': [0, 1] }
			this.path.forEach(item =>
			{
				for (var i = 0; i < item.distance; i++)
				{
					x += turns[item.direction][0];
					y += turns[item.direction][1];

					step++;
					this.points[this.toString(x, y)] = {x, y, step};
				}
			});
		}

		distance_to_closest(other)
		{
			var distance = 1e30;
			Object.entries(this.points).forEach(([key, value]) =>
			{
				if (key in other.points)
					distance = Math.min(distance, Math.abs(value.x) + Math.abs(value.y));
			});

			return distance;
		}

		fewest_steps(other)
		{
			var steps = 1e30;
			Object.entries(this.points).forEach(([key, value]) =>
			{
				if (key in other.points)
					steps = Math.min(steps, value.step + other.points[key].step);
			});

			return steps;
		}
	},

	both_parts: function(input)
	{
		var w1 = new AoC_2019_03.Wire(input[0]);
		var w2 = new AoC_2019_03.Wire(input[1]);
		w1.twists_and_turns();
		w2.twists_and_turns();
		return [w1.distance_to_closest(w2), w1.fewest_steps(w2)];
	}
}

add_solution(3, 2019, AoC_2019_03);
