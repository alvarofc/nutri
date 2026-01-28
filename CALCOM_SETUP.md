# Cal.com Setup Guide

Follow these steps to complete your booking system integration.

## Step 1: Create Cal.com Account

1. Go to [cal.com](https://cal.com) and sign up for an account
2. Choose a username (e.g., `alexandra-nutri` or `alexandra-nutritionist`)
   - This will be your booking URL: `cal.com/your-username`
   - **Important:** Note this username - you'll need it for the code

## Step 2: Connect Google Calendar

1. In Cal.com, go to **Settings** → **Calendars**
2. Click **Add Calendar** → **Google Calendar**
3. Authorize Cal.com to access your Google Calendar
4. Select which calendar to check for availability (your main calendar)
5. Select which calendar to add bookings to (usually the same one)
6. Enable **"Check for conflicts"** to prevent double-booking

## Step 3: Connect Stripe

1. In Cal.com, go to **Settings** → **Apps** → **Stripe**
2. Click **Connect Stripe**
3. Sign in to your Stripe account (or create one at [stripe.com](https://stripe.com))
4. Authorize Cal.com to access your Stripe account
5. Stripe will handle all payment processing automatically

## Step 4: Create Event Types

You need to create **6 event types** with these exact slugs. The slug is set in the event URL field.

### Individual Sessions

#### 1. First Visit
- **Name:** "First Visit" / "Primera Visita"
- **Slug:** `first-visit` ⚠️ **Must match exactly**
- **Duration:** 60 minutes
- **Price:** €79.00
- **Description:** "Complete evaluation and creation of a personalized plan."

#### 2. Second Visit
- **Name:** "Second Visit" / "Segunda Visita"
- **Slug:** `second-visit` ⚠️ **Must match exactly**
- **Duration:** 45 minutes
- **Price:** €59.00
- **Description:** "Follow-up on the plan and necessary adjustments."

#### 3. Follow-up
- **Name:** "Follow-up" / "Seguimiento"
- **Slug:** `followup` ⚠️ **Must match exactly**
- **Duration:** 30 minutes
- **Price:** €59.00
- **Description:** "Follow-up visits to check your progress."

### Packages

#### 4. Roots Package
- **Name:** "Roots of Change Package" / "Bono Raíces de Cambio"
- **Slug:** `roots-package` ⚠️ **Must match exactly**
- **Duration:** N/A (or set to longest session duration)
- **Price:** €177.00
- **Description:** "3 sessions (1st visit + 2nd visit + 1 follow-up visit)"

#### 5. Circle Package
- **Name:** "Circle of Trust Package" / "Bono Círculo de Confianza"
- **Slug:** `circle-package` ⚠️ **Must match exactly**
- **Duration:** N/A (or set to longest session duration)
- **Price:** €275.00
- **Description:** "5 sessions (1st visit + 2nd visit + 3 follow-up visits)"

#### 6. Nourish Package
- **Name:** "Nourish to Shine Package" / "Bono Nutrir para Brillar"
- **Slug:** `nourish-package` ⚠️ **Must match exactly**
- **Duration:** N/A (or set to longest session duration)
- **Price:** €422.00
- **Description:** "8 sessions (1st visit + 2nd visit + 6 follow-up visits)"

### How to Create Each Event Type:

1. Go to **Event Types** in Cal.com sidebar
2. Click **+ New Event Type**
3. Fill in:
   - **Title:** The name (e.g., "First Visit")
   - **URL Slug:** ⚠️ **Critical** - Use the exact slug from above (e.g., `first-visit`)
   - **Duration:** Set the duration
   - **Description:** Add the description
4. Scroll to **Price** section:
   - Enable **"Requires payment"**
   - Set the price (e.g., 79.00 EUR)
   - Select Stripe as payment method
5. Configure availability:
   - Set your working hours (e.g., Mon-Fri 9am-6pm)
   - Set buffer time between appointments if needed
   - Set minimum notice (e.g., 24 hours)
6. Click **Save**

## Step 5: Update Your Code

Once you have your Cal.com username, update these files:

### Files to Update:

1. **`src/pages/booking.astro`** (line 35)
2. **`src/pages/en/booking.astro`** (line 37)
3. **`src/pages/es/booking.astro`** (line 37)

Replace `YOUR_CALCOM_USERNAME` with your actual Cal.com username:

```astro
<CalEmbed 
  calLink="your-actual-username"
  eventType={eventType}
  locale="es"
  brandColor="#000000"
/>
```

## Step 6: Test the Integration

1. Start your dev server: `npm run dev`
2. Visit `/pricing` page
3. Click "Book" on any pricing option
4. You should see the Cal.com embed showing only that specific event type
5. Try booking a test appointment (use Stripe test mode)
6. Verify the event appears in your Google Calendar

## Troubleshooting

### Event type not showing?
- Double-check the slug matches exactly (case-sensitive, no spaces)
- Make sure the event type is published/active in Cal.com
- Check browser console for errors

### Payment not working?
- Verify Stripe is connected in Cal.com Settings → Apps
- Make sure "Requires payment" is enabled for each event type
- Check Stripe dashboard for test/live mode

### Calendar sync issues?
- Verify Google Calendar connection in Cal.com Settings → Calendars
- Check that the correct calendar is selected for availability and bookings
- Ensure calendar sharing permissions are correct

## Next Steps After Setup

- Configure email notifications in Cal.com (Settings → Notifications)
- Set up reminder emails (e.g., 24 hours before appointment)
- Customize confirmation emails with your branding
- Test the full booking flow end-to-end
