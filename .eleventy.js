const fs = require("fs");
const htmlmin = require("html-minifier-terser");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Add navigation plugin
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  if (process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addTransform("htmlmin", htmlminTransform);
  }

  // Passthrough
  eleventyConfig.addPassthroughCopy({ "src/static": "." });

  // Watch targets
  eleventyConfig.addWatchTarget("./src/styles/");

  // Collections
  eleventyConfig.addCollection("compositions", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/composition/*.md");
  });
  eleventyConfig.addCollection("spectacles", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/spectacles/*.md");
  });
  eleventyConfig.addCollection("concerts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/concerts/*.md");
  });

  var pathPrefix = "";
  if (process.env.GITHUB_REPOSITORY) {
    pathPrefix = process.env.GITHUB_REPOSITORY.split("/")[1];
  }

  return {
    dir: {
      input: "src",
    },
    pathPrefix,
  };
};

function htmlminTransform(content, outputPath) {
  if (outputPath.endsWith(".html")) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    });
    return minified;
  }
  return content;
}
