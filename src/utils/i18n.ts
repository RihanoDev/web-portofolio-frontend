export function getLocalized(entity: any, field: string, locale: string, fallback: string = ''): string {
    if (!entity) return fallback;

    // Handle profile/manual data that might not have metadata field but has _en/_id suffixes or similar
    // For standard entities with metadata JSONB
    if (entity.metadata) {
        try {
            const metadata = typeof entity.metadata === 'string' ? JSON.parse(entity.metadata) : entity.metadata;
            if (metadata.translations?.[locale]?.[field]) {
                return metadata.translations[locale][field];
            }
        } catch (e) {
            // Ignore parse errors
        }
    }

    // Fallback to the main field
    return entity[field] || fallback;
}
