const STORAGE_KEY = "edvora-platform-v2";

const credentials = {
  S2510125: {
    password: "251025",
    role: "student",
    name: "Aditya Sharma",
    title: "Student Learning Hub",
    subtitle: "Approved lessons, semester paths, and downloadable study packs.",
    actionLabel: "Resume learning",
    sidebarMeta: "Semester 5 · Computer Science",
  },
  F1234: {
    password: "1234",
    role: "faculty",
    name: "Dr. Raj Mehta",
    title: "Faculty Publishing Studio",
    subtitle: "Create content, track approvals, and monitor student engagement.",
    actionLabel: "Publish content",
    sidebarMeta: "Database Systems · Senior Faculty",
  },
  A7890: {
    password: "7890",
    role: "admin",
    name: "Priya Nair",
    title: "Admin Command Center",
    subtitle: "Govern users, moderate submissions, and oversee platform health.",
    actionLabel: "Review queue",
    sidebarMeta: "Platform Operations",
  },
};

const roleConfig = {
  student: [
    { label: "Overview", target: "studentOverview" },
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

const videos = {
  ds: {
    title: "Arrays and Linked Lists",
    subtitle: "Semester 3 · Data Structures",
    description: "Linear structures, pointer logic, and complexity trade-offs.",
    outcomes: ["Compare array vs linked list", "Analyze time complexity", "Pick the right structure"],
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    subject: "Data Structures",
  },
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
  ai: {
    title: "AI Search Fundamentals",
    subtitle: "Semester 5 · Artificial Intelligence",
    description: "Search strategies, heuristics, and decision trees.",
    outcomes: ["Apply search algorithms", "Use heuristics", "Connect AI to products"],
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    subject: "Artificial Intelligence",
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
      author: "Dr. Raj Mehta",
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
      author: "Dr. Raj Mehta",
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
      author: "Dr. Raj Mehta",
      authorId: "F1234",
      status: "pending",
      createdAt: Date.now() - 86400000,
      videoId: "cn",
    },
  ],
  users: [
    { id: "S2510125", name: "Aditya Sharma", role: "student", status: "active", progress: 72 },
    { id: "F1234", name: "Dr. Raj Mehta", role: "faculty", status: "active", progress: 0 },
    { id: "A7890", name: "Priya Nair", role: "admin", status: "active", progress: 0 },
    { id: "S2510999", name: "Neha Verma", role: "student", status: "active", progress: 58 },
    { id: "S2510888", name: "Rohan Patel", role: "student", status: "active", progress: 41 },
  ],
  activity: [
    { id: "a1", message: "Dr. Raj Mehta published lecture: Introduction to Normalization", role: "faculty", at: Date.now() - 86400000 * 5 },
    { id: "a2", message: "Admin approved: Introduction to Normalization", role: "admin", at: Date.now() - 86400000 * 4 },
    { id: "a3", message: "Aditya Sharma completed DBMS lesson", role: "student", at: Date.now() - 86400000 * 2 },
  ],
  completions: { S2510125: ["dbms"] },
});

const state = {
  role: null,
  username: null,
  account: null,
  currentVideoId: null,
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
  populatePublishSubjects();
  updateLandingMetrics();
  bindEvents();
  setLoggedOutState();
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
    const button = event.target.closest("button[data-open-video]");
    if (button) openVideo(button.dataset.openVideo);
  });

  refs.closeInfoModal.addEventListener("click", closeInfoModal);
  refs.infoModal.addEventListener("click", (event) => { if (event.target === refs.infoModal) closeInfoModal(); });
  refs.closePublishModal.addEventListener("click", closePublishModal);
  refs.cancelPublish.addEventListener("click", closePublishModal);
  refs.publishModal.addEventListener("click", (event) => { if (event.target === refs.publishModal) closePublishModal(); });
  refs.publishForm.addEventListener("submit", handlePublishSubmit);
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
    "button[data-open-video], button[data-open-content], button[data-download-content], button[data-roadmap-view], button[data-approve], button[data-reject], button[data-toggle-lock], button[data-open-publish], button[data-view-student], button[data-target-section]"
  );
  if (!button) return;

  if (button.dataset.targetSection) navigateToSection(button.dataset.targetSection);
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
    const next = getApprovedLectures()[0];
    if (next?.videoId) openVideo(next.videoId);
    else navigateToSection("studentCourses");
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
  refs.roleTitle.textContent = "Welcome to Edvora";
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

function formatDate(ts) {
  return new Date(ts).toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function renderStudentDashboard() {
  const approved = getApprovedContent();
  const lectures = getApprovedLectures();
  const notes = approved.filter((item) => item.type === "notes");
  const progress = state.store.users.find((u) => u.id === state.username)?.progress || 0;
  const completed = state.store.completions[state.username]?.length || 0;

  return `
    <section class="role-hero" id="studentOverview" data-searchable="student overview progress learning streak">
      <div class="role-hero-main">
        <span class="eyebrow">Student learning hub</span>
        <h3>Welcome back, ${escapeHtml(state.account.name.split(" ")[0])}.</h3>
        <p>Every lesson and note here is faculty-published and admin-approved. Your progress syncs across the platform.</p>
        <div class="inline-actions">
          <button class="primary-button" type="button" data-open-video="${lectures[0]?.videoId || "dbms"}">Continue lesson</button>
          <button class="secondary-button" type="button" data-roadmap-view="Web Development">View roadmap</button>
        </div>
      </div>
      <div class="role-hero-side stat-grid">
        <article class="stat-card" data-searchable="semester progress ${progress}">
          <span class="label">Semester progress</span>
          <div class="value">${progress}%</div>
          <div class="progress-bar"><span style="width:${progress}%"></span></div>
        </article>
        <article class="stat-card" data-searchable="lessons completed ${completed}">
          <span class="label">Lessons completed</span>
          <div class="value">${completed}</div>
        </article>
        <article class="stat-card" data-searchable="approved resources ${approved.length}">
          <span class="label">Available resources</span>
          <div class="value">${approved.length}</div>
        </article>
        <article class="stat-card" data-searchable="study streak 4 days">
          <span class="label">Study streak</span>
          <div class="value">4d</div>
        </article>
      </div>
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
        ${students.map((student) => `
          <article class="content-card" data-searchable="${student.name} progress ${student.progress}">
            <h3>${escapeHtml(student.name)}</h3>
            <p class="muted">ID: ${escapeHtml(student.id)}</p>
            <div class="progress-bar"><span style="width:${student.progress}%"></span></div>
            <p style="margin-top:0.5rem">${student.progress}% complete · ${state.store.completions[student.id]?.length || 0} lessons</p>
            <div class="inline-actions" style="margin-top:0.75rem">
              <button class="secondary-button" type="button" data-view-student="${student.id}">View profile</button>
            </div>
          </article>`).join("")}
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
    const approved = getApprovedContent().length;
    refs.sidebarStat.textContent = `${approved} approved resources available to you.`;
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

  const videoMap = { "Data Structures": "ds", DBMS: "dbms", "Computer Networks": "cn", "Artificial Intelligence": "ai" };
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
    `Edvora Resource Pack\n\nTitle: ${item.title}\nSubject: ${item.subject}\nAuthor: ${item.author}\nStatus: ${item.status}\n\n${item.description}\n`
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
  openInfoModal({
    kicker: "Student profile",
    title: user.name,
    body: `Student ID: ${user.id}\nProgress: ${user.progress}%\nCompleted lessons: ${lessons}\nStatus: ${user.status}`,
    points: ["Engagement tracked", "Progress synced", "Faculty view"],
  });
}

function openVideo(videoId) {
  const video = videos[videoId];
  if (!video) return;
  state.currentVideoId = videoId;
  refs.videoKicker.textContent = video.subtitle;
  refs.videoModalTitle.textContent = video.title;
  refs.videoDescription.textContent = video.description;
  refs.videoOutcomes.innerHTML = video.outcomes.map((o) => `<li>${o}</li>`).join("");
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
  state.currentVideoId = null;
}

function togglePlayback() {
  if (refs.lessonVideo.paused) refs.lessonVideo.play();
  else refs.lessonVideo.pause();
  syncPlaybackButton();
}

function stepVideo(direction) {
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
    kicker: "How Edvora connects",
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
  showToast.timer = setTimeout(() => refs.toast.classList.add("hidden"), 2400);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
