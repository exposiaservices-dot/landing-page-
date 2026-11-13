/**
 * Contact channels for Exposia — single source of truth, wired into the
 * header CTA, the final CTA and the footer. Update these when the real
 * channels are confirmed.
 */
export const CONTACT = {
  email: 'hello@exposia.services',
  /** Used for the «اطلب عرض سعر» mailto CTA. */
  subject: 'طلب عرض سعر — مشروع تصميم عرض تقديمي',
}

export function contactMailto(): string {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(CONTACT.subject)}`
}
