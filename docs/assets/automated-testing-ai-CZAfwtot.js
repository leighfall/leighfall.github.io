const e=`# Automated Testing with AI

Ah! Automated testing! For some orgs, a welcomed confidence boost. For others, burdensome maintenance, long runtimes, flaky results, resource gobblers. Some view it as a living, breathing feature of their application while others view it as an afterthought.

With the introduction of AI into the tech world, it is possible that the many perceived pains of adding and maintaining automated testing can be reduced by huge fractions, both leading to developer satisfaction and a healthy codebase!

...okay I sound like a sales person on one of those infomercials.

But in all seriousness: adoption of automated testing in low-maturity organizations can be a lot easier with AI. I was tasked with taking a small project that is already in-flight and adding automated testing to it using Claude. For us, we are scratching the surface of automated testing. Likewise too with AI, so this was meant to be as much research and development as it was to deliver a reliable suite to the customer when handing off the project.

As an engineer who has always been passionate about automated testing, has read *The DevOps Playbook* (mostly), did an internship with a company with high-maturity in automated testing, and knows the philosophies around it, this was my first true time getting acquainted with testing suites and how to implement them. And on a project I've never worked on, no less! With Claude!! Which I hadn't used very much until starting this.

What I discovered next was delightful...

## Where to Start? How to Start? The Scaffolding and Test #1

When you have 8 weeks to deliver on a test suite of about 30 end-to-end tests, 20 integration tests, on an app you have never seen, with a team you never work with, the challenge can seem a bit... daunting...

Turns out, Claude can make getting up to speed and knowing where to start a smooth process!

The app was already an in-flight app. Based on all the dogma I've read and heard, I knew I was starting with end-to-end tests. Generally, if it is a fresh app, and you are following the 'Testing Pyramid' methodology, you start with building the base: Unit Tests. But with an app already out there, it's going to get the most benefit from end-to-end tests first, then integration tests, then the unit test.

![Testing Pyramid](/images/testing-pyramid.png)

When I entered the codebase, there was already some loose Claude documentation on what the test plan should be for E2E tests and two mocked out tests with Playwright as the chosen tooling: \`1-auth-and-home.spec.ts\` and \`2-navigation.ts\`

Sticking with Playwright was an easy choice. It's a mature tool and I had had limited experience with peer-reviewing its implementation into another project by another developer. An \`npm install\` and \`npx install playwright\`, along with Playwright's extension for VS Code/Cursor, got me on the right footing.

### Writing Test #1

Instead of looking at what was already there, I figured I'd jump in with 2-create-job.spec.ts. While working through this test, I would also start settling on file architecture which, believe it or not, seems to be a stressful decisions for me and I will change file structure a couple more times.

Decided to have Claude just scaffold out the test, run it to see if it passed, and start from there. Ran into issue #1 pretty quickly: creating unique test data. Which led to the creation of a \`helpers.ts\` file that would hold reusable functions. Immediately ran into issue #2: cleaning up test data. Had each of the tests cleanup their own test data. I will learn this lesson near the end of the suite, but invest early in solid test data seeding infrastructure with Playwright's API functions rather than having each test create data through the UI.

While working through this test, this is where I determined that an \`e2e-best-practices.md\` file, pointed to by \`CLAUDE.md\` was necessary to track standard decisions early. I started making decisions about how to generate data-testids, when to use those over other, potentially slower or more brittle selectors, and using \`toBeVisible()\` and similar functions over \`waitForTimeout()\` (used by Claude first, but flagged by Playwright as only to be used in debugging and not production tests).

Claude does well on generating data-testids on the components you need them on. I had a bit of a learning curve on how to get them on the right elements with Material UI, but once that was figured out, that convention was also noted in the best practices file.

Got the basics of test #1 out the way and working, helper file, and docs done and committed!

<span class="muted">To be continued...</span>
`;export{e as default};
