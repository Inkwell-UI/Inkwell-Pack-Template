# Inkwell pack template

A complete Inkwell node pack with one node, `hello/Hello@1` ("Hello, <name>!"). Copy it to start your own pack; the guide is `docs/packs.md` in Inkwell-Core-Pack.

```
manifest.json        pack id "hello", version, compatible tool range
nodes/Hello.json     the node definition (pins, fields, template path)
templates/Hello.as2  the AS2 the node generates
test/                node --test: templates agree with their nodes; Hello renders as expected
CHANGELOG.md         shown in the editor before install and update
.github/workflows/   validate and test on every push; a tag v<version> publishes pack.zip
```

Commands (Inkwell-Core-Pack and Inkwell-Spec checked out next to this folder; run `yarn build` in Inkwell-Spec once):

- `yarn install`
- `yarn validate`: Inkwell-Core-Pack's validator on this folder
- `yarn test`

Release: set `version` in `manifest.json`, add a `CHANGELOG.md` entry, push the tag `v<version>`. Users add the pack in the editor (Assets > Node packs > Add Pack) with `owner/repo`.
