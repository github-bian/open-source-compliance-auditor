# Open Source Compliance Auditor

[**English**](README.md) · [简体中文](README.zh-CN.md)

[![Latest release](https://img.shields.io/github/v/release/github-bian/open-source-compliance-auditor?label=release)](https://github.com/github-bian/open-source-compliance-auditor/releases/latest)
[![MIT license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

A Codex Skill for answering a release question: **what open-source obligations must we meet before shipping this product?**

Give it a repository, a planned delivery method, and any available release artifacts. It maps obligations to evidence, checks which materials actually reach recipients, and identifies what needs to be fixed or verified before release.

[Quick start](#quick-start) · [Audit modes](#audit-modes) · [Sample finding](#sample-finding) · [Examples](examples/README.en.md)

## Quick start

Run this from the **project you want to audit**. It installs the tagged release for that project.

```sh
audit_source="$(mktemp -d)"
git clone --depth 1 --branch v0.1.0 https://github.com/github-bian/open-source-compliance-auditor.git "$audit_source"
```

After the clone succeeds, copy the whole Skill directory. If the destination already exists, review the existing installation before replacing it.

```sh
mkdir -p .agents/skills
test ! -e .agents/skills/open-source-compliance-auditor &&
  cp -R "$audit_source/skills/open-source-compliance-auditor" .agents/skills/
```

Open the project in Codex and select `$open-source-compliance-auditor`. If it does not appear, reopen the session. Start with:

```text
Use $open-source-compliance-auditor to audit this project before we ship
a desktop client to customers. Check whether our release package includes
the required third-party license and copyright notices.
```

## Audit modes

| Mode | What to provide | What you get |
| --- | --- | --- |
| **Single-project audit** | Project path, delivery method, and any package, image, or other release artifact | A map of license obligations, evidence, and gaps in the planned or actual delivery. |
| **Source provenance comparison** | Both repository locations, a version or snapshot for each, and the paths in scope | Matched code and plausible alternative explanations, with legal risk assessed separately. |
| **Remediation review** | The original finding and the updated version or artifact | Evidence that the fix meets the acceptance criteria, plus any remaining gaps. |

A missing upstream version pauses the comparison. The local license and distribution review can continue.

## Sample finding

> **Planned client package is missing required notices.** The unpacked package contains the MIT-licensed component code, but omits the copyright and permission notices. Include both in the delivery, then verify the rebuilt package.

This fictional case is included in the [runnable examples](examples/README.en.md). See the [report template](skills/open-source-compliance-auditor/references/report-template.md) for the full evidence and remediation format.

## Requirements and scope

- **Verified on Codex CLI.** Git resolves revisions and history. Web access helps verify authoritative license texts and legal sources when needed.
- **Reports default to Simplified Chinese.** The review is read-only by default. A lockfile can support a scoped inventory. A standard SBOM requires suitable inputs and an available tool, and actual delivery remains unverified without the release artifact.
- **Technical compliance review.** The report records where legal interpretation or qualified counsel is needed. Handle private materials in an approved environment.

## License

[MIT](LICENSE). Keep the bundled license when redistributing the Skill directory on its own.
