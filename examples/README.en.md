# Audit examples

[**English**](README.en.md) · [简体中文](README.md) · [Back to the project README](../README.md)

All names, dependencies, and delivery scenarios are fictional. Install the Skill, then run each prompt in a separate Codex session. Replace the example paths with the paths on your machine. Use the expected results to check the response.

| Scenario | Prompt | Expected result |
| --- | --- | --- |
| Missing notices in a client package | Use `$open-source-compliance-auditor` to review `missing-notice/`. The `source/` directory contains the acquired component and its MIT license. The `package/` directory is the complete unpacked package we plan to ship to customers, including code from that component. Check whether the notices are included. | Locate the source and packaged code. Identify the missing copyright and license notices, and specify how to verify the rebuilt package. Treat the delivery as planned. |
| Missing upstream version | Use `$open-source-compliance-auditor` to audit the planned delivery in `missing-notice/` and compare it with upstream at `https://example.invalid/notice-widget`. Use the provided local files as the project snapshot. We have not selected an upstream version. | Ask for an upstream version without choosing one. Continue the local license and distribution review. |
| Lockfile only | Use `$open-source-compliance-auditor` to review the planned client delivery using `lockfile-only/package-lock.json`. No dependency source or release artifact is available. | Identify direct and transitive dependencies and their exact versions. Label lockfile licenses as declared and the inventory as limited to the lockfile. Leave packaging and delivery obligations pending artifact review. |
