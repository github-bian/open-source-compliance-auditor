# 开源合规审查 Skill

[English](README.md) · **简体中文**

[![最新版本](https://img.shields.io/github/v/release/github-bian/open-source-compliance-auditor?label=release)](https://github.com/github-bian/open-source-compliance-auditor/releases/latest)
[![MIT 许可证](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

用 Codex 回答一个发布前的问题：**产品交付给客户之前，需要履行哪些开源许可义务？**

提供项目、分发方式和已有发布产物，Skill 会把许可义务对应到实际证据，核对接收者会拿到什么，并指出发布前需要整改或补证的事项。

[快速开始](#快速开始) · [审查模式](#审查模式) · [报告示例](#报告示例) · [验收样例](examples/README.md)

## 快速开始

在**要审查的项目根目录**执行，将固定版本安装到当前项目。

```sh
audit_source="$(mktemp -d)"
git clone --depth 1 --branch v0.1.0 https://github.com/github-bian/open-source-compliance-auditor.git "$audit_source"
```

下载成功后，复制完整 Skill 目录。如果目标路径已存在，先检查已有安装再决定是否替换。

```sh
mkdir -p .agents/skills
test ! -e .agents/skills/open-source-compliance-auditor &&
  cp -R "$audit_source/skills/open-source-compliance-auditor" .agents/skills/
```

用 Codex 打开项目，选择 `$open-source-compliance-auditor`。如果列表未显示该 Skill，重新打开会话。可以从这条请求开始：

```text
使用 $open-source-compliance-auditor 做发布前审查。
我们准备向客户交付桌面客户端，请核对发布包是否包含
适用的第三方许可证及版权声明。
```

## 审查模式

| 模式 | 提供什么 | 得到什么 |
| --- | --- | --- |
| **单仓合规预审** | 项目路径、交付方式、已有安装包或镜像等产物 | 许可义务、证据，以及计划或实际交付中的履约缺口。 |
| **代码同源比对** | 双方仓库地址、各自版本或快照、比对路径 | 匹配的代码证据和可能的替代解释，法律风险单独分析。 |
| **整改复核** | 原风险项和整改后的版本或产物 | 整改是否满足验收条件，以及尚未解决的缺口。 |

缺少上游版本时暂停代码比对，本项目的许可与分发审查可继续。

## 报告示例

> **拟交付的客户端包缺少必要声明。** 解包目录包含 MIT 授权的组件代码，但缺少版权和许可声明。将两项声明纳入交付包后，再用新产物复核。

这个虚构案例可在[验收样例](examples/README.md)中复现。[报告模板](skills/open-source-compliance-auditor/references/report-template.md)包含完整的证据、风险和整改字段。

## 环境与范围

- **已在 Codex CLI 验证。** Git 用于解析版本及查看历史。需要查证许可或法律原文时，使用可访问的权威来源。
- **报告默认使用简体中文。** 默认只读预审。只有锁文件时可以列出有限范围的组件清单。标准 SBOM 取决于输入材料和可用工具，实际分发需要对应产物才能核实。
- **提供技术合规分析。** 报告会标出需要法律解释或律师复核的事项。私有材料应在获准的环境中处理。

## 许可证

[MIT](LICENSE)。单独分发 Skill 目录时，请保留目录内的许可证。
