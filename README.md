# AoC.js
[Advent of Code](http://adventofcode.com) solutions in JavaScript ES6


## Features
- Advent of Code 2015-2021 solutions in pure JavaScript ES6 (no external scripts needed)
- ready to run in your favorite web browser, just click [here](https://rawcdn.githack.com/tbielak/AoC_js/master/AoC.html)


## Solutions matrix
AoC.js | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022
------: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--:
Day 1 | [⭐](sources/2015/2015_01.js) | [⭐](sources/2016/2016_01.js) | [⭐](sources/2017/2017_01.js) | [⭐](sources/2018/2018_01.js) | [⭐](sources/2019/2019_01.js) | [⭐](sources/2020/2020_01.js) | [⭐](sources/2021/2021_01.js) |
Day 2 | [⭐](sources/2015/2015_02.js) | [⭐](sources/2016/2016_02.js) | [⭐](sources/2017/2017_02.js) | [⭐](sources/2018/2018_02.js) | [⭐](sources/2019/2019_02.js) | [⭐](sources/2020/2020_02.js) | [⭐](sources/2021/2021_02.js) |
Day 3 | [⭐](sources/2015/2015_03.js) | [⭐](sources/2016/2016_03.js) | [⭐](sources/2017/2017_03.js) | [⭐](sources/2018/2018_03.js) | [⭐](sources/2019/2019_03.js) | [⭐](sources/2020/2020_03.js) | [⭐](sources/2021/2021_03.js) |

Legend: <br />
⭐ = solution available (both parts) <br />

Current status: **42** AoC stars covered


## Repository contents

Repository contains the following directories:

| Directory/File         | Contents                                                                                                                                                                                                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [input](input)         | My input of all puzzles.                                                                                                                                                                                                                                                            |
| [sources](sources)     | Source files. Each subdirectory of *sources* is one year of AoC puzzles. Review and enjoy.                                                                                                                                                                                                                                                     |
| [AoC.html](AoC.html)   | AoC puzzles execution engine embedded on HTML page. The only external resource needed is Source Code Pro font from *googleapis.com*. No other external css files required, no external scripts.
| [solutions.js](solutions.js) | File includes AoC puzzles years (see inside and follow deeper).


## Running puzzles

Choose Year and Day (or ALL) and press *RUN* button. Check *execution speed testing* checkbox to run each puzzle several times for at least ten seconds to measure execution speed more precisely. Note that timer resolution differs in various browsers, e.g. Firefox seems to measure with an accuracy of 1 ms, Brave with accuracy of 0.1 ms.

If you plan to run *AoC.html* from your local hard drive, expect CORS policy violation due to attempt to load input files from local disk drive. In such case you'll only see an appropriate exception in browser console. And if you really want to run *AoC.html* locally you may disable cross domain web security in settings of your browser, but you should do it for test only, 'cause it has **security implications**. If you are not really sure that you want it, please do not do it!


## Debugging puzzles

I don't know how to do it :) I just use notepad to edit source files and occasionally print some intermediate results on browser console using *console.log()* method, no debugging needed.


## Other programming languages

JavaScript isn't your favorite programming language? See some Advent of Code puzzle solutions in [C#](https://github.com/tbielak/AoC_cs), [Python](https://github.com/tbielak/AoC_py) and much more in [C++](https://github.com/tbielak/AoC_cpp)!


## Why JavaScript?

For many years (decades now?) I have occasionally used HTML to prepare simple and lightweight websites. Of course, these pages require scripts to handle buttons, checkboxes, etc. And since the introduction of classes, sets and maps into JavaScript (since ES6 version), the language has become useful, for example, for solving AoC tasks. So, why not? :) Note to myself: try replacing `var` with `let` where applicable, learn something!
