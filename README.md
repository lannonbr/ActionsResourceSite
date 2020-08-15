# GARS (GitHub Actions Resource Site)

A Toast site for documentation, tips, and other info about GitHub Actions

# Setup

1. Clone this repo
1. Install dependencies: `yarn install`
1. Build the site: `yarn develop`
1. Open the site: `yarn serve`

Note: The changelog page sources it's content from FaunaDB, but you don't need to setup Fauna to work with this repo. If you don't set a `FAUNADB_TOKEN` environment variable, The changelog page will just be empty but you still can work with the rest of the site. In a future update I will make it so if you want to make changes to the changelog page you can have some mock data to play around with.

# Updating content

The majority of the pages are just MDX files located in the `docs/` folder. Any page which has an asterisk (`*`) next to it and is grey'd out on the sidebar is a stubbed page where I wish for content to be there but it just hasn't been written yet.

If a page is unstubbed, be sure to remove the stub in the yaml file for the stub located in the `src/data/sidebars/` directory.
