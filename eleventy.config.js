import markdownIt from "markdown-it";
import footnote_plugin from "markdown-it-footnote";

export default function (eleventyConfig) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
    footnote: true,
	};

	eleventyConfig.setLibrary("md", markdownIt(options).use(footnote_plugin));

  eleventyConfig.addPassthroughCopy("main.css");
};
