AoC_2021_03 =
{
	part_one: function(input)
	{
		var gamma_bin = "", epsilon_bin = "";
		for (var i = 0; i < input[0].length; i++)
		{
			const zeros = input.reduce((sum, x) => sum + (x[i] == '0' ? 1 : 0), 0);
			const ones = input.length - zeros;
			gamma_bin += zeros <= ones ? '1' : '0';
			epsilon_bin += zeros > ones ? '1' : '0';
		}

		const gamma_rate = parseInt(gamma_bin, 2);
		const epsilon_rate = parseInt(epsilon_bin, 2);
		return gamma_rate * epsilon_rate;
	},

	find_rating: function(x, xor_mask)
	{
		var consider = new Array(x.length).fill(true);
		while (true)
		{
			for (var i = 0; i < x[0].length; i++)
			{
				var zeros = 0, ones = 0;
				for (var j = 0; j < x.length; j++)
				{
					if (consider[j])
					{
						if (x[j][i] == '1')
							ones++;
						else
							zeros++;
					}
				}

				const keep = ((ones >= zeros ? 1 : 0) ^ xor_mask) + 48;
				for (var j = 0; j < x.length; j++)
					if (consider[j] && x[j].charCodeAt(i) != keep)
						consider[j] = false;

				if (consider.reduce((sum, x) => sum + (x ? 1 : 0), 0) == 1)
					for (var j = 0; j < x.length; j++)
						if (consider[j])
							return parseInt(x[j], 2);
			}
		}
	},

	part_two: function(input)
	{
		const oxygen_rate = AoC_2021_03.find_rating(input, 0);
		const co2_rate = AoC_2021_03.find_rating(input, 1);
		return oxygen_rate * co2_rate;
	}
}

add_solution(3, 2021, AoC_2021_03);
