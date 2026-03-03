### Painting Inspections

A small Frappe app for capturing **interior and exterior painting inspections** in a single structured form.

### Features

- **One Inspection form** per job, with contact details, dates, value, tags, status and a main image.
- **Details tab** for general information and a `Painting Inspection Description` child table for multi‑line notes.
- **INTERIOR tab** with three fixed "Area" blocks (left/right layout) including:
  - Area name (Kitchen, Living, Bedrooms, Full Repaint, etc.).
  - Walls / Ceiling / Doors / Windows / Skert / Floor checkboxes.
  - Substrate selects for each item (e.g. Plasterboard, Fibre Cement, Timber, Aluminum, Concrete, Tiles…).
  - Width / Length / Height and free‑text notes.
  - Six interior image uploads arranged in a 3×2 grid.
- **EXTERIOR tab** with fields for:
  - House type (Single Store, Double Story, 3 Level House, Elevated, etc.).
  - Wall substrate and side areas (Side 1–6 / m²).
  - Door and window substrates, soffit, fascia, gutters.
  - Deck floor, balustrade, posts, ceilings, raked ceilings and porch areas.
  - Fence type and length, plus multiple notes fields and an overall exterior notes field.

### Installation

Install using the [bench](https://github.com/frappe/bench) CLI:

```bash
cd /path/to/your/frappe-bench
bench get-app painting_inspections https://github.com/Eros-Aphrodite/erpnext_painting_app.git
bench --site your-site-name install-app painting_inspections
```

After installing, go to the desk and open:

- **Painting Inspection**: `/app/painting-inspection`

### Development

- App name: `painting_inspections`
- Built for the Frappe/ERPNext ecosystem.

To work on the app:

```bash
cd /home/jupiter/frappe/frappe-bench/apps/painting_inspections
```

### License

MIT
