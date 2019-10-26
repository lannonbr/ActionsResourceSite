# Changelog pull action

A GitHub Action that scrapes posts from https://github.blog/changelog and sends them up to a [Fauana](https://fauna.com/) database.

It will match between the posts scraped and the ones already in Fauna and will only push new ones.

The action will also create a `newFaunaPostsAdded` output variable so you can let other steps do things only if that value is not 0.

# Usage

```yml
- uses: ./.github/actions/changelog-pull-action
  id: changelog_pull
  env:
    FAUNADB_TOKEN: ${{ secrets.FAUNADB_TOKEN }}
```

A [security key](https://docs.fauna.com/fauna/current/security/keys) for Fauna is needed here. A key with the `server` role is required so you can add entries into the database.
