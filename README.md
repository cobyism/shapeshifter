# Shapeshifter

Shapeshifter is an in-browser responsive testing environment.
Here’s [a demonstration](http://cobyism.com/shapeshifter).

![Shapeshifter](http://cl.ly/MatS/shapeshifter-demo.gif)

## Why use Shapeshifter?

Responsive design for the web requires thought throughout **the entire** design
process, however current tools for testing the responsiveness of designs and
interfaces, such as bookmarklets and single-purpose sites, have many inherent
drawbacks that make them practical to use only as an afterthought, or at best
as a sparodic spot-check.

What we need—and what Shapeshifter aims to be—is a tool that allows you to
pay constant attention to your design and how it behaves in various common
viewport sizes. My goal is for Shapeshifter to become an in-browser testing
environment that stays with you throughout all stages of your projects.

## How do I use this thing?

This project is still in its early stages, so the actual usage is far from
polished. Ideally you should be able to use this in a number of ways.

### Drag and drop

Anyone should be able to use Shapeshifter with only the files in the repository.

1. Download this project [as a Zip folder](https://github.com/cobyism/shapeshifter/archive/gh-pages.zip)
2. Extract the contents, and place in the root directory of your project.
3. Ensure the extracted subfolder is named `shapeshifter`.
4. Add `/shapeshifter` to the end of your project’s URL.

### Add as a Git submodule

If you use [Git](http://git-scm.com/) to manage your project, you can add
shapeshifter as a submodule to easily pull in Shapeshifter updates.

1. At your command prompt, `cd` into your project’s root directory.
2. Next, run the command: `git submodule add https://github.com/cobyism/shapeshifter.git shapeshifter`
3. Then commit the result: `git commit -m "Add Shapeshifter as a submodule"`
4. Add `/shapeshifter` to the end of your project’s URL.

### Future options

In the future, I’d like to experiment with other ways to allow people to use
Shapeshifter too, such as:

- Creating a Rubygem (or similar) that allows people to quickly run Shapeshifter
as a development server with the current directory as the web root. This would
be similar to the `server` command that [Yeoman](http://yeoman.io) has.
- Releasing plugins specifically designed for various development stacks, such
as [Ruby on Rails](http://rubyonrails.org), [Yeoman](http://yeoman.io), and
so forth.

## Help wanted!

I’d love to receive contributions from anyone who cares to contribute. It
doesn’t matter how big or small your contribution is—whether it’s fixing a typo,
adding a feature, or proposing an overhaul to the whole project—I’ll gladly
take a look at your change, and merge it in (within reason).

## License

See [LICENSE](https://github.com/cobyism/shapeshifter/blob/gh-pages/LICENSE).
