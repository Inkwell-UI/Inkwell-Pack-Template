// Checks every template against its node definition and pins what it renders to. Uses the Core Pack's test renderer
// (inputs become IN_<pin>); the real renderer is the editor's codegen.
import test from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadPack, checkTemplate, render } from "@inkwell-ui/core-pack/scripts/lib.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { manifest, nodes } = loadPack(root);
const byKind = Object.fromEntries(nodes.map((n) => [n.def.kind, n]));

test("every template agrees with its pins and fields", () => {
  for (const n of nodes) if (n.text) assert.deepEqual(checkTemplate(n.def, n.text, manifest.id), [], n.id);
});

test("Hello renders one AS2 expression", () => {
  const n = byKind.Hello;
  assert.equal(render(n.def, n.text).trimEnd(), '// [n1] hello/Hello@1\n"Hello, " + String(IN_name) + "!"');
});
