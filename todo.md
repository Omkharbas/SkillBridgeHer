# Full-Stack & File Storage Upgrade

- [x] Upgrade SkillBridge Her to a full-stack template with Express, tRPC, and Drizzle schema.
- [x] Implement backend S3 file upload router (`storage.uploadProfileAsset`).
- [x] Connect frontend avatar upload in `ProfilePage` to server-side S3 storage.
- [x] Document local setup, environment variables, and run commands in `LOCAL_SETUP.md`.
- [x] Validate production build and TypeScript compilation.

- [x] Restart the development server and verify the preview responds again.

- [x] Make the notification popover fully opaque.
- [x] Add swipe-right dismissal for individual notification rows while preserving notification behavior.
- [x] Validate notification behavior at desktop and mobile widths.

- [x] Add explicit click-to-read behavior to notification rows without interfering with swipe dismissal.
- [x] Open the notification popover at desktop and mobile sizes and verify opaque styling and swipe dismissal behavior with a real preview gesture.

- [x] Make saved-profile success toasts fully opaque.
- [x] Ensure toast stacking and placement keep it readable above notification popovers without blending through them.
- [x] Validate the toast and notification layers at desktop and mobile sizes.
- [x] Validate the saved-profile toast and notification overlap on a mobile viewport with runtime evidence.

- [x] Add target-career-specific technical skill requirement mappings.
- [x] Synchronize selected target career, technical skills, readiness calculations, and skill-gap analysis.
- [x] Validate career switching behavior across profile, dashboard, assessment, and analysis views.
- [x] Ensure switching target career strictly replaces tracked skills with the new role's mapped technical and soft requirements without carrying over stale non-target skills.
- [x] Validate target-aware skill updates across profile, dashboard, assessment, and gap analysis views.
- [x] Verify target-aware skill propagation on `/profile` and `/dashboard` using a scripted runtime smoke test.
- [x] Verify dashboard DOM elements (target career KPI and priority skills) update correctly after switching careers.
