AoC_2022_03 =
{
	priority: function(c)
	{
		return (c >= 'a') ? c.charCodeAt(0) - 96 : c.charCodeAt(0) - 38;
	},

	part_one: function(input)
	{
		return input.reduce((sum, s) => sum + (
			AoC_2022_03.priority([...s.substring(0, s.length / 2)].filter(v => [...s.substring(s.length / 2)].includes(v))[0])), 0);
	},

	part_two: function(input)
	{
		let sum = 0;
		let i = 0;
		while (i < input.length)
		{
			let contents = {};
			for (let j = 0; j < 3; j++)
			{
				let s = input[i++];
				for (let k = 0; k < s.length; k++)
					contents[s[k]] = (s[k] in contents ? contents[s[k]] : 0) | (1 << j);
			}

			for (let x in contents)
			{
				if (contents[x] == 7)
					sum += AoC_2022_03.priority(x);
			}
		}

		return sum;
	}
}

add_solution(3, 2022, AoC_2022_03);
