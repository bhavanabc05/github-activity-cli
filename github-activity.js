let username = process.argv[2]
if(!username){
    console.log("Please provide a GitHub username as a command line argument.");
    process.exit(1);
}
const url = `https://api.github.com/users/${encodeURIComponent(username)}/events`;

async function getData(){
    try{
        let response=await fetch(url);
        if (!response.ok) {
            console.log(`GitHub API error: ${response.status}`);
            return;
        }

        let data=await response.json();

        if(data.length===0){
            console.log("No recent public activity found");
            return;
        }

        for(const events of data){
        switch(events.type){
            // Handle different event types

            // PushEvent: triggered when a user pushes to a repository
            case "PushEvent":
                console.log(`Pushed to ${events.repo.name}`)
                break;

            // IssuesEvent: triggered when an issue is opened, closed, or reopened
            case "IssuesEvent":
                console.log(`Issue ${events.payload.action} in ${events.repo.name}`)
                break;

            // PullRequestEvent: triggered when a pull request is opened, closed, or reopened
            case "PullRequestEvent":
                console.log(`Pull request ${events.payload.action} in ${events.repo.name}`)
                break;

            // WatchEvent: triggered when a user stars a repository
            case "WatchEvent":
                console.log(`Starred ${events.repo.name}`)
                break;

            // ForkEvent: triggered when a user forks a repository
            case "ForkEvent":
                console.log(`Forked ${events.repo.name}`)
                break;

            // CreateEvent: triggered when a user creates a repository, branch, or tag
            case "CreateEvent":
                console.log(`Created ${events.payload.ref_type} in ${events.repo.name}`)
                break;

            // DeleteEvent: triggered when a user deletes a repository, branch, or tag
            case "DeleteEvent":
                console.log(`Deleted ${events.payload.ref_type} in ${events.repo.name}`)
                break;

            // ReleaseEvent: triggered when a user creates a release
            case "ReleaseEvent":
                console.log(`Released ${events.payload.release?.tag_name ?? "a release"} in ${events.repo.name}`);
                break;

            // MemberEvent: triggered when a user is added or removed as a collaborator on a repository
            case "MemberEvent":
                console.log(`Member ${events.payload.action} in ${events.repo.name}`)
                break;

            // PublicEvent: triggered when a user makes a repository public
            case "PublicEvent":
                console.log(`Made ${events.repo.name} public`)
                break;

            // Other event types can be handled here
            default:
                console.log(`Other event: ${events.type} in ${events.repo.name}`)
        }
    }
    }catch(error){
        console.log("Unable to connect to GitHub. Check your internet connection");
    }  
}

getData();