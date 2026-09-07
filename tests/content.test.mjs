import test from "node:test";
import assert from "node:assert/strict";
import { loadProjects, validateProjectRecords } from "../scripts/content-validator.mjs";

test("committed project content is valid", () => {
  assert.equal(validateProjectRecords(loadProjects()).length, 3);
});

test("duplicate slugs are rejected", () => {
  const base = { slug: "valid-slug", name: "Project", summary: "Summary", sections: [{ title: "Overview", paragraphs: ["Text"] }] };
  assert.throws(() => validateProjectRecords([base, { ...base }]), /Duplicate project slug/);
});

test("invalid slugs are rejected", () => {
  const project = { slug: "Invalid Slug", name: "Project", summary: "Summary", sections: [{ title: "Overview", paragraphs: ["Text"] }] };
  assert.throws(() => validateProjectRecords([project]), /Invalid project slug/);
});

test("broken project relationships are rejected", () => {
  const project = { slug: "source", name: "Project", summary: "Summary", sections: [{ title: "Overview", paragraphs: ["Text"] }], relatedProjectSlugs: ["missing"] };
  assert.throws(() => validateProjectRecords([project]), /Broken project relationship/);
});
