![travis-ci](https://travis-ci.org/kvnlnt/oem.svg?branch=master)

# OEM

> If you want something done right...

OEM is a small web component framework that allows you to write and maintain your own custom web component library. It puts a premium on component-to-component communication and native web technologies and aims to be frustration free by eliminating the reliance on tools such as transpilers, file watchers, bundlers, superset javascript, etc. Should you reach a point where you decide you no longer want/need OEM, you are left with well abstracted code that is semantic, native, and has little to do with OEM itself.

*Note*: OEM web components are not to be confused with [W3C Web Components](https://www.w3.org/TR/components-intro/).

 <br/>

## Table of contents
1. [Features](#features)
1. [Quick Start](#quickstart)
1. [Features](#features)
1. [How It Works](#how-it-works)
1. [Development](#development)
1. [Demos](#pattern-library)
1. [Deployment](#deployment)
1. [Testing](#testing)
1. [Tutorials](#tutorials)


<br/>

<a name="features"></a>
## Features

*include...* |
 :------ |
&#x2713; Conventional and Frustration Free Workflow |
&#x2713; 100% Native Javascript, Html and Css |
&#x2713; Unit and Integration Test Coverage |
&#x2713; Dependency and Conflict Free  |
&#x2713; Autogenerated Pattern Library |
&#x2713; Atomic Design and Composable Architecture |

<br/>

<a name="quickstart"></a>
## Quickstart

    # Install
    git clone [repo]

    # Setup
    cd ./[project-root]
    npm install

    # Check out the command line tool
    node oem

    # Create a component
    node oem create my-first-component

    # Develop the component
    node oem dev my-first-component

<br/>

<a name="how-it-works"></a>
## How It Works
Oem has two parts: 

1. The Command Line API
1. Client Side API. 

The Command Line API is a workflow tool based off of the `./oem.js` file and can be run by typing `node oem` from the project's root. Each of it's commands run's a corresponding script(s) from the `./cli` folder. 

The Client Side API is your component library which is deployed as a single javascript artifact. All javascript is compiled down to a single .js protected under the `oem` namespace. With the final .js artifact included on a page, you can open up a developer console and type `oem` to see any/all functionality. This means all component lifecycle management and core functionality for oem can be controlled, debugged and programmatically integrated with via that namespace.
See `./src/development/core/module.js` for full api implementation details.

<br/>

<a name="development"></a>
## Development
The development lifecycle centers around the `node oem dev [component]` command line tool. It launches an express server that loads all files in the component's development configuration registered to the `./oem.json` file. Javascript files are automatically included as script tags to the head of the document. This enables the tried and true classic dev process of writing code and checking your work in the browser – old school. It's fast, simple, reliable and will work for the forseeable future.

[How to develop components](./docs/development.md)

<br/>

<a name="pattern-library"></a>
## Demo (Pattern Library)
A pattern library can be genereted with the `demo` command. Example: `node oem demo custom-site.com` will produce the following folder and launch the demo.

    ./deploy/custom-size.com/

[How to create a demo](./docs/demo.md)

<br/>

<a name="deployment"></a>
## Deployment
Each deployment entry is a configuration used by the `deploy` utility. Each configuration lists the components to be bundled with the deployment. All files will be compiled and minified in order and written to the `deploy` folder in a folder named after the entry. Example: `node oem deploy custom-site.com` will run the "custom-site.com" deployment and produce the following:

    ./deploy/custom-site.com/
        |-- oem.js
        |-- oem.min.js
        |-- oem.tests.js
        |-- oem.css
        |-- oem.min.css
        |-- oem.tests.css

[How to deploy](./docs/deployment.md)

<br/>

<a name="testing"></a>
## Testing
When you run a deployment, you can see your test results output to the autogenerated index file. Running `node oem test` simply runs the deployment argument provided and tests it via webdriver. Webdriver loads that index file, reads it and spits out the results. This does two things.

1. Consolidates unit and integration testing
1. Allows for CI server integration.

The testing "framework" provided by Oem is incredibly simple. Follow the link below to learn out to write tests.

[How to test](./docs/testing.md)

<br/>

<a name="Tutorials"></a>
## Tutorials
- [How to develop components](./docs/development.md)
- [How to debug components](./docs/debugging.md)
- [How to create a demo](./docs/demo.md)
- [How to deploy](./docs/deployment.md)
- [How to test components](./docs/testing.md)