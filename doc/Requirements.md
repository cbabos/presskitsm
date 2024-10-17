# PresskitSM

The project target is to create a tool with somebody (aka. developer team / marketing)
can easily create an information source for the press to speed up work together.
The tool also aims to help the team in creating Social Media content and to use these
as extensions to the presskit content as well.

# MVP

## Basic content structure

The basic content should contain an informational page about the group itself (aka. devteam),
list of the projects (with possibility to have a detail view about them).

```json
[
    Content-Entry1: {
        name: string,
        ...
        children: [
            Content-Entry2: {
                name: string,
                ...
            }
        ]
    }
]
```

From layout perspective:

    Title

    | Image | Description
    In multiline

    Latest <ChildrenType>:
    - Latest x amount of children

    Latest news for this level

## Content types

- Page (can be a project, or the team itself)
- Child types
  - Award
    News (\* which eventually becomes SN posts as well on publish if requested)
    Child contents
    Media
    Contact information (Set<kind,value>)

* Future possibility
