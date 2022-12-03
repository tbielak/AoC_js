AoC_2018_02 =
{
	part_one: function(input)
	{
		var two = 0;
		var three = 0;
		input.forEach(s =>
		{
			charcount = {};
			for (var i = 0; i < s.length; i++)
				charcount[s[i]] = (s[i] in charcount ? charcount[s[i]] : 0) + 1;

			two += Object.values(charcount).includes(2) ? 1 : 0;
			three += Object.values(charcount).includes(3) ? 1 : 0;
		});

		return two * three;
	},

	diff: function(s1, s2)
	{
		var x = "";		
		for (var i = 0; i < s1.length; i++)
			if (s1[i] == s2[i])
				x += s1[i];
	
		return x;
	},

	part_two: function(input)
	{
		for (var i = 0; i < input.length; i++)
			for (var j = i + 1; j < input.length; j++)
			{		
				var x = AoC_2018_02.diff(input[i], input[j]);
				if (x.length == input[i].length - 1)
					return x;
			}
	}
}

add_solution(2, 2018, AoC_2018_02);
