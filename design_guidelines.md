# SyncUp Design Guidelines

## Design Approach
**Selected Approach:** Design System-based with Modern Productivity App Inspiration

**Key References:** Linear (clean hierarchy), Notion (card-based modules), Slack (real-time updates)

**Design Principles:**
- Functional clarity over decoration
- Information density with breathing room
- Status-driven design (availability indicators, task states)
- Fast visual scanning for busy students

## Core Design Elements

### Typography
- **Primary Font:** Inter or DM Sans via Google Fonts
- **Headings:** 
  - H1: 2.5rem (40px), semibold - Dashboard headers
  - H2: 1.875rem (30px), semibold - Module titles
  - H3: 1.25rem (20px), medium - Card headers, section titles
- **Body:** 0.875rem (14px), regular - Default UI text
- **Small:** 0.75rem (12px), medium - Labels, timestamps, metadata
- **Mono:** JetBrains Mono for room codes, task IDs

### Layout System
**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16
- Component padding: p-4 to p-6
- Section spacing: gap-6 to gap-8
- Card margins: m-4
- Container max-width: max-w-7xl for dashboard, max-w-4xl for content

**Grid Strategy:**
- Dashboard: 3-column grid on desktop (lg:grid-cols-3), 1-column mobile
- Study rooms list: 2-column on tablet (md:grid-cols-2)
- Teacher cards: 3-4 columns (lg:grid-cols-4)
- Task marketplace: Card grid with filters sidebar

### Component Library

**Navigation:**
- Top bar: Logo left, module switcher center, profile/notifications right (h-16)
- Mobile: Bottom tab bar with 4 tabs (Home, Study Hub, Teachers, Tasks)
- Breadcrumbs for nested navigation within modules

**Cards:**
- Study Room Cards: Border with status pill (Active/Scheduled), member count, subject tag
- Teacher Cards: Avatar, name, status badge (Free=green, In Class=orange, On Leave=gray), Request button
- Task Cards: Title, category tag, bid count, price range, deadline countdown

**Status Indicators:**
- Availability dots: 8px circle with pulse animation for "Free"
- Badge pills: px-3 py-1, rounded-full, uppercase text
- Progress bars: h-2, rounded-full for task completion

**Chat Interface:**
- Message bubbles: max-w-xs to max-w-md, rounded-2xl
- Sender's messages: right-aligned, blue background
- Others' messages: left-aligned, light grey background
- Timestamp: text-xs below bubbles

**Forms & Inputs:**
- Input fields: h-12, rounded-lg, border focus state
- Textareas: min-h-32 for task descriptions
- Buttons: h-10 to h-12, rounded-lg, semibold text
- Dropdowns: Custom styled with chevron icons

**Marketplace Specific:**
- Bid list: Vertical stack with user avatar, bid amount, rating stars
- Accept bid button: Prominent, green accent
- Task status flow: Visual stepper (Posted → Bidding → In Progress → Complete)

**Profile Page:**
- Stats grid: 2x2 on mobile, 4 columns desktop
- Rating display: Star icons + numeric score
- Activity feed: Timeline with icons for different action types

**Authentication:**
- Centered card layout: max-w-md
- Logo + tagline at top
- Social login buttons with provider icons
- Divider with "or" text
- Email input fields stacked

### Animations
**Minimal Motion:**
- Hover states: Scale 1.02 on cards
- Status changes: Fade transition (300ms)
- Page transitions: None - instant loading
- Loading states: Subtle spinner, no skeleton screens

## Images
**Hero Section:** Login/signup page includes abstract university campus illustration or geometric pattern background (not a photo) - serves as welcoming brand moment

**Avatars:** User profile pictures throughout (teachers, students in chat, bid listings)

**Empty States:** Simple illustrations for empty study rooms, no available teachers, no active tasks

**No other photographic images needed** - focus on functional UI with iconography from Heroicons

## Module-Specific Design

**Group Study Hub:**
- Split view: Room list (left 40%), active chat (right 60%)
- "Create Room" floating action button (bottom right)
- Subject filters as horizontal chip row

**Teacher's Cabin Tracker:**
- Grid of teacher cards with large status indicators
- Filter by department dropdown (top right)
- Request appointment modal: Calendar picker + time slots + message field

**SkillSwap Marketplace:**
- Three-column: Filters sidebar (20%), task cards (50%), active task detail (30%)
- "Post Task" button (top right, prominent)
- Bid interface: Modal with form (price, timeline, message)