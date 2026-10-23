/**
 * Utility helpers
 */

/**
 * Combine class names, filtering falsy values.
 * @param {...string} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format a slug into a readable label.
 * @param {string} slug
 * @returns {string}
 */
export function slugToLabel(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * Get status display info for an experience status string.
 * @param {string} status
 * @returns {{ label: string, className: string }}
 */
export function getStatusInfo(status) {
  switch (status) {
    case 'active':
      return { label: 'FULL-TIME / PRESENT', indicator: 'active' };
    case 'completed':
      return { label: 'COMPLETED', indicator: 'completed' };
    case 'contract':
      return { label: 'CONTRACT', indicator: 'contract' };
    default:
      return { label: status.toUpperCase(), indicator: 'default' };
  }
}

