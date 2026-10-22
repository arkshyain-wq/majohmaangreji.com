/**
 * MajohMaAngreji.com — Studytime With Arkshya
 * Interactive Scripts for Coming Soon Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------
   * 1. 14-Day Countdown Timer
   * ------------------------------------------------------------------ */
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  // Set target date 14 days into the future (matches proposal's 14-day test plan)
  const savedTarget = localStorage.getItem('launchTargetTimestamp');
  let targetTime;

  if (savedTarget && Number(savedTarget) > Date.now()) {
    targetTime = Number(savedTarget);
  } else {
    targetTime = Date.now() + (14 * 24 * 60 * 60 * 1000) + (8 * 60 * 60 * 1000);
    localStorage.setItem('launchTargetTimestamp', targetTime);
  }

  function updateCountdown() {
    const now = Date.now();
    const distance = targetTime - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ------------------------------------------------------------------
   * 2. Friendly Audio Greeting ("Hello! નમસ્તે!")
   * ------------------------------------------------------------------ */
  const audioBtn = document.getElementById('audioGreetingBtn');
  
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      audioBtn.classList.add('playing');
      
      // Play cheerful synth chime via Web Audio API
      playCheerfulTone();

      // Speak greeting if supported
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance('Hello! Namaste! Welcome to Majoh Ma Angreji!');
        utterance.rate = 0.95;
        utterance.pitch = 1.2;
        utterance.onend = () => {
          setTimeout(() => audioBtn.classList.remove('playing'), 500);
        };
        utterance.onerror = () => {
          audioBtn.classList.remove('playing');
        };
        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(() => audioBtn.classList.remove('playing'), 1200);
      }
    });
  }

  function playCheerfulTone() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (joyful chord)
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.5);
      });
    } catch (e) {
      console.log('Audio tone play prevented:', e);
    }
  }

  /* ------------------------------------------------------------------
   * 3. Role Selector Chips
   * ------------------------------------------------------------------ */
  const roleChips = document.querySelectorAll('.radio-chip');
  roleChips.forEach(chip => {
    chip.addEventListener('click', () => {
      roleChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const input = chip.querySelector('input');
      if (input) input.checked = true;
    });
  });

  /* ------------------------------------------------------------------
   * 4. Notify Me Form Submission
   * ------------------------------------------------------------------ */
  const notifyForm = document.getElementById('notifyForm');
  const contactInput = document.getElementById('contactInput');
  const successAlert = document.getElementById('successAlert');
  const submitBtn = document.getElementById('submitBtn');

  if (notifyForm) {
    notifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const contactVal = contactInput.value.trim();

      if (!contactVal) {
        contactInput.focus();
        contactInput.style.borderColor = '#FF3B30';
        setTimeout(() => contactInput.style.borderColor = '', 2000);
        return;
      }

      // Selected role
      const selectedRole = document.querySelector('input[name="userRole"]:checked')?.value || 'parent';

      // Save to localStorage for demo persistence
      const registered = JSON.parse(localStorage.getItem('registeredContacts') || '[]');
      registered.push({
        contact: contactVal,
        role: selectedRole,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('registeredContacts', JSON.stringify(registered));

      // Visual feedback & Confetti
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Registered! ✓</span>';
      submitBtn.style.background = '#00B368';

      notifyForm.style.display = 'none';
      if (successAlert) {
        successAlert.style.display = 'flex';
      }

      triggerMiniConfetti();
    });
  }

  /* ------------------------------------------------------------------
   * 5. Lightweight Canvas Confetti
   * ------------------------------------------------------------------ */
  function triggerMiniConfetti() {
    const count = 50;
    const colors = ['#FF6E1A', '#00B368', '#FFBA08', '#FFFFFF', '#38BDF8'];
    const particles = [];

    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999';
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    for (let i = 0; i < count; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 300,
        y: canvas.height / 2 + (Math.random() - 0.5) * 100,
        r: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 1.2) * 14,
        rot: Math.random() * 360,
        dRot: (Math.random() - 0.5) * 10,
        life: 1,
        decay: Math.random() * 0.015 + 0.01
      });
    }

    let animId;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rot += p.dRot;
        p.life -= p.decay;

        if (p.life > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rot * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life;
          ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 1.5);
          ctx.restore();
        }
      });

      if (alive) {
        animId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animId);
        canvas.remove();
      }
    }

    render();
  }

  /* ------------------------------------------------------------------
   * 6. About Project Modal
   * ------------------------------------------------------------------ */
  const aboutModal = document.getElementById('aboutModal');
  const openAboutBtn = document.getElementById('openAboutBtn');
  const closeAboutBtn = document.getElementById('closeAboutBtn');
  const modalGotItBtn = document.getElementById('modalGotItBtn');

  function openModal() {
    if (aboutModal) {
      aboutModal.classList.add('open');
      aboutModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (aboutModal) {
      aboutModal.classList.remove('open');
      aboutModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openAboutBtn) openAboutBtn.addEventListener('click', openModal);
  if (closeAboutBtn) closeAboutBtn.addEventListener('click', closeModal);
  if (modalGotItBtn) modalGotItBtn.addEventListener('click', closeModal);

  if (aboutModal) {
    aboutModal.addEventListener('click', (e) => {
      if (e.target === aboutModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aboutModal && aboutModal.classList.contains('open')) {
      closeModal();
    }
  });

  /* ------------------------------------------------------------------
   * 7. Subtle 3D Image Hover Tilt Effect (Desktop)
   * ------------------------------------------------------------------ */
  const imageFrame = document.querySelector('.image-frame');
  if (imageFrame && window.innerWidth > 900) {
    imageFrame.addEventListener('mousemove', (e) => {
      const rect = imageFrame.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 8;
      const rotateY = (x / rect.width) * 8;
      imageFrame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    imageFrame.addEventListener('mouseleave', () => {
      imageFrame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  }

  /* ------------------------------------------------------------------
   * 8. Web Share API & Link Copy Handlers
   * ------------------------------------------------------------------ */
  const shareHeaderBtn = document.getElementById('shareHeaderBtn');
  const copyShareBtn = document.getElementById('copyShareBtn');
  const copyShareLabel = document.getElementById('copyShareLabel');

  const shareData = {
    title: 'Majoh Ma Angreji — Studytime With Arkshya',
    text: 'ગુજરાતીમાં સમજીએ, અંગ્રેજીમાં બોલીએ! Learn English through comics & stories for Standards 1–5.',
    url: window.location.href
  };

  if (shareHeaderBtn) {
    shareHeaderBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          // User cancelled share
        }
      } else {
        // Fallback: smooth scroll to share section
        const notifySec = document.getElementById('notifySection');
        if (notifySec) {
          notifySec.scrollIntoView({ behavior: 'smooth' });
          const shareBox = document.querySelector('.share-box');
          if (shareBox) {
            shareBox.style.transform = 'scale(1.05)';
            shareBox.style.transition = 'transform 0.3s ease';
            setTimeout(() => shareBox.style.transform = 'scale(1)', 600);
          }
        }
      }
    });
  }

  if (copyShareBtn) {
    copyShareBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        if (copyShareLabel) {
          copyShareLabel.textContent = 'Copied! ✓';
          copyShareBtn.style.borderColor = '#00B368';
          copyShareBtn.style.color = '#20E38D';
          setTimeout(() => {
            copyShareLabel.textContent = 'Copy Link';
            copyShareBtn.style.borderColor = '';
            copyShareBtn.style.color = '';
          }, 2200);
        }
      } catch (e) {
        alert('Website Link: ' + window.location.href);
      }
    });
  }

  /* ------------------------------------------------------------------
   * 9. Demo Comic Batches & Interactive Reader Modal
   * ------------------------------------------------------------------ */
  const comicGrid = document.getElementById('comicGrid');
  const filterTabs = document.querySelectorAll('.filter-btn');
  const comicSearchInput = document.getElementById('comicSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const quickStartBtn = document.getElementById('quickStartBtn');

  // Reader Modal Elements
  const comicReaderModal = document.getElementById('comicReaderModal');
  const closeReaderBtn = document.getElementById('closeReaderBtn');
  const modalBatchBadge = document.getElementById('modalBatchBadge');
  const modalTitleGu = document.getElementById('modalTitleGu');
  const modalTitleEn = document.getElementById('modalTitleEn');
  const modalDownloadPdfBtn = document.getElementById('modalDownloadPdfBtn');
  const modalPdfBtnLabel = document.getElementById('modalPdfBtnLabel');
  const modalPageCounter = document.getElementById('modalPageCounter');
  const modalThumbStrip = document.getElementById('modalThumbStrip');
  const comicMainImg = document.getElementById('comicMainImg');
  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');
  const prevBatchBtn = document.getElementById('prevBatchBtn');
  const nextBatchBtn = document.getElementById('nextBatchBtn');
  const chapterJumpSelect = document.getElementById('chapterJumpSelect');
  const modeFlipBtn = document.getElementById('modeFlipBtn');
  const modePdfBtn = document.getElementById('modePdfBtn');
  const flipViewWrapper = document.getElementById('flipViewWrapper');
  const pdfViewWrapper = document.getElementById('pdfViewWrapper');
  const pdfIframe = document.getElementById('pdfIframe');

  let currentBatchId = 1;
  let currentPageIndex = 0;
  let currentFilter = 'all';
  let currentSearchQuery = '';
  let currentViewMode = 'flip'; // 'flip' | 'pdf'

  const batches = (typeof window.COMIC_BATCHES !== 'undefined') ? window.COMIC_BATCHES : [];

  // Populate Chapter Jump Select Options
  if (chapterJumpSelect && batches.length > 0) {
    chapterJumpSelect.innerHTML = batches.map(b => 
      `<option value="${b.id}">${b.batchName} (${b.pagesRange}): ${b.titleEn.slice(0, 24)}...</option>`
    ).join('');

    chapterJumpSelect.addEventListener('change', (e) => {
      openComicReader(Number(e.target.value), 0);
    });
  }

  // Render Comic Cards Grid
  function renderComicGrid() {
    if (!comicGrid) return;

    const filtered = batches.filter(batch => {
      // Act Filter
      const matchesFilter = (currentFilter === 'all') || (batch.act === currentFilter);
      if (!matchesFilter) return false;

      // Search Query
      if (!currentSearchQuery) return true;
      const q = currentSearchQuery.toLowerCase();
      const inTitleEn = batch.titleEn.toLowerCase().includes(q);
      const inTitleGu = batch.titleGu.toLowerCase().includes(q);
      const inSummary = batch.summary.toLowerCase().includes(q);
      const inTags = batch.tags.some(t => t.toLowerCase().includes(q));
      const inVocab = (batch.keyVocabulary || []).some(v => v.toLowerCase().includes(q));
      return inTitleEn || inTitleGu || inSummary || inTags || inVocab;
    });

    if (filtered.length === 0) {
      comicGrid.innerHTML = `
        <div class="comic-empty-state">
          <div class="empty-icon">🔍</div>
          <h3>કોઈ પ્રકરણ મળ્યું નથી (No chapters found)</h3>
          <p>Try searching for words like "Bell", "Train", "Monkey", "Bird", or "Water".</p>
          <button type="button" class="btn-card-read" id="resetSearchBtn" style="margin-top: 1rem;">
            Show All 13 Batches
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('resetSearchBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (comicSearchInput) comicSearchInput.value = '';
          currentSearchQuery = '';
          if (searchClearBtn) searchClearBtn.style.display = 'none';
          currentFilter = 'all';
          filterTabs.forEach(t => t.classList.toggle('active', t.dataset.filter === 'all'));
          renderComicGrid();
        });
      }
      return;
    }

    comicGrid.innerHTML = filtered.map(batch => {
      return `
        <article class="comic-card" data-batch-id="${batch.id}">
          <div class="comic-cover-container" onclick="window.openComicReaderById(${batch.id})" title="Click to read ${batch.titleEn}">
            <img 
              src="${batch.cover}" 
              alt="${batch.titleEn} - Majoh Ma Angreji" 
              class="comic-cover-img"
              loading="lazy"
            />
            <div class="comic-cover-overlay">
              <span class="badge-fresh-pill">${batch.batchName} • ${batch.pagesCount} Pages</span>
              <div class="cover-hover-cta">
                <span class="btn-read-bubble">
                  <span>📖 Read</span>
                </span>
              </div>
            </div>
          </div>

          <div class="comic-card-body">
            <h3 class="comic-card-title-gu">${batch.titleGu}</h3>
            <h4 class="comic-card-title-en">${batch.titleEn}</h4>

            <div class="comic-card-actions">
              <button type="button" class="btn-card-read" onclick="window.openComicReaderById(${batch.id})">
                <span>Read Online</span>
              </button>
              <a href="${batch.pdfFile}" class="btn-card-pdf" target="_blank" download title="Download ${batch.batchName} PDF (${batch.pdfSize})">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                <span>PDF</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Filter Tabs Event Listeners
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-filter') || 'all';
      renderComicGrid();
    });
  });

  // Search Input Event Listeners
  if (comicSearchInput) {
    comicSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim();
      if (searchClearBtn) {
        searchClearBtn.style.display = currentSearchQuery ? 'block' : 'none';
      }
      renderComicGrid();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (comicSearchInput) {
        comicSearchInput.value = '';
        comicSearchInput.focus();
      }
      currentSearchQuery = '';
      searchClearBtn.style.display = 'none';
      renderComicGrid();
    });
  }

  // Quick Start Banner Button
  if (quickStartBtn) {
    quickStartBtn.addEventListener('click', () => {
      openComicReader(1, 0);
    });
  }

  // Open Comic Reader
  function openComicReader(batchId, pageIndex = 0) {
    const batch = batches.find(b => b.id === batchId) || batches[0];
    if (!batch) return;

    currentBatchId = batch.id;
    currentPageIndex = Math.max(0, Math.min(pageIndex, batch.pages.length - 1));

    if (comicReaderModal) {
      comicReaderModal.classList.add('open');
      comicReaderModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    if (chapterJumpSelect) {
      chapterJumpSelect.value = String(batch.id);
    }

    updateReaderContent();
  }

  window.openComicReaderById = (id) => openComicReader(id, 0);

  // Close Comic Reader
  function closeComicReader() {
    if (comicReaderModal) {
      comicReaderModal.classList.remove('open');
      comicReaderModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (pdfIframe) {
        pdfIframe.src = ''; // reset iframe to stop audio/mem
      }
    }
  }

  if (closeReaderBtn) closeReaderBtn.addEventListener('click', closeComicReader);

  if (comicReaderModal) {
    comicReaderModal.addEventListener('click', (e) => {
      if (e.target === comicReaderModal) closeComicReader();
    });
  }

  // Update Reader Content for current batch & page
  function updateReaderContent() {
    const batch = batches.find(b => b.id === currentBatchId);
    if (!batch) return;

    // Header info
    if (modalBatchBadge) modalBatchBadge.textContent = `${batch.batchName} • ${batch.pagesRange}`;
    if (modalTitleGu) modalTitleGu.textContent = batch.titleGu;
    if (modalTitleEn) modalTitleEn.textContent = batch.titleEn;

    if (modalDownloadPdfBtn) {
      modalDownloadPdfBtn.href = batch.pdfFile;
      if (modalPdfBtnLabel) modalPdfBtnLabel.textContent = `PDF (${batch.pdfSize})`;
    }

    // View modes
    if (currentViewMode === 'flip') {
      if (flipViewWrapper) flipViewWrapper.style.display = 'flex';
      if (pdfViewWrapper) pdfViewWrapper.classList.remove('active');
      if (comicMainImg) {
        comicMainImg.style.opacity = '0.4';
        comicMainImg.src = batch.pages[currentPageIndex];
        comicMainImg.onload = () => {
          comicMainImg.style.opacity = '1';
        };
      }
    } else {
      if (flipViewWrapper) flipViewWrapper.style.display = 'none';
      if (pdfViewWrapper) {
        pdfViewWrapper.classList.add('active');
        if (pdfIframe && (!pdfIframe.src || !pdfIframe.src.includes(batch.pdfFile))) {
          pdfIframe.src = `${batch.pdfFile}#view=FitH`;
        }
      }
    }

    // Page Counter
    if (modalPageCounter) {
      modalPageCounter.textContent = `Page ${currentPageIndex + 1} of ${batch.pages.length} (${batch.pagesRange})`;
    }

    // Nav button disabled states
    if (prevPageBtn) prevPageBtn.disabled = (currentPageIndex === 0);
    if (nextPageBtn) nextPageBtn.disabled = (currentPageIndex >= batch.pages.length - 1);

    if (prevBatchBtn) prevBatchBtn.disabled = (currentBatchId <= 1);
    if (nextBatchBtn) nextBatchBtn.disabled = (currentBatchId >= batches.length);

    // Render Thumbnail Strip
    if (modalThumbStrip) {
      modalThumbStrip.innerHTML = batch.pages.map((pImg, idx) => `
        <button 
          type="button" 
          class="reader-thumb-btn ${idx === currentPageIndex ? 'active' : ''}" 
          title="Jump to page ${idx + 1}"
          onclick="window.jumpToComicPage(${idx})"
        >
          <img src="${pImg}" alt="Page ${idx + 1}" loading="lazy" />
        </button>
      `).join('');
    }
  }

  window.jumpToComicPage = (idx) => {
    currentPageIndex = idx;
    updateReaderContent();
  };

  // Page Flip Controls
  function goToPrevPage() {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      updateReaderContent();
    } else if (currentBatchId > 1) {
      // Go to last page of previous batch
      const prevB = batches.find(b => b.id === currentBatchId - 1);
      if (prevB) {
        currentBatchId = prevB.id;
        currentPageIndex = prevB.pages.length - 1;
        updateReaderContent();
      }
    }
  }

  function goToNextPage() {
    const batch = batches.find(b => b.id === currentBatchId);
    if (!batch) return;

    if (currentPageIndex < batch.pages.length - 1) {
      currentPageIndex++;
      updateReaderContent();
    } else if (currentBatchId < batches.length) {
      // Go to first page of next batch
      currentBatchId++;
      currentPageIndex = 0;
      updateReaderContent();
    }
  }

  if (prevPageBtn) prevPageBtn.addEventListener('click', goToPrevPage);
  if (nextPageBtn) nextPageBtn.addEventListener('click', goToNextPage);

  if (prevBatchBtn) {
    prevBatchBtn.addEventListener('click', () => {
      if (currentBatchId > 1) {
        currentBatchId--;
        currentPageIndex = 0;
        updateReaderContent();
      }
    });
  }

  if (nextBatchBtn) {
    nextBatchBtn.addEventListener('click', () => {
      if (currentBatchId < batches.length) {
        currentBatchId++;
        currentPageIndex = 0;
        updateReaderContent();
      }
    });
  }

  // Switch View Mode (Flip View vs PDF Embed View)
  if (modeFlipBtn && modePdfBtn) {
    modeFlipBtn.addEventListener('click', () => {
      currentViewMode = 'flip';
      modeFlipBtn.classList.add('active');
      modePdfBtn.classList.remove('active');
      updateReaderContent();
    });

    modePdfBtn.addEventListener('click', () => {
      currentViewMode = 'pdf';
      modePdfBtn.classList.add('active');
      modeFlipBtn.classList.remove('active');
      updateReaderContent();
    });
  }

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (!comicReaderModal || !comicReaderModal.classList.contains('open')) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      goToNextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      goToPrevPage();
    } else if (e.key === 'Escape') {
      closeComicReader();
    }
  });

  // Touch Swipe for Mobile Comic Reading
  let touchStartX = 0;
  let touchEndX = 0;

  if (flipViewWrapper) {
    flipViewWrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    flipViewWrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) {
        goToNextPage(); // Swiped left -> next page
      } else {
        goToPrevPage(); // Swiped right -> prev page
      }
    }
  }

  // Initial render of the 13 comic batches
  renderComicGrid();

});

