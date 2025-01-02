AoC_2023_01 =
{
	digit: function(s, words)
	{
		let d = 0;
		for (; d < s.length; d++)
			if (s.charAt(d) >= '0' && s.charAt(d) <= '9')
				break;

		if (words != null)
			for (let i = 0; i < d; i++)
				for (let j = 0; j < words.length; j++)
					if (s.substring(i, i + words[j].length) == words[j])
						return j + 1;

		return parseInt(s.charAt(d));
	},

	sum: function(input, fwd, rev)
	{
		return input.reduce((sum, s) => sum
			+ AoC_2023_01.digit(s, fwd) * 10
			+ AoC_2023_01.digit(s.split("").reverse().join(""), rev), 0);
	},

	part_one: function(input)
	{
		return AoC_2023_01.sum(input);
	},

	part_two: function(input)
	{
		return AoC_2023_01.sum(input,
			["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
			["eno", "owt", "eerht", "ruof", "evif", "xis", "neves", "thgie", "enin"]);
	}
}

add_solution(1, 2023, AoC_2023_01);
