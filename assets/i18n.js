(function () {
  const STORAGE_KEY = 'sandstone-lang';
  const DEFAULT_LANG = 'zh';

  const dict = {
    // Shared navigation
    '服务': 'Services',
    'AI平台': 'AI Platform',
    '资产全景分析': 'Asset Panorama',
    '持仓全景与智能分析': 'Portfolio intelligence',
    'AI 交易智能体': 'AI Trading Agents',
    '智能投研报告': 'AI Research Reports',
    'AI Research Reports · 智能投研洞察': 'Research Reports · Investment Intelligence',
    '投资理念': 'Investment Philosophy',
    '覆盖地区': 'Coverage',
    '团队': 'Team',
    '家族办公室': 'Family Office',
    '关于我们': 'About Us',
    '顾问登录': 'Adviser Login',
    '知识库': 'Knowledge Base',
    '客户尽调': 'Client onboarding',
    '客户管理': 'Relationship desk',
    '内部资料': 'Internal resources',
    '免费咨询': 'Consultation',
    '私密咨询': 'Private Consultation',
    '← 彩石财富': '← Sandstone Capital',
    '服务体系': 'Services',
    '家族治理': 'Family Governance',
    '投资策略': 'Investment Strategy',
    '慈善影响': 'Philanthropy',
    '下一代传承': 'Next Generation',
    '报告体系': 'Reporting',

    // Homepage hero and trust row
    '亚洲顶级 AI 驱动财富管理平台': 'AI-Driven Wealth Management for Asia',
    '智能财富，': 'Intelligent Wealth,',
    '跨越边界': 'Beyond Borders',
    '融合前沿人工智能与资深财富顾问，为亚洲高净值客户提供专属的税务优化、私募市场准入与跨代际财富传承解决方案。': 'Combining advanced artificial intelligence with senior wealth advisors, Sandstone delivers tailored tax-aware planning, private market access, and intergenerational wealth solutions for high-net-worth clients across Asia.',
    '开始财富之旅': 'Begin Your Wealth Journey',
    '了解AI平台': 'Explore AI Platform',
    '总资产净值 Total Portfolio': 'Total Portfolio Value',
    '+¥ 2,130,000  (+8.1%) 今年至今': '+¥ 2,130,000 (+8.1%) year to date',
    '资产配置 Asset Allocation': 'Asset Allocation',
    'A股 & 港股': 'A-Shares & Hong Kong Equities',
    '境外股票': 'Global Equities',
    '私募基金': 'Private Funds',
    '固定收益': 'Fixed Income',
    'AI 税务优化提示：': 'AI Tax Optimization Note:',
    '建议在本季度末前执行亏损收割，预计可节省税款': 'Consider tax-loss harvesting before quarter end. Estimated tax saving:',
    '独立平台': 'Independent Platform',
    '服务超高净值人士与家族办公室': 'Serving UHNW individuals and family offices',
    '亚太视角': 'Asia-Pacific Perspective',
    '连接香港、新加坡与中国市场': 'Connecting Hong Kong, Singapore and China markets',
    '开放架构': 'Open Architecture',
    '整合多元机构与专业资源': 'Integrating institutional and professional resources',
    '长期陪伴': 'Long-Term Advisory',
    '从投资管理到家族传承': 'From investment management to legacy planning',

    // Homepage services
    'Our Services': 'Our Services',
    'Private Wealth, Precisely Orchestrated': 'Private Wealth, Precisely Orchestrated',
    '以独立顾问视角，为客户整合投资管理、财富规划、家族治理与数字化平台能力，提供适配不同阶段的长期解决方案。': 'From an independent advisory perspective, we integrate investment management, wealth planning, family governance and digital platform capabilities into long-term solutions for every stage of wealth.',
    '私人财富管理': 'Private Wealth Management',
    '围绕客户的家庭目标、风险偏好与流动性需求，制定长期资产配置与定期复盘机制，兼顾稳健增长与财富保护。': 'We design long-term asset allocation and review frameworks around family goals, risk preferences and liquidity needs, balancing resilient growth with wealth preservation.',
    '预约咨询 →': 'Book a Consultation →',
    '投资管理': 'Investment Management',
    '覆盖公开市场、另类资产与跨境配置研究，强调风险预算、组合纪律与持续监控，帮助客户在复杂市场中保持清晰决策。': 'Across public markets, alternatives and cross-border allocation research, we emphasize risk budgeting, portfolio discipline and ongoing monitoring to support clear decisions in complex markets.',
    '查看投资理念 →': 'View Our Philosophy →',
    '财富规划': 'Wealth Planning',
    '结合税务、保险、信托与移民教育等议题，协助客户建立跨地域、跨代际的财富安排，并与专业机构协同落地。': 'We coordinate tax, insurance, trusts, education and migration planning to help families structure wealth across jurisdictions and generations.',
    '了解流程 →': 'View the Process →',
    '家族治理与传承': 'Family Governance & Legacy',
    '面向企业家及多代家族，支持家族宪章、继任安排、慈善规划与家族成员沟通机制建设。': 'For entrepreneurs and multi-generational families, we support family constitutions, succession planning, philanthropy and communication frameworks.',
    '了解家办方案 →': 'Explore Family Office →',
    '企业与资本顾问': 'Corporate & Capital Advisory',
    '为企业主与家族企业提供融资、股权结构、退出安排及上市后财富管理衔接建议，连接企业价值与家族资产规划。': 'We advise business owners and family enterprises on financing, ownership structure, exits and post-liquidity wealth planning.',
    '沟通需求 →': 'Discuss Your Needs →',
    '家族办公室平台': 'Family Office Platform',
    '整合投资、法律、税务、信托、教育与慈善等外部专业资源，协助家族以统一视角管理复杂事项。': 'We coordinate investment, legal, tax, trust, education and philanthropic resources so families can manage complexity through a unified lens.',

    // Homepage AI platform and journey
    'AI 智能平台': 'AI Platform',
    '数字化': 'Digital',
    '财富平台': 'Wealth Platform',
    '以资产全景、组合分析与顾问协作为核心，帮助客户与顾问在同一视图下跟踪风险、目标与执行进度。': 'Built around asset visibility, portfolio analytics and advisor collaboration, the platform helps clients and advisors track risk, goals and execution in one shared view.',
    '资产全景视图': 'Asset Panorama',
    '整合多账户、多市场与不同资产类别，形成便于客户与顾问共同查看的资产概览。': 'Aggregate multi-account, multi-market and multi-asset data into a clear overview for clients and advisors.',
    '目标与流动性规划': 'Goals & Liquidity Planning',
    '围绕教育、置业、企业退出、传承等事件建立目标档案，并持续跟踪资金需求与执行节奏。': 'Build goal profiles for education, property, business exits and succession, then track funding needs and execution rhythm.',
    '顾问协作记录': 'Advisor Collaboration',
    '沉淀会议纪要、行动事项与组合调整建议，让关键决策有记录、有负责人、有进度。': 'Capture meeting notes, action items and portfolio recommendations so each decision has context, ownership and progress.',
    '情景分析与提醒': 'Scenario Analysis & Alerts',
    '针对利率、汇率、行业波动等市场情景进行组合影响评估，并辅助顾问进行定期复盘。': 'Assess portfolio impact across rates, currencies and sector scenarios, supporting regular advisor reviews.',
    '彩石 AI 顾问': 'Sandstone AI Advisor',
    '在线': 'Online',
    '我想了解，如果利率环境继续变化，我的跨境资产配置需要重点关注什么？': 'If the rate environment keeps shifting, what should I focus on in my cross-border allocation?',
    '从利率、汇率与资产久期三个角度看，当前组合可重点关注：': 'From rates, FX and asset duration perspectives, the current portfolio can focus on:',
    '• 港元资产与美元利率路径的联动': '• The linkage between HKD assets and the USD rate path',
    '• 股票、债券与现金类资产的再平衡纪律': '• Rebalancing discipline across equities, bonds and cash-like assets',
    '• 家族未来现金流需求与投资期限是否匹配': '• Alignment between future family cash flows and investment horizons',
    '是否需要我整理一份顾问复盘清单？': 'Would you like me to prepare an advisor review checklist?',
    '好的，同时帮我看看有没有税务损失收割的机会': 'Yes, and please check whether there are tax-loss harvesting opportunities.',
    'AI 正在分析您的投资组合...': 'AI is analyzing your portfolio...',
    'Client Journey': 'Client Journey',
    '从理解需求到长期陪伴': 'From Understanding to Long-Term Advisory',
    '初步咨询': 'Initial Consultation',
    '与资深顾问进行45分钟的深度沟通，了解您的财务状况、目标与风险偏好，完全保密。': 'A confidential conversation with a senior advisor to understand your financial profile, objectives and risk preferences.',
    '资产与目标梳理': 'Asset & Goal Mapping',
    '梳理现有资产结构、家庭目标与关键约束，识别需要优先处理的规划议题。': 'Map existing assets, family goals and key constraints to identify planning priorities.',
    '方案制定': 'Solution Design',
    '顾问与AI协同设计专属投资组合，涵盖资产配置、税务结构与传承安排。': 'Advisors and AI work together to design a tailored portfolio, including allocation, tax structure and legacy planning.',
    '持续优化': 'Ongoing Optimization',
    '建立定期复盘机制，随着市场环境、家庭事项与企业阶段变化持续调整方案。': 'Establish a review cadence so the plan evolves with markets, family events and business milestones.',

    // Homepage investment, regions, social proof and team
    'What We Deliver': 'What We Deliver',
    '以纪律和透明度管理复杂财富': 'Managing Complex Wealth with Discipline and Transparency',
    '彩石强调长期资产配置、风险管理、成本透明与跨专业协作，让客户在复杂市场中保持清晰、可执行的财富决策框架。': 'Sandstone emphasizes long-term allocation, risk management, cost transparency and cross-disciplinary coordination, giving clients a clear and actionable decision framework.',
    '税后收益最大化': 'Tax-Aware Optimization',
    '年均税后超额收益': 'Illustrative after-tax alpha',
    '多数投资者关注税前收益，而我们的AI全年持续执行税损收割、资产区位优化，将税收成本压缩至最低，让每一分收益都物尽其用。': 'Many investors focus on pre-tax returns. Our AI supports continuous tax-loss harvesting and asset location analysis to help improve after-tax outcomes.',
    '✦ 全年365天自动执行': '✦ Continuous monitoring',
    '机构级私募准入': 'Institutional Private Market Access',
    '顶级私募合作伙伴': 'Curated private market network',
    '通过彩石平台，客户可直接参与通常仅向主权基金和顶级机构开放的私募股权、亚洲基础设施及房地产投资机会。': 'Through Sandstone, clients can review private equity, Asian infrastructure and real asset opportunities typically accessed through institutional channels.',
    '✦ 机构级 · 精选项目': '✦ Institutional access · curated opportunities',
    '个性化直接指数': 'Personalized Direct Indexing',
    'bps 平均ETF费用节省': 'Illustrative ETF cost reduction',
    '直接持有沪深300、MSCI亚太等指数成分股，获得更低成本、更灵活的税务管理与ESG筛选能力，彻底摆脱"一刀切"的ETF模式。': 'Direct indexing can provide more flexible tax management, ESG screening and customization than a one-size-fits-all ETF approach.',
    '✦ 完全个性化定制': '✦ Fully customized',
    '多元货币 & 跨境合规': 'Multi-Currency & Cross-Border Compliance',
    '亚太监管辖区': 'Asia-Pacific jurisdictions',
    '我们在香港（SFC持牌）、新加坡（MAS持牌）及中国私募基金管理人等框架下开展合规服务，相关资质以适用主体及公开信息为准。': 'We operate under relevant frameworks in Hong Kong, Singapore and China private fund management. Qualifications are subject to applicable entities and public information.',
    '✦ 多辖区合规资质': '✦ Multi-jurisdiction compliance',
    '覆盖市场': 'Markets',
    '根植亚洲，': 'Rooted in Asia,',
    '连接全球': 'Connected Globally',
    '从上海到新加坡，从东京到迪拜，彩石在亚洲核心财富中心设有实体团队，提供属地化的专业服务。': 'From Shanghai to Singapore, Tokyo to Dubai, Sandstone serves clients across Asia’s key wealth centers with localized expertise.',
    '中国大陆': 'Mainland China',
    '香港': 'Hong Kong',
    '新加坡': 'Singapore',
    '日本': 'Japan',
    '迪拜 · 中东': 'Dubai / Middle East',
    '上海': 'Shanghai',
    '北京': 'Beijing',
    '东京': 'Tokyo',
    '主要据点': 'Primary Hubs',
    '客户评价': 'Client Perspectives',
    '他们选择了彩石': 'Why Clients Choose Sandstone',
    '彩石的AI税务优化在第一年就为我节省了超过180万元的税款。更重要的是，他们的顾问真正理解我作为科技创业者的资产结构——期权、股权、现金，他们都处理得游刃有余。': 'Sandstone’s AI-enabled tax analysis helped me identify meaningful planning opportunities. More importantly, their advisors understood the complexity of a technology founder’s assets.',
    '某独角兽公司联合创始人 · 上海': 'Co-founder of a unicorn company · Shanghai',
    '作为第二代家族企业接班人，我需要的不只是投资管理，而是整个家族财富的系统规划。彩石帮我建立了信托架构，协调了内地、香港和新加坡三地的资产，专业且高效。': 'As a second-generation family business leader, I needed more than investment management. Sandstone helped coordinate trust structures and assets across Mainland China, Hong Kong and Singapore.',
    '家族企业二代接班人 · 香港': 'Second-generation family business successor · Hong Kong',
    '我在新加坡从事金融业多年，见过很多财富管理平台。彩石是第一个让我觉得"科技"和"财富管理"真正融合的——AI实时分析，顾问深度沟通，缺一不可。': 'After years in finance in Singapore, Sandstone is one of the few platforms where technology and wealth advisory feel genuinely integrated.',
    '前私募基金经理 · 新加坡': 'Former private fund manager · Singapore',
    '核心团队': 'Core Team',
    '来自顶尖机构的精英团队': 'A Team from Leading Institutions',
    '我们的创始团队汇聚私人银行、量化投资、监管科技领域的顶级人才，共同构建亚洲最智能的财富管理平台。': 'Our founding team brings together private banking, quantitative investment and regulatory technology expertise to build an intelligent wealth platform for Asia.',
    'CEO & 联合创始人': 'CEO & Co-Founder',
    'CTO & 联合创始人': 'CTO & Co-Founder',
    '首席投资官': 'Chief Investment Officer',
    '首席合规官': 'Chief Compliance Officer',
    '前任：': 'Previously:',
    '🏛 SFC 香港持牌': '🏛 SFC Hong Kong Licensed',
    '🇸🇬 MAS 新加坡持牌': '🇸🇬 MAS Singapore Licensed',
    '📋 中国私募基金管理人': '📋 China Private Fund Manager',
    '🛡 ISO 27001 信息安全认证': '🛡 ISO 27001 Information Security',
    '🔒 银行级数据加密': '🔒 Bank-Grade Data Encryption',

    // Homepage CTA, footer and modal
    '开始您的旅程': 'Begin Your Journey',
    '您的财富，': 'Your Wealth,',
    '值得': 'Deserves',
    '更智能': 'Smarter',
    '的管理': 'Management',
    '立即预约免费的财富诊断咨询，我们的资深顾问将在48小时内与您联系。': 'Book a complimentary private consultation. A senior advisor will contact you within 48 hours.',
    '免费预约咨询': 'Book a Consultation',
    '您的信息将受到严格保密，不会与任何第三方共享。': 'Your information will be kept strictly confidential and will not be shared with third parties.',
    '预约后我们将通过您登记的联系方式与您取得联系。': 'After booking, we will contact you through the details you provide.',
    '无任何隐藏费用': 'No hidden fees',
    '银行级安全保障': 'Bank-grade security',
    '多辖区合规资质': 'Multi-jurisdiction compliance',
    '专属顾问一对一服务': 'Dedicated one-on-one advisory',
    '亚洲领先的AI驱动智能财富管理平台。以技术赋能专业，让机构级财富管理触手可及。': 'A leading AI-driven wealth management platform for Asia, combining technology with professional advisory access.',
    '产品服务': 'Solutions',
    'AI智能投顾': 'AI Advisory',
    '税务优化': 'Tax Optimization',
    '私募基金准入': 'Private Fund Access',
    '直接指数化': 'Direct Indexing',
    '财富传承规划': 'Legacy Planning',
    '客户类型': 'Client Types',
    '创业者 & 企业主': 'Entrepreneurs & Business Owners',
    '专业人士': 'Professionals',
    '家族二代': 'Next Generation',
    '境外华人': 'Overseas Chinese',
    '机构投资者': 'Institutional Investors',
    '关于彩石': 'About Sandstone',
    '我们的故事': 'Our Story',
    '投资者关系': 'Investor Relations',
    '加入我们': 'Careers',
    '新闻中心': 'News',
    '联系我们': 'Contact',
    '© 2026 彩石财富管理（集团）有限公司。保留所有权利。': '© 2026 Sandstone Wealth Management (Group) Limited. All rights reserved.',
    '彩石财富于香港、新加坡及中国私募基金管理人等相关框架下开展业务；相关资质以适用主体及公开信息为准。': 'Sandstone operates under relevant frameworks in Hong Kong, Singapore and China private fund management. Qualifications are subject to applicable entities and public information.',
    '⚠ 重要风险提示': '⚠ Important Risk Notice',
    '：投资涉及风险，过往业绩不代表未来表现。本网站内容仅供参考，不构成投资建议。请在投资前仔细阅读相关风险披露文件。': ': Investments involve risk. Past performance is not indicative of future results. This website is for reference only and does not constitute investment advice.',
    '免费财富诊断': 'Complimentary Wealth Review',
    '预约一对一私密咨询': 'Book a Private One-on-One Consultation',
    '留下您的联络方式与关注方向，资深顾问将在 48 小时内与您联系。所有信息严格保密。': 'Leave your contact details and areas of interest. A senior advisor will contact you within 48 hours. All information is strictly confidential.',
    '称呼': 'Name',
    '联络电话': 'Phone',
    '电子邮箱': 'Email',
    '可投资资产规模': 'Investable Asset Range',
    '咨询方向': 'Area of Interest',
    '您的咨询问题': 'Your Question',
    '请选择': 'Please select',
    '财富管理 / 资产配置': 'Wealth management / asset allocation',
    '家族办公室 / 财富传承': 'Family office / legacy planning',
    '税务优化（TLH / 跨境）': 'Tax optimization (TLH / cross-border)',
    '私募 / 另类投资准入': 'Private markets / alternatives access',
    '跨境 / 全球化配置': 'Cross-border / global allocation',
    '其他': 'Other',
    '我同意彩石财富的顾问就本次咨询通过电话/邮件与我联系，并知悉我的信息将依保密政策处理。': 'I agree that Sandstone advisors may contact me by phone or email regarding this consultation, and understand that my information will be handled confidentially.',
    '提交咨询': 'Submit Inquiry',

    // Family office hero and services
    '亚洲视角 · 单一与多家族办公室': 'An Asia Perspective for Single and Multi-Family Offices',
    '财富，': 'Wealth, ',
    '跨越世代': 'Across Generations',
    '永续传承': 'Built to Endure',
    '彩石家族办公室融合国际成熟家族办公室的严谨方法、传承智慧与治理经验，为亚洲超高净值家族提供全面的财富保护与传承解决方案。': 'Sandstone Family Office brings together disciplined family office methodology, governance experience and legacy planning to help ultra-high-net-worth families in Asia protect and pass on wealth thoughtfully.',
    '预约私密会面': 'Request a Private Meeting',
    '了解服务体系': 'Explore Services',
    '服务方式': 'Service Model',
    '专属架构': 'Dedicated Architecture',
    '围绕家族目标定制治理与投资框架': 'Governance and investment frameworks tailored to family objectives',
    '合作模式': 'Engagement Model',
    '跨代际议题持续跟踪与复盘': 'Ongoing review across intergenerational matters',
    '核心能力': 'Core Capability',
    '多资产整合': 'Multi-Asset Integration',
    '统筹投资、税务、法律与传承资源': 'Coordinating investment, tax, legal and legacy resources',
    '传承规划': 'Legacy Planning',
    '系统化': 'Systematic',
    '家族治理、接班人与慈善规划协同推进': 'Governance, succession and philanthropy developed together',
    '八大专业': 'Eight Professional',
    '服务支柱': 'Service Pillars',
    '我们深信，真正的家族办公室不只是打理财富，而是守护一个家族数代人的梦想、价值观与选择。彩石提供从投资到传承、从慈善到生活方式的全方位专业服务，由具备跨市场经验的专业团队统筹推进。': 'We believe a true family office is not only about managing wealth, but about protecting a family’s aspirations, values and choices across generations. Sandstone coordinates investment, legacy, philanthropy and lifestyle services through an experienced cross-market team.',
    '投资组合管理': 'Portfolio Management',
    '多资产类别定制组合，直接指数化、私募股权、另类资产无缝整合，AI驱动的税务优化全年持续运行。': 'Customized multi-asset portfolios integrating direct indexing, private equity and alternatives with ongoing tax-aware analysis.',
    '深入了解 →': 'Learn More →',
    '遗产与信托': 'Estate & Trust',
    '离岸信托架构设计、遗嘱规划、受益人安排、多辖区遗产税筹划，确保财富按家族意愿传承。': 'Offshore trust structuring, wills, beneficiary arrangements and multi-jurisdiction estate planning aligned with family intent.',
    '咨询方案 →': 'Discuss a Plan →',
    '税务筹划': 'Tax Planning',
    '多辖区税务架构优化、CRS合规申报、税务居民身份规划、新加坡13U/13O家族办公室设立支持。': 'Multi-jurisdiction tax structuring, CRS reporting support, tax residency planning and Singapore 13U/13O family office setup support.',
    '了解详情 →': 'Learn More →',
    '慈善与影响力': 'Philanthropy & Impact',
    '家族慈善基金设立、ESG影响力投资策略、慈善捐赠税务优化，让财富创造社会价值。': 'Family foundation setup, ESG and impact investing strategy, and charitable planning to turn wealth into social value.',
    '下一代教育': 'Next Gen Education',
    '为18-35岁家族成员提供专属财商教育、投资决策参与、创业支持与领导力培养计划。': 'Financial education, investment participation, entrepreneurship support and leadership programs for next-generation family members.',
    '整合报告': 'Consolidated Reporting',
    '实时多资产类别整合报告、组合归因分析、风险仪表盘、家族成员专属移动端访问权限。': 'Real-time multi-asset reporting, portfolio attribution, risk dashboards and controlled access for family members.',
    '生活方式服务': 'Family Concierge',
    '私人飞机安排、海外置业协助、子女名校申请支持、家族活动策划、家庭安保咨询。': 'Private travel, overseas property support, school application coordination, family event planning and household security advisory.',

    // Family office deeper sections
    '制度，是财富': 'Governance Is',
    '最持久的护城河': 'The Enduring Moat',
    '百年家族财富的共同密码，不只是投资能力，而是一套清晰的家族治理机制。彩石参照国际成熟实践，为每个家族量身定制。': 'The common foundation of enduring family wealth is not only investment skill, but a clear governance mechanism. Sandstone adapts mature international practices to each family.',
    '家族宪章制定': 'Family Constitution',
    '明确家族价值观、使命、财富分配原则与行为准则，形成约束所有成员的根本文件': 'Clarify values, mission, distribution principles and behavioral standards in a foundational family document.',
    '家族委员会架构': 'Family Committee Structure',
    '设立投资委员会、家族议会与信托委员会，明确各层级决策权限与程序，避免内部纷争': 'Define investment committees, family councils and trust committees with clear decision rights and procedures.',
    '接班人培育机制': 'Successor Development',
    '识别并培育第二代接班候选人，制定能力评估框架，提前10-15年启动系统化交接计划': 'Identify and prepare next-generation successors with a structured capability framework and early transition planning.',
    '家庭会议与调解': 'Family Meetings & Mediation',
    '定期主持家庭会议，提供专业中立的调解服务，化解家族成员间的分歧与矛盾': 'Facilitate family meetings and neutral mediation to resolve disagreements constructively.',
    '"创造财富用一代人，守护财富需要一套制度。我们在彩石建立的家族委员会，是我们家族未来200年的基石。"': '"Wealth can be created in one generation; preserving it requires a system. The family committee we built with Sandstone gives our family a durable foundation."',
    '李慧琳，彩石第三代客户家族代表人': 'Third-generation family representative',
    '第1步：家族诊断': 'Step 1: Family Diagnostic',
    '第2步：宪章起草': 'Step 2: Constitution Drafting',
    '第3步：架构落地': 'Step 3: Implementation',
    '持续：年度审查': 'Ongoing: Annual Review',
    '— 深度访谈所有关键成员，梳理现有架构与潜在矛盾点': '— Interview key members and identify current structures and potential points of tension',
    '— 3-6个月共创流程，形成全员认可的家族宪章草案': '— A co-creation process to develop a family constitution draft accepted by key stakeholders',
    '— 信托、控股公司、委员会同步搭建，法律文件同步完成': '— Coordinate trusts, holding companies, committees and legal documentation',
    '— 每年复盘治理架构有效性，随家族发展动态调整': '— Review governance effectiveness annually and adapt as the family evolves',
    '机构智慧，': 'Institutional Intelligence,',
    '为家族所用': 'Designed for Families',
    '彩石投资团队具备长期跨市场投资、私人财富管理与资产配置经验。我们将机构级投资能力，以家族视角重新诠释。': 'Sandstone’s investment team brings long-term cross-market investment, private wealth and allocation experience, reinterpreted through a family lens.',
    '核心配置': 'Core Allocation',
    '全球多资产配置': 'Global Multi-Asset Allocation',
    '以家族长期目标（教育基金、退休生活、传承资产）为导向，跨股票、债券、另类资产的战略配置，流动性梯次管理，确保每个人生里程碑有充足资金保障。': 'Strategic allocation across equities, bonds and alternatives, aligned with family milestones and liquidity needs.',
    '跨市场': 'Cross-Market',
    '全球视角': 'Global Perspective',
    '税务协调': 'Tax Coordination',
    '多资产': 'Multi-Asset',
    '组合构建': 'Portfolio Construction',
    '效率优化': 'Efficiency',
    '直接指数化投资': 'Direct Indexing',
    '围绕家族成员的税务身份、持仓偏好与限制清单，构建更细颗粒度的组合表达方式。通过个股层面的筛选、替代与再平衡，让指数化投资更贴近家族目标。': 'Build more precise portfolio expressions around each family member’s tax profile, preferences and restrictions through stock-level screening, substitution and rebalancing.',
    '定制指数': 'Custom Index',
    '持仓透明': 'Look-Through',
    '持续复盘': 'Ongoing Review',
    '私募市场准入': 'Private Market Access',
    '机构级私募市场': 'Institutional Private Markets',
    '独家准入通道': 'Curated Access',
    '通过彩石的机构级合作网络，家族客户可按风险承受能力、期限安排与流动性需求审慎参与私募市场机会。我们强调尽调、信息透明、风险披露与投资后持续跟踪。': 'Through Sandstone’s institutional network, families can evaluate private market opportunities according to risk tolerance, time horizon and liquidity needs, with emphasis on due diligence, transparency and post-investment monitoring.',
    '亚洲成长型私募股权': 'Asian Growth Private Equity',
    '基础设施与实物资产': 'Infrastructure & Real Assets',
    '私人信贷（Private Credit）': 'Private Credit',
    '对冲基金优选策略': 'Hedge Fund Strategies',
    '精选网络': 'Curated Network',
    '覆盖私募股权、信贷': 'Private equity, credit',
    '与实物资产策略': 'and real asset strategies',
    '定制化': 'Tailored',
    '私募市场': 'Private Markets',
    '参与安排': 'Participation',
    '纪律筛选': 'Disciplined Selection',
    '强调尽调、风险披露': 'Due diligence, risk disclosure',
    '与持续跟踪': 'and ongoing monitoring',
    '定期报告': 'Periodic Reporting',
    '项目进展、估值资料': 'Project updates, valuation materials',
    '与关键事项更新': 'and key developments',
    '财富，也是一种责任': 'Wealth Is Also Responsibility',
    '让您的财富在世界上留下印记': 'Let your wealth leave a meaningful mark',
    '慈善与影响力投资': 'Philanthropy & Impact Investing',
    '让财富成为': 'Let Wealth Become',
    '世代传颂的遗产': 'A Legacy Across Generations',
    '参照国际成熟慈善基金会的运营模式，彩石为亚洲家族提供从慈善战略到落地执行的全链路支持，让善意得到最大化放大。': 'Drawing from mature international foundation practices, Sandstone helps Asian families move from philanthropic strategy to execution.',
    '慈善架构': 'Philanthropic Structure',
    '基金会、信托与专项捐赠安排': 'Foundation, trust and targeted giving structures',
    '项目尽调': 'Project Due Diligence',
    '公益机构筛选、监督与影响力追踪': 'Grantee screening, oversight and impact tracking',
    '税务协同': 'Tax Coordination',
    '结合多辖区规则设计捐赠路径': 'Design giving pathways across jurisdictions',
    '长期影响': 'Long-Term Impact',
    '让家族价值观转化为可持续行动': 'Turn family values into sustained action',
    '财商，从小': 'Financial Stewardship',
    '开始培育': 'Starts Early',
    '长期家族治理经验显示，家族财富传承面临的关键挑战，往往不是市场风险，而是接班人准备不足。彩石的Next Gen项目，从年龄18岁开始系统介入。': 'Long-term family governance experience shows that the key challenge in wealth succession is often not market risk, but successor readiness. Sandstone’s Next Gen program supports systematic preparation.',
    '按年龄段的传承路径': 'A Stage-Based Succession Path',
    '整合报告体系': 'Integrated Reporting',
    '所有资产，': 'All Assets,',
    '一个视图': 'One View',
    '无论您的资产分布在多少个国家、多少家机构，彩石的整合报告平台将所有信息汇聚为一张清晰的财富地图，随时随地掌握全局。': 'Wherever assets are held, Sandstone’s reporting platform brings information into a clear wealth map for ongoing oversight.',
    '家族财富总览': 'Family Wealth Overview',
    '示例报告 · 港元': 'Sample Report · HKD',
    '家族总净值': 'Family Net Worth',
    '年初至今': 'Year to Date',
    '年度税务节省': 'Annual Tax Savings',
    '股票 / ETF': 'Equities / ETFs',
    '私募股权': 'Private Equity',
    '不动产': 'Real Estate',
    '现金 / 其他': 'Cash / Other',
    'AI税务建议': 'AI Tax Note',
    '发现3个': 'Identified three',
    '税损收割机会': 'tax-loss harvesting opportunities',
    '，预计节税 HK$186万': ', with estimated tax savings of HK$1.86M',
    '下一步行动': 'Next Action',
    '13U年度合规审查': '13U annual compliance review',
    '距截止还有214天': '214 days until deadline',
    '生活方式服务': 'Lifestyle Services',
    '照顾财富之外的': 'Beyond Wealth,',
    '一切所需': 'Every Detail Considered',
    'Life Beyond Wealth Management': 'Life Beyond Wealth Management',
    '真正的家族办公室，不只管理数字，还要照顾生活。彩石的家族管家团队，让您的精力专注于最重要的事情。': 'A true family office manages more than numbers. Sandstone’s concierge team helps families focus on what matters most.',
    '您的家族，': 'Your Family,',
    '值得百年传承的规划': 'A Legacy Worth Planning',
    '无论您的财富规模与家族结构如何，彩石的顾问团队将在48小时内与您取得联系，安排一次完全保密的初步会面。': 'Whatever your family structure, Sandstone’s advisory team will contact you within 48 hours to arrange a confidential introductory meeting.',
    '您的信息将受到严格保密 · 48小时内专属顾问与您联系': 'Your information is confidential · A dedicated advisor will contact you within 48 hours',
    'SFC、MAS 及中国私募基金管理人资质': 'SFC, MAS and China private fund manager qualifications',
    '银行级数据加密': 'Bank-grade data encryption',
    '本地AI部署保护隐私': 'Local AI deployment for privacy',
    '完全独立无利益冲突': 'Fully independent with no conflicts of interest',
    '亚洲领先的家族办公室服务机构，为超高净值家族提供从投资到传承的全方位专业服务。参照国际成熟家族办公室实践，以亚洲视角重新定义。': 'A family office service platform for Asia’s ultra-high-net-worth families, providing integrated support from investment to legacy planning.',
    '专业服务': 'Professional Services',
    '资源中心': 'Resources',
    '家族财富白皮书': 'Family Wealth White Paper',
    '亚洲税务指南': 'Asia Tax Guide',
    '传承案例研究': 'Legacy Case Studies',
    '市场洞察': 'Market Insights',
    '家族治理手册': 'Family Governance Handbook',
    '© 2026 彩石家族办公室（集团）有限公司 · 香港SFC持牌 · 新加坡MAS持牌 · 中国私募基金管理人资质': '© 2026 Sandstone Family Office (Group) Limited · SFC Hong Kong licensed · MAS Singapore licensed · China private fund manager qualifications',
    '相关资质以适用主体及公开信息为准。本网站内容仅供参考，不构成任何投资、法律或税务建议': 'Qualifications are subject to applicable entities and public information. This website is for reference only and does not constitute investment, legal or tax advice.',
    '⚠ 投资涉及风险，过往业绩不代表未来表现。家族办公室服务仅向合资格专业投资者及机构投资者提供。': '⚠ Investments involve risk. Past performance is not indicative of future results. Family office services are available only to eligible professional and institutional investors.',
    '私密咨询 · Family Office': 'Private Consultation · Family Office',
    '预约家族办公室私密会面': 'Book a Private Family Office Meeting',
    '请留下联络方式与家族关注方向，资深家办顾问将在 48 小时内与您私下联系。所有信息严格保密。': 'Leave your contact details and family priorities. A senior family office advisor will contact you privately within 48 hours. All information is strictly confidential.',
    '家族服务需求阶段': 'Family Service Stage',
    '正在了解家族办公室服务': 'Exploring family office services',
    '已有家族办公室，需要优化': 'Existing family office, seeking optimization',
    '需要传承、信托或治理规划': 'Need legacy, trust or governance planning',
    '需要投资组合与跨境资产整合': 'Need portfolio and cross-border asset integration',
    '家办·家族治理与架构': 'Family office · governance and structure',
    '家办·财富传承规划': 'Family office · legacy planning',
    '家办·投资组合与税务协调': 'Family office · portfolio and tax coordination',
    '家办·慈善与影响力投资': 'Family office · philanthropy and impact investing',
    '家办·下一代教育': 'Family office · next-generation education',
    '其他家族长期规划议题': 'Other long-term family planning matters',
    '我同意彩石家族办公室顾问就本次咨询通过电话/邮件与我联系，并知悉我的信息将依保密政策处理。': 'I agree that Sandstone Family Office advisors may contact me by phone or email regarding this consultation, and understand that my information will be handled confidentially.'
  };

  Object.assign(dict, {
    // Polished English copy and deeper-page coverage
    'Asset Panorama · 持仓全景与智能分析': 'Asset Panorama · Full portfolio intelligence',
    'Client Onboarding · 客户尽调': 'Client Onboarding · KYC workflow',
    'Relationship Desk · 客户管理': 'Relationship Desk · Client management',
    'Knowledge Base · 内部资料': 'Knowledge Base · Internal resources',
    '+¥ 2,130,000 (+8.1%) 今年至今': '+¥ 2,130,000 (+8.1%) YTD',
    '+¥ 2,130,000  (+8.1%) 今年至今': '+¥ 2,130,000 (+8.1%) YTD',
    'AI 税务优化提示：': 'AI tax-planning note:',
    'AI Tax Optimization Note:': 'AI tax-planning note:',
    'Consider tax-loss harvesting before quarter end. Estimated tax saving:': 'Consider tax-loss harvesting before quarter end. Indicative tax saving:',
    'Combining advanced artificial intelligence with senior wealth advisors, Sandstone delivers tailored tax-aware planning, private market access, and intergenerational wealth solutions for high-net-worth clients across Asia.': 'Combining advanced artificial intelligence with experienced wealth advisers, Sandstone provides tax-aware planning, curated private-market access and succession solutions for high-net-worth families across Asia.',
    'From an independent advisory perspective, we integrate investment management, wealth planning, family governance and digital platform capabilities into long-term solutions for every stage of wealth.': 'An independent platform bringing together investment management, wealth planning, family governance and digital infrastructure for clients at every stage of wealth.',
    'We design long-term asset allocation and review frameworks around family goals, risk preferences and liquidity needs, balancing resilient growth with wealth preservation.': 'We build long-term allocation and review frameworks around family objectives, risk appetite and liquidity needs, balancing resilience, growth and capital preservation.',
    'Across public markets, alternatives and cross-border allocation research, we emphasize risk budgeting, portfolio discipline and ongoing monitoring to support clear decisions in complex markets.': 'Across public markets, alternatives and cross-border allocation, we focus on risk budgeting, portfolio discipline and continuous oversight, helping clients make clear decisions in complex markets.',
    'We coordinate tax, insurance, trusts, education and migration planning to help families structure wealth across jurisdictions and generations.': 'We coordinate tax, insurance, trust, education and mobility planning to help families structure wealth across jurisdictions and generations.',
    'We advise business owners and family enterprises on financing, ownership structure, exits and post-liquidity wealth planning.': 'We advise entrepreneurs and family businesses on financing, ownership structure, liquidity events and post-exit wealth planning.',
    'We coordinate investment, legal, tax, trust, education and philanthropic resources so families can manage complexity through a unified lens.': 'We bring together investment, legal, tax, trust, education and philanthropic resources so families can address complexity through one co-ordinated platform.',
    'Built around asset visibility, portfolio analytics and advisor collaboration, the platform helps clients and advisors track risk, goals and execution in one shared view.': 'Built around asset visibility, portfolio analytics and adviser collaboration, the platform gives clients and their advisers a shared view of risk, objectives and execution.',
    'Would you like me to prepare an advisor review checklist?': 'Would you like me to prepare an adviser review checklist?',
    'Advisors and AI work together to design a tailored portfolio, including allocation, tax structure and legacy planning.': 'Advisers and AI work together to shape a tailored plan across allocation, tax structure and legacy considerations.',
    'Sandstone emphasizes long-term allocation, risk management, cost transparency and cross-disciplinary coordination, giving clients a clear and actionable decision framework.': 'Sandstone is built around long-term allocation, risk discipline, cost transparency and cross-disciplinary co-ordination, giving clients a clear framework for decisions.',
    'Tax-Aware Optimization': 'Tax-Aware Optimisation',
    'Many investors focus on pre-tax returns. Our AI supports continuous tax-loss harvesting and asset location analysis to help improve after-tax outcomes.': 'Many investors focus on pre-tax returns. Our platform supports ongoing tax-loss harvesting and asset-location analysis to help improve after-tax outcomes.',
    'Institutional Private Market Access': 'Institutional Private-Markets Access',
    'Through Sandstone, clients can review private equity, Asian infrastructure and real asset opportunities typically accessed through institutional channels.': 'Through Sandstone, clients may review private equity, Asian infrastructure and real-asset opportunities typically accessed through institutional channels.',
    'Personalized Direct Indexing': 'Personalised Direct Indexing',
    'Direct indexing can provide more flexible tax management, ESG screening and customization than a one-size-fits-all ETF approach.': 'Direct indexing can offer more flexible tax management, ESG screening and customisation than a one-size-fits-all ETF approach.',
    '✦ Fully customized': '✦ Fully customised',
    'We operate under relevant frameworks in Hong Kong, Singapore and China private fund management. Qualifications are subject to applicable entities and public information.': 'We operate under relevant frameworks in Hong Kong, Singapore and China private fund management; qualifications are subject to the applicable entity and public information.',
    'A leading AI-driven wealth management platform for Asia, combining technology with professional advisory access.': 'An AI-enabled wealth management platform for Asia, combining technology with experienced professional advice.',

    // Homepage people and form details
    '张明远': 'Mingyuan Zhang',
    '李慧琳': 'Huilin Li',
    '陈立远': 'Liyuan Chen',
    '王思瑾': 'Sijin Wang',
    '林晓彤': 'Xiaotong Lin',
    '郭家豪': 'Kahou Kwok',
    '高盛私人银行前亚太区负责人，拥有丰富的亚洲私人财富管理与机构服务经验。哈佛MBA。': 'Former Asia-Pacific private banking leader at Goldman Sachs, with extensive experience across private wealth and institutional client service. Harvard MBA.',
    '前Ant Group AI算法负责人，专注金融AI模型研发，持有10项专利。': 'Former head of AI algorithms at Ant Group, focused on financial AI model development and holder of ten patents.',
    '淡马锡控股前高级投资总监，亚洲私募股权和宏观策略专家，从业22年。': 'Former senior investment director at Temasek, specialising in Asian private equity and macro strategy, with 22 years of industry experience.',
    '曾任香港SFC高级副总裁，精通多辖区监管合规与跨境金融法律。': 'Former senior executive at the Hong Kong SFC, with deep experience in cross-border regulation, compliance and financial law.',
    '📍 上海': '📍 Shanghai',
    '📍 香港': '📍 Hong Kong',
    '📍 新加坡': '📍 Singapore',
    '100 万 HKD 以下': 'Below HKD 1 million',
    '100 万 – 500 万 HKD': 'HKD 1 million – 5 million',
    '500 万 – 1,000 万 HKD': 'HKD 5 million – 10 million',
    '1,000 万 – 5,000 万 HKD': 'HKD 10 million – 50 million',
    '5,000 万 HKD 以上': 'Above HKD 50 million',

    // Family office service details
    '家族宪章制定、家族委员会架构设计、家庭会议主持、决策机制建立，为多代家族提供制度保障。': 'Family constitution drafting, committee design, family meeting facilitation and decision-making frameworks for multi-generational families.',
    '一': 'I',
    '二': 'II',
    '三': 'III',
    '四': 'IV',
    '— 聚焦长期产业趋势、治理质量与退出路径': '— Focused on long-term sector themes, governance quality and exit routes',
    '— 关注现金流韧性、通胀适应性与资产透明度': '— Focused on cash-flow resilience, inflation sensitivity and asset transparency',
    '— 以期限匹配、抵押保障与偿付能力评估为前提': '— Grounded in tenor matching, collateral analysis and repayment capacity',
    '— 从风险预算、相关性与回撤控制角度纳入组合': '— Considered through risk budgets, correlation and drawdown control',
    '慈善 · 影响力': 'Philanthropy · Impact',
    '家族慈善基金设立': 'Family Foundation Structuring',
    '香港 · 新加坡': 'Hong Kong · Singapore',
    '捐赠税务优化': 'Charitable Tax Planning',
    '多辖区抵扣': 'Multi-jurisdiction relief',
    '影响力投资策略': 'Impact Investment Strategy',
    '公益项目尽调': 'Grantee Due Diligence',
    '量化评估': 'Impact assessment',
    '下一代慈善参与': 'Next-Generation Philanthropy',
    '传承价值观': 'Values in action',
    '财商启蒙课程': 'Financial Stewardship Programme',
    '为18-25岁年轻家族成员设计的基础财务知识、投资原理与家族架构课程，线上+线下混合学习': 'A hybrid learning programme for younger family members covering financial literacy, investment principles and the family structure.',
    '影子董事项目': 'Shadow Board Programme',
    '邀请25-30岁成员列席投资委员会，以观察员身份参与真实投资决策，配备一对一导师': 'Selected next-generation members observe investment committee discussions and receive one-to-one mentoring.',
    '创业孵化支持': 'Venture & Enterprise Support',
    '为有创业志向的家族成员提供启动资金、法律架构搭建、行业人脉对接与专业辅导': 'Support for entrepreneurial family members, including structuring, networks and professional guidance.',
    '全球游学网络': 'Global Learning Network',
    '与哈佛商学院、新加坡国大、香港大学合作，为家族成员提供专属学习机会与校友网络': 'Curated learning opportunities and alumni access through leading academic and professional networks.',
    '认知家族财富': 'Understanding Family Wealth',
    '财商基础课程 · 了解家族架构 · 参加家族会议（旁听）· 开立个人管理账户（小额）': 'Financial literacy · family structure · family meeting observation · supervised personal account',
    '参与家族事务': 'Participating in Family Affairs',
    '投资委员会观察员 · 参与慈善项目决策 · 导师辅导计划 · 职业发展规划支持': 'Investment committee observer · philanthropy participation · mentoring · career planning support',
    '承担家族责任': 'Taking on Family Responsibilities',
    '参与投资决策表决 · 管理个人分配账户 · 接受家族宪章权利与义务 · 接班能力综合评估': 'Investment decision participation · personal allocation account · constitution rights and duties · succession readiness assessment',
    '引领家族未来': 'Leading the Family Forward',
    '家族委员会正式成员 · 可提名进入信托委员会 · 参与下一代接班人培养 · 承接家族传承使命': 'Family committee member · trust committee eligibility · next-generation mentorship · legacy stewardship',
    '实时多资产整合视图': 'Integrated Multi-Asset View',
    '银行、券商、私募、不动产、保险所有账户实时聚合，统一货币换算，单一净资产数字一目了然': 'Aggregated accounts across banks, brokers, private funds, property and insurance, with common currency reporting and a clear net-asset view.',
    '组合归因分析': 'Portfolio Attribution',
    '按资产类别、地区、管理人、货币维度拆解组合变化来源，让家族成员清晰理解资产表现': 'Break down portfolio movements by asset class, geography, manager and currency, so family members can understand what drives performance.',
    '风险仪表盘与预警': 'Risk Dashboard & Alerts',
    '实时VaR、集中度风险、货币风险、流动性风险监控，关键指标触线时主动推送提醒': 'Monitor VaR, concentration, currency and liquidity risk, with alerts when key thresholds are reached.',
    '家族成员分级权限': 'Tiered Family Access',
    '家长查看全局，子女查看个人账户，信托委托人查看信托资产，精细的数据权限管理': 'Granular permissions for principals, next-generation members, settlors and trustees.',
    '税务报告自动生成': 'Automated Tax Reporting',
    '年度税务总结、CRS申报支持文件、各辖区要求的格式报告，一键生成发送税务顾问': 'Generate annual tax summaries, CRS support files and jurisdiction-specific reports for professional advisers.',
    'HK$5.84亿': 'HKD 584 million',
    'HK$4,240万': 'HKD 42.4 million',
    '出行与安全': 'Travel & Security',
    '为家族成员提供全球出行协调与安全保障，让每一次旅行都无忧。': 'Global travel co-ordination and security support for family members.',
    '私人飞机与游艇安排': 'Private aviation and yacht arrangements',
    '全球高端酒店预订': 'Luxury hotel reservations',
    '家族安保顾问服务': 'Family security advisory',
    '旅行保险与紧急援助': 'Travel insurance and emergency assistance',
    '海外置业协助': 'Overseas Property Support',
    '在全球主要城市为家族寻找、评估并协助购置优质住宅与商业物业。': 'Sourcing, evaluating and co-ordinating residential and commercial property opportunities in major global cities.',
    '新加坡GCB与豪宅': 'Singapore GCBs and prime residences',
    '伦敦、纽约、悉尼置业': 'London, New York and Sydney property',
    '物业管理公司对接': 'Property management introductions',
    '租务与资产处置': 'Leasing and disposal support',
    '子女教育规划': 'Education Planning',
    '从名校申请到海外留学安排，全程陪伴家族子女的教育成长之路。': 'End-to-end support for school applications and overseas study arrangements.',
    '全球优质中学申请辅导': 'Global school application guidance',
    '常春藤及顶尖大学申请': 'Ivy League and leading university applications',
    '海外生活适应支持': 'Overseas settlement support',
    '教育储备金规划': 'Education funding planning',
    '家族健康管理': 'Family Health Management',
    '为家族成员建立全球优质医疗资源网络，实现预防为主的主动健康管理。': 'Access to high-quality medical networks and preventative health management.',
    '优质医院VIP绿色通道': 'VIP hospital access',
    '全球专科医生转诊': 'Global specialist referrals',
    '年度全面体检安排': 'Annual health screening',
    '高端医疗保险配置': 'Premium medical insurance planning',
    '艺术与收藏': 'Art & Collectibles',
    '为收藏家族成员提供艺术品投资顾问、鉴定、保险与拍卖全链路服务。': 'Advisory, authentication, insurance and auction support for collecting families.',
    '艺术品投资顾问': 'Art investment advisory',
    '佳士得/苏富比专属席位': 'Christie’s / Sotheby’s access',
    '藏品保险与保管': 'Collection insurance and custody',
    '艺术品估值报告': 'Art valuation reports',
    '移民与居留规划': 'Residency & Mobility Planning',
    '协助家族成员规划第二居留地或第二国籍，拓展全球活动空间与税务筹划选项。': 'Planning for residence, mobility and global optionality, in co-ordination with specialist advisers.',
    '新加坡PR / 公民申请': 'Singapore PR / citizenship applications',
    '香港优才/高才通申请': 'Hong Kong talent scheme applications',
    '葡萄牙/马耳他投资移民': 'Portugal / Malta investment migration',
    '税务居民身份规划': 'Tax residency planning',
    '顶尖机构背景，': 'Institutional Pedigree,',
    '家族视角服务': 'A Family Perspective',
    '投': 'I',
    '治': 'G',
    '数': 'D',
    '合': 'C',
    '投资委员会': 'Investment Committee',
    '资产配置与投资管理': 'Asset Allocation & Investment Management',
    '由跨资产投资、私募市场、风险管理与税务优化专家组成，围绕家族长期目标制定组合策略与执行纪律。': 'A cross-asset team spanning public markets, private markets, risk management and tax-aware analysis, focused on disciplined execution around family objectives.',
    '覆盖': 'Coverage',
    '公开市场 · 私募股权 · 实物资产': 'Public markets · private equity · real assets',
    '家族治理团队': 'Family Governance Team',
    '传承架构与家族机制': 'Legacy Structures & Family Systems',
    '协助家族建立宪章、委员会、会议机制与接班人培养路径，将家族价值观转化为可执行的治理制度。': 'Helping families establish constitutions, committees, meeting rhythms and successor-development pathways that turn values into governance.',
    '支持': 'Support',
    '家族宪章 · 信托架构 · 接班计划': 'Family constitution · trust structures · succession planning',
    '数据与报告团队': 'Data & Reporting Team',
    '整合报告与隐私保护': 'Consolidated Reporting & Privacy',
    '负责多账户、多资产、多币种数据整合，提供资产表现、风险与税务资料的统一视图。': 'Integrating accounts, asset classes and currencies into a unified view of performance, risk and tax information.',
    '能力': 'Capabilities',
    '数据整合 · 报告自动化 · 权限管理': 'Data integration · report automation · permissioning',
    '合规与运营团队': 'Compliance & Operations Team',
    '跨境协调与日常运营': 'Cross-Border Co-ordination & Operations',
    '统筹法律、税务、银行、托管与外部专业机构沟通，确保家族办公室服务流程稳健、清晰、可追踪。': 'Co-ordinating legal, tax, banking, custody and external advisers so family office operations remain robust, clear and traceable.',
    '协同': 'Co-ordination',
    '法律顾问 · 税务顾问 · 托管机构': 'Legal advisers · tax advisers · custodians',
    '百年传承': 'Enduring Legacy',
    '的规划': 'Planning',
    '慈善影响力': 'Philanthropic Impact',
    '关注方向': 'Area of Interest',
    '家办·信托架构设计': 'Family office · trust structuring',
    '家办·下一代培养': 'Family office · next-generation development',
    '家办·家族办公室搭建': 'Family office · office setup',
    '家办·其他': 'Family office · other',
    '家族情况简述 / 咨询问题': 'Family background / enquiry',
    '我同意彩石家族办公室顾问就本次咨询与我私下联系，并知悉信息将依保密政策处理。': 'I agree that Sandstone Family Office advisers may contact me privately regarding this enquiry, and understand that my information will be handled confidentially.',
    '提交预约': 'Submit Request'
  });

  Object.assign(dict, {
    // Short, native navigation labels for English layouts.
    '投资理念': 'Investment',
    '← 彩石财富': '← Home',
    '家族治理': 'Governance',
    '投资策略': 'Investments',
    '下一代传承': 'Next Gen',
    '私密咨询': 'Enquire',
    '免费咨询': 'Enquire',
    '顾问登录': 'Adviser Login',
    '富': 'AI'
  });

  Object.assign(dict, {
    // Native British/international English copy. These override earlier literal translations.
    '融合前沿人工智能与资深财富顾问，为亚洲高净值客户提供专属的税务优化、私募市场准入与跨代际财富传承解决方案。': 'Combining advanced artificial intelligence with experienced wealth advisers, Sandstone provides tax-aware planning, curated private-market access and succession solutions for high-net-worth families across Asia.',
    'AI 税务优化提示：': 'AI tax-planning note: ',
    '建议在本季度末前执行亏损收割，预计可节省税款': 'Consider tax-loss harvesting before quarter end. Indicative tax saving:',
    '以独立顾问视角，为客户整合投资管理、财富规划、家族治理与数字化平台能力，提供适配不同阶段的长期解决方案。': 'An independent platform bringing together investment management, wealth planning, family governance and digital infrastructure for clients at every stage of wealth.',
    '围绕客户的家庭目标、风险偏好与流动性需求，制定长期资产配置与定期复盘机制，兼顾稳健增长与财富保护。': 'We build long-term allocation and review frameworks around family objectives, risk appetite and liquidity needs, balancing resilience, growth and capital preservation.',
    '覆盖公开市场、另类资产与跨境配置研究，强调风险预算、组合纪律与持续监控，帮助客户在复杂市场中保持清晰决策。': 'Across public markets, alternatives and cross-border allocation, we focus on risk budgeting, portfolio discipline and continuous oversight, helping clients make clear decisions in complex markets.',
    '结合税务、保险、信托与移民教育等议题，协助客户建立跨地域、跨代际的财富安排，并与专业机构协同落地。': 'We co-ordinate tax, insurance, trust, education and mobility planning to help families structure wealth across jurisdictions and generations.',
    '整合投资、法律、税务、信托、教育与慈善等外部专业资源，协助家族以统一视角管理复杂事项。': 'We bring together investment, legal, tax, trust, education and philanthropic resources so families can address complexity through one co-ordinated platform.',
    '以资产全景、组合分析与顾问协作为核心，帮助客户与顾问在同一视图下跟踪风险、目标与执行进度。': 'Built around asset visibility, portfolio analytics and adviser collaboration, the platform gives clients and their advisers a shared view of risk, objectives and execution.',
    '整合多账户、多市场与不同资产类别，形成便于客户与顾问共同查看的资产概览。': 'Aggregate multi-account, multi-market and multi-asset data into a clear overview for clients and advisers.',
    '顾问协作记录': 'Adviser Collaboration',
    '针对利率、汇率、行业波动等市场情景进行组合影响评估，并辅助顾问进行定期复盘。': 'Assess portfolio impact across rates, currencies and sector scenarios, supporting regular adviser reviews.',
    '彩石 AI 顾问': 'Sandstone AI Adviser',
    '是否需要我整理一份顾问复盘清单？': 'Would you like me to prepare an adviser review checklist?',
    'AI 正在分析您的投资组合...': 'AI is analysing your portfolio...',
    '与资深顾问进行45分钟的深度沟通，了解您的财务状况、目标与风险偏好，完全保密。': 'A confidential conversation with a senior adviser to understand your financial profile, objectives and risk appetite.',
    '顾问与AI协同设计专属投资组合，涵盖资产配置、税务结构与传承安排。': 'Advisers and AI work together to shape a tailored plan across allocation, tax structure and legacy considerations.',
    '持续优化': 'Ongoing Optimisation',
    '彩石强调长期资产配置、风险管理、成本透明与跨专业协作，让客户在复杂市场中保持清晰、可执行的财富决策框架。': 'Sandstone is built around long-term allocation, risk discipline, cost transparency and cross-disciplinary co-ordination, giving clients a clear framework for decisions.',
    '税后收益最大化': 'Tax-Aware Optimisation',
    '个性化直接指数': 'Personalised Direct Indexing',
    '直接持有沪深300、MSCI亚太等指数成分股，获得更低成本、更灵活的税务管理与ESG筛选能力，彻底摆脱"一刀切"的ETF模式。': 'Direct indexing can offer more flexible tax management, ESG screening and customisation than a one-size-fits-all ETF approach.',
    '✦ 完全个性化定制': '✦ Fully customised',
    '从上海到新加坡，从东京到迪拜，彩石在亚洲核心财富中心设有实体团队，提供属地化的专业服务。': 'From Shanghai to Singapore, Tokyo to Dubai, Sandstone serves clients across Asia’s key wealth centres with local market insight.',
    '彩石的AI税务优化在第一年就为我节省了超过180万元的税款。更重要的是，他们的顾问真正理解我作为科技创业者的资产结构——期权、股权、现金，他们都处理得游刃有余。': 'Sandstone’s AI-enabled tax analysis helped me identify meaningful planning opportunities. More importantly, their advisers understood the complexity of a technology founder’s assets.',
    '作为第二代家族企业接班人，我需要的不只是投资管理，而是整个家族财富的系统规划。彩石帮我建立了信托架构，协调了内地、香港和新加坡三地的资产，专业且高效。': 'As a second-generation family business principal, I needed more than investment management. Sandstone helped co-ordinate trust structures and assets across Mainland China, Hong Kong and Singapore.',
    '立即预约免费的财富诊断咨询，我们的资深顾问将在48小时内与您联系。': 'Book a complimentary private consultation. A senior adviser will contact you within 48 hours.',
    '亚洲领先的AI驱动智能财富管理平台。以技术赋能专业，让机构级财富管理触手可及。': 'An AI-enabled wealth management platform for Asia, combining technology with experienced professional advice.',
    '税务优化': 'Tax Optimisation',
    '留下您的联络方式与关注方向，资深顾问将在 48 小时内与您联系。所有信息严格保密。': 'Leave your contact details and areas of interest. A senior adviser will contact you within 48 hours. All information is strictly confidential.',
    '税务优化（TLH / 跨境）': 'Tax optimisation (TLH / cross-border)',
    '我同意彩石财富的顾问就本次咨询通过电话/邮件与我联系，并知悉我的信息将依保密政策处理。': 'I agree that Sandstone advisers may contact me by phone or email regarding this consultation, and understand that my information will be handled confidentially.',
    '多资产类别定制组合，直接指数化、私募股权、另类资产无缝整合，AI驱动的税务优化全年持续运行。': 'Customised multi-asset portfolios integrating direct indexing, private equity and alternatives with ongoing tax-aware analysis.',
    '为18-35岁家族成员提供专属财商教育、投资决策参与、创业支持与领导力培养计划。': 'Financial education, investment participation, entrepreneurship support and leadership programmes for next-generation family members.',
    '长期家族治理经验显示，家族财富传承面临的关键挑战，往往不是市场风险，而是接班人准备不足。彩石的Next Gen项目，从年龄18岁开始系统介入。': 'Long-term family governance experience shows that the key challenge in succession is often not market risk, but successor readiness. Sandstone’s Next Gen programme supports structured preparation.',
    '无论您的财富规模与家族结构如何，彩石的顾问团队将在48小时内与您取得联系，安排一次完全保密的初步会面。': 'Whatever your family structure, Sandstone’s advisory team will contact you within 48 hours to arrange a confidential introductory meeting.',
    '您的信息将受到严格保密 · 48小时内专属顾问与您联系': 'Your information is confidential · A dedicated adviser will contact you within 48 hours',
    '请留下联络方式与家族关注方向，资深家办顾问将在 48 小时内与您私下联系。所有信息严格保密。': 'Leave your contact details and family priorities. A senior family office adviser will contact you privately within 48 hours. All information is strictly confidential.',
    '已有家族办公室，需要优化': 'Existing family office, seeking optimisation',
    '家办·投资组合与税务协调': 'Family office · portfolio and tax co-ordination',
    '我同意彩石家族办公室顾问就本次咨询通过电话/邮件与我联系，并知悉我的信息将依保密政策处理。': 'I agree that Sandstone Family Office advisers may contact me by phone or email regarding this consultation, and understand that my information will be handled confidentially.'
  });

  const placeholders = {
    '请输入您的电子邮件': 'Enter your email address',
    '您的电子邮件': 'Your email address',
    '您的称呼': 'Your name',
    '您的姓名': 'Your name',
    '含区号，如 +852 / +86': 'Include country code, e.g. +852 / +86',
    '便于发送资料（选填）': 'For sending materials (optional)',
    '简述您当前的财富目标、关注的问题或希望了解的方向…': 'Briefly describe your wealth goals, concerns or areas of interest...'
  };

  const titles = {
    '/family-office-module.html': {
      zh: '彩石家族办公室 · sandstone family office',
      en: 'Sandstone Family Office'
    },
    default: {
      zh: '彩石财富 sandstone capital | 亚洲智能财富管理平台',
      en: 'Sandstone Capital | Intelligent Wealth Platform for Asia'
    }
  };

  const textOriginals = new WeakMap();
  const placeholderOriginals = new WeakMap();
  const ariaOriginals = new WeakMap();

  function normalize(value) {
    return value.replace(/\s+/g, ' ').trim();
  }

  function replacePreservingSpace(original, replacement) {
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    return leading + replacement + trailing;
  }

  function shouldSkip(node) {
    const el = node.parentElement;
    if (!el) return true;
    return Boolean(el.closest('script,style,noscript,.nav-logo,.logo,.language-switch'));
  }

  function translateText(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (shouldSkip(node)) return NodeFilter.FILTER_REJECT;
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
      const original = textOriginals.get(node);
      const key = normalize(original);
      node.nodeValue = lang === 'en' && dict[key]
        ? replacePreservingSpace(original, dict[key])
        : original;
    });
  }

  function translateAttributes(lang) {
    document.querySelectorAll('[placeholder]').forEach(el => {
      if (!placeholderOriginals.has(el)) placeholderOriginals.set(el, el.getAttribute('placeholder'));
      const original = placeholderOriginals.get(el);
      const key = normalize(original || '');
      el.setAttribute('placeholder', lang === 'en' && placeholders[key] ? placeholders[key] : original);
    });

    document.querySelectorAll('[aria-label]').forEach(el => {
      if (!ariaOriginals.has(el)) ariaOriginals.set(el, el.getAttribute('aria-label'));
      const original = ariaOriginals.get(el);
      const key = normalize(original || '');
      el.setAttribute('aria-label', lang === 'en' && dict[key] ? dict[key] : original);
    });
  }

  function updateTitle(lang) {
    const path = window.location.pathname.endsWith('/family-office-module.html')
      ? '/family-office-module.html'
      : 'default';
    document.title = (titles[path] || titles.default)[lang];
  }

  function setActive(lang) {
    document.querySelectorAll('[data-lang-option]').forEach(btn => {
      const isActive = btn.dataset.langOption === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function applyLanguage(lang) {
    const chosen = lang === 'en' ? 'en' : DEFAULT_LANG;
    document.documentElement.lang = chosen === 'en' ? 'en' : 'zh-Hans';
    translateText(chosen);
    translateAttributes(chosen);
    updateTitle(chosen);
    setActive(chosen);
    localStorage.setItem(STORAGE_KEY, chosen);
  }

  function init() {
    document.querySelectorAll('[data-lang-option]').forEach(btn => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.langOption));
    });
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    applyLanguage(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
