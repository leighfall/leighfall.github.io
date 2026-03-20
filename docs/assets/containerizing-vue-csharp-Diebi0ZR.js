const e=`# I Had Never Containerized Anything. Here's How It Went.\r
\r
<span class="muted">*It's a cold, dark day and I'm staring containers straight in their faces with the slight look of fear, but an even bigger look of excitement*</span>\r
\r
At the time of writing this, I am an applications engineer with about 4 years of professional experience.\r
\r
At the end of this I will be a JACK OF ALL TRADES!\r
\r
I won't.\r
\r
But I will have a better handle of containers.\r
\r
I've been wanting to learn containers for a while now. You see the words float around, like 'Docker' and 'Kubernetes'. But seeing the words, and actually understanding them, are two different kinds of things, and I lived in the first thing. \r
\r
However, a client I'm working for now needs an application (that the company I work for built) to be containerized as part of a migration effort off of the Azure Stack. And the containerization piece? My responsibility.\r
\r
The application? Vue and TypeScript UI, C# .NET Framework middleware, and SQL database.\r
\r
## .NET Framework -> .NET Core\r
\r
One of the first technical challenges I ran into was that the containers we'd be moving to would be exclusively Linux. The problem with that? .NET Framework does not work on Linux containers. And we were sitting on 4.7.2. So, it was time for a facelift! We were overdue anyways. But guys... do not let your tech debt accumulate like that...\r
\r
Luckily, I wasn't responsible for the upgrade!!! I had a peer swe who was well versed in our middleware layer that was able to rescue me from this technical piece!\r
\r
It added regression testing on top of the migration, but again the investment is worth it. Giving the app's middleware a facelift and getting it on a current version would allow us to avoid future compatibility issues (as long as we continue to take care of the tech debt).\r
\r
## Hello, Podman! And also, Hello, Claude!\r
\r
After a meeting with a few infrastructure and devops engineers, I was told that Podman is an excellent, open-source product to use to mock out all the necessary files and that, if I get it all right (whatever that means), it should be a one-to-one transfer to our final containers.\r
\r
Given the limited time and non-existent experience, it was time to enlist Claude to help me figure out what I didn't know. Its recommendation: Start with your typical 'Hello World!' introductory program on Podman!\r
\r
Started with downloading Podman and the CLI of course! Then, it was time to understand the files that make it run. First up: the Containerfile, which gets the image and does all the building of things. I learned how to stub a quick C# project and mimic a frontend existing, then wrote up a Containerfile and (after fighting with vpn and proxies and certificates of course) got everything to run! Right after that was the compose.yaml file and faking out a database in order to simulate the actual fight I'm walking into. Implemented that, and everything ran smoothly.\r
\r
More importantly, Claude walked me through each of the files and understanding how they connected. Essential for someone who is learning. Make sure to ask it to slow down and explain line-by-line, what's happening so that you understand your code in the event that something goes wrong and AI leads you in troubleshooting circles (I speak from experience).\r
\r
With the fundamentals validated, it was time to point this at the real thing.\r
\r
## The Real Containerfile\r
\r
Writing the real one is way more painful! I'm using Claude Chat. It isn't plugged into the code base. So I'm having to figure out what it needs in order for it to tell me what I need. And then you add the world of proxies and VPNs on top and... well.. lots of debugging.\r
\r
Also, I type this as I've gotten through most of the debugging and the build is taking *forever* on the \`COPY . .\`. By the way, I make that comment to Claude, and it goes 'Oh next time include a \`.dockerignore\` and add all the old files (we still have old .NET Framework files we are keeping until we know .NET Core is good) and the \`node_modules\` and all the things that are super unnecessary to copy... \r
\r
So... be warned. Ask Claude about what should be ignored and get that file baked in ahead of time.\r
\r
In the meantime, seems like I have a solid amount of time to keep writing this while I verify what I have works.\r
\r
Give Claude your file structure and the stack, and it can create a pretty great Containerfile for your application. There's a few incorrect assumptions it made such as assuming that we used \`dist\` instead of having a custom folder that the build outputs to. It also assumed incorrectly where we placed the build. It was just going off of Vite's defaults, but if you've configured anything custom in \`vite.config\` or \`vite.config.dev\` then you'll want to make sure Claude knows that.\r
\r
### Containerfile.local\r
\r
Speaking of dev, Claude and I decided to start with a \`Containerfile.local\` to get the pattern down locally on a dev machine. This came about because, when running the initial \`Containerfile\`, when it hit steps like \`yarn install\`, it had issues with the container sitting behind the VPN. Some troubleshooting there, getting the right \`yarn config\` items and placing them in the \`Containerfile.local\` got us past that. But those same configs will probably not be used in the environment builds, because the CI runners on GitLab *probably* have their own configurations that will allow direct access to the internet. So it will get a clean \`Containerfile\` Will figure out once \`COPY . .\` is done!\r
\r
### Containerfile\r
\r
Very easy by Claude once the .local is done actually. The .local version was tedious due to the VPN and proxy issues, but the true \`Containerfile\` is simple. I learned that I don't need a .dev, .qual, etc. because that's literally the whole point of containers: To have one \`Containerfile\` and inject non-sensitive config via ConfigMaps and sensitive values like keys and passwords via Secrets. Some things Claude will want to know what your build scripts are. We had a \`yarn build-container-dev\` for development and qual, and a \`yarn build\` for staging and prod. Claude will add those to the \`Containerfile\`, and then the environment configs will determine which will be called.\r
\r
That's all she wrote for this section! Easy peasy.\r
\r
<span class="muted">To be continued... </span>\r
`;export{e as default};
