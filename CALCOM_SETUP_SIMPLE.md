# Where to Set Up Cal.com

**Important:** All Cal.com setup happens on **cal.com website**, NOT in your code. Your code just embeds it.

---

## 🎯 Step-by-Step: Where to Go

### 1. Go to Cal.com Website
👉 **Visit: https://cal.com**

- Click **"Sign Up"** or **"Get Started"**
- Create an account (use email or Google)
- **Choose a username** (e.g., `alexandra-nutri`)
  - ⚠️ **Write this down** - you'll need it later!

---

### 2. Connect Google Calendar

**Location:** Inside Cal.com dashboard

1. Click **"Settings"** (gear icon in sidebar)
2. Click **"Calendars"** (left menu)
3. Click **"+ Add Calendar"**
4. Select **"Google Calendar"**
5. Click **"Connect"** and authorize
6. Select your calendar from the dropdown
7. Enable **"Check for conflicts"**

**What this does:** Cal.com reads your Google Calendar to see when you're busy.

---

### 3. Connect Stripe (for payments)

**Location:** Inside Cal.com dashboard

1. Click **"Settings"** → **"Apps"** (left menu)
2. Find **"Stripe"** in the list
3. Click **"Connect"** or **"Install"**
4. Sign in to Stripe (or create account at stripe.com)
5. Authorize the connection

**What this does:** Enables payment collection before bookings confirm.

---

### 4. Create Event Types (THE MOST IMPORTANT STEP)

**Location:** Inside Cal.com dashboard

1. Click **"Event Types"** in the sidebar (or **"Availability"** → **"Event Types"**)
2. Click **"+ New Event Type"** button

**For EACH of these 6 event types, you need to create one:**

#### Event Type 1: First Visit
- **Title:** `First Visit`
- **URL Slug:** `first-visit` ⚠️ **CRITICAL - Must be exactly this**
- **Duration:** `60 minutes`
- **Price:** Enable "Requires payment" → Set to `79.00 EUR`
- **Description:** "Complete evaluation and creation of a personalized plan."
- Click **"Save"**

#### Event Type 2: Second Visit
- **Title:** `Second Visit`
- **URL Slug:** `second-visit` ⚠️ **CRITICAL**
- **Duration:** `45 minutes`
- **Price:** `59.00 EUR`
- **Description:** "Follow-up on the plan and necessary adjustments."
- Click **"Save"**

#### Event Type 3: Follow-up
- **Title:** `Follow-up`
- **URL Slug:** `followup` ⚠️ **CRITICAL**
- **Duration:** `30 minutes`
- **Price:** `59.00 EUR`
- **Description:** "Follow-up visits to check your progress."
- Click **"Save"**

#### Event Type 4: Roots Package
- **Title:** `Roots of Change Package`
- **URL Slug:** `roots-package` ⚠️ **CRITICAL**
- **Duration:** `90 minutes` (or longest session)
- **Price:** `177.00 EUR`
- **Description:** "3 sessions (1st visit + 2nd visit + 1 follow-up visit)"
- Click **"Save"**

#### Event Type 5: Circle Package
- **Title:** `Circle of Trust Package`
- **URL Slug:** `circle-package` ⚠️ **CRITICAL**
- **Duration:** `90 minutes` (or longest session)
- **Price:** `275.00 EUR`
- **Description:** "5 sessions (1st visit + 2nd visit + 3 follow-up visits)"
- Click **"Save"**

#### Event Type 6: Nourish Package
- **Title:** `Nourish to Shine Package`
- **URL Slug:** `nourish-package` ⚠️ **CRITICAL**
- **Duration:** `90 minutes` (or longest session)
- **Price:** `422.00 EUR`
- **Description:** "8 sessions (1st visit + 2nd visit + 6 follow-up visits)"
- Click **"Save"**

---

### 5. Configure Working Hours (Optional but Recommended)

**Location:** Cal.com → Settings → Availability

- Set your available hours (e.g., Monday-Friday 9:00-18:00)
- Set minimum notice (e.g., 24 hours)
- Set buffer time between appointments (e.g., 15 minutes)

---

### 6. Update Your Code (Only This Part is in Your Code)

Once you have your Cal.com username, update these 3 files:

**Files to edit:**
- `src/pages/booking.astro`
- `src/pages/en/booking.astro`
- `src/pages/es/booking.astro`

**Find this line:**
```astro
calLink="YOUR_CALCOM_USERNAME"
```

**Replace with your actual username:**
```astro
calLink="alexandra-nutri"  <!-- Use YOUR username here -->
```

---

## ✅ How to Verify It's Working

1. After creating event types, test on Cal.com:
   - Go to `cal.com/your-username/first-visit`
   - You should see the booking form for First Visit

2. Test in your website:
   - Run `npm run dev`
   - Go to `/pricing`
   - Click "Book" on "First Visit"
   - Should show Cal.com embed with only First Visit option

---

## 🆘 Common Issues

**"Event type not found"**
- Check the URL slug matches EXACTLY (case-sensitive, no spaces)
- Make sure event type is published/active

**"Payment not working"**
- Verify Stripe is connected in Settings → Apps
- Check "Requires payment" is enabled on the event type

**"Calendar not syncing"**
- Verify Google Calendar connection in Settings → Calendars
- Check calendar permissions

---

## 📝 Quick Checklist

- [ ] Created Cal.com account
- [ ] Chose username (write it down!)
- [ ] Connected Google Calendar
- [ ] Connected Stripe
- [ ] Created 6 event types with correct slugs:
  - [ ] `first-visit`
  - [ ] `second-visit`
  - [ ] `followup`
  - [ ] `roots-package`
  - [ ] `circle-package`
  - [ ] `nourish-package`
- [ ] Updated code with your Cal.com username
- [ ] Tested booking flow

---

**Remember:** Everything except step 6 happens on cal.com website. Your code just displays the booking widget!
