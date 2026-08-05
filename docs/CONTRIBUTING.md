# Contributing to XWeather

Thank you for your interest in contributing to XWeather! We welcome bug fixes, new features, documentation updates, and performance optimizations.

This guide provides step-by-step instructions on setting up your local environment, adhering to code quality standards, and submitting pull requests.

---

## Table of Contents

- [Code of Conduct & Vision](#code-of-conduct--vision)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Setup](#local-setup)
  - [Environment Variables](#environment-variables)
- [Branching Strategy](#branching-strategy)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Code Quality & Validation](#code-quality--validation)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Reporting Issues & Feature Requests](#reporting-issues--feature-requests)
- [Project Documentation](#project-documentation)

---

## Code of Conduct & Vision

Before contributing, please review our project design vision and goals outlined in [`VISION.md`](VISION.md) and technical specifications in [`ARCHITECTURE.md`](ARCHITECTURE.md).

Contributions should align with XWeather's core principles:
- **Clean and understandable UI**: Simple, responsive, ad-free design.
- **Reliable state & cache management**: Fast performance with clear error handling.
- **High code quality**: Modern React 19 standards, ESLint compliance, and structured imports.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Git**
- An **OpenWeather API Key** (Free tier from [OpenWeather](https://openweathermap.org/api))

### Local Setup

1. **Fork & Clone the Repository**

   ```bash
   git clone https://github.com/mariano-riyan/Weather-App.git
   cd Weather-App
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the project root based on `.env.example` (or configure directly):

   ```env
   VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
   # Optional; defaults to https://api.openweathermap.org/data/2.5/
   VITE_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5/
   ```

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:5173`.

---

## Branching Strategy

We follow a **standard feature branch workflow**. All work should originate from an updated `main` branch.

- **`main`**: Production-ready branch.
- **Feature Branches**: Named according to the nature of the change:
  - `feature/description` (e.g., `feature/geolocation-lookup`)
  - `fix/description` (e.g., `fix/cache-expiration`)
  - `docs/description` (e.g., `docs/contributing-guide`)
  - `refactor/description` (e.g., `refactor/weather-hooks`)

### Creating a Branch

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

---

## Commit Message Guidelines

We enforce **Conventional Commits** to keep git history clear and structured.

### Commit Format

```text
<type>(<scope>): <short description>
```

- **Types**:
  - `feat`: A new feature
  - `fix`: A bug fix
  - `docs`: Documentation changes
  - `style`: Changes that do not affect the meaning of code (white-space, formatting, missing semi-colons, etc)
  - `refactor`: A code change that neither fixes a bug nor adds a feature
  - `perf`: A code change that improves performance
  - `test`: Adding missing tests or correcting existing tests
  - `chore`: Changes to the build process or auxiliary tools and libraries

- **Examples**:
  - `feat(search): implement browser geolocation search`
  - `fix(theme): prevent dark mode flicker on initial load`
  - `docs(readme): update deployment instructions`
  - `refactor(api): convert weather fetching to Async/Await`

---

## Code Quality & Validation

Both **`npm run lint`** and **`npm run build`** MUST pass without errors before submitting any Pull Request.

### Available Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Start Vite local development server |
| `npm run build` | Validate & generate production bundle in `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run lint` | Run ESLint across all files |

### Code Style Guidelines

- **Component Architecture**: Keep components functional, modular, and concise.
- **Subpath Import Aliases**: Use defined path aliases instead of relative paths where applicable:
  - `#components/*` -> `@/components/*`
  - `#lib/*` -> `@/lib/*`
  - `#hooks/*` -> `@/hooks/*`
- **Styling**: Use Tailwind CSS 4 utility classes alongside Shadcn UI primitives.
- **React Standards**: Avoid unused variables and ensure hooks adhere to React 19 standards.

---

## Submitting a Pull Request

1. **Perform Validation**:
   ```bash
   npm run lint
   npm run build
   ```
   Ensure 0 lint errors and a clean build output.

2. **Commit Your Changes**:
   ```bash
   git add .
   git commit -m "feat: detailed commit message"
   ```

3. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request**:
   - Navigate to the repository on GitHub and click **Compare & pull request**.
   - Fill out the template provided in [`.github/PULL_REQUEST_TEMPLATE.md`](../.github/PULL_REQUEST_TEMPLATE.md).
   - Link any relevant issues solved by your PR (e.g., `Closes #12`).

5. **Code Review**:
   - Maintainers will review your PR. Address any requested changes promptly.

---

## Reporting Issues & Feature Requests

### Reporting Bugs
Search existing issues first to avoid duplicates. If filing a new bug, include:
- A clear, descriptive title.
- Steps to reproduce the behavior.
- Expected vs. actual behavior.
- Browser and OS details.
- Relevant console logs or screenshots.

### Requesting Features
Suggest features by opening an issue with:
- Target problem statement.
- Proposed solution or user workflow.
- Additional context or design mockups.

---

## Project Documentation

For more in-depth knowledge about the system architecture and roadmap, refer to the docs:
- [`VISION.md`](VISION.md) - Product goals, principles, and roadmap.
- [`REQUIREMENTS.md`](REQUIREMENTS.md) - Delivered features, delivery status, and functional requirements.
- [`ARCHITECTURE.md`](ARCHITECTURE.md) - System topology, state ownership, request lifecycles, and environment setup.
