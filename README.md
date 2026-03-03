### Painting Inspections

Painting inspection management

### Goals

- Provide a **single Painting Inspection form** for painting project leads and inspection scope checks
- Capture **contact details**, **phone**, **email**, **dates**, and **responsible user**
- Track **value** (currency) and **tags**
- Workflow status: **New** → **In Progress** → **Done**
- Attach a **primary image** for the inspection
- Organize details by **Details**, **INTERIOR**, and **EXTERIOR** tabs
- **Description** child table for multi-line description items
- Free-form **notes** for documenting findings

### What's included

- `Painting Inspection` DocType with contact, dates, value, status, image, and tabbed layout (Details, INTERIOR, EXTERIOR)
- `Painting Inspection Description` child table for description lines
- Desk shortcut at `/app/painting-inspection`

### Installation

You can install this app using the [bench](https://github.com/frappe/bench) CLI:

```bash
cd $PATH_TO_YOUR_BENCH
bench get-app $URL_OF_THIS_REPO --branch develop
bench install-app painting_inspections
```

### Contributing

This app uses `pre-commit` for code formatting and linting. Please [install pre-commit](https://pre-commit.com/#installation) and enable it for this repository:

```bash
cd apps/painting_inspections
pre-commit install
```

Pre-commit is configured to use the following tools for checking and formatting your code:

- ruff
- eslint
- prettier
- pyupgrade

### CI

This app can use GitHub Actions for CI. The following workflows are configured:

- CI: Installs this app and runs unit tests on every push to `develop` branch.
- Linters: Runs [Frappe Semgrep Rules](https://github.com/frappe/semgrep-rules) and [pip-audit](https://pypi.org/project/pip-audit/) on every pull request.


### License

mit
