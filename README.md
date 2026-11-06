# Open Source Compliance Auditor

面向开发者、技术负责人和法务的 Codex Skill，用于闭源商用发布前的开源合规预审。报告将许可义务、代码同源证据、实际交付和履约缺口分开记录，并给出整改和复核条件。

## 在 Codex 中安装

将本仓库检出到目标项目之外。然后在**目标项目根目录**执行，将第一行替换为本仓库的实际路径。

```sh
auditor_repo=/path/to/open-source-compliance-auditor
mkdir -p .agents/skills
cp -R "$auditor_repo/skills/open-source-compliance-auditor" .agents/skills/
```

在 Codex 中打开目标项目，输入 `$open-source-compliance-auditor` 并选择 Skill。如果未出现在列表中，重新打开会话后再试。复制前若发现同名目录已存在，先确认旧版本的内容和备份位置。

## 三种用法

| 用途 | 提供的材料 | 可复制的请求 |
| --- | --- | --- |
| 单仓合规预审 | 项目路径、交付方式、已有安装包或其他产物 | `使用 $open-source-compliance-auditor 审查当前工作区。我们将向客户交付客户端，优先核对第三方许可证是否随包交付。` |
| 双仓同源比对 | 双方路径、各自版本、比对范围和交付方式 | `使用 $open-source-compliance-auditor 比对当前工作区快照与本地上游仓库的 v1.2.0，只检查 src/，并核对计划交付的容器镜像会触发哪些义务。` |
| 整改复核 | 原风险编号和证据、整改后版本或产物 | `使用 $open-source-compliance-auditor，根据旧报告复核 R-001，并以我提供的新安装包验证整改。` |

双仓比对前需要确认双方版本。Git 用于解析提交和检查历史。联网用于核验实际许可证和法律原文，无法核验时会记录来源限制。生成标准 SBOM 取决于现有工具和材料，缺少条件时可输出标明范围的组件清单。没有发布产物时，报告会将产物层标为待验证。

## 试用与报告

[三个可复现样例](examples/README.md)覆盖许可声明缺失、上游版本未指定和仅有锁文件三种情况。报告包含发布判断、证据、风险分级和解除条件，详见[报告模板](skills/open-source-compliance-auditor/references/report-template.md)。

Skill 默认执行只读预审。请在获准的工作环境中处理私有资料，并按所用客户端的数据政策管理敏感材料。输出属于技术与合规分析，重大法律争议需要执业律师复核。

## 许可证

[MIT](LICENSE)。将 Skill 目录单独分发时，请保留其中的许可证文件。
