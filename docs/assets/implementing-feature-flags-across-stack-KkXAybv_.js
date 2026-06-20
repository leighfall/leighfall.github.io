const e=`Shipping an application that I didn't have access to was giving me heartburn. So I decided to create a lightweight feature flag tool.

## The Problem

The team that I work on recently shipped a Vue 3, C#, and SQL application to a network that we do not have access to as engineers. We have a system admin that does the deployments, DBAs that handle the scripts, and stakeholders that test and monitor the application. But the engineers, the QA, the PM, and the BA have limited or no access to easily see what is and is not successful. I mean, could you imagine sending your application off into the nether, not easily being able to see the devtools when an error is thrown?!

We have two environments on the network: stage and prod. Well, our last deployment got promoted to both environments at the same time with no stakeholders to look at it. And then there was a bug (I will find out later that the bug was unrelated to the recent release). After a week of internal panic, I decided that I need more control than I have on the network. And thus comes feature flags.

I'll admit, I haven't had any experience with using feature flags up until this point. I relatively knew what they were, and sometimes we'd have background ways of keeping features off, like setting a bit to 0 in the database. But a real feature flags system? No experience. But we needed it because we needed to decouple our releases from the deployments so that deployments could happen whenever it was convenient for our system admin and our DBAs to handle them, and also to give the stakeholders fine-tuned control over exactly what they were releasing and when they were releasing it.

## Designing the Data Layer

Ah, I get to do some real work in the database!!

My knowledge base is deep in the frontend and knowledgeable in the middleware layers (C#, Node.js). But I'm scared of the database!! Not really. I just hadn't had time to learn. I recently started getting comfortable making small edits to stored procedures and fixing bugs related to our .NET Framework to .NET Core upgrade, but otherwise nothing large. So it was time!

Our feature flags are powered by one table that holds the flags, some metadata like when it was created, modified, and by whom. Whether it is enabled or not, and a description and work item IDs. The description and work item IDs would allow everyone to fully understand what that specific flag was tied to, and the IDs would generate links to our Azure DevOps board's work item that is tracking it. Perfect transparency and understanding.

Along with the table came the create/update, read, and delete sprocs. Our previous system patterns lent themselves to being \`upsert\` sprocs, so I decided to follow that pattern and combine our create and update actions into one.

## The API Strategy

I decided to stick to one \`GET\` sproc and split the API calls for both the overall application and the administration page. In the 'network' section of the devtools, API calls reveal what information is being transferred. For the extra metadata, that call is happening on the admin page, which is under lock-and-key. The app-wide call only tracking the flag's name and \`IsEnabled\` prevents extra property info from being leaked and obtained.

I decided to split it in our services layer. One function would return the full model, the other the abbreviated model with the name of the flag and whether it was enabled or not.

At the API boundary layer now lives 3 calls: 2 \`GET\` calls, and a \`PUT\`  call for changing whether it is enabled.

But what about \`DELETE\`? I actually did not implement an API call for \`DELETE\` because I do not plan to have the app make that call. I drafted up the sproc so that developers had a consistent way to hard-delete the flags when ready, but only engineers should have explicit access to do that. Deleting flags is dangerous if the application still expects them to exist, so we need to make habits out of checking our codebase first and deleting references, and then we can run the sproc through SSMS at the end.

## The UI

Ah, my most favorite layer! This was both the easiest and the most difficult. Creating an administrative page for controlling the flags was the simple part. The hard part was deciding when the application should call for the feature flags and deciding how version drift should be handled.

Using Vue and TypeScript, I plumbed up the navigation to the new administration page and created a simple layout with the flag name, toggle on or off, description, and a link to the work item (created using a function that appended the ID to the end of the base URL). Toggling automatically triggered the save, making changes quick and easy. Also created all the service calls for getting the flag data for the administration page and the save call for changing whether they are enabled or not.

Now for the hard part. First was deciding how often the flags should be called and at what parts of the app. We do not use a state management system like Pinia, but rather we have written our own using \`provide/inject\` composables. I figured going this route for the feature flags made the most sense at the beginning, because I'd want to store the flags for the user as they move through the site, right?

Well... then I started wrestling with what happens when flags are turned on mid-session. Because in the database, those changes would be instant. In the API layer, it would be when the call was made. But in the frontend, storing the flags meant that the user might not get the updates in the UI in a way they would elsewhere in the stack, potentially leading to errors in the app.

Then I considered making the call on every route change. Well... \`router.ts\` is a beast, and sometimes there were multiple route changes in one user navigation, firing off that API call regularly.

THEN I considered doing a comparison in a modal on flags to determine if something had changed and, if so, display a modal that forces the user to refresh and pick up the changes. This suffered from some of the same issues as the API call being made multiple times on route change.

Finally, I landed on creating a simple singleton that would be called as the app loaded and accepted that there may be some friction when the flags are toggled. It's very similar to how the app works now. Users have to refresh to pick up new changes, and database changes being instant probably already trigger an error from time to time. The app has low user counts, and feature flags are not numerous, and this tradeoff made sense to reduce complexity and increase turnaround. We can always evaluate and iterate at a later date in an agile environment!

## What's Next

I may dig into version drift if it becomes a problem. But having a solution where, if a change causes a blocking breakage, it can just be turned off instead of having to rebuild a rollback release and waiting until the appropriate people are available and onsite heavily outweighs the occasional error a user may experience.

Now it's time to teach my fellow engineers how to use the feature flags appropriately and how, when it is time, to clean them up! A tool like this can quickly create tech debt and cause overhead, but it is my belief that the overhead is worth removing the possibility of a panic attack over something being broken that you cannot immediately shut down.`;export{e as default};
