import { loadProjects, validateProjectRecords } from "./content-validator.mjs";

const projects = validateProjectRecords(loadProjects());
console.log(`Validated ${projects.length} project records.`);
