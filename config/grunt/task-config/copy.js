// See https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
	artifact: {
		files: [
			{
				expand: true,
				cwd: ".",
				src: [
					"js/dist/**/*.js",
					"compat/**",
					"languages/**",
					"src/**",
					"vendor/**",
					"gpl-2.0.txt",
					"readme.txt",
					"duplicate-post.php",
					"duplicate-post.css",
					"duplicate-post-admin.php",
					"duplicate-post-common.php",
					"duplicate-post-options.php",
					"duplicate-post-options.css",
					"duplicate_post_admin_script.js",
					"!vendor/bin/**",
					"!vendor/composer/installed.json",
					"!vendor/composer/installers/**",
					"!**/composer.json",
					"!**/README.md",
				],
				dest: "<%= files.artifact %>",
			},
		],
	},
};