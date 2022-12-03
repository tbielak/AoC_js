AoC_2016_02 =
{
	press: function(keymap, digit)
	{
		var curr = '5';
		const directions = "UDLR";
		for (var i = 0; i < digit.length; i++)
			curr = keymap[directions.indexOf(digit[i])][curr.charCodeAt(0) - 48];

		return curr > '9' ? String.fromCharCode(curr.charCodeAt(0) + 7) : curr;
	},	

	enter_code: function(keymap, input)
	{
		return input.reduce((code, digit) => code + AoC_2016_02.press(keymap, digit), "");
	},

	part_one: function(input)
	{
		return AoC_2016_02.enter_code([ "0123123456", "0456789789", "0112445778", "0233566899" ], input);
	},

	part_two: function(input)
	{
		return AoC_2016_02.enter_code([ "0121452349678;", "036785:;<9:=<=", "0122355678::;=", "0134467899;<<=" ], input);
	}
}

add_solution(2, 2016, AoC_2016_02);
