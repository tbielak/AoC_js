AoC_2024_01 =
{
	part_one: function(input)
	{
		let left = [], right = [];
		input.forEach(line =>
		{
			left.push(parseInt(line.substr(0, 5)));
			right.push(parseInt(line.substr(8, 13)));
		});

		left.sort();
		right.sort()

		let total_distance = 0;
		for (let i = 0; i < left.length; i++)
			total_distance += Math.abs(left[i] - right[i]);

		return total_distance;
	},

	part_two: function(input)
	{
		let left = new Set();
		let right = new Map();

		input.forEach(line =>
		{
			left.add(parseInt(line.substr(0, 5)));

			const i = parseInt(line.substr(8, 13));
			if (!right.has(i))
				right.set(i, 1);
			else
				right.set(i, right.get(i) + 1);
		});

		let similarity_score = 0;
		left.forEach (function(i)
		{
			if (right.has(i))
				similarity_score += right.get(i) * i;
		});

		return similarity_score;
	}
}

add_solution(1, 2024, AoC_2024_01);
