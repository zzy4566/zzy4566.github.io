const translations = {
  zh: {
    pageTitle: "赵祖妍 | 视觉感知与生成式世界模型",
    metaDescription: "赵祖妍，中国科学院计算技术研究所博士生，研究方向为世界模型、图像生成与通用视觉感知。",
    ogTitle: "赵祖妍 | 视觉感知与生成式世界模型",
    ogDescription: "中国科学院计算技术研究所博士生，研究世界模型、图像生成与统一视觉感知。",
    skipLink: "跳到正文",
    brandAria: "赵祖妍主页",
    navAria: "主导航",
    languageToggleAria: "语言切换",
    navResearch: "研究",
    navPublications: "论文",
    navProjects: "项目",
    navEducation: "教育",
    navAwards: "荣誉",
    heroEyebrow: "博士生 · VIPL 实验室 · 中国科学院计算技术研究所",
    heroLead: "我关注世界模型、图像生成与通用视觉感知，当前重点研究基于扩散模型的 foundation-adapter 系统，以及具有物理一致性的生成式世界模型。",
    profileLinksAria: "个人链接",
    emailButton: "邮箱",
    quickFactsAria: "基本信息",
    factResearchLabel: "研究方向",
    factResearchValue: "世界模型、扩散模型、视觉感知",
    factAdvisorLabel: "导师",
    factAdvisorValue: "陈熙霖",
    factLocationLabel: "地点",
    factLocationValue: "中国北京",
    profilePanelAria: "个人简介",
    profilePhotoAlt: "赵祖妍",
    currentLabel: "当前",
    currentText: "2024 级博士生，就读于中国科学院计算技术研究所计算机科学与技术专业，所在实验室为 VIPL。",
    statusText: "欢迎围绕视觉感知、图像生成与物理一致视频建模进行交流。",
    researchEyebrow: "研究",
    researchTitle: "构建能够感知、生成并理解运动规律的模型。",
    topicPerceptionTitle: "统一视觉感知",
    topicPerceptionText: "探索可扩展到多任务、多视觉域的 foundation-adapter 感知框架。",
    topicWorldTitle: "世界模型",
    topicWorldText: "研究更符合运动、碰撞、摩擦、自由落体等物理规律的视频生成模型。",
    topicDiffusionTitle: "扩散模型训练",
    topicDiffusionText: "设计提升早期语义轮廓形成速度与模型收敛效率的训练策略。",
    newsEyebrow: "动态",
    newsTitle: "近期更新",
    newsPaper: "UniPercept 为 CVPR 2026 一作论文。",
    newsScholarship: "获得中国科学院大学三好学生与一等学业奖学金。",
    newsPhd: "进入中国科学院计算技术研究所攻读博士学位。",
    publicationsEyebrow: "论文",
    publicationsTitle: "代表工作",
    paperTeaserAlt: "UniPercept 多任务视觉感知结果示意图",
    paperVenue: "CVPR 2026 · 一作",
    paperDescriptionOne: "UniPercept 提出了一个用于通用且可扩展视觉感知的 foundation-adapter 框架：共享的扩散基础模型学习跨视觉域的通用感知表征，轻量级任务适配器捕捉每类感知任务的独特特征。",
    paperDescriptionTwo: "该系统目前支持 14 类视觉感知任务，并能够以较低计算与数据成本高效适配新任务。",
    projectPageButton: "项目主页",
    projectsEyebrow: "项目",
    projectsTitle: "科研项目",
    ongoingLabel: "进行中",
    worldProjectTitle: "物理一致的世界模型",
    worldProjectText: "围绕物理一致的生成式世界模型开展研究，探索利用视频生成学习真实世界中的时空演化规律，提升模型对运动、碰撞、摩擦、自由落体等牛顿物理规律的遵循能力。",
    worldProjectPointOne: "设计动作特定的不变量指标，评估速度、加速度、动量、能量和轨迹合理性。",
    worldProjectPointTwo: "接入 SAM2 提取视频物体轨迹，对比视觉追踪轨迹与物理状态轨迹误差。",
    tencentLabel: "腾讯超新星项目 · 进行中",
    diffusionProjectTitle: "扩散模型收敛加速研究",
    diffusionProjectText: "研究 DDPM、DDIM 与 SiT 等模型在高噪声阶段的 x0 预测行为，分析训练与采样机制。",
    diffusionProjectPointOne: "在高噪时间步引入聚类代表图与高斯模糊目标，并结合 logit-normal 时间步采样。",
    diffusionProjectPointTwo: "在 CelebA 与 ImageNet-256 上使用 FID、sFID、IS 和多样性指标评估生成质量与收敛速度。",
    educationEyebrow: "教育",
    educationTitle: "教育背景",
    phdTime: "2024.09 - 至今",
    phdSchool: "中国科学院计算技术研究所",
    phdText: "计算机科学与技术博士在读，VIPL 实验室。GPA: 3.87 / 4.00。",
    undergradSchool: "东南大学",
    undergradText: "计算机科学与技术学士。GPA: 3.76 / 4.00，综合排名 6 / 113。",
    contactAria: "联系方式",
    contactEyebrow: "联系",
    contactTitle: "欢迎交流",
    contactText: "我目前在北京，欢迎通过邮件联系，讨论研究问题与合作机会。",
    awardsEyebrow: "荣誉",
    awardsTitle: "获奖经历",
    awardScholarship: "中国科学院大学三好学生；一等学业奖学金。",
    awardIcpc: "中国大学生程序设计竞赛女生赛，金奖。",
    awardChallenge: "挑战杯揭榜挂帅，铜奖。",
    awardJiangsu: "江苏省程序设计竞赛，银奖。",
    awardMath: "全国大学生数学竞赛二等奖；江苏省高等数学竞赛二等奖。",
    footerText: "© 2026 赵祖妍。基于 GitHub Pages 构建。",
    backToTop: "回到顶部"
  },
  en: {
    pageTitle: "Zuyan Zhao | Visual Perception & Generative World Models",
    metaDescription: "Zuyan Zhao, Ph.D. student at ICT, Chinese Academy of Sciences, working on world models, image generation, and generalizable visual perception.",
    ogTitle: "Zuyan Zhao | Visual Perception & Generative World Models",
    ogDescription: "Ph.D. student at ICT, CAS. Researching world models, image generation, and unified visual perception.",
    skipLink: "Skip to content",
    brandAria: "Zuyan Zhao home",
    navAria: "Primary navigation",
    languageToggleAria: "Language switcher",
    navResearch: "Research",
    navPublications: "Publications",
    navProjects: "Projects",
    navEducation: "Education",
    navAwards: "Awards",
    heroEyebrow: "Ph.D. Student · VIPL Lab · ICT, Chinese Academy of Sciences",
    heroLead: "I work on world models, image generation, and generalizable visual perception, with a current focus on diffusion-based foundation-adapter systems and physically consistent generative models.",
    profileLinksAria: "Profile links",
    emailButton: "Email",
    quickFactsAria: "Quick facts",
    factResearchLabel: "Research",
    factResearchValue: "World models, diffusion models, visual perception",
    factAdvisorLabel: "Advisor",
    factAdvisorValue: "Xilin Chen",
    factLocationLabel: "Location",
    factLocationValue: "Beijing, China",
    profilePanelAria: "Profile summary",
    profilePhotoAlt: "Zuyan Zhao",
    currentLabel: "Current",
    currentText: "2024 Ph.D. student in Computer Science and Technology at the Institute of Computing Technology, Chinese Academy of Sciences, working with the VIPL Lab.",
    statusText: "Open to research conversations on perception, generation, and physically grounded video modeling.",
    researchEyebrow: "Research",
    researchTitle: "Building models that see, generate, and reason about motion.",
    topicPerceptionTitle: "Unified Visual Perception",
    topicPerceptionText: "Foundation-adapter frameworks for scalable visual perception across tasks and domains.",
    topicWorldTitle: "World Models",
    topicWorldText: "Video generation systems that better respect motion, collision, friction, free fall, and other physical dynamics.",
    topicDiffusionTitle: "Diffusion Training",
    topicDiffusionText: "Training strategies that improve early semantic structure formation and accelerate convergence.",
    newsEyebrow: "News",
    newsTitle: "Recent Updates",
    newsPaper: "UniPercept is listed as a CVPR 2026 first-author paper.",
    newsScholarship: "Received the UCAS Merit Student honor and First-class Academic Scholarship.",
    newsPhd: "Started Ph.D. study at ICT, CAS.",
    publicationsEyebrow: "Publications",
    publicationsTitle: "Selected Work",
    paperTeaserAlt: "UniPercept teaser showing visual perception outputs across multiple tasks",
    paperVenue: "CVPR 2026 · First Author",
    paperDescriptionOne: "UniPercept proposes a foundation-adapter framework for universal and extensible visual perception. A shared diffusion-based foundation model learns general perceptual representations across visual domains, while lightweight task-specific adapters capture the distinct characteristics of each perception task.",
    paperDescriptionTwo: "The system currently supports 14 visual perception tasks and can be efficiently adapted to new tasks with lower compute and data cost.",
    projectPageButton: "Project Page",
    projectsEyebrow: "Projects",
    projectsTitle: "Research Projects",
    ongoingLabel: "Ongoing",
    worldProjectTitle: "Physically Consistent World Models",
    worldProjectText: "Studying generative world models that learn spatiotemporal evolution from videos and better follow Newtonian physical laws such as motion, collision, friction, and free fall.",
    worldProjectPointOne: "Designed action-specific invariant metrics for velocity, acceleration, momentum, energy, and trajectory plausibility.",
    worldProjectPointTwo: "Integrated SAM2-based object tracking to compare visual trajectories with physical state trajectories.",
    tencentLabel: "Tencent Star Project · Ongoing",
    diffusionProjectTitle: "Accelerating Diffusion Model Convergence",
    diffusionProjectText: "Investigating high-noise-stage x0 prediction behavior in DDPM, DDIM, and SiT-style training and sampling pipelines.",
    diffusionProjectPointOne: "Introduced clustered representative images and Gaussian-blurred targets at high-noise timesteps with logit-normal timestep sampling.",
    diffusionProjectPointTwo: "Evaluated convergence and generation quality on CelebA and ImageNet-256 using FID, sFID, IS, and diversity metrics.",
    educationEyebrow: "Education",
    educationTitle: "Academic Background",
    phdTime: "2024.09 - Present",
    phdSchool: "Institute of Computing Technology, Chinese Academy of Sciences",
    phdText: "Ph.D. in Computer Science and Technology, VIPL Lab. GPA: 3.87 / 4.00.",
    undergradSchool: "Southeast University",
    undergradText: "B.Eng. in Computer Science and Technology. GPA: 3.76 / 4.00, ranked 6 / 113.",
    contactAria: "Contact",
    contactEyebrow: "Contact",
    contactTitle: "Let’s Connect",
    contactText: "I am based in Beijing and can be reached by email for research discussions and collaboration.",
    awardsEyebrow: "Honors",
    awardsTitle: "Awards",
    awardScholarship: "UCAS Merit Student; First-class Academic Scholarship.",
    awardIcpc: "ICPC China Collegiate Programming Contest Women’s Contest, Gold Medal.",
    awardChallenge: "Challenge Cup “Jiebang Guashuai”, Bronze Award.",
    awardJiangsu: "Jiangsu Collegiate Programming Contest, Silver Medal.",
    awardMath: "National College Student Mathematics Competition, Second Prize; Jiangsu Advanced Mathematics Competition, Second Prize.",
    footerText: "© 2026 Zuyan Zhao. Built for GitHub Pages.",
    backToTop: "Back to top"
  }
};

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("homepage-language");
  } catch {
    return null;
  }
};

const storeLanguage = (lang) => {
  try {
    localStorage.setItem("homepage-language", lang);
  } catch {
    // Ignore storage restrictions; the visible language still switches.
  }
};

const applyLanguage = (lang) => {
  const activeLang = translations[lang] ? lang : "zh";
  const dictionary = translations[activeLang];

  document.documentElement.lang = activeLang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.dataset.i18nContent;
    if (dictionary[key]) element.setAttribute("content", dictionary[key]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key]) element.setAttribute("alt", dictionary[key]);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === activeLang;
    button.setAttribute("aria-pressed", String(isActive));
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const storedLanguage = getStoredLanguage();
  const initialLanguage = storedLanguage === "en" ? "en" : "zh";

  applyLanguage(initialLanguage);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.lang === "en" ? "en" : "zh";
      applyLanguage(nextLanguage);
      storeLanguage(nextLanguage);
    });
  });
});
