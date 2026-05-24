// Agent Harness 知识地图 — 共享 app.js
// 用于 index.html(overview)和 pages/chapters/chN.html(章节)两种上下文

const CHAPTERS = [
  {
    "id": "ch1",
    "num": 1,
    "title": "LLM 推理机制",
    "layer": "L1",
    "layer_full": "L1 · 模型与 API 基础",
    "priority": "P1"
  },
  {
    "id": "ch2",
    "num": 2,
    "title": "KV Cache 原理",
    "layer": "L1",
    "layer_full": "L1 · 模型与 API 基础",
    "priority": "P0"
  },
  {
    "id": "ch3",
    "num": 3,
    "title": "Prompt Caching",
    "layer": "L1",
    "layer_full": "L1 · 模型与 API 基础",
    "priority": "P0"
  },
  {
    "id": "ch4",
    "num": 4,
    "title": "LLM API 实操",
    "layer": "L1",
    "layer_full": "L1 · 模型与 API 基础",
    "priority": "P1"
  },
  {
    "id": "ch5",
    "num": 5,
    "title": "Structured Output",
    "layer": "L1",
    "layer_full": "L1 · 模型与 API 基础",
    "priority": "P1"
  },
  {
    "id": "ch6",
    "num": 6,
    "title": "Agent Loop",
    "layer": "L2",
    "layer_full": "L2 · Agent 核心机制",
    "priority": "P0"
  },
  {
    "id": "ch7",
    "num": 7,
    "title": "Tool Use 协议",
    "layer": "L2",
    "layer_full": "L2 · Agent 核心机制",
    "priority": "P0"
  },
  {
    "id": "ch8",
    "num": 8,
    "title": "Tool 设计原则",
    "layer": "L2",
    "layer_full": "L2 · Agent 核心机制",
    "priority": "P1"
  },
  {
    "id": "ch9",
    "num": 9,
    "title": "Reasoning 模式",
    "layer": "L2",
    "layer_full": "L2 · Agent 核心机制",
    "priority": "P2"
  },
  {
    "id": "ch10",
    "num": 10,
    "title": "Streaming 处理",
    "layer": "L2",
    "layer_full": "L2 · Agent 核心机制",
    "priority": "P1"
  },
  {
    "id": "ch11",
    "num": 11,
    "title": "Harness 概念边界",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P0"
  },
  {
    "id": "ch12",
    "num": 12,
    "title": "Lifecycle Hooks",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P1"
  },
  {
    "id": "ch13",
    "num": 13,
    "title": "Permission System",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P1"
  },
  {
    "id": "ch14",
    "num": 14,
    "title": "Sandbox 与执行",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P1"
  },
  {
    "id": "ch15",
    "num": 15,
    "title": "Skills 系统",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P1"
  },
  {
    "id": "ch16",
    "num": 16,
    "title": "Agent SDK",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P0"
  },
  {
    "id": "ch17",
    "num": 17,
    "title": "Long-Running Agent",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P0"
  },
  {
    "id": "ch18",
    "num": 18,
    "title": "Three-Agent Harness",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P0"
  },
  {
    "id": "ch19",
    "num": 19,
    "title": "可观测性",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P1"
  },
  {
    "id": "ch28",
    "num": 28,
    "title": "失败模式分类",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P0"
  },
  {
    "id": "ch29",
    "num": 29,
    "title": "Prompt Injection 防御",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P0"
  },
  {
    "id": "ch30",
    "num": 30,
    "title": "成本/模型路由",
    "layer": "L3",
    "layer_full": "L3 · Harness 工程",
    "priority": "P1"
  },
  {
    "id": "ch20",
    "num": 20,
    "title": "Context Engineering 3 支柱",
    "layer": "L4",
    "layer_full": "L4 · Context、扩展与评估",
    "priority": "P0"
  },
  {
    "id": "ch21",
    "num": 21,
    "title": "Compaction vs Reset",
    "layer": "L4",
    "layer_full": "L4 · Context、扩展与评估",
    "priority": "P0"
  },
  {
    "id": "ch22",
    "num": 22,
    "title": "Sub-Agent 委派",
    "layer": "L4",
    "layer_full": "L4 · Context、扩展与评估",
    "priority": "P1"
  },
  {
    "id": "ch23",
    "num": 23,
    "title": "Multi-Agent 编排",
    "layer": "L4",
    "layer_full": "L4 · Context、扩展与评估",
    "priority": "P1"
  },
  {
    "id": "ch24",
    "num": 24,
    "title": "Memory 4 类",
    "layer": "L4",
    "layer_full": "L4 · Context、扩展与评估",
    "priority": "P0"
  },
  {
    "id": "ch25",
    "num": 25,
    "title": "MCP 协议",
    "layer": "L4",
    "layer_full": "L4 · Context、扩展与评估",
    "priority": "P0"
  },
  {
    "id": "ch26",
    "num": 26,
    "title": "Eval Harness",
    "layer": "L4",
    "layer_full": "L4 · Context、扩展与评估",
    "priority": "P1"
  },
  {
    "id": "ch27",
    "num": 27,
    "title": "模型协同演进",
    "layer": "L4",
    "layer_full": "L4 · Context、扩展与评估",
    "priority": "P0"
  },
  {
    "id": "ch31",
    "num": 31,
    "title": "Determinism &amp; Replay",
    "layer": "L4",
    "layer_full": "L4 · Context、扩展与评估",
    "priority": "P1"
  },
  {
    "id": "ch32",
    "num": 32,
    "title": "Harness→Model 反馈闭环",
    "layer": "L4",
    "layer_full": "L4 · Context、扩展与评估",
    "priority": "P0"
  }
];
const DOC_ORDER = ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7", "ch8", "ch9", "ch10", "ch11", "ch12", "ch13", "ch14", "ch15", "ch16", "ch17", "ch18", "ch19", "ch28", "ch29", "ch30", "ch20", "ch21", "ch22", "ch23", "ch24", "ch25", "ch26", "ch27", "ch31", "ch32"];
const CH_BY_ID = Object.fromEntries(CHAPTERS.map(c => [c.id, c]));

(function() {
  const ctx = document.body.getAttribute('data-context');      // 'overview' or null
  const currentCh = document.body.getAttribute('data-chapter'); // 'ch6' or null
  const isOverview = ctx === 'overview';
  const isChapter = !!currentCh;

  // 路径前缀:overview 在根目录,chapter 在 pages/chapters/
  // 从 overview 链到 chapter:'pages/chapters/chN.html'
  // 从 chapter 链到 chapter:'chN.html'(sibling)
  // 从 overview 链到 p0-sprint:'pages/p0-sprint.html'
  // 从 chapter 链到 p0-sprint:'../p0-sprint.html'
  // 从 overview 链到自己:'index.html'(或就不显示这一项)
  // 从 chapter 链到 overview:'../../index.html'
  const paths = isOverview ? {
    chapterFile: id => `pages/chapters/${id}.html`,
    overview: 'index.html',
    p0sprint: 'pages/p0-sprint.html',
    scenarios: 'pages/scenarios.html',
  } : {
    chapterFile: id => `${id}.html`,
    overview: '../../index.html',
    p0sprint: '../p0-sprint.html',
    scenarios: '../scenarios.html',
  };

  // ============= 0. 代码块语言自动检测 =============
  document.querySelectorAll('pre > code').forEach(code => {
    if (code.className) return;
    const txt = code.textContent;
    let lang = null;
    if (/\b(def |import |from \w+ import|class \w+:|print\()/.test(txt)) lang = 'python';
    else if (/\b(function |const |let |await |=>|interface |type \w+ =|import .+ from)/.test(txt)) lang = 'typescript';
    else if (/^#!\/bin\/bash|^\s*(echo|grep|cat|cd|ls|rm|sudo|jq|curl) /m.test(txt)) lang = 'bash';
    else if (/^---\s*$/m.test(txt) || /^(name|description|hooks|matcher|allow|ask|deny):/m.test(txt)) lang = 'yaml';
    else if (/^\s*\{[\s\S]*\}\s*$/.test(txt.trim()) && /"[^"]+"\s*:/.test(txt)) lang = 'json';
    if (lang) code.className = 'language-' + lang;
  });

  // ============= 1. 生成 sidebar(从 CHAPTERS 元数据) =============
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    const layers = {};
    CHAPTERS.forEach(c => {
      if (!layers[c.layer_full]) layers[c.layer_full] = [];
      layers[c.layer_full].push(c);
    });
    const overviewLink = isOverview
      ? `<a href="#" class="active">总览 · Overview</a>`
      : `<a href="${paths.overview}">← 总览 · Overview</a>`;
    let html = `
      <div class="brand">Harness 工程师知识地图</div>
      <div class="brand-sub">32 个知识点 · 4 个层级</div>
      <div class="toolbar" style="position: relative;">
        <input class="search" id="searchInput" placeholder="搜索章节 / 关键词..." autocomplete="off">
        <button id="themeToggle" title="切换深浅色">☾</button>
        <div class="search-results" id="searchResults"></div>
      </div>
      ${overviewLink}
      <a href="${paths.p0sprint}" style="color: var(--c-amber-text); font-weight: 500;">核心章 · 七日精读 →</a>
      <a href="${paths.scenarios}" style="color: var(--c-amber-text); font-weight: 500;">按场景查 →</a>
    `;
    for (const [layerName, items] of Object.entries(layers)) {
      html += `<div class="group-title">${layerName}</div><ol>`;
      items.forEach(c => {
        const isActive = c.id === currentCh ? ' class="active"' : '';
        html += `<li><a href="${paths.chapterFile(c.id)}"${isActive}>${c.num}. ${c.title}</a></li>`;
      });
      html += '</ol>';
    }
    sidebar.innerHTML = html;
  }

  // ============= 2. 主题切换(dark mode) =============
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored) html.setAttribute('data-theme', stored);
  function syncToggleIcon() {
    if (!themeToggle) return;
    const t = html.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    themeToggle.textContent = t === 'dark' ? '☀' : '☾';
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const cur = html.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next = cur === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      syncToggleIcon();
    });
    syncToggleIcon();
  }

  // ============= 3. 移动端 sidebar 抽屉 =============
  const sb = document.getElementById('sidebar');
  const toggle = document.getElementById('mobileToggle');
  const backdrop = document.getElementById('mobileBackdrop');
  function closeSidebar() { if (sb) sb.classList.remove('open'); if (backdrop) backdrop.classList.remove('active'); }
  if (toggle && backdrop) {
    toggle.addEventListener('click', () => {
      sb.classList.toggle('open');
      backdrop.classList.toggle('active');
    });
    backdrop.addEventListener('click', closeSidebar);
  }

  // ============= 以下功能仅 chapter 页面有意义 =============
  if (isChapter) {
    // 4. 章节锚点复制按钮
    document.querySelectorAll('section[id^="ch"] > h2').forEach(h => {
      const sec = h.parentElement;
      const cid = sec.id;
      const btn = document.createElement('span');
      btn.className = 'copy-link';
      btn.textContent = '复制链接';
      btn.addEventListener('click', () => {
        const url = location.origin + location.pathname.replace(/[^/]+$/, '') + cid + '.html';
        navigator.clipboard.writeText(url).then(() => {
          btn.textContent = '✓ 已复制';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = '复制链接';
            btn.classList.remove('copied');
          }, 1500);
        });
      });
      h.appendChild(btn);
    });

    // 5. 章内 mini-TOC(5 步章注入)
    document.querySelectorAll('section[id^="ch"]').forEach(sec => {
      const steps = sec.querySelectorAll('.step-h');
      if (steps.length < 3) return;
      const toc = document.createElement('div');
      toc.className = 'mini-toc';
      steps.forEach((step, i) => {
        const stepId = sec.id + '-step-' + (i + 1);
        step.id = stepId;
        const a = document.createElement('a');
        a.href = '#' + stepId;
        const idx = step.querySelector('.idx');
        const text = idx ? step.textContent.replace(idx.textContent, '').trim() : step.textContent.trim();
        a.textContent = text;
        toc.appendChild(a);
      });
      const anchor = sec.querySelector('.anchor');
      if (anchor) {
        const a = document.createElement('a');
        anchor.id = sec.id + '-anchor';
        a.href = '#' + anchor.id;
        a.textContent = '速查';
        toc.appendChild(a);
      }
      const badges = sec.querySelector('.badges');
      if (badges) badges.after(toc); else sec.querySelector('h2').after(toc);
    });

    // 6. prev / next 章节导航(跨文件)
    const idx = DOC_ORDER.indexOf(currentCh);
    const sec = document.querySelector('section[id^="ch"]');
    if (sec && idx >= 0) {
      const nav = document.createElement('div');
      nav.className = 'chapter-nav';
      const prevId = DOC_ORDER[idx - 1];
      const nextId = DOC_ORDER[idx + 1];
      function makeLink(id, dir) {
        const ch = CH_BY_ID[id];
        const a = document.createElement('a');
        a.className = dir;
        a.href = `${id}.html`;
        const arrow = dir === 'prev' ? '← 上一章' : '下一章 →';
        a.innerHTML = `<span class="arrow">${arrow}</span><span class="ch-title">#${ch.num} · ${ch.title}</span>`;
        return a;
      }
      if (prevId) nav.appendChild(makeLink(prevId, 'prev'));
      else { const e = document.createElement('div'); e.className = 'empty'; nav.appendChild(e); }
      if (nextId) nav.appendChild(makeLink(nextId, 'next'));
      else { const e = document.createElement('div'); e.className = 'empty'; nav.appendChild(e); }
      sec.appendChild(nav);
    }

    // 7. 自检 checkbox 状态持久化
    document.querySelectorAll('.checklist .item input[type="checkbox"]').forEach((cb) => {
      const sec = cb.closest('section[id^="ch"]');
      if (!sec) return;
      const items = sec.querySelectorAll('.checklist .item input[type="checkbox"]');
      const localIdx = Array.from(items).indexOf(cb);
      const key = 'check-' + sec.id + '-' + localIdx;
      if (localStorage.getItem(key) === '1') cb.checked = true;
      cb.addEventListener('change', () => {
        localStorage.setItem(key, cb.checked ? '1' : '0');
      });
    });
  }

  // ============= 8. 跨文件搜索(两种上下文都需要) =============
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  function doSearch(q) {
    q = q.trim().toLowerCase();
    if (!q || !searchResults) { if (searchResults) searchResults.classList.remove('active'); return; }
    const hits = CHAPTERS.filter(c =>
      c.title.toLowerCase().includes(q) ||
      String(c.num).includes(q) ||
      c.layer.toLowerCase().includes(q)
    ).slice(0, 12);
    if (hits.length === 0) {
      searchResults.innerHTML = '<div class="no-results">无匹配章节</div>';
      searchResults.classList.add('active');
      return;
    }
    searchResults.innerHTML = hits.map(h =>
      `<a href="${paths.chapterFile(h.id)}"><span class="hit-num">#${h.num}</span>${h.title}</a>`
    ).join('');
    searchResults.classList.add('active');
  }
  if (searchInput) {
    searchInput.addEventListener('input', e => doSearch(e.target.value));
    searchInput.addEventListener('focus', e => { if (e.target.value) doSearch(e.target.value); });
    document.addEventListener('click', e => {
      if (!e.target.closest('.toolbar')) searchResults.classList.remove('active');
    });
  }

  // ============= 9. Smooth scroll for in-page anchors =============
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 32, behavior: 'smooth' });
        history.pushState(null, '', '#' + id);
        if (window.innerWidth <= 900) closeSidebar();
      }
    });
  });
})();
