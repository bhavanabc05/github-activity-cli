# GitHub Activity CLI

A simple command-line application built with JavaScript and Node.js that fetches a GitHub user's recent public activity using the GitHub API.

The application displays activities such as pushing code, opening issues, creating pull requests, starring repositories, and more.

## Features

- Fetches recent public activity for any GitHub user.
- Displays different types of GitHub events.
- Handles missing command-line arguments.
- Handles unsuccessful API responses.
- Handles network errors.
- Notifies users when no recent public activity is found.

## Technologies Used

- **JavaScript**
- **Node.js**
- **GitHub REST API**
- **Fetch API**

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

Node.js 18 or later is recommended because it includes the built-in `fetch()` API.

## Installation

1. Clone this repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <your-project-folder>
   ```

## Usage

Run the application from your terminal by providing a GitHub username as a command-line argument:

```bash
node github-activity.js <username>
```

Replace `github-activity.js` with your JavaScript filename if it is different.

### Example

```bash
node github-activity.js torvalds
```

Example output:

```text
Pushed to torvalds/linux
Issue opened in torvalds/linux
Starred torvalds/some-repository
Created branch in torvalds/linux
```

*The output above is illustrative. Actual results depend on the user's recent public GitHub activity.*

## Supported Events

The application handles the following GitHub event types:

| Event Type | Description |
|---|---|
| `PushEvent` | Displays repository pushes. |
| `IssuesEvent` | Displays issue activities. |
| `PullRequestEvent` | Displays pull request activities. |
| `WatchEvent` | Displays repository stars. |
| `ForkEvent` | Displays repository forks. |
| `CreateEvent` | Displays repository, branch, or tag creation. |
| `DeleteEvent` | Displays branch or tag deletion. |
| `ReleaseEvent` | Displays release activities. |
| `MemberEvent` | Displays collaborator membership activities. |
| `PublicEvent` | Displays when a repository is made public. |
| Other events | Displays an event type and its repository. |

## Error Handling

The application handles common situations, including:

- **Missing username:** Prompts the user to provide a GitHub username.
- **Unsuccessful API response:** Displays an error message.
- **Network failure:** Asks the user to check their internet connection.
- **No recent public activity:** Displays a message when the activity list is empty.

## What I Learned

Building this project helped me practise:

- Working with command-line arguments using `process.argv`.
- Making API requests using `fetch()`.
- Understanding asynchronous JavaScript with `async` and `await`.
- Processing JSON responses.
- Using `switch` statements to handle different event types.
- Handling errors using `try...catch`.
- Working with template literals and URL encoding.

## Future Improvements

Possible enhancements include:

- Filtering activities by event type.
- Displaying timestamps for events.
- Showing the number of events for each activity type.
- Improving error messages based on HTTP status codes.

## Acknowledgements

This project uses the [GitHub REST API](https://docs.github.com/en/rest) to retrieve public user activity.

---

**Built as a beginner JavaScript project to practise working with APIs and building command-line applications.**
