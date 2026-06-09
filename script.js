const credentials = {
  S2510125: { password: "251025", role: "student", title: "Student Dashboard", subtitle: "Semester-wise learning, study progress, and lecture access.", actionLabel: "Open Learning" },
  F1234: { password: "1234", role: "faculty", title: "Faculty Dashboard", subtitle: "Publish notes, upload lecture links, and review teaching materials.", actionLabel: "Open Studio" },
  A7890: { password: "7890", role: "admin", title: "Admin Dashboard", subtitle: "Manage content, users, approvals, and platform oversight.", actionLabel: "Open Oversight" },
};

const roleConfig = {
  student: [
    { label: "Overview", target: "studentOverview" },
    { label: "Learning", target: "studentLearning" },
    { label: "Tools", target: "studentTools" },
  ],
  faculty: [
    { label: "Overview", target: "facultyOverview" },
    { label: "Publish", target: "facultyPublish" },
    { label: "Review", target: "facultyReview" },
  ],
  admin: [
    { label: "Overview", target: "adminOverview" },
    { label: "Governance", target: "adminGovernance" },
    { label: "Analytics", target: "adminAnalytics" },
  ],
};

const videos = {
  ds: { title: "Arrays and Linked Lists", subtitle: "Semester 3 · Data Structures", description: "A focused lecture on linear structures and complexity.", outcomes: ["Compare array and linked list behavior", "Evaluate time complexity", "Choose the right structure"], url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  oop: { title: "Object Oriented Design", subtitle: "Semester 3 · Object Oriented Programming", description: "Build a clean OOP mental model with classes and objects.", outcomes: ["Model classes", "Apply inheritance", "Use abstraction well"], url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  dbms: { title: "SQL and Normalization", subtitle: "Semester 4 · DBMS", description: "From schema design to practical SQL querying.", outcomes: ["Write SQL queries", "Normalize data", "Understand transactions"], url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  os: { title: "Processes and Scheduling", subtitle: "Semester 4 · Operating Systems", description: "Processes, threads, and scheduling algorithms made clear.", outcomes: ["Describe process flow", "Compare schedulers", "Understand synchronization"], url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  cn: { title: "Networking Layers", subtitle: "Semester 5 · Computer Networks", description: "OSI, TCP/IP, and routing logic explained visually.", outcomes: ["Map network layers", "Read packet flow", "Understand routing"], url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  ai: { title: "AI Search Fundamentals", subtitle: "Semester 5 · Artificial Intelligence", description: "Search strategies, heuristics, and AI decision paths.", outcomes: ["Understand search", "Use heuristics", "Relate AI to products"], url: "https://www.w3schools.com/html/mov_bbb.mp4" },
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

const facultyCopy = {
  "Dr. Neha Rao": { kicker: "Computer Science", title: "Dr. Neha Rao", body: "Data Structures, Algorithms", points: ["Faculty profile", "Searchable", "Professional"] },
  "Prof. Meera Patel": { kicker: "Software Engineering", title: "Prof. Meera Patel", body: "OOP, Design Patterns", points: ["Faculty profile", "Searchable", "Professional"] },
  "Dr. Raj Mehta": { kicker: "Database Systems", title: "Dr. Raj Mehta", body: "DBMS, SQL", points: ["Faculty profile", "Searchable", "Professional"] },
};

const state = {
  role: null,
  currentVideoId: null,
  searchQuery: "",
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
  roleNav: document.getElementById("roleNav"),
  roleViewport: document.getElementById("roleViewport"),
  roleActionButton: document.getElementById("roleActionButton"),
  roleSearch: document.getElementById("roleSearch"),
  roleSearchClear: document.getElementById("roleSearchClear"),
  roleSearchMeta: document.getElementById("roleSearchMeta"),
  infoModal: document.getElementById("infoModal"),
  closeInfoModal: document.getElementById("closeInfoModal"),
  infoModalKicker: document.getElementById("infoModalKicker"),
  infoModalTitle: document.getElementById("infoModalTitle"),
  infoModalBody: document.getElementById("infoModalBody"),
  infoModalPoints: document.getElementById("infoModalPoints"),
  infoModalAction: document.getElementById("infoModalAction"),
  videoModal: document.getElementById("videoModal"),
  closeVideoModal: document.getElementById("closeVideoModal"),
  lessonVideo: document.getElementById("lessonVideo"),
  playPauseButton: document.getElementById("playPauseButton"),
  rewindButton: document.getElementById("rewindButton"),
  forwardButton: document.getElementById("forwardButton"),
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

document.addEventListener("DOMContentLoaded", init);

function init() {
  applyTheme(loadTheme());
  bindEvents();
  setLoggedOutState();
}

function bindEvents() {
  refs.themeToggle.addEventListener("click", toggleTheme);
  refs.logoutButton.addEventListener("click", logout);
  refs.jumpToLoginBtn.addEventListener("click", () => refs.username.focus());
  refs.previewButton.addEventListener("click", () => showToast("Use a demo role to open the dashboard."));
  refs.loginForm.addEventListener("submit", handleLogin);
  refs.roleSearch.addEventListener("input", handleSearchInput);
  refs.roleSearchClear.addEventListener("click", clearSearch);
  refs.roleActionButton.addEventListener("click", () => {
    const firstTarget = roleConfig[state.role]?.[0]?.target;
    if (firstTarget) document.getElementById(firstTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  refs.roleNav.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-target]");
    if (!button) return;
    document.getElementById(button.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  refs.roleViewport.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-open-video], button[data-open-video-by-subject], button[data-download-resource], button[data-roadmap-view], button[data-faculty-view], button[data-semester-open], button[data-add-note], button[data-add-video], button[data-admin-approve], button[data-admin-lock]");
    if (!button) return;

    if (button.dataset.openVideo) openVideo(button.dataset.openVideo);
    else if (button.dataset.openVideoBySubject) openVideoBySubject(button.dataset.openVideoBySubject);
    else if (button.dataset.downloadResource) downloadResource(button.dataset.downloadResource);
    else if (button.dataset.roadmapView) openInfoModal(roadmapCopy[button.dataset.roadmapView]);
    else if (button.dataset.facultyView) openInfoModal(facultyCopy[button.dataset.facultyView]);
    else if (button.dataset.semesterOpen) showInfo(`Semester ${button.dataset.semesterOpen}`, `These are the learning materials grouped under semester ${button.dataset.semesterOpen}.`);
    else if (button.dataset.addNote) showToast("Notes added locally for this demo role.");
    else if (button.dataset.addVideo) showToast("Lecture added locally for this demo role.");
    else if (button.dataset.adminApprove) showToast("Content approved locally.");
    else if (button.dataset.adminLock) showToast("Account locked locally.");
  });

  refs.relatedVideos.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-open-video]");
    if (button) openVideo(button.dataset.openVideo);
  });

  refs.closeInfoModal.addEventListener("click", closeInfoModal);
  refs.infoModal.addEventListener("click", (event) => { if (event.target === refs.infoModal) closeInfoModal(); });
  refs.closeVideoModal.addEventListener("click", closeVideoModal);
  refs.videoModal.addEventListener("click", (event) => { if (event.target === refs.videoModal) closeVideoModal(); });
  refs.playPauseButton.addEventListener("click", togglePlayback);
  refs.rewindButton.addEventListener("click", () => stepVideo(-1));
  refs.forwardButton.addEventListener("click", () => stepVideo(1));
  refs.prevVideoButton.addEventListener("click", () => stepVideo(-1));
  refs.nextVideoButton.addEventListener("click", () => stepVideo(1));
  refs.volumeSlider.addEventListener("input", () => { refs.lessonVideo.volume = Number(refs.volumeSlider.value); });
  refs.speedSelect.addEventListener("change", () => { refs.lessonVideo.playbackRate = Number(refs.speedSelect.value); });
  refs.fullscreenButton.addEventListener("click", () => { if (refs.lessonVideo.requestFullscreen) refs.lessonVideo.requestFullscreen(); });
  refs.lessonVideo.addEventListener("play", syncPlaybackButton);
  refs.lessonVideo.addEventListener("pause", syncPlaybackButton);
  refs.lessonVideo.addEventListener("ended", () => showToast("Lesson completed."));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeInfoModal();
      closeVideoModal();
    }
  });
}

function handleLogin(event) {
  event.preventDefault();
  const username = refs.username.value.trim();
  const password = refs.password.value.trim();
  const account = credentials[username];
  if (!account || account.password !== password) {
    refs.loginFeedback.textContent = "Invalid credentials. Use the provided demo role accounts.";
    refs.loginFeedback.className = "form-feedback error";
    return;
  }

  state.role = account.role;
  refs.loginFeedback.textContent = `${account.title} opened successfully.`;
  refs.loginFeedback.className = "form-feedback success";
  refs.landing.classList.add("hidden");
  refs.appShell.classList.remove("hidden");
  refs.logoutButton.classList.remove("hidden");
  refs.roleBadge.textContent = account.role.toUpperCase();
  refs.roleTitle.textContent = account.title;
  refs.roleSubtitle.textContent = account.subtitle;
  refs.roleActionButton.textContent = account.actionLabel;
  renderRoleNav(account.role);
  showRolePanel(account.role);
  applySearchFilter();
  showToast(`${account.role.toUpperCase()} dashboard loaded.`);
}

function renderRoleNav(role) {
  refs.roleNav.innerHTML = roleConfig[role].map((item) => `<button type="button" data-target="${item.target}">${item.label}</button>`).join("");
}

function showRolePanel(role) {
  document.querySelectorAll("[data-role-panel]").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.rolePanel !== role);
  });
  applySearchFilter();
}

function setLoggedOutState() {
  refs.landing.classList.remove("hidden");
  refs.appShell.classList.add("hidden");
  refs.logoutButton.classList.add("hidden");
  refs.roleNav.innerHTML = "";
  refs.roleBadge.textContent = "ACCESS";
  refs.roleTitle.textContent = "Welcome to Edvora";
  refs.roleSubtitle.textContent = "Login with the student, faculty, or admin credentials to unlock the workspace.";
  refs.roleActionButton.textContent = "";
  refs.roleSearch.value = "";
  refs.roleSearchMeta.textContent = "Showing all content";
  state.searchQuery = "";
  state.role = null;
}

function logout() {
  refs.username.value = "";
  refs.password.value = "";
  refs.loginFeedback.textContent = "";
  refs.loginFeedback.className = "form-feedback";
  closeVideoModal();
  closeInfoModal();
  setLoggedOutState();
  showToast("Logged out.");
}

function openVideo(videoId) {
  const video = videos[videoId];
  if (!video) return;
  state.currentVideoId = videoId;
  refs.videoKicker.textContent = video.subtitle;
  refs.videoModalTitle.textContent = video.title;
  refs.videoDescription.textContent = video.description;
  refs.videoOutcomes.innerHTML = video.outcomes.map((outcome) => `<li>${outcome}</li>`).join("");
  refs.lessonVideo.src = video.url;
  refs.lessonVideo.currentTime = 0;
  refs.lessonVideo.volume = Number(refs.volumeSlider.value);
  refs.lessonVideo.playbackRate = Number(refs.speedSelect.value);
  renderRelatedVideos(videoId);
  refs.videoModal.classList.remove("hidden");
  refs.videoModal.setAttribute("aria-hidden", "false");
  refs.lessonVideo.play().catch(() => {});
  syncPlaybackButton();
}

function openVideoBySubject(subject) {
  const map = {
    "Data Structures": "ds",
    "Object Oriented Programming": "oop",
    DBMS: "dbms",
    "Operating Systems": "os",
    "Computer Networks": "cn",
    "Artificial Intelligence": "ai",
  };
  openVideo(map[subject] || "ds");
}

function renderRelatedVideos(activeVideoId) {
  const entries = Object.entries(videos).filter(([videoId]) => videoId !== activeVideoId).slice(0, 3);
  refs.relatedVideos.innerHTML = entries.map(([videoId, video]) => `<button class="related-card" type="button" data-open-video="${videoId}"><strong>${video.title}</strong><span>${video.subtitle}</span></button>`).join("");
}

function closeVideoModal() {
  refs.videoModal.classList.add("hidden");
  refs.videoModal.setAttribute("aria-hidden", "true");
  refs.lessonVideo.pause();
  refs.lessonVideo.removeAttribute("src");
  refs.lessonVideo.load();
  state.currentVideoId = null;
}

function togglePlayback() {
  if (refs.lessonVideo.paused) refs.lessonVideo.play(); else refs.lessonVideo.pause();
  syncPlaybackButton();
}

function stepVideo(direction) {
  const keys = Object.keys(videos);
  const currentIndex = Math.max(0, keys.indexOf(state.currentVideoId || keys[0]));
  const nextIndex = (currentIndex + direction + keys.length) % keys.length;
  openVideo(keys[nextIndex]);
}

function syncPlaybackButton() {
  refs.playPauseButton.textContent = refs.lessonVideo.paused ? "Play" : "Pause";
}

function openInfoModal(payload) {
  if (!payload) return;
  refs.infoModalKicker.textContent = payload.kicker;
  refs.infoModalTitle.textContent = payload.title;
  refs.infoModalBody.textContent = payload.body;
  refs.infoModalPoints.innerHTML = payload.points.map((point) => `<span class="tag-pill">${point}</span>`).join("");
  refs.infoModalAction.textContent = "Close";
  refs.infoModalAction.onclick = closeInfoModal;
  refs.infoModal.classList.remove("hidden");
  refs.infoModal.setAttribute("aria-hidden", "false");
}

function showInfo(title, body) {
  openInfoModal({ kicker: "Quick preview", title, body, points: [] });
}

function closeInfoModal() {
  refs.infoModal.classList.add("hidden");
  refs.infoModal.setAttribute("aria-hidden", "true");
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
    block.classList.toggle("hidden", !visible);
    if (visible) visibleMatches += 1;
  });

  refs.roleSearchMeta.textContent = state.searchQuery
    ? `${visibleMatches} match${visibleMatches === 1 ? "" : "es"} in view`
    : "Showing all content";
}

function downloadResource(resourceKey) {
  const [subjectName, resourceName] = resourceKey.split("|");
  const blob = new Blob([
    `Edvora Resource Pack\n\nSubject: ${subjectName}\nResource: ${resourceName}\n\nPrepared for the current role dashboard.\n`
  ], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${subjectName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${resourceName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 500);
  showToast(`${resourceName} downloaded.`);
}

function toggleTheme() {
  const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("edvora-theme", nextTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  refs.themeLabel.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  refs.themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
}

function loadTheme() {
  return localStorage.getItem("edvora-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function showToast(message) {
  refs.toast.textContent = message;
  refs.toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => refs.toast.classList.add("hidden"), 2200);
}