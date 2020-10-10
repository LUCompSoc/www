# compsoc-www

https://compsoc.lancs.ac.uk

The Lancaster University Computer Science Society website frontend.

Make sure to join our [Discord][discord] server!

[discord]: https://discord.gg/compsoc


## ✨ Contributing

Want to contribute? Start by creating an [issue][repo-issues] (or read any existing ones) so that we can discuss your ideas. We use the GitHub issue tracker to monitor bugs and suggestions for new features.

### Pull Request Process

1. **Fork** the repo on GitHub
2. **Clone** the project to your own machine
3. **Install** the system/project dependencies
4. **Commit** your changes to your own branch
5. **Push** your work back up to your fork
6. Submit a **Pull request** so that we can review your changes

See the setup and development guidance below.

[repo-issues]: https://github.com/lucompsoc/compsoc-www/issues


## 🛠 Project setup

### System Dependencies

- [Git][git]

You don't need to learn to use the command line version of Git straight away, but it's good to know how it works!

- [Node.js v12][node] - JavaScript runtime
- [yarn][yarn] - node package manager
- [Docker Desktop][docker] (to run tests in the server environment)

_We use Docker containers so that we can test our code in an environment as close to production as possible. No more ["It works on my machine!"][womm]. You should run tests on your code before submitting a pull request._

**Need help to install these?** We can point you in the right direction in our [Discord][discord] server!

### Project Dependencies

- [Vue.js 2.x][vuejs] (v3 was recently released, but Vuetify hasn't been updated yet)
- [Vuetify][vuetify] - design framework

You will need the [Vue CLI][vue-cli] to build and run the website locally. This can be installed
using the following command:

```
➜ yarn global add @vue/cli
```

## 🏗 Development

Make sure to install the system and project dependencies above before getting started.

Next, clone your fork of the repository to your own machine and install the package dependencies.

```
➜ git clone https://github.com/<username>/www lucompsoc-www
➜ cd lucompsoc-www
➜ yarn (or yarn install if you want to be verbose)
```

Now you can check everything is working properly by starting the local development server:

```
➜ yarn serve
yarn run v1.22.5
$ vue-cli-service serve
 INFO  Starting development server...
 DONE  Compiled successfully in 6983ms

  App running at:
  - Local:   http://localhost:8080/ 
```

You should now be able to see the website if you open http://localhost:8080/ in your browser!

[git]: https://github.com/git-guides/install-git
[node]: https://nodejs.org
[yarn]: https://yarnpkg.com/getting-started
[docker]: https://docs.docker.com/get-docker
[womm]: https://dylanbeattie.net/2017/04/27/it-works-on-my-machine.html
[vuejs]: https://vuejs.org/v2/guide
[vuetify]: https://vuetifyjs.com
[vue-cli]: https://cli.vuejs.org/guide/installation.html


## 📖 License

TBD
