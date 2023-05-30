var toml = require("toml");
var yaml = require("js-yaml"); // Add this line to import the YAML parser
var S = require("string");
const e = require("express");

var CONTENT_PATHS = ["content/en/posts", "content/de/posts", "content/en/references", "content/de/references"]; // Example array of paths

function extractLanguage(path) {
    var langRegex = /content\/(en|de)\//;
    var match = path.match(langRegex);
    if (match) {
        return match[1];
    } else {
        return null;
    }
}

module.exports = function(grunt) {

    grunt.registerTask("lunr-index", function() {

        grunt.log.writeln("Build pages index");

        var indexPages = function() {
            var pagesIndex = [];
            CONTENT_PATHS.forEach(function(path) {
                grunt.file.recurse(path, function(abspath, rootdir, subdir, filename) {
                    grunt.verbose.writeln("Parse file:", abspath);
                    pagesIndex.push(processFile(abspath, filename, path));
                });
            });

            return pagesIndex;
        };

        var processFile = function(abspath, filename, contentPath) {
            var pageIndex;

            if (S(filename).endsWith(".html")) {
                pageIndex = processHTMLFile(abspath, filename, contentPath);
            } else {
                pageIndex = processMDFile(abspath, filename, contentPath);
            }

            return pageIndex;
        };

        var processHTMLFile = function(abspath, filename, contentPath) {
            var content = grunt.file.read(abspath);
            var pageName = S(filename).chompRight(".html").s;
            var href = S(abspath).chompLeft(contentPath).s;
            return {
                title: pageName,
                href: href,
                content: S(content).trim().stripTags().stripPunctuation().s
            };
        };

        var processMDFile = function(abspath, filename, contentPath) {
            var org_content = grunt.file.read(abspath);
            var content = org_content;
            var href = S(abspath).chompLeft(contentPath).chompRight(".md").s;
            var pageIndex;
            if (href.includes("_index")) {
                return;
            }
            // First separate the Front Matter from the content and parse it
            content = org_content.split("+++");
            var frontMatter;
            if (content?.[1] !== undefined) { // Check if the front matter is in TOML format
                try {
                    frontMatter = toml.parse(content[1].trim());
                } catch (e) {
                    console.error(e.message);
                }
            } else {
                content = org_content.split("---");
                if (content?.[1] !== undefined) { // Check if the front matter is in YAML format
                    try {
                        frontMatter = yaml.load(content[1].trim());
                    } catch (e) {
                        console.error(e.message);
                    }
                }
            }

            var href = contentPath + S(abspath).chompLeft(contentPath).chompRight(".md").s; // Include contentPath in href
            console.log(href)
            // href for index.md files stops at the folder name
            if (filename === "index.md") {
                href = S(abspath).chompLeft(contentPath).chompRight(filename).s;
            }

            pageIndex = {
                title: frontMatter?.title,
                href: href,
                overview: frontMatter?.overview || "",
                lang: extractLanguage(href),
                summary: frontMatter?.summary,
                content: S(content[2]).trim().stripTags().stripPunctuation().s || "",
            };

            return pageIndex;
        };

        grunt.file.write("static/js/lunr/PagesIndex.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built");
    });
};
