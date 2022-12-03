AoC_2019_02 =
{
	IntcodeVM: class
	{
		static parse(input)
		{
			var memory = {};
			var code = input.split(',');
			for (var i = 0; i < input.length; i++)
				memory[i] = parseInt(code[i]);

			return memory;
		}

		constructor(memory)
		{
			this.ip = 0;
			this.memory = {};
			Object.assign(this.memory, memory);
		}

		patch(address, value)
		{
			this.memory[address] = value;
		}

		peek(address)
		{
			return this.memory[address];
		}

		fetch()
		{
			return this.memory[this.memory[this.ip++]];
		}

		store(v)
		{
			this.memory[this.memory[this.ip++]] = v;
		}

		run()
		{
			while (1)
			{
				switch (this.memory[this.ip++])
				{
					case 1: { this.store(this.fetch() + this.fetch()); break; }
					case 2: { this.store(this.fetch() * this.fetch()); break; }
					case 99: return;
					default: throw 'IntcodeVM unsupported opcode';
				}
			}
		}
	},

	part_one: function(input)
	{
		vm = new AoC_2019_02.IntcodeVM(AoC_2019_02.IntcodeVM.parse(input));
		vm.patch(1, 12);
		vm.patch(2, 2);
		vm.run();
		return vm.peek(0);
	},

	part_two: function(input)
	{
		var program = AoC_2019_02.IntcodeVM.parse(input);

		for (var noun = 0; noun <= 100; noun++)
			for (var verb = 0; verb <= 100; verb++)
			{
				var vm = new AoC_2019_02.IntcodeVM(program);
				vm.patch(1, noun);
				vm.patch(2, verb);
				vm.run();
				if (19690720 == vm.peek(0))
					return 100 * noun + verb;
			}
	}
}

add_solution(2, 2019, AoC_2019_02);
