import type { Experience } from "../types/experience";

/**
 * Calculate total years and months of experience from experience list
 */
export function calculateTotalExperience(experiences: Experience[]): {
  years: number;
  months: number;
  formatted: string;
} {
  if (!experiences || experiences.length === 0) {
    return { years: 0, months: 0, formatted: "0 years" };
  }

  // Sort by start date to get earliest job
  const sorted = [...experiences].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  const firstJob = new Date(sorted[0].startDate);
  const now = new Date();

  // Calculate total months
  const totalMonths = (now.getFullYear() - firstJob.getFullYear()) * 12 + (now.getMonth() - firstJob.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let formatted = "";
  if (years === 0) {
    formatted = `${months} months`;
  } else if (months === 0) {
    formatted = `${years} years`;
  } else {
    formatted = `${years} years ${months} months`;
  }

  return { years, months, formatted };
}

/**
 * Calculate duration of a single experience
 */
export function calculateExperienceDuration(startDate: string, endDate: string | null | undefined, current: boolean): string {
  const start = new Date(startDate);
  const end = current || !endDate ? new Date() : new Date(endDate);

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) return `${months} months`;
  if (months === 0) return `${years} years`;
  return `${years} years ${months} months`;
}

/**
 * Format date period (e.g., "Jan 2022 - Present")
 */
export function formatPeriod(startDate: string, endDate: string | null | undefined, current: boolean): string {
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const start = formatDate(startDate);
  const end = current ? "Present" : endDate ? formatDate(endDate) : "Present";

  return `${start} - ${end}`;
}

/**
 * Count total projects
 */
export function countProjects(projects: any[]): number {
  return projects?.length || 0;
}

/**
 * Get all unique technologies from experiences
 */
export function getAllTechnologies(experiences: Experience[]): string[] {
  const allTechs = experiences.flatMap((exp) => exp.technologies.map((t) => (typeof t === "string" ? t : t.name)));

  return [...new Set(allTechs)].sort();
}
