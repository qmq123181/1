#!name=iTunes系列解锁
#!desc=自动查询 App 内购产品并注入最贵套餐凭证，可在设置中关闭。
#!tag=通杀脚本
#!icon=https://raw.githubusercontent.com/fishdown/Icon/refs/heads/master/app/RevenueCat.png

[Argument]
Enabled = input, "true", tag=启用解锁, desc=是否启用解锁(true拦截并注入凭证/false直接放行)
Expires = input, "2099-09-09", tag=订阅到期日期, desc=格式YYYY-MM-DD(默认2099-09-09)
Country = input, "HK", tag=App Store 国家/地区, desc=用于查询内购产品的 App Store 国家/地区代码 (两位大写字母, ISO 3166-1)。建议填该 App 在 App Store 的所属区域 (即你从哪个区下载的它): 国区 CN, 港区 HK, 美区 US。默认 HK 兼容性最好, 但国区独占/国区限定促销 App 必须填 CN, 否则注入的产品在该区未上架可能导致解锁失败。
Bypass = input, "-", tag=跳过指定App(绕过解锁), desc=遇到修改响应会报错的 App (如 Filebar) 可在此填入其 UA 关键词。多个用逗号隔开，填 - 表示全部解锁。
Strategy = select, "auto", "lifetime_sub", "year", "month", "all", tag=注入策略, desc=auto 官方规范; lifetime_sub 兼容老 App 把 lifetime 塞 subscriptions+2099; year/month 跳过 lifetime; all 注入所有 PID。lifetime 解锁失败时优先换 lifetime_sub。

[Script]
http-response ^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt script-path=https://reven.jsforbaby.workers.dev/reven/loon-itunes.js, requires-body=true, tag=iTunes转发, argument=[{Enabled},{Expires},{Country}]
http-response ^https:\/\/(api\.revenuecat\.com|api\.rc-backup\.com|rc\.visionarytech\.ltd|revenue\.cuto\.app|proxy\.linearity\.io|subscriptions-api\.superwall\.com|api\.adapty\.io)\/ script-path=https://reven.jsforbaby.workers.dev/reven/loon-redirect.js, requires-body=true, timeout=20, tag=Reven转发, argument=[{Bypass},{Strategy}]
[Mitm]
hostname = buy.itunes.apple.com, api.revenuecat.com, api.rc-backup.com, rc.visionarytech.ltd, revenue.cuto.app, proxy.linearity.io, subscriptions-api.superwall.com, api.adapty.io

