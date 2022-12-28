# tree-sitter-wtg

Experimental grammer for the WardleyToGo grammar

## HowTo Neovim

```lua
local parser_config = require "nvim-treesitter.parsers".get_parser_configs()
parser_config.wtg = {
	install_info = {
		url = "https://github.com/owulveryck/tree-sitter-wtg", -- local path or git repo
		files = {"src/parser.c"},
		-- optional entries:
		branch = "main", -- default branch in case of git repo if different from master
		generate_requires_npm = false, -- if stand-alone parser without npm dependencies
		requires_generate_from_grammar = true, -- if folder contains pre-generated src/parser.c
	},
	filetype = "wtg", -- if filetype does not match the parser name
}
```
