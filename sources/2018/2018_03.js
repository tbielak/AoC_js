AoC_2018_03 =
{
	load: function(input)
	{
		var fabrics = [];
		input.forEach(line => {
			const parts = line.split(' ');
			const point = parts[2].replace(":", "").split(',');
			const size = parts[3].split('x');
			fabrics.push({
				id : parseInt(parts[0].replace("#", "")),
				p: {x: parseInt(point[0]), y: parseInt(point[1])},
				width: parseInt(size[0]), height: parseInt(size[1])});
		});

		return fabrics;
	},

	toString: function(x, y)
	{
		return x.toString() + "x" + y.toString();
	},

	part_one: function(input)
	{
		var points = {};
		AoC_2018_03.load(input).forEach(f => {
			for (var x = f.p.x; x < f.p.x + f.width; x++)
				for (var y = f.p.y; y < f.p.y + f.height; y++)
				{
					const s = AoC_2018_03.toString(x, y);
					points[s] = (s in points ? points[s] : 0) + 1;
				}
		});

		return Object.values(points).reduce((sum, v) => sum + (v > 1 ? 1 : 0), 0);
	},

	part_two: function(input)
	{
		var ids = new Set();
		var points = {};
		AoC_2018_03.load(input).forEach(f => {
			ids.add(f.id);
			for (var x = f.p.x; x < f.p.x + f.width; x++)
				for (var y = f.p.y; y < f.p.y + f.height; y++)
				{
					const s = AoC_2018_03.toString(x, y);					
					if (!(s in points))
						points[s] = new Set();

					points[s].add(f.id);
				}
		});

		Object.values(points).forEach(v => {
			if (v.size > 1)
				v.forEach(id => {ids.delete(id);});
		});

		return ids.values().next().value;
	}
}

add_solution(3, 2018, AoC_2018_03);
