# 1

自用代理客户端资源库：Surge 模块、Loon 插件、规则集，外部脚本已全部镜像到本仓库，模块不依赖上游地址，上游删库也不影响使用。

## 目录

- `Proxy/` — 代理资源，详见 [Proxy/README.md](Proxy/README.md)
  - `Surge/` — Surge 模块（`.sgmodule`）、规则集、模块安装链接汇总（`LINKS.md`）
  - `Loon/` — Loon 插件原文（`.plugin`）
  - `Egern/` — Egern 规则（`.list`）
  - `QX/`、`Shadowrocket/` — 预留目录
- `copy/js/` — 上游脚本镜像，仅保留仍被引用的，模块直接引用
