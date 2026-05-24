# Agent Harness 工程师知识地图

一份 Agent Harness 工程方向的自学教程,32 个知识点按 4 层组织,核心 16 个 P0 章节做了五步深度展开(Why → 核心要点 → 代码/案例 → 工程权衡 → 自检 → 练习)。

内容基于 Anthropic / Cursor / Claude Code 2025-09 到 2026-05 的官方工程实践归纳。

## 入口

| 用法 | 文件 |
|---|---|
| **第一次看** —— 七日精读,跟着走完 16 个核心章 | [`p0-sprint.html`](p0-sprint.html) |
| **完整教程** —— 32 章按 4 层组织,可随时查 | [`index.html`](index.html) |
| **按场景查** —— 按"你遇到的问题"找推荐章节 | [`scenarios.html`](scenarios.html) |
| **可视化总览** —— 知识地图 SVG | [`docs/harness_engineer_knowledge_map_v3_full.svg`](docs/harness_engineer_knowledge_map_v3_full.svg) |

部署在 GitHub Pages 后直接 URL 访问;本地双击 HTML 也能看。

## 内容结构

四个层级,从模型基础到 harness 工程到 context 与评估:

```
L1 · 模型与 API 基础(5 章)
    1. LLM 推理机制 / 2. KV Cache / 3. Prompt Caching
    4. LLM API 实操 / 5. Structured Output

L2 · Agent 核心机制(5 章)
    6. Agent Loop / 7. Tool Use 协议 / 8. Tool 设计原则
    9. Reasoning 模式 / 10. Streaming 处理

L3 · Harness 工程(12 章 · 核心层)
    11. Harness 概念边界 / 12. Lifecycle Hooks / 13. Permission System
    14. Sandbox 与执行 / 15. Skills 系统 / 16. Agent SDK
    17. Long-Running Agent / 18. Three-Agent Harness / 19. 可观测性
    28. 失败模式分类 / 29. Prompt Injection 防御 / 30. 成本/模型路由

L4 · Context、扩展与评估(10 章)
    20. Context Eng 3 支柱 / 21. Compaction vs Reset
    22. Sub-Agent 委派 / 23. Multi-Agent 编排
    24. Memory 4 类 / 25. MCP 协议 / 26. Eval Harness
    27. 模型协同演进 / 31. Determinism & Replay / 32. Harness→Model 反馈闭环
```

## 优先级与深度

按重要性分三档:

- **P0(16 章)** —— 必精通。已按五步结构深度展开(平均 2000 字 + 工程权衡 + 自检清单 + 分梯度练习)。
- **P1(11 章)** —— 必熟练。简洁版,核心要点 + 速查锚点。
- **P2(5 章)** —— 理解即可。极简版。

P0 章节列表:
2 · 3 · 6 · 7 · 11 · 16 · 17 · 18 · 20 · 21 · 24 · 25 · 27 · 28 · 29 · 32

## 五步章结构(P0 专用)

每个 P0 章节按统一结构组织:

1. **Why** —— 100 字内的动机钩子,讲清"不学的坑"
2. **核心要点** —— 概念模型(技术章 600-1000 字 / 概念章用对照表 + 数据流图)
3. **最小代码 / 真实系统拆解** —— 技术章给 < 30 行 runnable 代码;概念章给真实公司产品分层案例
4. **工程权衡** —— 固定三段:何时用 / 何时不用 / 反直觉的坑(4 条)
5. **自检清单 + 练习** —— 自检 6 条带"过关标准";练习 L1 抄一遍 → L2 改造 → L3 自己设计

每章末附**速查**(一句话核心答),以及**延伸阅读**(对应的 Anthropic 原文链接)。

## 内容来源

- [Anthropic Engineering · Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Anthropic Engineering · Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Anthropic Engineering · Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [Anthropic Engineering · Building agents with the Claude Agent SDK](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk)
- [Anthropic Engineering · Writing effective tools for AI agents](https://www.anthropic.com/engineering/writing-tools-for-agents)
- [Anthropic Engineering · Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
- [Anthropic · Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol)
- [MCP Specification](https://modelcontextprotocol.io/specification/2025-11-25)
- [Claude Code Docs · Hooks Guide](https://docs.anthropic.com/en/docs/claude-code/hooks-guide)
- [Claude Code Docs · Agent SDK Overview](https://docs.anthropic.com/en/docs/claude-code/sdk)

## 实战参考

教程讲的是"为什么这么设计",以下资源是"打开真实 harness 看代码长什么样"的入口:

### 完整开源 harness 实现

- [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) —— 74.7k★ 的 production-grade harness。SDK / CLI / GUI / Cloud 多形态,SWE-bench 77.6 分(SOTA 级)。MIT 协议完全开源,被 TikTok、Netflix、Amazon、Apple 等用。直接读源码学。
- [OpenHands tech report (arxiv 2511.03690)](https://arxiv.org/abs/2511.03690) —— 配套的技术论文

### Claude Code 源码分析

- [Claude Code Unpacked](https://ccunpacked.dev/) —— 把闭源的 Claude Code 工程拆解讲清楚
- [RicoShen/claude-code-source-code](https://github.com/RicoShen/claude-code-source-code) —— 配套的源码分析仓库。和本教程互补:本教程讲"为什么这么设计",源码仓库讲"具体怎么实现"

## 仓库结构

```
.
├── README.md                                   # 本文件
├── index.html                                  # 32 章完整教程
├── p0-sprint.html                              # 核心章 · 七日精读
├── scenarios.html                              # 按场景查的索引
└── docs/
    ├── harness_engineer_knowledge_map_v3_full.svg   # 可视化地图
    └── Agent Harness 研发工程师.docx                # JD 参考(私有)
```

## 怎么用

**新手第一次** —— 打开 `p0-sprint.html`,按七日精读路径走。每天 2-3 章,跟着读 + 做练习,完成 9 道融合自检题。

**作 reference** —— 打开 `index.html`,左侧 sidebar 32 章可跳。每节末的"速查"是一句话答,适合临场翻。

**遇到具体问题** —— 打开 `scenarios.html`,按"你遇到的问题"找对应章节。比如"agent 卡死"、"context 不够用"、"模型升级了怎么办"等常见场景。

**整体浏览** —— 看 SVG 地图,32 个知识点按 4 层 + 优先级颜色编码一目了然。

## 本地运行 / 部署

任意静态 HTML 服务器都能跑。本地直接双击 HTML 也能看。

推到 GitHub 后开 Pages:Settings → Pages → Source 选 `main` 分支 `/ (root)`,几分钟后就能从 `https://<username>.github.io/harness-agent-learning/` 访问。

## 版本与维护

当前内容截止 2026-05。Harness 工程是快速演化领域——本仓库的每一个判断都编码了对"当下模型能力"的假设(参考 #27 模型协同演进 章节)。模型迭代后部分内容会过时,这是这类教程的本质属性。

发现错误或过时内容,直接开 issue 或 PR。
