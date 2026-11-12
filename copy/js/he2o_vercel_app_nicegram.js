/*
 *
 *
#!name= Nicegram Premium 𝕏
#!desc= 对 Nicegram 学习探索 注:广告可在Nicegram ==> ATT ==> 加入Nicegram空投活动页面 ==> 设置 完全关闭;
#!openUrl= https://apps.apple.com/app/id1608870673
#!author= 设置,简体中文语言[https://t.me/setlanguage/zh-hans-raw],繁体中文语言[https://t.me/setlanguage/zh-hant-raw],福壁纸（请勿随意操作）[https://t.me/bg/M4izoGYCIFa-AgAAz9mIZVvz3e0]
#!icon= https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/95/08/31/9508311c-9e94-3038-b267-5d4c8e39cb21/AppIconLLC-0-0-1x_U007epad-0-1-0-85-220.png/460x0w.webp
#!date= 2025-12-17 00:00:00

[Argument]
Demo=input,"", tag = 广告关闭说明（已废弃）, desc = 仅说明无实际用途
Tip=input,"置顶推广 <== 解除", tag = 置顶推广说明(v2.3.5新增), desc = 仅说明无实际用途

attPoints = input,"9999", tag = 积分数量（自信）,desc = 选填
gems = input,"9999", tag = 宝石数量（自信）, desc = 选填

[Rule]
DOMAIN,static-cf.nicegram.app,REJECT
DOMAIN,image.adsgram.me,REJECT
DOMAIN,api.adsgram.ai,REJECT
DOMAIN,relay.walletconnect.com,REJECT
DOMAIN,verify.walletconnect.org,REJECT
DOMAIN,firebaseremoteconfig.googleapis.com,REJECT
DOMAIN,firebase-settings.crashlytics.com,REJECT
DOMAIN,firebaseinstallations.googleapis.com,REJECT

[Script]
http-response ^https?:\/\/nicegram\.cloud\/api\/v\d+\/(ai-assistant\/purchase-list|telegram\/auth|user\/info|unblock-feature|adsgram\/get-banner|att\/scroll-to-earn\/user-info|att\/scroll-to-earn\/config|att\/scroll-to-earn\/ads-list|airdrop\/task-list) script-path=https://he2o.vercel.app/Resource/Plugin/Nicegram.js, requires-body=true, timeout=60, tag=Nicegram Premium 𝕏, argument=[{attPoints},{gems}]

[Mitm]
hostname = nicegram.cloud
*
*
*/






let obj = JSON.parse($response.body);
let url = $request.url;

const gems_key = (typeof $argument !== "undefined" && $argument?.gems != null) ? Number($argument.gems) : undefined;
const attPoints_key = (typeof $argument !== "undefined" && $argument?.attPoints != null) ? Number($argument.attPoints) : undefined;

const subscriptionApis = [/ai-assistant\/purchase-list/];
const userApis = [/telegram\/auth/, /user\/info/];
const unblockApis = [/unblock-feature/];
const bannerApis = [/adsgram\/get-banner/];
const scrollUserInfoApis = [/att\/scroll-to-earn\/user-info/];
const clearDataApis = [/att\/scroll-to-earn\/config/, /att\/scroll-to-earn\/ads-list/, /airdrop\/task-list/];

const data = obj.data || obj;

if (subscriptionApis.some(r => r.test(url))) {
    data.subscriptions?.forEach(item => {
        if (item.id === 9) Object.assign(item, { isInApp: true, isActive: 1 });
    });
    Object.assign(data, {
        topUpBalance: [],
        lifetime_subscription: true,
        store_subscription: true,
        subscription: true
    });
}
else if (userApis.some(r => r.test(url))) {
    Object.assign(data.user, {
        lifetime_subscription: true,
        subscription: true,
        store_subscription: true,
        subscriptionPlus: true
    });
}
else if (unblockApis.some(r => r.test(url))) {
    Object.assign(data, { premium: true, settings: Object.assign(data.settings || {}, { max_pinned_chats: 9999 }) });
}
else if (bannerApis.some(r => r.test(url))) {
    Object.assign(data, { device: {}, user: { is_premium: true } });
}
else if (scrollUserInfoApis.some(r => r.test(url))) {
    Object.assign(data, { enabled: false, enabledAds: false, collectUserActions: false, enableCoinAnimation: false, autopilot: false });
    data.placementSettings?.forEach(item => item.enabled = false);
}
else if (clearDataApis.some(r => r.test(url))) {
    if (Array.isArray(data)) data.length = 0;
    else if (Array.isArray(data.data)) data.data = [];
}

function modifyBalances(o) {
    if (o && typeof o === "object") {
        for (let key in o) {
            if (key === "gems_balance" && gems_key != null) o[key] = gems_key;
            else if (key === "attPoints" && attPoints_key != null) o[key] = attPoints_key;
            else if (typeof o[key] === "object") modifyBalances(o[key]);
        }
    }
}

modifyBalances(data);

$done({ body: JSON.stringify(obj) });

