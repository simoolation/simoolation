# LANDKIT #

Landkit Theme by Good Themes.

### Documentation ###

Development documentation is available at `src/docs/index.html` (or `dist/docs/index.html` once you've compiled), or visit http://landkit.goodthemes.co/docs/index.html.

### Getting Started ###

The steps to compile and get started with development are covered in detail in documentation mentioned above, but the summary is:
in powershell navigate to same dir as gulpfile.js and then run:
- npm install -g gulp-cli
- npm install -g gulp
- npm install

### Design Files ###

We provide an "unofficial" Landkit Figma file for you to play with. Learn more about it at http://landkit.goodthemes.co/docs/figma.html and view/download it here: https://www.figma.com/file/17Z7uFvKhSLYMcUA0TMjBu/LandKit-Distributed?node-id=2016%3A15971.

### Support ###

Good Themes is happy to provide support for issues. Shoot us an email at support@goodthemes.co and we'll get you squared away.

### Gulp commands
gulp --color --gulpfile gulpfile.js build
gulp --color --gulpfile gulpfile.js browsersync
gulp --color --gulpfile gulpfile.js default

dockerize landing page

1. docker build -t landing C:\Projects\ZenZoyX\src\0Browser
2. docker run -itd -p 80:80 -p 443:443 --restart always --name 0browser-landing-page landing
3. docker exec -it 0browser-landing-page /bin/bash
4. view logs: docker logs -f 0browser-landing-page