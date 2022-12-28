module.exports = grammar({
	name: 'wtg',

	rules: {
		source_file: $ => repeat($._definition),

		_definition: $ => choice(
			$.vc_definition
			// TODO: other kinds of definitions
		),

		vc_definition: $ => seq(
			$.identifier,
			$.dash,
			$.identifier,
		),

		identifier: $ => /[a-zA-Z]+[ ]?[a-zA-Z]*/,

		dash: $ => /-+/
	}
});
