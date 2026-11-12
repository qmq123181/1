# Proxy 资源库

自用代理客户端资源仓：Surge 模块、Loon 插件、Surge / Egern 规则集，以及被这些模块调用的全部脚本镜像。所有外部脚本都已镜像到本仓库（`copy/js/`），模块不依赖上游地址，上游删库也不影响使用。

| 项目 | 内容 |
|---|---|
| Surge 模块 | 53 个（合计 421.2 KB） |
| 脚本镜像 | 80 个（`copy/js/`，仅保留仍被引用的） |
| Loon 插件原文 | 5 个（`Proxy/Loon/Script/`） |
| Surge 规则集 | 3 个（`Direct.list` 有效，另 2 个为空占位） |
| Egern 规则 | 5 个（`Proxy/Egern/Rule/`） |

> **提交约定**：每个模块/脚本的 commit message 直接写它的用途（模块用 `#!desc`，脚本用下表用途），不写“改了什么”。这样 GitHub 文件列表的 Last commit message 就是一份用途索引，按列排序即可反查归属。

## 目录结构

| 路径 | 用途 | 文件数 |
|---|---|---|
| `Proxy/Surge/Script/` | Surge 模块（`.sgmodule`） | 53 |
| `Proxy/Surge/Rule/` | Surge 规则集 | 3 |
| `Proxy/Surge/LINKS.md` | 模块安装链接直链汇总 | 1 |
| `Proxy/Loon/Script/` | Loon 插件原文（`.plugin`） | 5 |
| `Proxy/Egern/Rule/` | Egern 规则（`.list`） | 5 |
| `Proxy/QX/`、`Proxy/Shadowrocket/` | 预留目录 | 0 |
| `copy/js/` | 上游脚本镜像，模块直接引用 | 80 |

## Surge 模块（53 个）

**安装顺序**：`BlockAdvertisers` 是所有去广告模块的依赖，必须排最前；`Block_HTTPDNS` 紧随其后；其余模块顺序无所谓（脚本按模块顺序注册，同类功能重叠时后装的覆盖先装的）。

| 模块 | 用途（= `#!desc` / commit message） | 引用脚本 | 大小 |
|---|---|---|---|
| [`123云盘`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/123Pan.sgmodule) | 过滤123云盘应用端及网页端广告，解除网页端流量1G下载限制（请单文件下载，不要文件夹或多文件下载）。 | 1 | 862 B |
| [`ADs-重写`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ADs2.sgmodule) | 广告与推广位的重写合集，按 App 分批处理开屏、信息流与弹窗（配合 ADs 规则使用） | 0 | 180.9 KB |
| [`APP`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/APP.sgmodule) | 常用 App 会员与功能解锁合集（B 站画质已独立成 Bilibili_1080p 模块） | 6 | 1.5 KB |
| [`Bilibili 1080P`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Bilibili_1080p.sgmodule) | 哔哩哔哩客户端画质解锁，改写 myinfo 接口解锁高码率档位 | 1 | 402 B |
| [`BoxJs`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/boxjs.rewrite.loon.sgmodule) | BoxJS 数据管理页（重写版），用于查看与管理各脚本的持久化数据 | 1 | 352 B |
| [`CMS Adblocker`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/CMS_Adblock.sgmodule) | 过滤CMS资源插入式广告 | 1 | 4.9 KB |
| [`DNS防泄露`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Prevent_DNS_Leaks.sgmodule) | 静态拦截 DNS 泄露域名（原 21 条代理规则在 Surge 模块下不生效，已弃用代理部分） | 0 | 148 B |
| [`Forward`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Forward.sgmodule) | 解锁Forward Pro，适用于1.3.13及以下版本。 | 0 | 282 B |
| [`GitHub`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/GitHub.sgmodule) | 解决GitHub 429请求频繁问题 | 1 | 729 B |
| [`HTTPDNS拦截器`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Block_HTTPDNS.sgmodule) | 拦截常见 HTTPDNS 服务，避免 App 绕过代理的 DNS 解析 | 0 | 8.2 KB |
| [`IPA Manager`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/IPAManager.sgmodule) | 下载IPA文件实现降级应用安装、已购下架应用安装。 本插件依赖Scripting App且需解锁Pro权限。 | 2 | 620 B |
| [`Listenify`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Listenify.sgmodule) | 从网易云音乐获取歌词与艺人封面 | 1 | 323 B |
| [`Manager Tools`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Manager-Tools.sgmodule) | 重写及规则集转换 高级订阅管理工具和Boxjs管理工具合集。 使用前请在详情页面为［PROXY］项分配代理策略。 | 8 | 2.1 KB |
| [`Nicegram Premium 𝕏`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Nicegram.sgmodule) | Nicegram 去广告并解除学习探索限制。 | 1 | 952 B |
| [`One`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/one.sgmodule) | 「One一个」解锁点播并去除广告。 | 1 | 1.6 KB |
| [`Redirect`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Redirect.sgmodule) | 针对部分网站进行重定向 | 0 | 6.9 KB |
| [`Script-Hub`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Script-Hub.sgmodule) | 把 Rewrite、Rule 和 JavaScript 资源转换成 Surge 可识别的格式。 | 4 | 1.1 KB |
| [`Skip Proxy and Real-IP Lists`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/SkipProxy.sgmodule) | 跳过部分应用的代理检测 | 0 | 436 B |
| [`Soul`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Soul.sgmodule) | Soul全面净化 | 1 | 6.5 KB |
| [`Sub-Store`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Sub-Store.sgmodule) | Sub-Store 订阅管理工具，定时任务每天 23:55。 | 3 | 846 B |
| [`YouTube (Music)`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/YouTube.sgmodule) | 过滤YouTube (Music)广告，增加画中画、字幕翻译、歌词翻译功能，支持后台播放。需要启用QUIC回退保护。不支持tvOS设备。 | 2 | 1.3 KB |
| [`local`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/小熊拦截.sgmodule) | 小熊拦截｜本地自建规则合集 | 0 | 401 B |
| [`qx_nbproads`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/NBProAds.sgmodule) | 过滤 nbpro 系列 App 的开屏与信息流广告。 | 1 | 1.2 KB |
| [`qx_ximalaya`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ximalaya.sgmodule) | 过滤喜马拉雅广告，解锁会员音质。 | 1 | 2.7 KB |
| [`中国联通`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ChinaUnicom.sgmodule) | 过滤中国联通广告 | 0 | 1.5 KB |
| [`京东`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/JingDong.sgmodule) | 过滤京东广告；详情页嵌入历史比价表格图（首次需打开【慢慢买App-我的】提示 CK 获取成功）。 | 4 | 3.4 KB |
| [`可莉广告过滤器`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Remove_ads_by_keli.sgmodule) | 可莉自用的广告过滤器 | 0 | 12.1 KB |
| [`哔哩哔哩`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Bilibili.sgmodule) | 过滤哔哩哔哩广告 | 4 | 7.4 KB |
| [`墨鱼手记页一键添加插件`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ScriptHub.Loon.sgmodule) | Loon 网页资源订阅转换页，用于一键生成插件链接。 | 2 | 806 B |
| [`小红书`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/RedNote.sgmodule) | 过滤小红书广告，去除水印 | 3 | 6.1 KB |
| [`帆书`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/FanShu.sgmodule) | 过滤帆书（樊登读书）广告 | 1 | 3.6 KB |
| [`广告平台拦截器`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/BlockAdvertisers.sgmodule) | 广告平台域名基础拦截，所有去广告模块的依赖，须排在最前 | 0 | 8.3 KB |
| [`微信`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/WeChat.sgmodule) | 微信公众号、小程序去广告以及微信外部链接解锁 | 18 | 34.7 KB |
| [`微博去广告`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Weibo_remove_ads.sgmodule) | 过滤微博广告及去除各部分推广模块 | 1 | 8.0 KB |
| [`快手去广告`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/KuaiShou_remove_ads.sgmodule) | 移除开屏广告、视频流广告、底栏皮肤、右下角悬浮推广，精简我的页面。 | 0 | 2.7 KB |
| [`拼多多`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/PinDuoDuo.sgmodule) | 过滤拼多多广告 | 1 | 7.9 KB |
| [`本机开发服务回环`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/reflec.sgmodule) | 旧版本地回环模块，功能已由 Surge 官方 Local Device Loopback 承担，仅保留旧链接兼容。 | 0 | 165 B |
| [`波点音乐`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/BodianMusic.sgmodule) | 过滤波点音乐广告，解锁会员功能。 使用前请在BoxJS中添加订阅https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/boxjs.json并同意相关免责声明，或添加持久化数据「KUWO_AGREE 我同意」。 | 1 | 7.6 KB |
| [`淘宝`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/TaoBao.sgmodule) | 过滤淘宝广告 | 0 | 1.3 KB |
| [`滴滴`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/DiDi.sgmodule) | 过滤滴滴广告 | 0 | 12.6 KB |
| [`番茄小说去广告`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/DragonRead_remove_ads.sgmodule) | 移除番茄小说开屏广告、移除文章底部和章末广告、移除听书页面广告、移除悬浮部件和底栏多余的福利标签。 | 0 | 1.5 KB |
| [`百度网盘`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/BaiduNetDisk.sgmodule) | 过滤百度网盘广告，解锁部分SVIP功能。 | 3 | 3.7 KB |
| [`百度贴吧`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/BaiduTieba.sgmodule) | 过滤百度贴吧广告 | 1 | 10.6 KB |
| [`看理想`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Vistopia.sgmodule) | 过滤看理想部分广告，解锁会员广告及无限畅听，暂不支持数字图书馆。 视频解析：进入视频课程详情页，点击右上角分享并复制链接，在浏览器中打开，进入播放面板后点击任意一集即可自动解析。 | 5 | 2.3 KB |
| [`知乎`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ZhiHu.sgmodule) | 过滤知乎广告 | 1 | 12.1 KB |
| [`网易云音乐`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/NeteaseMusic.sgmodule) | 网易云音乐去广告与界面净化（评论区、主页、底部 Tab、发现页、我的页面） | 1 | 4.6 KB |
| [`网易云音乐会员`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/NeteaseMusic_VIP.sgmodule) | 解锁网易云音乐会员歌曲、会员皮肤与会员等级标识（Cookie 由 App 自动读取）。 | 1 | 2.8 KB |
| [`美团`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/MeiTuan.sgmodule) | 过滤美团广告，需卸载重装。 | 1 | 4.6 KB |
| [`节点 IP 质量检测 · 混合模式`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ipquality-web-test.sgmodule) | 常用单项直接显示原生结果；多项检测进入 Rewrite v2 网页按需选择并合并展示。 | 0 | 16.3 KB |
| [`酷安`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/CoolApk.sgmodule) | 过滤酷安广告 | 1 | 2.8 KB |
| [`铁路12306`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Railway12306.sgmodule) | 过滤铁路12306广告 | 1 | 619 B |
| [`闲鱼`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Goofish.sgmodule) | 过滤闲鱼广告 | 1 | 6.8 KB |
| [`高德地图`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Amap.sgmodule) | 过滤高德地图广告 | 1 | 9.2 KB |

安装地址：`https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/<模块文件名>`（上方模块名即链接；`LINKS.md` 里也有纯文本直链可批量复制）。

## 规则集

| 文件 | 用途 | 大小 |
|---|---|---|
| `Proxy/Surge/Rule/Direct.list` | 直连域名清单 | 28.3 KB |
| `Proxy/Surge/Rule/10007re.list` | 空占位 | 0 B |
| `Proxy/Surge/Rule/Reject.list` | 空占位（拦截改用 `DOMAIN-SET` 外部规则集） | 0 B |

Egern 规则：`Emby.list`、`Proxy.list`、`Reject.list`、`Tiktok1.list`、`Youtube1.list`。

## 脚本镜像 `copy/js/`（80 个）

命名规则 `<上游owner>_<仓库名>_<原文件名>.js`。**只保留仍被模块引用的脚本**；未出现在下表的文件已在清理中删除（主要是原先 blockAds 按 App 拆分的那批）。

| # | 脚本 | 用途 | 引用模块 | 大小 |
|---|---|---|---|---|
| 1 | `aioneas_surge_klx_app_catalog_unlock.js` | 看理想｜去广告 | 看理想 | 3.3 KB |
| 2 | `aioneas_surge_klx_app_video_compat.js` | 看理想｜去广告 | 看理想 | 182.3 KB |
| 3 | `aioneas_surge_klx_no_ads.js` | 看理想｜去广告 | 看理想 | 1.8 KB |
| 4 | `aioneas_surge_klx_profile_clean.js` | 看理想｜去广告 | 看理想 | 2.1 KB |
| 5 | `aioneas_surge_klx_vip_page_hide_purchase.js` | 看理想｜去广告 | 看理想 | 5.4 KB |
| 6 | `chavyleung_scripts_chavy.boxjs.js` | 多模块共用｜Manager Tools、BoxJs | Manager Tools、BoxJs | 51.2 KB |
| 7 | `chxm1023_rewrite_bdcloud.js` | 百度网盘｜去广告、下载提速 | 百度网盘 | 12.3 KB |
| 8 | `ddgksf2013_scripts_123pan.js` | 123 云盘｜去广告、直链加速 | 123云盘 | 29.5 KB |
| 9 | `ddgksf2013_top_bdpan.ads.js` | 百度网盘｜去广告、下载提速 | 百度网盘 | 44.2 KB |
| 10 | `ddgksf2013_top_bdpan.unlock.js` | 百度网盘｜去广告、下载提速 | 百度网盘 | 47.6 KB |
| 11 | `ddgksf2013_top_nbpro.ads.js` | 通用广告｜NBPro 规则拦截 | qx_nbproads | 18.0 KB |
| 12 | `ddgksf2013_top_web.loon.js` | 脚本转换｜Script-Hub 的 Loon 入口（工具类） | 墨鱼手记页一键添加插件 | 122 B |
| 13 | `deezertidal_private_wnds.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP | 134 B |
| 14 | `fmz200_wool_scripts_xiaohongshu.js` | 小红书｜去广告、信息流净化 | 小红书 | 28.0 KB |
| 15 | `fmz200_wool_scripts_zhangshanggongjiao.js` | 微信｜脚本 | 微信 | 689 B |
| 16 | `guding88_script_xichuangzhu.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP | 550 B |
| 17 | `he2o_vercel_app_nicegram.js` | Telegram Nicegram｜客户端优化 | Nicegram Premium 𝕏 | 4.0 KB |
| 18 | `ishowshu_qx_goofish.js` | 闲鱼｜去广告 | 闲鱼 | 7.6 KB |
| 19 | `ishowshu_qx_soul.js` | Soul｜去广告 | Soul | 6.2 KB |
| 20 | `kelee_one_alittle-tea.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 90 B |
| 21 | `kelee_one_chayanyuese_remove_ads.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 333 B |
| 22 | `kelee_one_coco.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 147 B |
| 23 | `kelee_one_ems.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 198 B |
| 24 | `kelee_one_familymart.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 101 B |
| 25 | `kelee_one_kff.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 1.1 KB |
| 26 | `kelee_one_lawson.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 147 B |
| 27 | `kelee_one_m_stand.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 499 B |
| 28 | `kelee_one_ming.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 86 B |
| 29 | `kelee_one_qingju.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 108 B |
| 30 | `kelee_one_t3.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 92 B |
| 31 | `kelee_one_tieba-proto.js` | 百度贴吧｜去广告 | 百度贴吧 | 95.3 KB |
| 32 | `kelee_one_weibo_remove_ads.js` | 微博｜去广告 | 微博去广告 | 55.4 KB |
| 33 | `kelee_one_weixin_external_links_unlock.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 84.4 KB |
| 34 | `kelee_one_xiaotucc.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 358 B |
| 35 | `kokoryh_sparkle_12306.js` | 铁路 12306｜去广告 | 铁路12306 | 5.2 KB |
| 36 | `kokoryh_sparkle_bilibili.json.js` | 多模块共用｜哔哩哔哩、Bilibili 1080P | 哔哩哔哩、Bilibili 1080P | 18.9 KB |
| 37 | `kokoryh_sparkle_bilibili.protobuf.request.js` | 哔哩哔哩｜去广告、画质解锁 | 哔哩哔哩 | 75.0 KB |
| 38 | `kokoryh_sparkle_bilibili.protobuf.response.js` | 哔哩哔哩｜去广告、画质解锁 | 哔哩哔哩 | 101.3 KB |
| 39 | `kokoryh_sparkle_webpage.bilibili.js` | 哔哩哔哩｜去广告、画质解锁 | 哔哩哔哩 | 5.4 KB |
| 40 | `loon_103516_xyz_applestoreapi.js` | IP 管理｜IP 信息小工具 | IPA Manager | 30.7 KB |
| 41 | `loon_103516_xyz_cloudmusic.vip.js` | 网易云音乐会员｜脚本 | 网易云音乐会员 | 995 B |
| 42 | `loon_103516_xyz_gitrawautocdn.js` | GitHub｜加速与去广告 | GitHub | 609 B |
| 43 | `loon_103516_xyz_installapp.js` | IP 管理｜IP 信息小工具 | IPA Manager | 1.1 KB |
| 44 | `loon_103516_xyz_meituan.js` | 美团｜去广告 | 美团 | 4.6 KB |
| 45 | `loon_103516_xyz_neteasemusic.ads.js` | 网易云音乐｜去广告、部分功能解锁 | 网易云音乐 | 17.0 KB |
| 46 | `loon_103516_xyz_rednote.feedtime.js` | 小红书｜去广告、信息流净化 | 小红书 | 1.5 KB |
| 47 | `loon_103516_xyz_replace-body.js` | 京东｜去广告、页面净化 | 京东 | 2.0 KB |
| 48 | `maasea_sgmodule_youtube.request.js` | YouTube｜去广告 | YouTube (Music) | 43.0 KB |
| 49 | `maasea_sgmodule_youtube.response.js` | YouTube｜去广告 | YouTube (Music) | 129.9 KB |
| 50 | `mw418_loon_jd_price.js` | 京东｜去广告、页面净化 | 京东 | 28.0 KB |
| 51 | `one_api_zzxu_de_loon.js` | one-api 工具｜上游同名插件，功能随上游 | One | 1.1 KB |
| 52 | `rucu6_pages_dev_amap.js` | 高德地图｜去广告、首页净化 | 高德地图 | 23.0 KB |
| 53 | `rucu6_pages_dev_jingdong.js` | 京东｜去广告、页面净化 | 京东 | 10.2 KB |
| 54 | `rucu6_pages_dev_pinduoduo.js` | 拼多多｜去广告 | 拼多多 | 3.1 KB |
| 55 | `rucu6_pages_dev_xiaohongshu.js` | 小红书｜去广告、信息流净化 | 小红书 | 21.2 KB |
| 56 | `rucu6_pages_dev_zhihu.js` | 知乎｜去广告 | 知乎 | 7.4 KB |
| 57 | `script-hub-org_script-hub_rewrite-parser.js` | 多模块共用｜Manager Tools、Script-Hub、墨鱼手记页一键添加插件 | Manager Tools、Script-Hub、墨鱼手记页一键添加插件 | 112.0 KB |
| 58 | `script-hub-org_script-hub_rule-parser.js` | 多模块共用｜Manager Tools、Script-Hub | Manager Tools、Script-Hub | 23.8 KB |
| 59 | `script-hub-org_script-hub_script-converter.js` | 多模块共用｜Manager Tools、Script-Hub | Manager Tools、Script-Hub | 28.9 KB |
| 60 | `script-hub-org_script-hub_script-hub.js` | 多模块共用｜Manager Tools、Script-Hub | Manager Tools、Script-Hub | 253.3 KB |
| 61 | `sheepfj_sheep_vip.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP | 15.9 KB |
| 62 | `sub-store-org_sub-store_cron-sync-artifacts.min.js` | 模块管理｜Script-Hub / Sub-Store 面板入口（工具类） | Manager Tools | 2 B |
| 63 | `sub-store-org_sub-store_cron-sync-artifacts.min_2d4444.js` | 订阅管理｜订阅聚合管理面板（工具类） | Sub-Store | 2 B |
| 64 | `sub-store-org_sub-store_sub-store-0.min.js` | 多模块共用｜Manager Tools、Sub-Store | Manager Tools、Sub-Store | 2 B |
| 65 | `sub-store-org_sub-store_sub-store-1.min.js` | 模块管理｜Script-Hub / Sub-Store 面板入口（工具类） | Manager Tools | 2 B |
| 66 | `sub-store-org_sub-store_sub-store-1.min_53973a.js` | 订阅管理｜订阅聚合管理面板（工具类） | Sub-Store | 2 B |
| 67 | `venenosix24_ivy-script_coolapk_redirect.js` | 酷安｜去广告 | 酷安 | 371 B |
| 68 | `weigiegie_666_7dong.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP | 26.4 KB |
| 69 | `weigiegie_666_bdyy.js` | 波点音乐｜去广告、部分功能解锁 | 波点音乐 | 172.6 KB |
| 70 | `weigiegie_666_keep.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP | 2.3 KB |
| 71 | `weigiegie_666_ximalaya.js` | 喜马拉雅｜去广告 | qx_ximalaya | 354.3 KB |
| 72 | `wf021325_qx_jd_price.js` | 京东｜去广告、页面净化 | 京东 | 31.9 KB |
| 73 | `yswag_for-own-use_cmsadblock.js` | 运营商 CMS｜广告与推广拦截 | CMS Adblocker | 19.3 KB |
| 74 | `yswag_for-own-use_listenify.js` | 听书类 App｜去广告 | Listenify | 16.8 KB |
| 75 | `yu9191_rewrite_duetdisplay.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP | 607 B |
| 76 | `yuheng0101_x_no_ads.js` | 番茄小说｜去广告 | 帆书 | 8.2 KB |
| 77 | `zenmofeishi_qx_meituannoad.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 605 B |
| 78 | `zirawell_r-store_cotti.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 14.5 KB |
| 79 | `zirawell_r-store_foliday.js` | 微信｜脚本 | 微信 | 973 B |
| 80 | `zirawell_r-store_wechatapplet.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 | 5.8 KB |

## 模块维护约定

1. **元数据只留两行**：`#!name`、`#!desc`。不带 `#!author`、`#!homepage`、`#!arguments`、`#!system`。
2. **不写注释**。注释在 Surge 里会变成 `SGComment` 对象常驻内存（历史日志里 7 万条注释约占 4.4 MB），模块加载时这些对象纯属开销。
3. **不用 `#!arguments` 与 `{{{}}}` 门控**。全部功能默认开启，要关就整行删掉或整个模块不勾选；需要调参的（如 `iTunes` 的 Expires、`wloc` 的坐标）直接把值写死在 `argument=` 里。
4. **commit message = 该文件用途**（模块用 desc，脚本用上表用途），方便 Last commit message 当索引用。
5. **新增脚本必须落到 `copy/js/`**，模块里只能引用本仓库 raw 地址，禁止指向上游。

## 已移除与合并

| 对象 | 处理 | 原因 |
|---|---|---|
| `blockAds.sgmodule` | 删除 | 241 KB 大合集，是内存爆掉的主要来源；域名拦截已由 `DOMAIN-SET` 外部规则集承担 |
| `iTunes.sgmodule` / `reven.sgmodule` / `wloc.sgmodule` | 删除 | 开发者都有官方 Surge 模块，直接装官方版更可靠 |
| `NeteaseMusic` 的会员功能 | 拆出 `NeteaseMusic_VIP` | 净化与解锁解耦，可按需只装一个 |
| `APP` 的 B 站画质 | 拆出 `Bilibili_1080p` | 画质解锁可单独启停，不影响其他解锁 |
| `reflec` | 保留 | 功能已由官方 `Local Device Loopback` 承担，仅为兼容旧链接 |
| 95 个无引用脚本 | 删除 | 原属 blockAds / 已删模块，无任何模块引用 |

## 变更记录

| 日期 | 内容 |
|---|---|
| 2026-11-11 | 模块去 Loon 门控化：删 `#!arguments` 与 `{{{}}}`、参数内联默认值、功能默认开启；元数据只留 name/desc、剥离全部注释（模块总体积 881,833 B → 677 KB 量级，-23%）；脚本去掉尾注；蜗牛读书 `tradeEndTime` 改 2099-12-31 |
| 2026-11-11 | 删除 `blockAds` / `iTunes` / `reven` / `wloc`；京东仅保留表格图比价；网易云会员拆为独立模块；清理 95 个无引用脚本；全部文件 commit message 改为用途（Last commit message 直接可读） |

