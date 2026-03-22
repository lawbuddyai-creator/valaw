/*
 * Main JavaScript for the enhanced VA Law site
 *
 * This script powers interactive features such as the mobile
 * navigation toggle, internal search, progress tracking on the
 * path timeline, and category filtering on the resources page.
 * All event listeners are registered after the DOM has loaded.
 */

document.addEventListener('DOMContentLoaded', function () {
  /**
   * Responsive navigation
   *
   * Toggles the mobile navigation menu when the hamburger icon is
   * clicked. The menu is hidden by default on small screens and
   * appears when the user taps the toggle button. On wider screens
   * the menu is always visible.
   */
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('nav ul');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }

  /**
   * Internal site search
   *
   * A lightweight search that scans page titles, descriptions and
   * keywords defined below. When the user types at least two
   * characters, matching pages appear in a dropdown. Clicking a
   * result navigates to that page. Results disappear when clicking
   * outside the search area.
   */
  const searchInput = document.getElementById('search-input');
  const resultsBox = document.getElementById('search-results');
  // Define searchable pages; descriptions should be concise
  const pages = [
    {
      title: 'Path to Law',
      url: 'path.html',
      description: 'Milestones from high school to bar exam',
      keywords: ['roadmap', 'milestones', 'timeline']
    },
    {
      title: 'Recommended Classes',
      url: 'classes.html',
      description: 'High school courses that build writing, analytical and critical thinking skills',
      keywords: ['courses', 'AP', 'honors', 'recommendations']
    },
    {
      title: 'Extracurricular Activities',
      url: 'extracurriculars.html',
      description: 'Clubs and activities to develop advocacy, speaking and leadership',
      keywords: ['debate', 'mock trial', 'service']
    },
    {
      title: 'Virginia Colleges & Law Schools',
      url: 'colleges.html',
      description: 'Explore top institutions and pre‑law programs in Virginia',
      keywords: ['UVA', 'law school', 'George Mason']
    },
    {
      title: 'Helpful Resources',
      url: 'resources.html',
      description: 'Links to official organizations, LSAT prep and internships',
      keywords: ['resources', 'internships', 'programs']
    },
    {
      title: 'Outreach Email Templates',
      url: 'emails.html',
      description: 'Sample emails to legislators, attorneys and nonprofits',
      keywords: ['email templates', 'outreach', 'follow‑up']
    },
    {
      title: 'About VA Law',
      url: 'about.html',
      description: 'Mission, who we are and how to get involved',
      keywords: ['mission', 'team', 'contact']
    },
    {
      title: 'Contact Us',
      url: 'contact.html',
      description: 'Send feedback, ask questions or suggest resources',
      keywords: ['contact', 'feedback', 'questions']
    }
  ];

  // Expose page data globally so that other pages (like the 404 page)
  // can access the same set of searchable pages without duplicating code.
  window._pageData = pages;

  if (searchInput && resultsBox) {
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase().trim();
      if (query.length < 2) {
        resultsBox.style.display = 'none';
        return;
      }
      const matches = pages.filter(p => {
        const text = (p.title + ' ' + p.description + ' ' + (p.keywords || []).join(' ')).toLowerCase();
        return text.includes(query);
      });
      if (!matches.length) {
        resultsBox.style.display = 'none';
        return;
      }
      // Build result list
      let listHTML = '<ul>';
      matches.forEach(p => {
        listHTML += `<li><a href="${p.url}">${p.title}</a> <span class="small">– ${p.description}</span></li>`;
      });
      listHTML += '</ul>';
      resultsBox.innerHTML = listHTML;
      resultsBox.style.display = 'block';
    });
    // Hide results when clicking outside
    document.addEventListener('click', function (e) {
      if (!resultsBox.contains(e.target) && e.target !== searchInput) {
        resultsBox.style.display = 'none';
      }
    });
  }

  /**
   * Timeline progress tracking
   *
   * On the Path page, each step has a checkbox. When checked,
   * progress is saved to localStorage so the user’s progress persists
   * across visits. If no timeline is present the code exits.
   */
  const timelineItems = document.querySelectorAll('.timeline input[type="checkbox"]');
  if (timelineItems.length) {
    timelineItems.forEach((cb, idx) => {
      const key = `timeline_step_${idx}`;
      // restore state
      cb.checked = localStorage.getItem(key) === 'true';
      cb.addEventListener('change', () => {
        localStorage.setItem(key, cb.checked);
      });
    });
  }

  /**
   * Resource filter controls
   *
   * Allows users to filter resources by category on the resources
   * page. Each filter button has a data‑filter attribute and each
   * resource item has a data‑category attribute. Selecting a filter
   * will show matching items and hide others. The “all” filter
   * displays everything.
   */
  const filterButtons = document.querySelectorAll('.filter-button');
  const resourceItems = document.querySelectorAll('.resource-item');
  if (filterButtons.length && resourceItems.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.filter;
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        resourceItems.forEach(item => {
          if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
});