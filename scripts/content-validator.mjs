import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateProjectRecords(projects) {
  if (!Array.isArray(projects) || projects.length === 0) throw new Error("Project content must be a non-empty array");
  const slugs = new Set();
  for (const project of projects) {
    if (!slugPattern.test(project.slug ?? "")) throw new Error(`Invalid project slug: ${project.slug}`);
    if (slugs.has(project.slug)) throw new Error(`Duplicate project slug: ${project.slug}`);
    slugs.add(project.slug);
    if (!project.name || !project.summary || !Array.isArray(project.sections) || project.sections.length === 0) throw new Error(`Incomplete project content: ${project.slug}`);
  }
  for (const project of projects) {
    for (const related of project.relatedProjectSlugs ?? []) {
      if (!slugs.has(related)) throw new Error(`Broken project relationship: ${project.slug} -> ${related}`);
    }
  }
  return projects;
}

export function loadProjects(fileUrl = new URL("../content/projects.ts", import.meta.url)) {
  const source = fs.readFileSync(fileUrl, "utf8");
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const sandboxModule = { exports: {} };
  vm.runInNewContext(output, { module: sandboxModule, exports: sandboxModule.exports }, { filename: fileUrl.pathname });
  return sandboxModule.exports.projects;
}
