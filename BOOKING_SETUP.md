# Online booking setup (Google Calendar + Stripe)

Bookings and payments run entirely inside **Google Calendar appointment schedules**, using Calendar's built-in Stripe integration. The website only embeds the public schedule. There's no backend, no webhooks and no API keys in the code.

## 1. Requirements

- A Google account with **paid booking** support: Google Workspace Individual, Business Standard or higher. Free Gmail accounts can't require payment.
- A **Stripe** account (stripe.com) with payouts enabled for Spain.

## 2. Create the appointment schedules

Go to Google Calendar → **Create → Appointment schedule**, and create one schedule per row:

| Schedule | Duration | Price | Published on the website? |
| --- | --- | --- | --- |
| Valoración inicial | 80 min | 75 € | **Yes**, this is the only public one |
| Diseño + entrega del plan personalizado | 60 min | 70 € | No. Send it by email or WhatsApp after the first visit |
| Seguimiento | 45 min | 65 € | No. Send it privately |
| Seguimiento (bono) | 45 min | none | No. Send it only to patients who bought the bono |

Settings for each schedule:

- **Booked appointment settings → Payment → Require payment** (paid schedules only): connect Stripe the first time, then set the price in EUR. Leave payment **off** for *Seguimiento (bono)*, since the patient has already paid through the bono.
- **Booking window → Minimum notice**: 24 hours, so nobody books a slot at the last minute. This only limits new bookings; it does not stop cancellations.
- **Location**: Google Meet for online visits, or the clinic address.
- **Description**: paste the policy. "El importe no es reembolsable. Puedes cambiar la cita avisando con al menos 24 horas de antelación."

## 3. Bono 4 seguimientos (240 €)

Appointment schedules can't sell bundles, so the bono is sold with a Stripe **Payment Link**:

1. Stripe Dashboard → **Payment Links → New**. Product: "Bono 4 seguimientos", 240 €.
2. Send that link privately to the patient.
3. Once they've paid, send them the **Seguimiento (bono)** schedule link. It has no payment, so check each booking against your list of bono holders.

## 4. Connect the website

1. Open the **Valoración inicial** schedule → **Share** → **Website embed** → **Inline booking page**.
2. Copy the URL inside `src="…"`. It looks like `https://calendar.google.com/calendar/appointments/schedules/AcZssZ…?gv=true`.
3. Paste it into `src/config/booking.ts`:

   ```ts
   export const INITIAL_ASSESSMENT_SCHEDULE_URL = 'https://calendar.google.com/calendar/appointments/schedules/…';
   ```

4. Rebuild and deploy.

While that value is empty, `/booking` shows a "contact me" fallback instead of the calendar.

## 5. Cancellations

Google lets patients cancel or reschedule from their confirmation email at any time; it can't enforce the 24-hour rule. The policy is enforced through payments instead: refunds are never automatic, so a late cancellation or no-show simply isn't refunded. If someone reschedules within 24 hours, cancel the new booking and let them know.

## 6. Before going live

- Make one real booking at a temporary price of 1 € and check the full flow: slot → Stripe checkout → confirmation email → event in your calendar. Then refund it from Stripe and set the real price again.
- Refunds are never automatic. Google leaves them to you, and you issue them from the Stripe dashboard.
