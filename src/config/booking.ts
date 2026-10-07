/**
 * Online booking runs on Google Calendar appointment schedules with Stripe
 * payments enabled inside Google Calendar — no backend required.
 *
 * Only the initial assessment is published on the site. The personalized plan,
 * follow-up and bundle schedules are shared privately with patients (email /
 * WhatsApp) so new patients can't book the wrong session. See BOOKING_SETUP.md.
 *
 * Paste the `src` of the iframe from:
 * Google Calendar → appointment schedule → Share → Website embed → Inline booking page
 * e.g. https://calendar.google.com/calendar/appointments/schedules/AcZssZ...?gv=true
 *
 * While empty, the booking page shows a contact fallback instead of the calendar.
 */
export const INITIAL_ASSESSMENT_SCHEDULE_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1zvyrpZg8K4-kY_FTPN3Qr6O3LYyAUu5-GR16VDq3J8KqjWjsotQ007jVOWfjd3tBygM0Iy3tC?gv=true';

export const INITIAL_ASSESSMENT_PRICE = '75 €';
