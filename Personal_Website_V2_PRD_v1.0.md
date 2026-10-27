# Personal Website V2 — Product Requirements Document

**版本：** v1.0（第一阶段设计决策汇总）  
**日期：** 2026-10-27  
**状态：** 需求基线；待进入线框图、文案和技术实施细化  
**现有代码：** https://github.com/jimmyhan-pixel/My-first-website  
**自定义域名（仓库 CNAME）：** `haoyuhan.com`（DNS、HTTPS 与线上运行状态待核实）  
**托管目标：** GitHub Pages（免费）｜**DNS/域名管理：** Cloudflare

## 1. 产品定位与目标

网站是 Jimmy Han 的 **Professional HQ / Personal Brand Website**，首先服务专业社交与人际连接（Networking / Professional Contacts），而不是复制 LinkedIn 简历，或把 GitHub 项目仓库搬到网页上。

**品牌主线：** Legal × Technology，逐渐指向 AI Governance / Privacy / GRC。首页强调专业、可信、清晰；深入浏览后才能发现更多创造力、兴趣和个人气质。

**三个平台的分工：**
- LinkedIn — **Discover**：职业身份、动态、专业社交和外部流量入口。
- Personal Website — **Understand**：选择和组织信息、阐释跨领域职业路径、展示思考方式、连接其他平台。
- GitHub — **Verify**：项目技术文档、可核查证据、配置、截图和实现过程。

**V2 第一版的成功标准：** 首次访问者可以快速理解 Jimmy 的职业定位，查看真实项目，轻松打开 Resume，并通过邮件、LinkedIn 或 GitHub 继续建立联系；主站在手机、平板、桌面均可使用。

## 2. 用户与设计原则

**主要访客：** 专业联系人、同行、潜在合作伙伴、职业社交对象。  
**次要访客：** Recruiter / HR、Hiring Manager、Technical Interviewer。

**原则：**
1. 内容优先、阅读优先，不强迫任何人体验小游戏或动画。
2. 第一印象是成熟克制的 Editorial Professional；创意通过深入探索逐渐出现。
3. 首页是一篇有选择的个人介绍，不是完整简历或完整技术文档。
4. 真实、有依据地描述本人贡献；不得把 AI 辅助完成的代码描述为独立手写实现。
5. 所有关键内容通过普通链接可达，不依赖 hover、动画或第三方服务。
6. 尽量复用既有代码与成果，而非为了技术栈现代化重写。

## 3. 发布范围与优先级

### P0 — V2 第一版必须完成
- 新首页：Hero、Career Journey、Work、Notes 入口、Contact/footer。
- Work 内容组织：Featured Work（初期约 2–3 个，可调整）与 More Work（可展开列表），按品牌叙事优先排序。
- Case Study 项目详情页：统一骨架、项目自定义视觉、GitHub Evidence 链接、存在时显示 Live Demo。
- 极简 About 页面；Notes / Articles 的列表入口及可发布基础结构（没有内容时不伪造文章）。
- 固定可见的 Resume 入口：导航 + 页脚；一键查看/下载 PDF，无组织和职位填写门槛。
- 正常访问的 LinkedIn、GitHub、Email 出口，以及首页最后的简短联系邀请。
- 顶部低调 Translate 入口，使用 Google Translate 外部网页翻译，不维护多语言内容。
- 全设备响应式、可访问性、基础 SEO、自定义域名与 GitHub Pages 发布。
- 不破坏现有 Admin Dashboard 的登录与授权链路；上线前完成安全核查。

### P1 — 主站上线后可逐步完善
- 更多经核实的项目成果、真实 Case Studies、短 Notes 与正式 Articles。
- About 内的生活照片或旧图片轮播的新位置；是否连到 Instagram 再定。
- 细节动效、更多设计实验、项目视觉素材优化。

### P2 — 独立后续项目：Experiments
- 预留 Experiments 的 URL、视觉概念和未来入口，但 **V2 第一版不开发完整梦幻世界或游戏**。
- 不发布指向空白页的彩蛋按钮。若展示入口，必须有清楚、可用的目标页面。
- 长期方向：纽约现实空间进入超现实梦幻世界；主站与梦境明显切换，始终有 `Back to Reality`；自由探索 + 简单滚动/点击操作；不同小游戏独立设计。
- 潜在内容：Take a Break in NYC、网页游戏、Movement Coach、互动实验。

### 明确不做（V2 首发）
- 不迁移 AWS / Cloudflare Pages；不开发全新 CMS。
- 不要求用户在网站里玩游戏才能查看简历或项目。
- 不做复杂地图、3D 飞行世界、梦境门户或新的角色系统。
- 不做内容语言的多版本维护；不重构整个 Supabase 后台。

## 4. 信息架构（Information Architecture）

**首页：** `/`  
**Work：** `/work/`（含 Featured 与 More Work 的完整目录）  
**Case Study：** `/work/<project-slug>/`  
**Notes：** `/notes/`（短 Notes + Articles；可据实际内容渐进开放）  
**Article：** `/notes/<article-slug>/`  
**About：** `/about/`（极简）  
**Resume：** 可直接访问的 PDF；文档 URL 可复用现有 `resume.pdf` 或指向已确认的最新公开版本。  
**Existing Admin：** `/admin.html`，保留认证与原有功能。  
**Experiments：** 未来预留 `/experiments/`，发布前不允许出现死链接。

路径为推荐的静态目录结构；最终实现可以采用 GitHub Pages 兼容的 `.html` 页面，但必须保留可直接打开、可分享、可被搜索引擎读取的独立 URL。

**导航：** 左侧 `Jimmy Han` 品牌标识；右侧 `Work / Notes / About / Resume ↗`，加一个低调的语言翻译按钮。初始导航正常位于顶部，滚动后变为轻量 sticky header。Experiments 将来作为低调次要入口，不与专业导航争夺视觉优先级。

## 5. 首页结构与交互

1. **Header：** 品牌标识、4 个主导航入口、Translate。没有固定个人信息侧栏。
2. **Hero（普通内容高度）：** 中等大小的姓名；更醒目的、富于思考的英文品牌主张；简短身份补充；次级标签 `AI Governance · Privacy · GRC`；两个 CTA：`View Work` 和 `Resume ↗`。首屏不放个人头像。
3. **Career Journey：** 紧接 Hero 的极简细线时间轴：`Law → Technology → AI Governance / Privacy / GRC`。这是方向示意，不应伪装成逐年雇佣履历。
4. **Work：** 同一个 section 内先 Featured Work，后 More Work；项目顺序按整体品牌叙事而非时间。精选项目采用更自由的视觉布局，其余项目采用紧凑可展开列表。项目卡默认含标题、一句话、本人角色、领域标签。点击进入 Case Study，若存在在线演示则另设 `Try Demo ↗`。
5. **Writing / Notes：** 首页只显示通向 Notes 的简短入口，不预览多篇文章。
6. **Closing + Contact：** 一句自然友好的英文邀请，附 Email、LinkedIn、GitHub、Resume 直接链接；不使用完整联系表单作为主要方式。
7. **Experiments 预留：** 未来可使用角落里轻微运动的抽象小物件，hover/focus 说明用途，但首发不发布无效入口。

## 6. Case Study 页面要求

**统一框架：**
- 标题 + 一句话摘要 + 年份 / 领域
- Project overview：解决什么问题、背景是什么
- My role：本人具体做过的工作与决策
- Approach：方法、设计思路、主要取舍
- Outcome：实际实现、验证结果与成果；没有指标不编造指标
- Reflection：经验教训 / 下一步
- Evidence / Links：`View GitHub Evidence ↗`，必要时 `Try Live Demo ↗`

可以按项目增加示意图、架构图、截图、交互演示、项目专属强调色，不能要求所有项目都具备相同视觉素材。GitHub 负责深层技术证据；网站避免贴大量原始命令和日志。

## 7. 视觉设计系统

- **整体风格：** Editorial Minimalism / Content-first；简单、大方、不做炫技主页。
- **配色：** 近白或 Off-white 背景、深色正文、中性灰辅助信息；主站低调。具体项目页可各自使用强调色；主站强调色仍需后续选定。
- **背景：** 不使用纸张纹理、办公室照片、大型渐变和强装饰。
- **字体：** Serif 用于主要标题和 editorial 气质；Sans-serif 用于正文、导航、按钮和 UI。具体字族后定。
- **结构：** 单栏为主；Hero 和 Featured Work 可以局部左右分栏或不对称。中等信息密度，不依赖固定左侧资料栏。
- **动画：** section 轻微淡入、很小位移、图片细微 hover 效果；不使用重型 parallax 或长时间阻塞的转场。
- **视觉素材：** 首页 Hero 无人像；About 可放少量个人照片；旧图片轮播只在找到合理位置后再使用。
- **移动端：** 完整响应式，触屏可以完成所有主要操作；可展开 More Work 在触屏使用点击；支持系统减少动态效果偏好。

## 8. 翻译和内容策略

- 原始内容统一用 **英文** 撰写；不在源代码中维护中文、日文等译文，也不引入完整 i18n 系统。
- 顶部使用低调 `Translate` 操作，打开 Google Translate 的网站翻译流程，并尽可能传递**当前页面 URL**，而非总回到首页。
- 第三方网页翻译可能受地区、浏览器、动态内容或第三方嵌入影响；不能保证所有页面元素都正确翻译。失败时用户仍能正常阅读英文原站。
- 文字风格：自然、准确、有思想性，但避免空洞口号或无法证明的资历表述。Hero 文案作为独立文案设计任务再精修。

## 9. 现有仓库迁移策略

**现有技术基础：** HTML + CSS + Vanilla JavaScript；GitHub public repo 已包含 `index.html`、`style.css`、`script.js`、`admin.html`、`admin.js`、`images/`、`resume.pdf`、`CNAME` 等。

| 现有模块 | V2 动作 | 备注 |
| --- | --- | --- |
| `index.html` | 改版 | 新信息架构和语义标签 |
| `style.css` | 逐步重构 | 新视觉 tokens、响应式和交互状态 |
| `script.js` | 有选择地保留/整理 | 拆分与主页无关的逻辑前先核对依赖 |
| `admin.html` / `admin.js` | 暂时保留 | 不扩展、不主动重构后台 |
| Admin 登录入口 | 必须确保可继续使用 | 当前登录从首页触发，不能直接删除；迁移/隐藏时需验证完整登录流程 |
| `resume.pdf` | 保留发布能力，移除访问表单门槛 | 核实 PDF 是否为最新版，且允许公开访问 |
| Chat / EmailJS | 首发不作为主要联系入口 | 先核对功能和隐私，再决定保留为次要功能或前台隐藏 |
| 3D 图片轮播 | 从首页主叙事移出 | 可留作 About 照片、未来 Experiments 或保留旧代码 |
| Office desk 背景、时钟、旧 greeting | 从新版前台移除 | 不再符合设计目标 |
| Supabase | 不盲目删除 | Admin 依赖保留；检查认证、RLS、Storage policy，防止公开写权限 |
| `CNAME` | 保留并检查 | 当前仓库内容为 `haoyuhan.com` |

**安全注意：** GitHub Pages 不提供后端访问控制；前端代码和静态资源可公开访问。Supabase publishable key 可出现在客户端，但绝不可在仓库中放 service_role key、私钥或密码。真正的数据读写权限应在数据库 RLS / Storage policies 中实施。旧公开表单与个人数据收集应重新评估必要性。

## 10. 部署、SEO 与可访问性

**部署：** 本地编辑 → Git commit/push → GitHub Pages 自动发布 → Cloudflare 管理的自定义域名 `haoyuhan.com`。

**部署核查：**
- GitHub repo `Settings → Pages` 的发布来源、分支和 Custom domain 配置。
- GitHub CNAME 与 Cloudflare 的 DNS 记录一致；使用 GitHub 官方域名验证功能；检查根域与 `www` 的首选版本以及 HTTPS。
- 验证 CSS、图片、Resume、深层 Case Study 页面在自定义域名下都可以直接访问；如有 404，优先排查路径和发布方式。
- GitHub Free 的 Pages 公共仓库要求及用量限制，应以 GitHub 官方文档为准。

**SEO：** 每页独立 `<title>`、meta description、canonical URL、适当的 Open Graph 图片、语义化 headings、`sitemap.xml` 和 `robots.txt`。添加与真实身份一致的 `Person` 结构化数据以及指向 LinkedIn / GitHub 的 `sameAs`。考虑 Google Search Console 验证和站点地图提交；搜索排名无法保证。

**Accessibility：** 保证键盘可操作、focus 可见、图片 alt、合理对比度、语义 HTML、点击目标足够大；遵守 `prefers-reduced-motion`；翻译和展开控件都有清晰文本标签。

**Performance：** 图片压缩并按需加载，避免大型无意义动画与不必要第三方脚本；以移动端实测和 Lighthouse / Core Web Vitals 作为上线后迭代依据。

## 11. 验收标准（Definition of Done）

- [ ] 首页层级符合 `Hero → Career Journey → Work → Notes 入口 → Contact`。
- [ ] 导航、Resume、LinkedIn、GitHub、Email 均能在桌面及手机端使用。
- [ ] Work 同时提供 Featured 和 More Work；More Work 可键盘/触屏展开。
- [ ] 每个已发布 Case Study 的本人贡献和结果可被核查，不包含虚构数据。
- [ ] 项目有 Demo 时显示独立入口；没有时不显示空按钮。
- [ ] 英文为唯一维护语言，Translate 对当前页面的外部翻译流程经过浏览器测试。
- [ ] 旧 Admin 可以正常登录和使用；Supabase 数据权限通过最小权限检查。
- [ ] GitHub Pages 可由 GitHub 更新自动发布，自定义域名和 HTTPS 工作正常。
- [ ] 站点深层 URL 可以直接打开且正确呈现；不存在无效 Experiments 链接。
- [ ] 移动端没有明显溢出、遮挡和不可点击元素；减少动态效果设置受尊重。
- [ ] SEO 元信息、可分享预览和基本索引入口配置完成。

## 12. 工作顺序

**Step 0 — 基线与备份：** 保存 V1 发布版本/分支，验证域名、后台认证、可公开资源与现有交互。  
**Step 1 — 内容和低保真线框图：** 精修 Hero 文案、制作首页/Work/Notes/About 线框与导航原型。  
**Step 2 — 设计系统：** 选择字体和主站中性色，确定网格、间距、按钮、卡片与动效参数。  
**Step 3 — 首页与公共组件：** 先完成导航、Hero、Journey、Work 首页模块、Contact/footer。  
**Step 4 — 内页：** 添加 Case Studies、极简 About、Notes/Articles 发布结构。  
**Step 5 — QA 与上线：** 移动端、可访问性、翻译、后台回归测试、安全、SEO、Cloudflare DNS 与 GitHub Pages。  
**Step 6 — 下一阶段：** 独立规划 Experiments 的梦境世界与各个小游戏。

## 13. 待补全信息（不阻碍首轮设计）

- 最终公开显示的英文职业主张与身份补充句。
- LinkedIn、GitHub Profile 的精确链接；对外使用的 Email 地址。
- 项目清单、优先级、每个项目的角色、截图、GitHub 与 Demo 链接。
- Resume 的最终 PDF 版本与公开展示许可。
- 是否在 About 复用照片轮播，是否链接 Instagram。
- Notes 与 Articles 的首批真实内容。
- Cloudflare DNS、GitHub Pages 设置和线上可用性实测结果。

---

**范围冻结说明：** 本 PRD 记录第一阶段已经确认的方向。V2 第一版**只做专业主站**；Experiments 视觉世界和多游戏系统属于后续独立版本，不应反向拖延主站上线。
