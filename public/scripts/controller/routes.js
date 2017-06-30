'use strict';

page('/', app.homeController.init);
page('/about', app.aboutController.init)
page('/github', app.githubController.init);
page();
