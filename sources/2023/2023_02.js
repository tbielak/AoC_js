AoC_2023_02 =
{
	find: function(s, pattern)
	{
		let pos = s.indexOf(pattern);
		if (pos == -1)
			return 0;

		pos--;
		do
		{
			pos--;
		} while (pos > 0 && s.charAt(pos) >= '0' && s.charAt(pos) <= '9');

		return parseInt(s.substring(pos));
	},


	decode: function(line)
	{
		let cubes = [];
		[...line.split(";")].forEach(s => cubes.push({
			r: AoC_2023_02.find(s, "red"),
			g: AoC_2023_02.find(s, "green"),
			b: AoC_2023_02.find(s, "blue")
		}));
		return cubes;
	},

	load: function(input)
	{
		let games = new Map();
		input.forEach(line =>
		{
			let pos = line.indexOf(":");
			let id = parseInt(line.substring(5, pos));
			games.set(id, AoC_2023_02.decode(line.substring(pos + 1)));
		});

		return games;
	},

	part_one: function(input)
	{
		let sum = 0;
		AoC_2023_02.load(input).forEach(function(gm, id)
		{
			let ok = true;
			gm.forEach(function(c) {
				if (c.r > 12 || c.g > 13 || c.b > 14)
					ok = false;
			});

			if (ok)
				sum += id;
		});

		return sum;
	},

	part_two: function(input)
	{
		let sum = 0;
		AoC_2023_02.load(input).forEach(function(gm, id)
		{
			let r = 0, g = 0, b = 0;
			gm.forEach(function(c) {
				r = Math.max(r, c.r);
				g = Math.max(g, c.g);
				b = Math.max(b, c.b);
			});

			sum += r * g * b;
		});

		return sum;
	}
}

add_solution(2, 2023, AoC_2023_02);
