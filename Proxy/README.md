# Proxy 资源库

自用代理客户端资源仓：Surge 模块、Loon 插件、Surge / Egern 规则集，以及被这些模块调用的全部脚本镜像。所有外部脚本都已镜像到本仓库（`copy/js/`），模块不依赖上游地址，上游删库也不影响使用。

| 项目 | 内容 |
|---|---|
| Surge 模块 | 53 个（合计 421.2 KB） |
| 脚本镜像 | 80 个（`copy/js/`，仅保留仍被引用的） |
| Loon 插件原文 | 5 个（`Proxy/Loon/Script/`） |
| Surge 规则集 | 3 个（`Direct.list` 有效，另 2 个为空占位） |
| Egern 规则 | 5 个（`Proxy/Egern/Rule/`） |


## 目录结构

| 路径 | 用途 |
|---|---|
| `Proxy/Surge/Script/` | Surge 模块（`.sgmodule`） |
| `Proxy/Surge/Rule/` | Surge 规则集 |
| `Proxy/Surge/LINKS.md` | 模块安装链接直链汇总 |
| `Proxy/Loon/Script/` | Loon 插件原文（`.plugin`） |
| `Proxy/Egern/Rule/` | Egern 规则（`.list`） |
| `Proxy/QX/`、`Proxy/Shadowrocket/` | 预留目录 |
| `copy/js/` | 上游脚本镜像，模块直接引用 |

## Surge 模块（53 个）

| 模块 | 用途（= `#!desc` / commit message） |
|---|---|
| [`123云盘`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/123Pan.sgmodule) | 过滤123云盘应用端及网页端广告，解除网页端流量1G下载限制（请单文件下载，不要文件夹或多文件下载）。 |
| [`ADs-重写`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ADs2.sgmodule) | 广告与推广位的重写合集，按 App 分批处理开屏、信息流与弹窗（配合 ADs 规则使用） |
| [`APP`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/APP.sgmodule) | 常用 App 会员与功能解锁合集（B 站画质已独立成 Bilibili_1080p 模块） |
| [`Bilibili 1080P`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Bilibili_1080p.sgmodule) | 哔哩哔哩客户端画质解锁，改写 myinfo 接口解锁高码率档位 |
| [`BoxJs`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/boxjs.rewrite.loon.sgmodule) | BoxJS 数据管理页（重写版），用于查看与管理各脚本的持久化数据 |
| [`CMS Adblocker`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/CMS_Adblock.sgmodule) | 过滤CMS资源插入式广告 |
| [`DNS防泄露`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Prevent_DNS_Leaks.sgmodule) | 静态拦截 DNS 泄露域名（原 21 条代理规则在 Surge 模块下不生效，已弃用代理部分） |
| [`Forward`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Forward.sgmodule) | 解锁Forward Pro，适用于1.3.13及以下版本。 |
| [`GitHub`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/GitHub.sgmodule) | 解决GitHub 429请求频繁问题 |
| [`HTTPDNS拦截器`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Block_HTTPDNS.sgmodule) | 拦截常见 HTTPDNS 服务，避免 App 绕过代理的 DNS 解析 |
| [`IPA Manager`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/IPAManager.sgmodule) | 下载IPA文件实现降级应用安装、已购下架应用安装。 本插件依赖Scripting App且需解锁Pro权限。 |
| [`Listenify`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Listenify.sgmodule) | 从网易云音乐获取歌词与艺人封面 |
| [`Manager Tools`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Manager-Tools.sgmodule) | 重写及规则集转换 高级订阅管理工具和Boxjs管理工具合集。 使用前请在详情页面为［PROXY］项分配代理策略。 |
| [`Nicegram Premium 𝕏`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Nicegram.sgmodule) | Nicegram 去广告并解除学习探索限制。 |
| [`One`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/one.sgmodule) | 「One一个」解锁点播并去除广告。 |
| [`Redirect`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Redirect.sgmodule) | 针对部分网站进行重定向 |
| [`Script-Hub`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Script-Hub.sgmodule) | 把 Rewrite、Rule 和 JavaScript 资源转换成 Surge 可识别的格式。 |
| [`Skip Proxy and Real-IP Lists`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/SkipProxy.sgmodule) | 跳过部分应用的代理检测 |
| [`Soul`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Soul.sgmodule) | Soul全面净化 |
| [`Sub-Store`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Sub-Store.sgmodule) | Sub-Store 订阅管理工具，定时任务每天 23:55。 |
| [`YouTube (Music)`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/YouTube.sgmodule) | 过滤YouTube (Music)广告，增加画中画、字幕翻译、歌词翻译功能，支持后台播放。需要启用QUIC回退保护。不支持tvOS设备。 |
| [`local`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/小熊拦截.sgmodule) | 小熊拦截｜本地自建规则合集 |
| [`qx_nbproads`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/NBProAds.sgmodule) | 过滤 nbpro 系列 App 的开屏与信息流广告。 |
| [`qx_ximalaya`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ximalaya.sgmodule) | 过滤喜马拉雅广告，解锁会员音质。 |
| [`中国联通`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ChinaUnicom.sgmodule) | 过滤中国联通广告 |
| [`京东`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/JingDong.sgmodule) | 过滤京东广告；详情页嵌入历史比价表格图（首次需打开【慢慢买App-我的】提示 CK 获取成功）。 |
| [`可莉广告过滤器`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Remove_ads_by_keli.sgmodule) | 可莉自用的广告过滤器 |
| [`哔哩哔哩`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Bilibili.sgmodule) | 过滤哔哩哔哩广告 |
| [`墨鱼手记页一键添加插件`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ScriptHub.Loon.sgmodule) | Loon 网页资源订阅转换页，用于一键生成插件链接。 |
| [`小红书`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/RedNote.sgmodule) | 过滤小红书广告，去除水印 |
| [`帆书`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/FanShu.sgmodule) | 过滤帆书（樊登读书）广告 |
| [`广告平台拦截器`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/BlockAdvertisers.sgmodule) | 广告平台域名基础拦截，所有去广告模块的依赖，须排在最前 |
| [`微信`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/WeChat.sgmodule) | 微信公众号、小程序去广告以及微信外部链接解锁 |
| [`微博去广告`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Weibo_remove_ads.sgmodule) | 过滤微博广告及去除各部分推广模块 |
| [`快手去广告`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/KuaiShou_remove_ads.sgmodule) | 移除开屏广告、视频流广告、底栏皮肤、右下角悬浮推广，精简我的页面。 |
| [`拼多多`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/PinDuoDuo.sgmodule) | 过滤拼多多广告 |
| [`本机开发服务回环`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/reflec.sgmodule) | 旧版本地回环模块，功能已由 Surge 官方 Local Device Loopback 承担，仅保留旧链接兼容。 |
| [`波点音乐`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/BodianMusic.sgmodule) | 过滤波点音乐广告，解锁会员功能。 使用前请在BoxJS中添加订阅https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/boxjs.json并同意相关免责声明，或添加持久化数据「KUWO_AGREE 我同意」。 |
| [`淘宝`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/TaoBao.sgmodule) | 过滤淘宝广告 |
| [`滴滴`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/DiDi.sgmodule) | 过滤滴滴广告 |
| [`番茄小说去广告`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/DragonRead_remove_ads.sgmodule) | 移除番茄小说开屏广告、移除文章底部和章末广告、移除听书页面广告、移除悬浮部件和底栏多余的福利标签。 |
| [`百度网盘`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/BaiduNetDisk.sgmodule) | 过滤百度网盘广告，解锁部分SVIP功能。 |
| [`百度贴吧`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/BaiduTieba.sgmodule) | 过滤百度贴吧广告 |
| [`看理想`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Vistopia.sgmodule) | 过滤看理想部分广告，解锁会员广告及无限畅听，暂不支持数字图书馆。 视频解析：进入视频课程详情页，点击右上角分享并复制链接，在浏览器中打开，进入播放面板后点击任意一集即可自动解析。 |
| [`知乎`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ZhiHu.sgmodule) | 过滤知乎广告 |
| [`网易云音乐`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/NeteaseMusic.sgmodule) | 网易云音乐去广告与界面净化（评论区、主页、底部 Tab、发现页、我的页面） |
| [`网易云音乐会员`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/NeteaseMusic_VIP.sgmodule) | 解锁网易云音乐会员歌曲、会员皮肤与会员等级标识（Cookie 由 App 自动读取）。 |
| [`美团`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/MeiTuan.sgmodule) | 过滤美团广告，需卸载重装。 |
| [`节点 IP 质量检测 · 混合模式`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/ipquality-web-test.sgmodule) | 常用单项直接显示原生结果；多项检测进入 Rewrite v2 网页按需选择并合并展示。 |
| [`酷安`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/CoolApk.sgmodule) | 过滤酷安广告 |
| [`铁路12306`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Railway12306.sgmodule) | 过滤铁路12306广告 |
| [`闲鱼`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Goofish.sgmodule) | 过滤闲鱼广告 |
| [`高德地图`](https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/Amap.sgmodule) | 过滤高德地图广告 |

安装地址：`https://raw.githubusercontent.com/qmq123181/1/main/Proxy/Surge/Script/<模块文件名>`（上方模块名即链接；`LINKS.md` 里也有纯文本直链可批量复制）。

## 规则集

| 文件 | 用途 |
|---|---|
| `Proxy/Surge/Rule/Direct.list` | 直连域名清单 |
| `Proxy/Surge/Rule/10007re.list` | 空占位 |
| `Proxy/Surge/Rule/Reject.list` | 空占位（拦截改用 `DOMAIN-SET` 外部规则集） |

Egern 规则：`Emby.list`、`Proxy.list`、`Reject.list`、`Tiktok1.list`、`Youtube1.list`。

## 脚本镜像 `copy/js/`（80 个）

命名规则 `<上游owner>_<仓库名>_<原文件名>.js`。

| # | 脚本 | 用途 | 引用模块 |
|---|---|---|---|
| 1 | `aioneas_surge_klx_app_catalog_unlock.js` | 看理想｜去广告 | 看理想 |
| 2 | `aioneas_surge_klx_app_video_compat.js` | 看理想｜去广告 | 看理想 |
| 3 | `aioneas_surge_klx_no_ads.js` | 看理想｜去广告 | 看理想 |
| 4 | `aioneas_surge_klx_profile_clean.js` | 看理想｜去广告 | 看理想 |
| 5 | `aioneas_surge_klx_vip_page_hide_purchase.js` | 看理想｜去广告 | 看理想 |
| 6 | `chavyleung_scripts_chavy.boxjs.js` | 多模块共用｜Manager Tools、BoxJs | Manager Tools、BoxJs |
| 7 | `chxm1023_rewrite_bdcloud.js` | 百度网盘｜去广告、下载提速 | 百度网盘 |
| 8 | `ddgksf2013_scripts_123pan.js` | 123 云盘｜去广告、直链加速 | 123云盘 |
| 9 | `ddgksf2013_top_bdpan.ads.js` | 百度网盘｜去广告、下载提速 | 百度网盘 |
| 10 | `ddgksf2013_top_bdpan.unlock.js` | 百度网盘｜去广告、下载提速 | 百度网盘 |
| 11 | `ddgksf2013_top_nbpro.ads.js` | 通用广告｜NBPro 规则拦截 | qx_nbproads |
| 12 | `ddgksf2013_top_web.loon.js` | 脚本转换｜Script-Hub 的 Loon 入口（工具类） | 墨鱼手记页一键添加插件 |
| 13 | `deezertidal_private_wnds.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP |
| 14 | `fmz200_wool_scripts_xiaohongshu.js` | 小红书｜去广告、信息流净化 | 小红书 |
| 15 | `fmz200_wool_scripts_zhangshanggongjiao.js` | 微信｜脚本 | 微信 |
| 16 | `guding88_script_xichuangzhu.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP |
| 17 | `he2o_vercel_app_nicegram.js` | Telegram Nicegram｜客户端优化 | Nicegram Premium 𝕏 |
| 18 | `ishowshu_qx_goofish.js` | 闲鱼｜去广告 | 闲鱼 |
| 19 | `ishowshu_qx_soul.js` | Soul｜去广告 | Soul |
| 20 | `kelee_one_alittle-tea.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 21 | `kelee_one_chayanyuese_remove_ads.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 22 | `kelee_one_coco.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 23 | `kelee_one_ems.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 24 | `kelee_one_familymart.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 25 | `kelee_one_kff.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 26 | `kelee_one_lawson.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 27 | `kelee_one_m_stand.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 28 | `kelee_one_ming.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 29 | `kelee_one_qingju.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 30 | `kelee_one_t3.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 31 | `kelee_one_tieba-proto.js` | 百度贴吧｜去广告 | 百度贴吧 |
| 32 | `kelee_one_weibo_remove_ads.js` | 微博｜去广告 | 微博去广告 |
| 33 | `kelee_one_weixin_external_links_unlock.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 34 | `kelee_one_xiaotucc.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 35 | `kokoryh_sparkle_12306.js` | 铁路 12306｜去广告 | 铁路12306 |
| 36 | `kokoryh_sparkle_bilibili.json.js` | 多模块共用｜哔哩哔哩、Bilibili 1080P | 哔哩哔哩、Bilibili 1080P |
| 37 | `kokoryh_sparkle_bilibili.protobuf.request.js` | 哔哩哔哩｜去广告、画质解锁 | 哔哩哔哩 |
| 38 | `kokoryh_sparkle_bilibili.protobuf.response.js` | 哔哩哔哩｜去广告、画质解锁 | 哔哩哔哩 |
| 39 | `kokoryh_sparkle_webpage.bilibili.js` | 哔哩哔哩｜去广告、画质解锁 | 哔哩哔哩 |
| 40 | `loon_103516_xyz_applestoreapi.js` | IP 管理｜IP 信息小工具 | IPA Manager |
| 41 | `loon_103516_xyz_cloudmusic.vip.js` | 网易云音乐会员｜脚本 | 网易云音乐会员 |
| 42 | `loon_103516_xyz_gitrawautocdn.js` | GitHub｜加速与去广告 | GitHub |
| 43 | `loon_103516_xyz_installapp.js` | IP 管理｜IP 信息小工具 | IPA Manager |
| 44 | `loon_103516_xyz_meituan.js` | 美团｜去广告 | 美团 |
| 45 | `loon_103516_xyz_neteasemusic.ads.js` | 网易云音乐｜去广告、部分功能解锁 | 网易云音乐 |
| 46 | `loon_103516_xyz_rednote.feedtime.js` | 小红书｜去广告、信息流净化 | 小红书 |
| 47 | `loon_103516_xyz_replace-body.js` | 京东｜去广告、页面净化 | 京东 |
| 48 | `maasea_sgmodule_youtube.request.js` | YouTube｜去广告 | YouTube (Music) |
| 49 | `maasea_sgmodule_youtube.response.js` | YouTube｜去广告 | YouTube (Music) |
| 50 | `mw418_loon_jd_price.js` | 京东｜去广告、页面净化 | 京东 |
| 51 | `one_api_zzxu_de_loon.js` | one-api 工具｜上游同名插件，功能随上游 | One |
| 52 | `rucu6_pages_dev_amap.js` | 高德地图｜去广告、首页净化 | 高德地图 |
| 53 | `rucu6_pages_dev_jingdong.js` | 京东｜去广告、页面净化 | 京东 |
| 54 | `rucu6_pages_dev_pinduoduo.js` | 拼多多｜去广告 | 拼多多 |
| 55 | `rucu6_pages_dev_xiaohongshu.js` | 小红书｜去广告、信息流净化 | 小红书 |
| 56 | `rucu6_pages_dev_zhihu.js` | 知乎｜去广告 | 知乎 |
| 57 | `script-hub-org_script-hub_rewrite-parser.js` | 多模块共用｜Manager Tools、Script-Hub、墨鱼手记页一键添加插件 | Manager Tools、Script-Hub、墨鱼手记页一键添加插件 |
| 58 | `script-hub-org_script-hub_rule-parser.js` | 多模块共用｜Manager Tools、Script-Hub | Manager Tools、Script-Hub |
| 59 | `script-hub-org_script-hub_script-converter.js` | 多模块共用｜Manager Tools、Script-Hub | Manager Tools、Script-Hub |
| 60 | `script-hub-org_script-hub_script-hub.js` | 多模块共用｜Manager Tools、Script-Hub | Manager Tools、Script-Hub |
| 61 | `sheepfj_sheep_vip.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP |
| 62 | `sub-store-org_sub-store_cron-sync-artifacts.min.js` | 模块管理｜Script-Hub / Sub-Store 面板入口（工具类） | Manager Tools |
| 63 | `sub-store-org_sub-store_cron-sync-artifacts.min_2d4444.js` | 订阅管理｜订阅聚合管理面板（工具类） | Sub-Store |
| 64 | `sub-store-org_sub-store_sub-store-0.min.js` | 多模块共用｜Manager Tools、Sub-Store | Manager Tools、Sub-Store |
| 65 | `sub-store-org_sub-store_sub-store-1.min.js` | 模块管理｜Script-Hub / Sub-Store 面板入口（工具类） | Manager Tools |
| 66 | `sub-store-org_sub-store_sub-store-1.min_53973a.js` | 订阅管理｜订阅聚合管理面板（工具类） | Sub-Store |
| 67 | `venenosix24_ivy-script_coolapk_redirect.js` | 酷安｜去广告 | 酷安 |
| 68 | `weigiegie_666_7dong.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP |
| 69 | `weigiegie_666_bdyy.js` | 波点音乐｜去广告、部分功能解锁 | 波点音乐 |
| 70 | `weigiegie_666_keep.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP |
| 71 | `weigiegie_666_ximalaya.js` | 喜马拉雅｜去广告 | qx_ximalaya |
| 72 | `wf021325_qx_jd_price.js` | 京东｜去广告、页面净化 | 京东 |
| 73 | `yswag_for-own-use_cmsadblock.js` | 运营商 CMS｜广告与推广拦截 | CMS Adblocker |
| 74 | `yswag_for-own-use_listenify.js` | 听书类 App｜去广告 | Listenify |
| 75 | `yu9191_rewrite_duetdisplay.js` | 综合 App｜解锁合集（B 站画质、网盘、会员类接口改写） | APP |
| 76 | `yuheng0101_x_no_ads.js` | 番茄小说｜去广告 | 帆书 |
| 77 | `zenmofeishi_qx_meituannoad.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 78 | `zirawell_r-store_cotti.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |
| 79 | `zirawell_r-store_foliday.js` | 微信｜脚本 | 微信 |
| 80 | `zirawell_r-store_wechatapplet.js` | 微信｜去广告、公众号 / 朋友圈 / 小程序净化 | 微信 |

## 变更记录

| 日期 | 内容 |
|---|---|
| 2026-11-11 | 模块去 Loon 门控化：删 `#!arguments` 与 `{{{}}}`、参数内联默认值、功能默认开启；元数据只留 name/desc、剥离全部注释（模块总体积 881,833 B → 677 KB 量级，-23%）；脚本去掉尾注；蜗牛读书 `tradeEndTime` 改 2099-12-31 |
| 2026-11-11 | 删除 `blockAds` / `iTunes` / `reven` / `wloc`；京东仅保留表格图比价；网易云会员拆为独立模块；清理 95 个无引用脚本；全部文件 commit message 改为用途（Last commit message 直接可读） |

