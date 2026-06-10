const STORAGE_KEY = "exiora-platform-v3";

const credentials = {
  S251025: {
    password: "251025",
    role: "student",
    name: "Aditya Mall",
    title: "Student Learning Hub",
    subtitle: "Approved lessons, semester paths, and downloadable study packs.",
    actionLabel: "Resume Web Dev",
    sidebarMeta: "Semester 5 · Computer Science",
  },
  S251283: {
    password: "251283",
    role: "student",
    name: "Manthan Mishra",
    title: "Student Learning Hub",
    subtitle: "Approved lessons, semester paths, and downloadable study packs.",
    actionLabel: "Resume Web Dev",
    sidebarMeta: "Semester 3 · Computer Science",
  },
  F1234: {
    password: "1234",
    role: "faculty",
    name: "Dr. Navreet",
    title: "Faculty Publishing Studio",
    subtitle: "Create content, track approvals, and monitor student engagement.",
    actionLabel: "Publish content",
    sidebarMeta: "Database Systems · Senior Faculty",
  },
  F1110: {
    password: "1110",
    role: "faculty",
    name: "Dr. Ayushi",
    title: "Faculty Publishing Studio",
    subtitle: "Create content, track approvals, and monitor student engagement.",
    actionLabel: "Publish content",
    sidebarMeta: "Web Development · Faculty",
  },
  A7890: {
    password: "7890",
    role: "admin",
    name: "Dr. Sukhpreet (H.O.D)",
    title: "Admin Command Center",
    subtitle: "Govern users, moderate submissions, and oversee platform health.",
    actionLabel: "Review queue",
    sidebarMeta: "Head of Department",
  },
};

const WEB_DEV_PLAYLIST_ID = "PLbtI3_MArDOkxh7XzixN2G4NAGIVqTFon";

const webDevelopmentCourse = {
  title: "Full Stack Web Development",
  instructor: "Sheryians Coding School",
  description: "Stream the complete front-end to MERN stack journey — HTML, CSS, JavaScript, React, Node.js, and real-world projects — directly inside exiora.",
  playlistUrl: `https://www.youtube.com/playlist?list=${WEB_DEV_PLAYLIST_ID}`,
  chapters: [
    { id: "wd-1", chapter: 1, youtubeId: "4dprtEzunIk", title: "HTML Crash Course", topic: "Foundations", duration: "25:01", outcomes: ["Write semantic HTML", "Structure web pages", "Start front-end basics"] },
    { id: "wd-2", chapter: 2, youtubeId: "K1naz9wBwKU", title: "CSS Crash Course", topic: "Foundations", duration: "41:41", outcomes: ["Style layouts with CSS", "Use selectors and the box model", "Build polished UI"] },
    { id: "wd-3", chapter: 3, youtubeId: "J_r6hBo9lO4", title: "Responsive Web Development", topic: "Layout", duration: "3:22:05", outcomes: ["Build responsive pages", "Complete a full layout project", "Apply mobile-first design"] },
    { id: "wd-4", chapter: 4, youtubeId: "a-wVHL0lpb0", title: "JavaScript Full Course — Part 1", topic: "JavaScript", duration: "8:04:12", outcomes: ["Master JS fundamentals", "Work with DOM and events", "Understand async concepts"] },
    { id: "wd-5", chapter: 5, youtubeId: "1aR7tcmWo_w", title: "JavaScript Full Course — Part 2", topic: "JavaScript", duration: "7:26:21", outcomes: ["Level up JS skills", "Think like a developer", "Build interactive apps"] },
    { id: "wd-6", chapter: 6, youtubeId: "wH6uf20dpAo", title: "Advanced JavaScript & Projects", topic: "JavaScript", duration: "4:15:37", outcomes: ["Use advanced patterns", "Ship JS projects", "Adopt a builder mindset"] },
    { id: "wd-7", chapter: 7, youtubeId: "E6tAtRi82QY", title: "Complete React JS Course", topic: "React", duration: "3:26:26", outcomes: ["Build with React", "Manage component state", "Start MERN development"] },
    { id: "wd-8", chapter: 8, youtubeId: "5WDNHl-x-AM", title: "React + GSAP Animation Project", topic: "React", duration: "1:39:56", outcomes: ["Animate React UIs", "Use GSAP in projects", "Create portfolio pieces"] },
    { id: "wd-9", chapter: 9, youtubeId: "NjqjakgPL84", title: "Animated React Website + Deployment", topic: "React", duration: "4:46:04", outcomes: ["Build animated sites", "Make projects responsive", "Deploy to production"] },
    { id: "wd-10", chapter: 10, youtubeId: "yItOSReV_f0", title: "3D React MacBook Landing Page", topic: "React", duration: "39:39", outcomes: ["Create 3D landing pages", "Combine React with WebGL-style UI", "Polish premium front-ends"] },
    { id: "wd-11", chapter: 11, youtubeId: "Q-icS7yZz5k", title: "Backend Development Full Course", topic: "Backend", duration: "4:12:17", outcomes: ["Build APIs with Node.js", "Understand server architecture", "Connect front-end to back-end"] },
    { id: "wd-12", chapter: 12, youtubeId: "jbvh0jn4h9k", title: "Microservices with UBER Project", topic: "Backend", duration: "2:17:19", outcomes: ["Design microservices", "Model real-world systems", "Scale backend apps"] },
    { id: "wd-13", chapter: 13, youtubeId: "JmpDGMgRFfo", title: "Realtime Device Tracking with Socket.io", topic: "Backend", duration: "36:25", outcomes: ["Use Express and Socket.io", "Build live maps", "Handle realtime events"] },
    { id: "wd-14", chapter: 14, youtubeId: "4qyBjxPlEZo", title: "Uber Clone with MERN Stack", topic: "Projects", duration: "11:06:45", outcomes: ["Ship a full MERN app", "Clone production workflows", "Integrate maps and auth"] },
    { id: "wd-15", chapter: 15, youtubeId: "GVdBPJzmwQg", title: "JavaScript for Placements", topic: "JavaScript", duration: "2:38:51", outcomes: ["Prepare for interviews", "Solve practical JS tasks", "Get job-ready"] },
    { id: "wd-16", chapter: 16, youtubeId: "CQ741Gw9Bz0", title: "Zomato MERN Project with Reels Feed", topic: "Projects", duration: "4:56:38", outcomes: ["Build a food delivery clone", "Add reels-style video feeds", "Complete a capstone project"] },
  ],
};

const roleConfig = {
  student: [
    { label: "Overview", target: "studentOverview" },
    { label: "Web Development", target: "studentWebDev" },
    { label: "My Courses", target: "studentCourses" },
    { label: "Resources", target: "studentResources" },
    { label: "Activity", target: "studentActivity" },
  ],
  faculty: [
    { label: "Studio", target: "facultyOverview" },
    { label: "My Content", target: "facultyContent" },
    { label: "Students", target: "facultyStudents" },
    { label: "Activity", target: "facultyActivity" },
  ],
  admin: [
    { label: "Overview", target: "adminOverview" },
    { label: "Approvals", target: "adminApprovals" },
    { label: "Users", target: "adminUsers" },
    { label: "Activity", target: "adminActivity" },
  ],
};

const subjects = [
  "Data Structures",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Artificial Intelligence",
  "Cloud Computing",
];

// Self-hosted / direct MP4 lessons only. YouTube playlist chapters use the embed player below.
const videos = {
  dbms: {
    title: "SQL and Normalization",
    subtitle: "Semester 4 · DBMS",
    description: "Schema design, normalization forms, and practical SQL.",
    outcomes: ["Write efficient SQL", "Normalize schemas", "Understand transactions"],
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    subject: "DBMS",
  },
  cn: {
    title: "Networking Layers",
    subtitle: "Semester 5 · Computer Networks",
    description: "OSI model, TCP/IP, and routing fundamentals.",
    outcomes: ["Map network layers", "Trace packet flow", "Understand routing"],
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    subject: "Computer Networks",
  },
};

const roadmapCopy = {
  "Web Development": {
    kicker: "Career roadmap",
    title: "Web Development",
    body: "HTML → CSS → JavaScript → React → Node.js",
    points: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  "Cyber Security": {
    kicker: "Career roadmap",
    title: "Cyber Security",
    body: "Networking → Linux → Ethical Hacking → Security Analyst",
    points: ["Networking", "Linux", "Ethical Hacking", "Security Analyst"],
  },
};

const defaultStore = () => ({
  content: [
    {
      id: "c1",
      type: "lecture",
      title: "Introduction to Normalization",
      subject: "DBMS",
      description: "Foundational lecture on 1NF through 3NF.",
      author: "Dr. Navreet",
      authorId: "F1234",
      status: "approved",
      createdAt: Date.now() - 86400000 * 5,
      videoId: "dbms",
    },
    {
      id: "c2",
      type: "notes",
      title: "Linked List Cheat Sheet",
      subject: "Data Structures",
      description: "One-page revision notes for linear structures.",
      author: "Dr. Navreet",
      authorId: "F1234",
      status: "approved",
      createdAt: Date.now() - 86400000 * 3,
    },
    {
      id: "c3",
      type: "lecture",
      title: "TCP/IP Deep Dive",
      subject: "Computer Networks",
      description: "Advanced routing and protocol analysis.",
      author: "Dr. Navreet",
      authorId: "F1234",
      status: "pending",
      createdAt: Date.now() - 86400000,
      videoId: "cn",
    },
  ],
  users: [
    { id: "S251025", name: "Aditya Mall", role: "student", status: "active", progress: 72 },
    { id: "S251283", name: "Manthan Mishra", role: "student", status: "active", progress: 38 },
    { id: "F1234", name: "Dr. Navreet", role: "faculty", status: "active", progress: 0 },
    { id: "F1110", name: "Dr. Ayushi", role: "faculty", status: "active", progress: 0 },
    { id: "A7890", name: "Dr. Sukhpreet (H.O.D)", role: "admin", status: "active", progress: 0 },
    { id: "S2510999", name: "Neha Verma", role: "student", status: "active", progress: 58 },
    { id: "S2510888", name: "Rohan Patel", role: "student", status: "active", progress: 41 },
  ],
  activity: [
    { id: "a1", message: "Dr. Navreet published lecture: Introduction to Normalization", role: "faculty", at: Date.now() - 86400000 * 5 },
    { id: "a2", message: "Dr. Sukhpreet (H.O.D) approved: Introduction to Normalization", role: "admin", at: Date.now() - 86400000 * 4 },
    { id: "a3", message: "Aditya Mall completed DBMS lesson", role: "student", at: Date.now() - 86400000 * 2 },
  ],
  completions: { S251025: ["dbms"] },
});

const state = {
  role: null,
  username: null,
  account: null,
  currentVideoId: null,
  currentPlayerMode: "native",
  searchQuery: "",
  activeSection: null,
  store: loadStore(),
};

const refs = {
  themeToggle: document.getElementById("themeToggle"),
  themeLabel: document.querySelector(".theme-label"),
  logoutButton: document.getElementById("logoutButton"),
  landing: document.getElementById("landing"),
  appShell: document.getElementById("appShell"),
  loginForm: document.getElementById("loginForm"),
  loginFeedback: document.getElementById("loginFeedback"),
  username: document.getElementById("username"),
  password: document.getElementById("password"),
  jumpToLoginBtn: document.getElementById("jumpToLoginBtn"),
  previewButton: document.getElementById("previewButton"),
  roleBadge: document.getElementById("roleBadge"),
  roleTitle: document.getElementById("roleTitle"),
  roleSubtitle: document.getElementById("roleSubtitle"),
  sidebarName: document.getElementById("sidebarName"),
  sidebarMeta: document.getElementById("sidebarMeta"),
  sidebarStat: document.getElementById("sidebarStat"),
  roleNav: document.getElementById("roleNav"),
  roleViewport: document.getElementById("roleViewport"),
  roleActionButton: document.getElementById("roleActionButton"),
  roleSearch: document.getElementById("roleSearch"),
  roleSearchClear: document.getElementById("roleSearchClear"),
  roleSearchMeta: document.getElementById("roleSearchMeta"),
  studentDashboard: document.getElementById("studentDashboard"),
  facultyDashboard: document.getElementById("facultyDashboard"),
  adminDashboard: document.getElementById("adminDashboard"),
  metricContent: document.getElementById("metricContent"),
  metricFaculty: document.getElementById("metricFaculty"),
  metricStudents: document.getElementById("metricStudents"),
  infoModal: document.getElementById("infoModal"),
  closeInfoModal: document.getElementById("closeInfoModal"),
  infoModalKicker: document.getElementById("infoModalKicker"),
  infoModalTitle: document.getElementById("infoModalTitle"),
  infoModalBody: document.getElementById("infoModalBody"),
  infoModalPoints: document.getElementById("infoModalPoints"),
  infoModalAction: document.getElementById("infoModalAction"),
  publishModal: document.getElementById("publishModal"),
  closePublishModal: document.getElementById("closePublishModal"),
  cancelPublish: document.getElementById("cancelPublish"),
  publishForm: document.getElementById("publishForm"),
  publishType: document.getElementById("publishType"),
  publishTitle: document.getElementById("publishTitle"),
  publishSubject: document.getElementById("publishSubject"),
  publishDescription: document.getElementById("publishDescription"),
  publishModalTitle: document.getElementById("publishModalTitle"),
  videoModal: document.getElementById("videoModal"),
  closeVideoModal: document.getElementById("closeVideoModal"),
  lessonVideo: document.getElementById("lessonVideo"),
  youtubePlayerHost: document.getElementById("youtubePlayerHost"),
  youtubePlayerMount: document.getElementById("youtubePlayerMount"),
  serverBanner: document.getElementById("serverBanner"),
  nativeVideoToolbar: document.getElementById("nativeVideoToolbar"),
  youtubeVideoToolbar: document.getElementById("youtubeVideoToolbar"),
  markChapterComplete: document.getElementById("markChapterComplete"),
  openPlaylistLink: document.getElementById("openPlaylistLink"),
  chapterShell: document.getElementById("chapterShell"),
  chapterList: document.getElementById("chapterList"),
  playPauseButton: document.getElementById("playPauseButton"),
  volumeSlider: document.getElementById("volumeSlider"),
  speedSelect: document.getElementById("speedSelect"),
  fullscreenButton: document.getElementById("fullscreenButton"),
  prevVideoButton: document.getElementById("prevVideoButton"),
  nextVideoButton: document.getElementById("nextVideoButton"),
  videoKicker: document.getElementById("videoKicker"),
  videoModalTitle: document.getElementById("videoModalTitle"),
  videoDescription: document.getElementById("videoDescription"),
  videoOutcomes: document.getElementById("videoOutcomes"),
  relatedVideos: document.getElementById("relatedVideos"),
  toast: document.getElementById("toast"),
};

let youtubePlayerInstance = null;
let youtubeApiReady = null;

document.addEventListener("DOMContentLoaded", init);

function init() {
  applyTheme(loadTheme());
  populatePublishSubjects();
  updateLandingMetrics();
  checkEmbedEnvironment();
  preloadYouTubeApi();
  bindEvents();
  setLoggedOutState();
}

function getEmbedOrigin() {
  if (window.location.protocol === "file:") return null;
  if (!window.location.origin || window.location.origin === "null") return null;
  return window.location.origin;
}

function isFileProtocol() {
  return window.location.protocol === "file:";
}

function checkEmbedEnvironment() {
  if (isFileProtocol()) refs.serverBanner?.classList.remove("hidden");
}

function preloadYouTubeApi() {
  if (isFileProtocol()) return;
  ensureYouTubeApi().catch(() => {});
}

function ensureYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve();
  if (youtubeApiReady) return youtubeApiReady;
  youtubeApiReady = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("YouTube API timeout")), 12000);
    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      clearTimeout(timeout);
      if (previousReady) previousReady();
      resolve();
    };
    if (!document.getElementById("youtube-iframe-api")) {
      const script = document.createElement("script");
      script.id = "youtube-iframe-api";
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    }
  });
  return youtubeApiReady;
}

function destroyYoutubePlayer() {
  if (youtubePlayerInstance?.destroy) {
    youtubePlayerInstance.destroy();
    youtubePlayerInstance = null;
  }
  if (refs.youtubePlayerMount) refs.youtubePlayerMount.innerHTML = "";
}

function buildYoutubeWatchUrl(youtubeId) {
  return `https://www.youtube.com/watch?v=${youtubeId}&list=${WEB_DEV_PLAYLIST_ID}`;
}

function renderYoutubeFallback(youtubeId, message) {
  const watchUrl = buildYoutubeWatchUrl(youtubeId);
  refs.youtubePlayerMount.innerHTML = `
    <div class="youtube-fallback">
      <p>${escapeHtml(message)}</p>
      <div class="inline-actions" style="justify-content:center">
        <button class="primary-button" type="button" data-fallback-watch="${youtubeId}">Watch on YouTube</button>
      </div>
      ${isFileProtocol() ? `<small>Run <code>npx serve .</code> and open <code>http://localhost:3000</code> to stream inside exiora.</small>` : ""}
    </div>`;
  refs.youtubePlayerMount.querySelector("[data-fallback-watch]")?.addEventListener("click", () => {
    window.open(watchUrl, "_blank", "noopener,noreferrer");
  });
}

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : defaultStore();
  } catch {
    return defaultStore();
  }
}

function saveStore() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.store));
  updateLandingMetrics();
  refreshCurrentDashboard();
}

function refreshCurrentDashboard() {
  if (!state.role) return;
  const section = state.activeSection;
  renderDashboard(state.role);
  if (section) navigateToSection(section);
}

function bindEvents() {
  refs.themeToggle.addEventListener("click", toggleTheme);
  refs.logoutButton.addEventListener("click", logout);
  refs.jumpToLoginBtn.addEventListener("click", () => refs.username.focus());
  refs.previewButton.addEventListener("click", showHowItWorks);
  refs.loginForm.addEventListener("submit", handleLogin);
  refs.roleSearch.addEventListener("input", handleSearchInput);
  refs.roleSearchClear.addEventListener("click", clearSearch);
  refs.roleActionButton.addEventListener("click", handleRoleAction);

  document.querySelectorAll("[data-fill-login]").forEach((card) => {
    card.addEventListener("click", () => {
      const [user, pass] = card.dataset.fillLogin.split("|");
      refs.username.value = user;
      refs.password.value = pass;
      refs.password.focus();
    });
  });

  refs.roleNav.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-target]");
    if (!button) return;
    navigateToSection(button.dataset.target);
  });

  refs.roleViewport.addEventListener("click", handleViewportClick);

  refs.relatedVideos.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-open-video], button[data-open-chapter]");
    if (button?.dataset.openVideo) openVideo(button.dataset.openVideo);
    else if (button?.dataset.openChapter) openCourseChapter(button.dataset.openChapter);
  });

  refs.chapterList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-open-chapter]");
    if (button) openCourseChapter(button.dataset.openChapter);
  });

  refs.markChapterComplete.addEventListener("click", () => markCurrentChapterComplete());

  refs.closeInfoModal.addEventListener("click", closeInfoModal);
  refs.infoModal.addEventListener("click", (event) => { if (event.target === refs.infoModal) closeInfoModal(); });
  refs.closePublishModal.addEventListener("click", closePublishModal);
  refs.cancelPublish.addEventListener("click", closePublishModal);
  refs.publishModal.addEventListener("click", (event) => { if (event.target === refs.publishModal) closePublishModal(); });
  refs.publishForm.addEventListener("submit", handlePublishSubmit);
  refs.closeVideoModal.addEventListener("click", closeVideoModal);
  refs.videoModal.addEventListener("click", (event) => { if (event.target === refs.videoModal) closeVideoModal(); });
  refs.playPauseButton.addEventListener("click", togglePlayback);
  refs.prevVideoButton.addEventListener("click", () => stepVideo(-1));
  refs.nextVideoButton.addEventListener("click", () => stepVideo(1));
  refs.volumeSlider.addEventListener("input", () => { refs.lessonVideo.volume = Number(refs.volumeSlider.value); });
  refs.speedSelect.addEventListener("change", () => { refs.lessonVideo.playbackRate = Number(refs.speedSelect.value); });
  refs.fullscreenButton.addEventListener("click", () => { if (refs.lessonVideo.requestFullscreen) refs.lessonVideo.requestFullscreen(); });
  refs.lessonVideo.addEventListener("play", syncPlaybackButton);
  refs.lessonVideo.addEventListener("pause", syncPlaybackButton);
  refs.lessonVideo.addEventListener("ended", handleLessonComplete);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeInfoModal();
      closePublishModal();
      closeVideoModal();
    }
  });
}

function handleViewportClick(event) {
  const button = event.target.closest(
    "button[data-open-video], button[data-open-chapter], button[data-open-content], button[data-download-content], button[data-roadmap-view], button[data-approve], button[data-reject], button[data-toggle-lock], button[data-open-publish], button[data-view-student], button[data-target-section], button[data-start-course]"
  );
  if (!button) return;

  if (button.dataset.targetSection) navigateToSection(button.dataset.targetSection);
  else if (button.dataset.startCourse) {
    const chapter = getNextWebDevChapter() || webDevelopmentCourse.chapters[0];
    openCourseChapter(chapter.id);
  } else if (button.dataset.openChapter) openCourseChapter(button.dataset.openChapter);
  else if (button.dataset.openVideo) openVideo(button.dataset.openVideo);
  else if (button.dataset.openContent) openContentItem(button.dataset.openContent);
  else if (button.dataset.downloadContent) downloadContentItem(button.dataset.downloadContent);
  else if (button.dataset.roadmapView) openInfoModal(roadmapCopy[button.dataset.roadmapView]);
  else if (button.dataset.approve) approveContent(button.dataset.approve);
  else if (button.dataset.reject) rejectContent(button.dataset.reject);
  else if (button.dataset.toggleLock) toggleUserLock(button.dataset.toggleLock);
  else if (button.dataset.openPublish) openPublishModal(button.dataset.openPublish);
  else if (button.dataset.viewStudent) viewStudentProfile(button.dataset.viewStudent);
}

function handleLogin(event) {
  event.preventDefault();
  const username = refs.username.value.trim();
  const password = refs.password.value.trim();
  const account = credentials[username];
  const userRecord = state.store.users.find((u) => u.id === username);
  if (!account || account.password !== password) {
    refs.loginFeedback.textContent = "Invalid credentials. Use a demo card to autofill.";
    refs.loginFeedback.className = "form-feedback error";
    return;
  }
  if (userRecord?.status === "locked") {
    refs.loginFeedback.textContent = "This account is locked. Contact an administrator.";
    refs.loginFeedback.className = "form-feedback error";
    return;
  }

  state.role = account.role;
  state.username = username;
  state.account = account;
  document.documentElement.setAttribute("data-role", account.role);
  refs.loginFeedback.textContent = `${account.title} ready.`;
  refs.loginFeedback.className = "form-feedback success";
  refs.landing.classList.add("hidden");
  refs.appShell.classList.remove("hidden");
  refs.logoutButton.classList.remove("hidden");
  refs.roleBadge.textContent = account.role.toUpperCase();
  refs.roleTitle.textContent = account.title;
  refs.roleSubtitle.textContent = account.subtitle;
  refs.sidebarName.textContent = account.name;
  refs.sidebarMeta.textContent = account.sidebarMeta;
  refs.roleActionButton.textContent = account.actionLabel;
  renderRoleNav(account.role);
  renderDashboard(account.role);
  navigateToSection(roleConfig[account.role][0].target);
  showToast(`${account.role.toUpperCase()} workspace loaded.`);
}

function renderRoleNav(role) {
  refs.roleNav.innerHTML = roleConfig[role]
    .map((item, index) => `<button type="button" data-target="${item.target}" class="${index === 0 ? "active" : ""}">${item.label}</button>`)
    .join("");
}

function renderDashboard(role) {
  if (role === "student") refs.studentDashboard.innerHTML = renderStudentDashboard();
  if (role === "faculty") refs.facultyDashboard.innerHTML = renderFacultyDashboard();
  if (role === "admin") refs.adminDashboard.innerHTML = renderAdminDashboard();
  showRolePanel(role);
  updateSidebarStat();
}

function showRolePanel(role) {
  document.querySelectorAll("[data-role-panel]").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.rolePanel !== role);
  });
}

function navigateToSection(sectionId) {
  state.activeSection = sectionId;
  refs.roleNav.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === sectionId);
  });
  const section = document.getElementById(sectionId);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  applySearchFilter();
}

function handleRoleAction() {
  if (state.role === "student") {
    const nextChapter = getNextWebDevChapter();
    if (nextChapter) openCourseChapter(nextChapter.id);
    else openCourseChapter(webDevelopmentCourse.chapters[0].id);
  } else if (state.role === "faculty") {
    openPublishModal("notes");
  } else if (state.role === "admin") {
    navigateToSection("adminApprovals");
  }
}

function setLoggedOutState() {
  document.documentElement.removeAttribute("data-role");
  refs.landing.classList.remove("hidden");
  refs.appShell.classList.add("hidden");
  refs.logoutButton.classList.add("hidden");
  refs.roleNav.innerHTML = "";
  refs.roleBadge.textContent = "ACCESS";
  refs.roleTitle.textContent = "Welcome to exiora";
  refs.roleSubtitle.textContent = "Sign in to open your role-specific workspace.";
  refs.sidebarName.textContent = "Guest";
  refs.sidebarMeta.textContent = "Not signed in";
  refs.sidebarStat.textContent = "";
  refs.roleActionButton.textContent = "";
  refs.roleSearch.value = "";
  refs.roleSearchMeta.textContent = "Showing all content";
  state.searchQuery = "";
  state.role = null;
  state.username = null;
  state.account = null;
}

function logout() {
  refs.username.value = "";
  refs.password.value = "";
  refs.loginFeedback.textContent = "";
  refs.loginFeedback.className = "form-feedback";
  closeVideoModal();
  closeInfoModal();
  closePublishModal();
  setLoggedOutState();
  showToast("Signed out.");
}

function getApprovedContent() {
  return state.store.content.filter((item) => item.status === "approved");
}

function getApprovedLectures() {
  return getApprovedContent().filter((item) => item.type === "lecture");
}

function getPendingContent() {
  return state.store.content.filter((item) => item.status === "pending");
}

function getFacultyContent(authorId) {
  return state.store.content.filter((item) => item.authorId === authorId);
}

function getWebDevCompletions(username = state.username) {
  return (state.store.completions[username] || []).filter((id) => id.startsWith("wd-"));
}

function getWebDevProgress(username = state.username) {
  const done = getWebDevCompletions(username).length;
  const total = webDevelopmentCourse.chapters.length;
  return { done, total, percent: Math.round((done / total) * 100) };
}

function getNextWebDevChapter(username = state.username) {
  const completed = new Set(getWebDevCompletions(username));
  return webDevelopmentCourse.chapters.find((chapter) => !completed.has(chapter.id)) || null;
}

function getCourseChapter(chapterId) {
  return webDevelopmentCourse.chapters.find((chapter) => chapter.id === chapterId);
}

function formatDate(ts) {
  return new Date(ts).toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function renderStudentDashboard() {
  const approved = getApprovedContent();
  const lectures = getApprovedLectures();
  const notes = approved.filter((item) => item.type === "notes");
  const progress = state.store.users.find((u) => u.id === state.username)?.progress || 0;
  const webDev = getWebDevProgress();
  const nextChapter = getNextWebDevChapter();

  return `
    <section class="role-hero" id="studentOverview" data-searchable="student overview progress learning streak web development streaming">
      <div class="role-hero-main">
        <span class="eyebrow">Student learning hub</span>
        <h3>Welcome back, ${escapeHtml(state.account.name.split(" ")[0])}.</h3>
        <p>Stream the Full Stack Web Development course chapter-by-chapter, then explore approved semester lectures and study packs.</p>
        <div class="inline-actions">
          <button class="primary-button" type="button" data-open-chapter="${nextChapter?.id || "wd-1"}">Continue Web Dev course</button>
          <button class="secondary-button" type="button" data-target-section="studentWebDev">Browse chapters</button>
        </div>
      </div>
      <div class="role-hero-side stat-grid">
        <article class="stat-card" data-searchable="web development course progress ${webDev.percent}">
          <span class="label">Web Dev course</span>
          <div class="value">${webDev.percent}%</div>
          <div class="progress-bar"><span style="width:${webDev.percent}%"></span></div>
        </article>
        <article class="stat-card" data-searchable="chapters completed ${webDev.done}">
          <span class="label">Chapters done</span>
          <div class="value">${webDev.done}/${webDev.total}</div>
        </article>
        <article class="stat-card" data-searchable="semester progress ${progress}">
          <span class="label">Semester progress</span>
          <div class="value">${progress}%</div>
        </article>
        <article class="stat-card" data-searchable="approved resources ${approved.length}">
          <span class="label">Other resources</span>
          <div class="value">${approved.length}</div>
        </article>
      </div>
    </section>

    <section id="studentWebDev" data-searchable="web development course full stack html css javascript react node mern streaming chapters">
      ${renderWebDevCourseSection()}
    </section>

    <section id="studentCourses" data-searchable="student courses semesters subjects lectures">
      <div class="section-header compact">
        <div><span class="eyebrow">Curriculum</span><h3>My courses</h3></div>
        <p class="muted">Approved lectures grouped by subject.</p>
      </div>
      <div class="feature-grid">
        ${subjects.map((subject) => {
          const subjectLectures = lectures.filter((l) => l.subject === subject);
          return `
            <article class="content-card" data-searchable="${subject} course lectures">
              <h3>${escapeHtml(subject)}</h3>
              <p>${subjectLectures.length} approved lecture${subjectLectures.length === 1 ? "" : "s"}</p>
              <div class="resource-list" style="margin-top:0.75rem">
                ${subjectLectures.length
                  ? subjectLectures.map((l) => `
                    <div class="list-row">
                      <div><strong>${escapeHtml(l.title)}</strong><small>${escapeHtml(l.author)}</small></div>
                      <button class="secondary-button" type="button" data-open-content="${l.id}">Open</button>
                    </div>`).join("")
                  : `<div class="empty-state">No approved lectures yet. Check back after admin approval.</div>`}
              </div>
            </article>`;
        }).join("")}
      </div>
    </section>

    <section id="studentResources" data-searchable="student resources notes downloads">
      <div class="section-header compact">
        <div><span class="eyebrow">Study packs</span><h3>Downloadable resources</h3></div>
      </div>
      <div class="split-grid">
        <article class="table-card" data-searchable="approved notes list">
          <h3>Approved notes</h3>
          <div class="resource-list" style="margin-top:0.75rem">
            ${notes.length
              ? notes.map((n) => `
                <div class="list-row" data-searchable="${n.title} ${n.subject}">
                  <div><strong>${escapeHtml(n.title)}</strong><small>${escapeHtml(n.subject)} · ${escapeHtml(n.author)}</small></div>
                  <button class="secondary-button" type="button" data-download-content="${n.id}">Download</button>
                </div>`).join("")
              : `<div class="empty-state">No notes approved yet.</div>`}
          </div>
        </article>
        <article class="content-card" data-searchable="career roadmap web development">
          <h3>Career roadmap</h3>
          <p class="muted">Plan your next skill path without leaving the dashboard.</p>
          <div class="inline-actions" style="margin-top:0.75rem">
            <button class="secondary-button" type="button" data-roadmap-view="Web Development">Web Development</button>
            <button class="secondary-button" type="button" data-roadmap-view="Cyber Security">Cyber Security</button>
          </div>
        </article>
      </div>
    </section>

    <section id="studentActivity" data-searchable="student activity feed platform updates">
      <div class="section-header compact">
        <div><span class="eyebrow">Live feed</span><h3>Platform activity</h3></div>
      </div>
      <div class="activity-feed">${renderActivityFeed()}</div>
    </section>`;
}

function renderWebDevCourseSection() {
  const webDev = getWebDevProgress();
  const completed = new Set(getWebDevCompletions());
  const nextChapter = getNextWebDevChapter();
  const topics = [...new Set(webDevelopmentCourse.chapters.map((chapter) => chapter.topic))];

  return `
    <div class="section-header compact">
      <div>
        <span class="eyebrow">Featured streaming course</span>
        <h3>${escapeHtml(webDevelopmentCourse.title)}</h3>
      </div>
      <button class="primary-button" type="button" data-open-chapter="${nextChapter?.id || "wd-1"}">
        ${nextChapter ? `Resume chapter ${nextChapter.chapter}` : "Replay course"}
      </button>
    </div>

    <article class="course-hero-card" data-searchable="web development playlist youtube streaming">
      <div>
        <p class="muted">${escapeHtml(webDevelopmentCourse.description)}</p>
        <div class="course-meta">
          <span class="tag-pill">${webDevelopmentCourse.chapters.length} chapters</span>
          <span class="tag-pill">${escapeHtml(webDevelopmentCourse.instructor)}</span>
          <span class="tag-pill">YouTube playlist</span>
        </div>
        <div style="margin-top:1rem">
          <div class="course-progress-label">
            <span>Course completion</span>
            <strong>${webDev.done} of ${webDev.total} chapters</strong>
          </div>
          <div class="progress-bar"><span style="width:${webDev.percent}%"></span></div>
        </div>
        <div class="inline-actions" style="margin-top:1rem">
          <button class="primary-button" type="button" data-start-course>Start streaming</button>
          <button class="secondary-button" type="button" data-open-chapter="wd-1">Chapter 1 · HTML</button>
        </div>
      </div>
      <div class="stat-grid">
        ${topics.map((topic) => {
          const count = webDevelopmentCourse.chapters.filter((chapter) => chapter.topic === topic).length;
          return `<article class="stat-card"><span class="label">${escapeHtml(topic)}</span><div class="value">${count}</div></article>`;
        }).join("")}
      </div>
    </article>

    <div class="split-grid" style="margin-top:1rem">
      ${topics.map((topic) => `
        <article class="table-card" data-searchable="${topic} chapters web development">
          <h3>${escapeHtml(topic)}</h3>
          <div class="resource-list" style="margin-top:0.75rem">
            ${webDevelopmentCourse.chapters
              .filter((chapter) => chapter.topic === topic)
              .map((chapter) => `
                <div class="list-row ${completed.has(chapter.id) ? "completed" : ""}" data-searchable="${chapter.title} ${chapter.topic}">
                  <div>
                    <strong>Ch. ${chapter.chapter} · ${escapeHtml(chapter.title)}</strong>
                    <small>${escapeHtml(chapter.duration)}${completed.has(chapter.id) ? " · Completed" : ""}</small>
                  </div>
                  <button class="${completed.has(chapter.id) ? "secondary-button" : "primary-button"}" type="button" data-open-chapter="${chapter.id}">
                    ${completed.has(chapter.id) ? "Replay" : "Watch"}
                  </button>
                </div>`).join("")}
          </div>
        </article>`).join("")}
    </div>`;
}

function renderFacultyDashboard() {
  const myContent = getFacultyContent(state.username);
  const pending = myContent.filter((c) => c.status === "pending");
  const approved = myContent.filter((c) => c.status === "approved");
  const students = state.store.users.filter((u) => u.role === "student");

  return `
    <section class="role-hero" id="facultyOverview" data-searchable="faculty studio overview publish">
      <div class="role-hero-main">
        <span class="eyebrow">Publishing studio</span>
        <h3>Create content that flows to admin review.</h3>
        <p>Submit notes or lectures. Once approved by admin, they appear instantly in student dashboards.</p>
        <div class="inline-actions">
          <button class="primary-button" type="button" data-open-publish="notes">Publish notes</button>
          <button class="secondary-button" type="button" data-open-publish="lecture">Add lecture</button>
        </div>
      </div>
      <div class="role-hero-side stat-grid">
        <article class="stat-card"><span class="label">Published</span><div class="value">${approved.length}</div></article>
        <article class="stat-card"><span class="label">Pending review</span><div class="value">${pending.length}</div></article>
        <article class="stat-card"><span class="label">Students</span><div class="value">${students.length}</div></article>
        <article class="stat-card"><span class="label">Avg. progress</span><div class="value">${Math.round(students.reduce((s, u) => s + u.progress, 0) / Math.max(students.length, 1))}%</div></article>
      </div>
    </section>

    <section id="facultyContent" data-searchable="faculty content submissions approvals">
      <div class="section-header compact">
        <div><span class="eyebrow">Pipeline</span><h3>My submissions</h3></div>
        <button class="primary-button" type="button" data-open-publish="notes">New submission</button>
      </div>
      <div class="table-card">
        <table class="simple-table">
          <thead><tr><th>Title</th><th>Type</th><th>Subject</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            ${myContent.length
              ? myContent.map((item) => `
                <tr data-searchable="${item.title} ${item.subject} ${item.status}">
                  <td><strong>${escapeHtml(item.title)}</strong><br><small class="muted">${formatDate(item.createdAt)}</small></td>
                  <td>${item.type}</td>
                  <td>${escapeHtml(item.subject)}</td>
                  <td><span class="status-pill ${item.status}">${item.status}</span></td>
                  <td>${item.type === "lecture" && item.status === "approved" && item.videoId
                    ? `<button class="secondary-button" type="button" data-open-video="${item.videoId}">Preview</button>`
                    : item.type === "notes" && item.status === "approved"
                      ? `<button class="secondary-button" type="button" data-download-content="${item.id}">Download</button>`
                      : `<span class="muted">Awaiting review</span>`}</td>
                </tr>`).join("")
              : `<tr><td colspan="5"><div class="empty-state">No submissions yet. Publish your first item.</div></td></tr>`}
          </tbody>
        </table>
      </div>
    </section>

    <section id="facultyStudents" data-searchable="faculty students engagement progress">
      <div class="section-header compact">
        <div><span class="eyebrow">Engagement</span><h3>Student progress</h3></div>
      </div>
      <div class="feature-grid">
        ${students.map((student) => {
          const webDev = getWebDevProgress(student.id);
          return `
          <article class="content-card" data-searchable="${student.name} progress ${student.progress} web development">
            <h3>${escapeHtml(student.name)}</h3>
            <p class="muted">ID: ${escapeHtml(student.id)}</p>
            <div class="progress-bar"><span style="width:${student.progress}%"></span></div>
            <p style="margin-top:0.5rem">${student.progress}% overall · Web Dev ${webDev.done}/${webDev.total} chapters</p>
            <div class="inline-actions" style="margin-top:0.75rem">
              <button class="secondary-button" type="button" data-view-student="${student.id}">View profile</button>
            </div>
          </article>`;
        }).join("")}
      </div>
    </section>

    <section id="facultyActivity" data-searchable="faculty activity feed">
      <div class="section-header compact"><div><span class="eyebrow">Feed</span><h3>Recent activity</h3></div></div>
      <div class="activity-feed">${renderActivityFeed("faculty")}</div>
    </section>`;
}

function renderAdminDashboard() {
  const pending = getPendingContent();
  const approved = getApprovedContent();
  const students = state.store.users.filter((u) => u.role === "student");
  const faculty = state.store.users.filter((u) => u.role === "faculty");
  const locked = state.store.users.filter((u) => u.status === "locked");

  return `
    <section class="role-hero" id="adminOverview" data-searchable="admin overview command center">
      <div class="role-hero-main">
        <span class="eyebrow">Command center</span>
        <h3>Platform governance at a glance.</h3>
        <p>Approve faculty submissions, manage user access, and monitor cross-role activity in real time.</p>
        <div class="inline-actions">
          <button class="primary-button" type="button" data-target-section="adminApprovals">${pending.length} pending review${pending.length === 1 ? "" : "s"}</button>
          <button class="secondary-button" type="button" data-roadmap-view="Cyber Security">Policy roadmap</button>
        </div>
      </div>
      <div class="role-hero-side stat-grid">
        <article class="stat-card"><span class="label">Users</span><div class="value">${state.store.users.length}</div></article>
        <article class="stat-card"><span class="label">Approved</span><div class="value">${approved.length}</div></article>
        <article class="stat-card"><span class="label">Pending</span><div class="value">${pending.length}</div></article>
        <article class="stat-card"><span class="label">Locked</span><div class="value">${locked.length}</div></article>
      </div>
    </section>

    <section class="dashboard-grid" data-searchable="admin metrics analytics">
      <article class="dashboard-card span-4"><span class="label">Students</span><div class="dashboard-figure">${students.length}</div><p class="muted">Active learners on platform</p></article>
      <article class="dashboard-card span-4"><span class="label">Faculty</span><div class="dashboard-figure">${faculty.length}</div><p class="muted">Content publishers</p></article>
      <article class="dashboard-card span-4"><span class="label">Moderation</span><div class="dashboard-figure">${approved.length ? Math.round((approved.length / state.store.content.length) * 100) : 0}%</div><p class="muted">Content approval rate</p><div class="progress-bar"><span style="width:${approved.length ? Math.round((approved.length / state.store.content.length) * 100) : 0}%"></span></div></article>
    </section>

    <section id="adminApprovals" data-searchable="admin approvals moderation queue">
      <div class="section-header compact"><div><span class="eyebrow">Moderation</span><h3>Approval queue</h3></div></div>
      <div class="table-card">
        <table class="simple-table">
          <thead><tr><th>Submission</th><th>Author</th><th>Type</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            ${state.store.content.length
              ? state.store.content.map((item) => `
                <tr data-searchable="${item.title} ${item.author} ${item.status}">
                  <td><strong>${escapeHtml(item.title)}</strong><br><small class="muted">${escapeHtml(item.subject)} · ${formatDate(item.createdAt)}</small></td>
                  <td>${escapeHtml(item.author)}</td>
                  <td>${item.type}</td>
                  <td><span class="status-pill ${item.status}">${item.status}</span></td>
                  <td class="inline-actions">
                    ${item.status === "pending"
                      ? `<button class="success-button" type="button" data-approve="${item.id}">Approve</button><button class="danger-button" type="button" data-reject="${item.id}">Reject</button>`
                      : item.status === "approved" && item.type === "lecture" && item.videoId
                        ? `<button class="secondary-button" type="button" data-open-video="${item.videoId}">Preview</button>`
                        : `<span class="muted">No action</span>`}
                  </td>
                </tr>`).join("")
              : `<tr><td colspan="5"><div class="empty-state">No content in the system.</div></td></tr>`}
          </tbody>
        </table>
      </div>
    </section>

    <section id="adminUsers" data-searchable="admin users accounts lock unlock">
      <div class="section-header compact"><div><span class="eyebrow">Access control</span><h3>User management</h3></div></div>
      <div class="table-card">
        <table class="simple-table">
          <thead><tr><th>User</th><th>Role</th><th>Status</th><th>Progress</th><th>Action</th></tr></thead>
          <tbody>
            ${state.store.users.map((user) => `
              <tr data-searchable="${user.name} ${user.role} ${user.status}">
                <td><strong>${escapeHtml(user.name)}</strong><br><small class="muted">${escapeHtml(user.id)}</small></td>
                <td>${user.role}</td>
                <td><span class="status-pill ${user.status}">${user.status}</span></td>
                <td>${user.role === "student" ? `${user.progress}%` : "—"}</td>
                <td>${user.role !== "admin"
                  ? `<button class="${user.status === "locked" ? "success-button" : "danger-button"}" type="button" data-toggle-lock="${user.id}">${user.status === "locked" ? "Unlock" : "Lock"}</button>`
                  : `<span class="muted">Protected</span>`}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </section>

    <section id="adminActivity" data-searchable="admin activity audit log">
      <div class="section-header compact"><div><span class="eyebrow">Audit</span><h3>Activity log</h3></div></div>
      <div class="activity-feed">${renderActivityFeed("admin")}</div>
    </section>`;
}

function renderActivityFeed(filterRole) {
  const items = [...state.store.activity]
    .sort((a, b) => b.at - a.at)
    .filter((item) => !filterRole || item.role === filterRole || filterRole === "admin");
  if (!items.length) return `<div class="empty-state">No activity yet.</div>`;
  return items.map((item) => `
    <article class="activity-item" data-searchable="${item.message}">
      <strong>${escapeHtml(item.message)}</strong>
      <time>${formatDate(item.at)}</time>
    </article>`).join("");
}

function updateSidebarStat() {
  if (!state.account) return;
  if (state.role === "student") {
    const webDev = getWebDevProgress();
    refs.sidebarStat.textContent = `Web Dev course: ${webDev.done}/${webDev.total} chapters completed.`;
  } else if (state.role === "faculty") {
    const pending = getFacultyContent(state.username).filter((c) => c.status === "pending").length;
    refs.sidebarStat.textContent = `${pending} submission${pending === 1 ? "" : "s"} awaiting admin review.`;
  } else if (state.role === "admin") {
    const pending = getPendingContent().length;
    refs.sidebarStat.textContent = `${pending} item${pending === 1 ? "" : "s"} in the approval queue.`;
  }
}

function updateLandingMetrics() {
  refs.metricContent.textContent = getApprovedContent().length;
  refs.metricFaculty.textContent = state.store.users.filter((u) => u.role === "faculty").length;
  refs.metricStudents.textContent = state.store.users.filter((u) => u.role === "student" && u.status === "active").length;
}

function addActivity(message, role) {
  state.store.activity.unshift({ id: `a${Date.now()}`, message, role, at: Date.now() });
  if (state.store.activity.length > 30) state.store.activity.length = 30;
}

function openPublishModal(type) {
  refs.publishType.value = type;
  refs.publishModalTitle.textContent = type === "lecture" ? "Submit lecture for approval" : "Submit notes for approval";
  refs.publishTitle.value = "";
  refs.publishDescription.value = "";
  refs.publishSubject.value = subjects[0];
  refs.publishModal.classList.remove("hidden");
  refs.publishModal.setAttribute("aria-hidden", "false");
  refs.publishTitle.focus();
}

function closePublishModal() {
  refs.publishModal.classList.add("hidden");
  refs.publishModal.setAttribute("aria-hidden", "true");
}

function populatePublishSubjects() {
  refs.publishSubject.innerHTML = subjects.map((s) => `<option value="${s}">${s}</option>`).join("");
}

function handlePublishSubmit(event) {
  event.preventDefault();
  const type = refs.publishType.value;
  const title = refs.publishTitle.value.trim();
  const subject = refs.publishSubject.value;
  const description = refs.publishDescription.value.trim() || "No description provided.";
  if (!title) return;

  const videoMap = { DBMS: "dbms", "Computer Networks": "cn" };
  const item = {
    id: `c${Date.now()}`,
    type,
    title,
    subject,
    description,
    author: state.account.name,
    authorId: state.username,
    status: "pending",
    createdAt: Date.now(),
    ...(type === "lecture" ? { videoId: videoMap[subject] || "dbms" } : {}),
  };

  state.store.content.unshift(item);
  addActivity(`${state.account.name} submitted ${type}: ${title}`, "faculty");
  saveStore();
  closePublishModal();
  navigateToSection("facultyContent");
  showToast("Submitted for admin approval. Students will see it once approved.");
}

function approveContent(contentId) {
  const item = state.store.content.find((c) => c.id === contentId);
  if (!item || item.status !== "pending") return;
  item.status = "approved";
  addActivity(`Admin approved: ${item.title}`, "admin");
  saveStore();
  showToast(`"${item.title}" approved — now visible to students.`);
}

function rejectContent(contentId) {
  const item = state.store.content.find((c) => c.id === contentId);
  if (!item || item.status !== "pending") return;
  item.status = "rejected";
  addActivity(`Admin rejected: ${item.title}`, "admin");
  saveStore();
  showToast(`"${item.title}" rejected.`);
}

function toggleUserLock(userId) {
  const user = state.store.users.find((u) => u.id === userId);
  if (!user || user.role === "admin") return;
  user.status = user.status === "locked" ? "active" : "locked";
  addActivity(`Admin ${user.status === "locked" ? "locked" : "unlocked"} account: ${user.name}`, "admin");
  saveStore();
  showToast(`${user.name} is now ${user.status}.`);
}

function openContentItem(contentId) {
  const item = state.store.content.find((c) => c.id === contentId);
  if (!item) return;
  if (item.type === "lecture" && item.videoId) {
    openVideo(item.videoId);
    return;
  }
  openInfoModal({
    kicker: item.subject,
    title: item.title,
    body: `${item.description}\n\nAuthor: ${item.author}`,
    points: [item.type, item.status, "Approved content"],
  });
}

function downloadContentItem(contentId) {
  const item = state.store.content.find((c) => c.id === contentId);
  if (!item) return;
  const blob = new Blob([
    `exiora Resource Pack\n\nTitle: ${item.title}\nSubject: ${item.subject}\nAuthor: ${item.author}\nStatus: ${item.status}\n\n${item.description}\n`
  ], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 500);
  showToast(`${item.title} downloaded.`);
}

function viewStudentProfile(userId) {
  const user = state.store.users.find((u) => u.id === userId);
  if (!user) return;
  const lessons = state.store.completions[userId]?.length || 0;
  const webDev = getWebDevProgress(userId);
  openInfoModal({
    kicker: "Student profile",
    title: user.name,
    body: `Student ID: ${user.id}\nProgress: ${user.progress}%\nWeb Dev chapters: ${webDev.done}/${webDev.total}\nTotal completions: ${lessons}\nStatus: ${user.status}`,
    points: ["Web Dev streaming", "Engagement tracked", "Faculty view"],
  });
}

function openCourseChapter(chapterId) {
  const chapter = getCourseChapter(chapterId);
  if (!chapter) return;

  state.currentVideoId = chapterId;
  state.currentPlayerMode = "youtube";

  refs.videoKicker.textContent = `Chapter ${chapter.chapter} · ${chapter.topic} · Web Development`;
  refs.videoModalTitle.textContent = chapter.title;
  refs.videoDescription.textContent = `${webDevelopmentCourse.title} — ${chapter.duration}. Streamed from the official Sheryians Coding School playlist on exiora.`;
  refs.videoOutcomes.innerHTML = chapter.outcomes.map((outcome) => `<li>${escapeHtml(outcome)}</li>`).join("");

  showYoutubePlayer(chapter.youtubeId);
  renderChapterList(chapterId);
  renderRelatedChapters(chapterId);

  refs.chapterShell.classList.remove("hidden");
  refs.openPlaylistLink.href = `${webDevelopmentCourse.playlistUrl}&si=dwQgwljJEa8bWmE4`;
  refs.videoModal.classList.remove("hidden");
  refs.videoModal.setAttribute("aria-hidden", "false");
}

async function showYoutubePlayer(youtubeId) {
  refs.lessonVideo.classList.add("hidden");
  refs.lessonVideo.pause();
  refs.lessonVideo.removeAttribute("src");
  refs.nativeVideoToolbar.classList.add("hidden");
  refs.youtubePlayerHost.classList.remove("hidden");
  refs.youtubeVideoToolbar.classList.remove("hidden");
  destroyYoutubePlayer();

  if (isFileProtocol() || !getEmbedOrigin()) {
    renderYoutubeFallback(
      youtubeId,
      "YouTube blocked in-player streaming from a file:// page (Error 153). Use a local server or open the chapter on YouTube."
    );
    return;
  }

  try {
    await ensureYouTubeApi();
    youtubePlayerInstance = new YT.Player(refs.youtubePlayerMount, {
      videoId: youtubeId,
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 1,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
        list: WEB_DEV_PLAYLIST_ID,
        origin: getEmbedOrigin(),
      },
      events: {
        onError: (event) => {
          if ([2, 5, 100, 101, 150, 153].includes(event.data)) {
            renderYoutubeFallback(
              youtubeId,
              "This chapter could not be embedded (YouTube Error 153). Open it directly on YouTube instead."
            );
          }
        },
      },
    });
  } catch {
    renderYoutubeFallback(
      youtubeId,
      "The video player failed to load. Open this chapter on YouTube instead."
    );
  }
}

function showNativePlayer(url) {
  destroyYoutubePlayer();
  refs.youtubePlayerHost.classList.add("hidden");
  refs.youtubeVideoToolbar.classList.add("hidden");
  refs.chapterShell.classList.add("hidden");
  refs.lessonVideo.classList.remove("hidden");
  refs.nativeVideoToolbar.classList.remove("hidden");
  refs.lessonVideo.src = url;
  refs.lessonVideo.currentTime = 0;
  refs.lessonVideo.volume = Number(refs.volumeSlider.value);
  refs.lessonVideo.playbackRate = Number(refs.speedSelect.value);
  refs.lessonVideo.play().catch(() => {});
  syncPlaybackButton();
}

function openVideo(videoId) {
  const video = videos[videoId];
  if (!video) return;

  state.currentVideoId = videoId;
  state.currentPlayerMode = "native";
  refs.videoKicker.textContent = video.subtitle;
  refs.videoModalTitle.textContent = video.title;
  refs.videoDescription.textContent = video.description;
  refs.videoOutcomes.innerHTML = video.outcomes.map((o) => `<li>${o}</li>`).join("");
  showNativePlayer(video.url);
  renderRelatedVideos(videoId);
  refs.videoModal.classList.remove("hidden");
  refs.videoModal.setAttribute("aria-hidden", "false");
}

function renderChapterList(activeChapterId) {
  const completed = new Set(getWebDevCompletions());
  refs.chapterList.innerHTML = webDevelopmentCourse.chapters.map((chapter) => `
    <button
      class="chapter-item ${chapter.id === activeChapterId ? "active" : ""} ${completed.has(chapter.id) ? "completed" : ""}"
      type="button"
      data-open-chapter="${chapter.id}"
    >
      <span class="chapter-index">${chapter.chapter}</span>
      <span>
        <strong>${escapeHtml(chapter.title)}</strong>
        <small>${escapeHtml(chapter.topic)} · ${escapeHtml(chapter.duration)}</small>
      </span>
      <span class="status-pill ${completed.has(chapter.id) ? "approved" : "pending"}">${completed.has(chapter.id) ? "Done" : "New"}</span>
    </button>`).join("");
}

function renderRelatedChapters(activeChapterId) {
  const index = webDevelopmentCourse.chapters.findIndex((chapter) => chapter.id === activeChapterId);
  const related = [
    webDevelopmentCourse.chapters[index - 1],
    webDevelopmentCourse.chapters[index + 1],
    webDevelopmentCourse.chapters[index + 2],
  ].filter(Boolean);

  refs.relatedVideos.innerHTML = related.map((chapter) => `
    <button class="related-card" type="button" data-open-chapter="${chapter.id}">
      <strong>Ch. ${chapter.chapter} · ${escapeHtml(chapter.title)}</strong>
      <span class="muted">${escapeHtml(chapter.topic)} · ${escapeHtml(chapter.duration)}</span>
    </button>`).join("");
}

function stepCourseChapter(direction) {
  const index = webDevelopmentCourse.chapters.findIndex((chapter) => chapter.id === state.currentVideoId);
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= webDevelopmentCourse.chapters.length) {
    showToast(direction < 0 ? "This is the first chapter." : "You reached the final chapter.");
    return;
  }
  openCourseChapter(webDevelopmentCourse.chapters[nextIndex].id);
}

function markCurrentChapterComplete() {
  if (!state.currentVideoId?.startsWith("wd-")) return;
  if (!state.username || state.role !== "student") {
    showToast("Chapter marked as watched.");
    return;
  }

  if (!state.store.completions[state.username]) state.store.completions[state.username] = [];
  if (!state.store.completions[state.username].includes(state.currentVideoId)) {
    const chapter = getCourseChapter(state.currentVideoId);
    state.store.completions[state.username].push(state.currentVideoId);
    const user = state.store.users.find((u) => u.id === state.username);
    if (user) user.progress = Math.min(100, user.progress + 3);
    addActivity(`${state.account.name} completed Web Dev chapter ${chapter?.chapter}: ${chapter?.title}`, "student");
    saveStore();
    renderChapterList(state.currentVideoId);
    showToast(`Chapter ${chapter?.chapter} marked complete.`);
    return;
  }
  showToast("Chapter already completed.");
}

function handleLessonComplete() {
  if (!state.username || state.role !== "student") {
    showToast("Lesson completed.");
    return;
  }
  if (!state.store.completions[state.username]) state.store.completions[state.username] = [];
  if (!state.store.completions[state.username].includes(state.currentVideoId)) {
    state.store.completions[state.username].push(state.currentVideoId);
    const user = state.store.users.find((u) => u.id === state.username);
    if (user) user.progress = Math.min(100, user.progress + 4);
    addActivity(`${state.account.name} completed ${videos[state.currentVideoId]?.title || "a lesson"}`, "student");
    saveStore();
  }
  showToast("Lesson completed. Progress updated.");
}

function renderRelatedVideos(activeVideoId) {
  const entries = Object.entries(videos).filter(([id]) => id !== activeVideoId).slice(0, 3);
  refs.relatedVideos.innerHTML = entries.map(([id, video]) => `
    <button class="related-card" type="button" data-open-video="${id}">
      <strong>${video.title}</strong>
      <span class="muted">${video.subtitle}</span>
    </button>`).join("");
}

function closeVideoModal() {
  refs.videoModal.classList.add("hidden");
  refs.videoModal.setAttribute("aria-hidden", "true");
  refs.lessonVideo.pause();
  refs.lessonVideo.removeAttribute("src");
  refs.lessonVideo.load();
  refs.lessonVideo.classList.remove("hidden");
  destroyYoutubePlayer();
  refs.youtubePlayerHost.classList.add("hidden");
  refs.youtubeVideoToolbar.classList.add("hidden");
  refs.nativeVideoToolbar.classList.remove("hidden");
  refs.chapterShell.classList.add("hidden");
  state.currentVideoId = null;
  state.currentPlayerMode = "native";
}

function togglePlayback() {
  if (state.currentPlayerMode === "youtube") {
    showToast("Use the YouTube player controls to play or pause.");
    return;
  }
  if (refs.lessonVideo.paused) refs.lessonVideo.play();
  else refs.lessonVideo.pause();
  syncPlaybackButton();
}

function stepVideo(direction) {
  if (state.currentPlayerMode === "youtube") {
    stepCourseChapter(direction);
    return;
  }
  const keys = Object.keys(videos);
  const currentIndex = Math.max(0, keys.indexOf(state.currentVideoId || keys[0]));
  openVideo(keys[(currentIndex + direction + keys.length) % keys.length]);
}

function syncPlaybackButton() {
  refs.playPauseButton.textContent = refs.lessonVideo.paused ? "Play" : "Pause";
}

function openInfoModal(payload) {
  if (!payload) return;
  refs.infoModalKicker.textContent = payload.kicker;
  refs.infoModalTitle.textContent = payload.title;
  refs.infoModalBody.textContent = payload.body;
  refs.infoModalPoints.innerHTML = (payload.points || []).map((p) => `<span class="tag-pill">${p}</span>`).join("");
  refs.infoModalAction.textContent = "Close";
  refs.infoModalAction.onclick = closeInfoModal;
  refs.infoModal.classList.remove("hidden");
  refs.infoModal.setAttribute("aria-hidden", "false");
}

function closeInfoModal() {
  refs.infoModal.classList.add("hidden");
  refs.infoModal.setAttribute("aria-hidden", "true");
}

function showHowItWorks() {
  openInfoModal({
    kicker: "How exiora connects",
    title: "Three roles, one pipeline",
    body: "Faculty publish content → Admin approves or rejects → Students access approved lessons and notes. All actions sync to the shared activity feed.",
    points: ["Faculty studio", "Admin queue", "Student hub", "Live sync"],
  });
}

function handleSearchInput() {
  state.searchQuery = refs.roleSearch.value.trim().toLowerCase();
  applySearchFilter();
}

function clearSearch() {
  refs.roleSearch.value = "";
  state.searchQuery = "";
  applySearchFilter();
  refs.roleSearch.focus();
}

function applySearchFilter() {
  const activePanel = document.querySelector("[data-role-panel]:not(.hidden)");
  if (!activePanel) return;

  const searchableBlocks = activePanel.querySelectorAll("[data-searchable]");
  let visibleMatches = 0;

  searchableBlocks.forEach((block) => {
    const text = block.dataset.searchable.toLowerCase();
    const visible = !state.searchQuery || text.includes(state.searchQuery);
    block.classList.toggle("search-hidden", !visible);
    if (visible) visibleMatches += 1;
  });

  refs.roleSearchMeta.textContent = state.searchQuery
    ? `${visibleMatches} match${visibleMatches === 1 ? "" : "es"} in view`
    : "Showing all content";
}

function toggleTheme() {
  const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("exiora-theme", nextTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  refs.themeLabel.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  refs.themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
}

function loadTheme() {
  return localStorage.getItem("exiora-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function showToast(message) {
  refs.toast.textContent = message;
  refs.toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => refs.toast.classList.add("hidden"), 2400);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
