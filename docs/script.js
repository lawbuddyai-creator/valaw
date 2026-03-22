
/*
 * Main JavaScript for the enhanced VA Law site
 */

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('nav ul');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }

  const searchInput = document.getElementById('search-input');
  const resultsBox = document.getElementById('search-results');
  const pages = [
    {
      title: 'Start Here',
      url: 'start.html',
      description: 'Get a personalized law plan based on your grade, interests, and goals',
      keywords: ['start', 'quiz', 'plan', 'next step', 'personalized']
    },
    {
      title: 'Path to Law',
      url: 'path.html',
      description: 'Milestones from high school to bar exam',
      keywords: ['roadmap', 'milestones', 'timeline', 'become a lawyer']
    },
    {
      title: 'Recommended Classes',
      url: 'classes.html',
      description: 'High school courses that build writing, analytical and critical thinking skills',
      keywords: ['courses', 'AP', 'honors', 'recommendations', 'government', 'speech']
    },
    {
      title: 'Extracurricular Activities',
      url: 'extracurriculars.html',
      description: 'Clubs and activities to develop advocacy, speaking and leadership',
      keywords: ['debate', 'mock trial', 'service', 'activities', 'clubs']
    },
    {
      title: 'Virginia Colleges & Law Schools',
      url: 'colleges.html',
      description: 'Explore top institutions and pre-law programs in Virginia',
      keywords: ['UVA', 'law school', 'George Mason', 'college', 'pre-law']
    },
    {
      title: 'Helpful Resources',
      url: 'resources.html',
      description: 'Links to official organizations, LSAT prep and internships',
      keywords: ['resources', 'internships', 'programs', 'LSAT', 'scholarships']
    },
    {
      title: 'Outreach Email Templates',
      url: 'emails.html',
      description: 'Sample emails to attorneys, legislators and nonprofits',
      keywords: ['email templates', 'outreach', 'follow-up', 'cold email', 'shadowing', 'internship']
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
      keywords: ['contact', 'feedback', 'questions', 'email']
    }
  ];

  window._pageData = pages;

  function scorePage(page, query) {
    const text = (page.title + ' ' + page.description + ' ' + (page.keywords || []).join(' ')).toLowerCase();
    let score = 0;
    if (page.title.toLowerCase().includes(query)) score += 6;
    if (page.description.toLowerCase().includes(query)) score += 4;
    if ((page.keywords || []).some(k => k.toLowerCase().includes(query) || query.includes(k.toLowerCase()))) score += 5;
    if (text.includes(query)) score += 2;

    const synonymMap = {
      internship: ['emails.html', 'resources.html', 'extracurriculars.html'],
      shadowing: ['emails.html', 'resources.html'],
      lawyer: ['path.html', 'start.html'],
      classes: ['classes.html'],
      college: ['colleges.html'],
      law: ['start.html', 'path.html'],
      email: ['emails.html', 'contact.html'],
      debate: ['extracurriculars.html'],
      start: ['start.html']
    };

    Object.keys(synonymMap).forEach(key => {
      if (query.includes(key) && synonymMap[key].includes(page.url)) {
        score += 5;
      }
    });

    return score;
  }

  if (searchInput && resultsBox) {
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase().trim();
      if (query.length < 2) {
        resultsBox.style.display = 'none';
        return;
      }
      const matches = pages
        .map(page => ({ page, score: scorePage(page, query) }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6);

      if (!matches.length) {
        resultsBox.style.display = 'none';
        return;
      }

      let listHTML = '<ul>';
      matches.forEach(({ page }) => {
        listHTML += `<li><a href="${page.url}">${page.title}</a> <span class="small">– ${page.description}</span></li>`;
      });
      listHTML += '</ul>';
      resultsBox.innerHTML = listHTML;
      resultsBox.style.display = 'block';
    });

    document.addEventListener('click', function (e) {
      if (!resultsBox.contains(e.target) && e.target !== searchInput) {
        resultsBox.style.display = 'none';
      }
    });
  }

  const timelineItems = document.querySelectorAll('.timeline input[type="checkbox"]');
  if (timelineItems.length) {
    timelineItems.forEach((cb, idx) => {
      const key = `timeline_step_${idx}`;
      cb.checked = localStorage.getItem(key) === 'true';
      cb.addEventListener('change', () => {
        localStorage.setItem(key, cb.checked);
      });
    });
  }

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

  const copyButtons = document.querySelectorAll('.copy-template');
  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const pre = button.previousElementSibling;
      const text = pre ? pre.innerText.trim() : '';
      try {
        await navigator.clipboard.writeText(text);
        const original = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = original;
        }, 1400);
      } catch (err) {
        button.textContent = 'Copy failed';
      }
    });
  });

  const startForm = document.getElementById('start-form');
  const planOutput = document.getElementById('plan-output');
  if (startForm && planOutput) {
    const plansByGrade = {
      '9': ['Build strong reading and writing habits.', 'Try one activity like debate, mock trial, journalism, or service.', 'Start tracking what parts of law interest you.'],
      '10': ['Choose classes that strengthen civics, English, and speaking.', 'Join or deepen one activity that shows commitment.', 'Start sending informational emails to professionals.'],
      '11': ['Focus on leadership, stronger coursework, and meaningful service.', 'Look for internships, shadowing, or volunteer roles.', 'Build a resume of specific law-related experience.'],
      '12': ['Finalize your strongest activities and relationships for recommendations.', 'Choose colleges with strong fit and pre-law support.', 'Keep taking action so your momentum continues after graduation.']
    };

    const focusByInterest = {
      advocacy: ['Join debate, mock trial, Model UN, or public speaking.', 'Practice explaining arguments clearly and respectfully.'],
      service: ['Look for public service groups, legal aid, youth government, or community volunteering.', 'Show that you care about helping people solve real problems.'],
      business: ['Take economics or business courses and look for leadership roles.', 'Pay attention to policy, entrepreneurship, and decision-making.'],
      writing: ['Build writing samples through journalism, essays, blogs, or research projects.', 'Practice summarizing issues and making persuasive arguments.']
    };

    const goalActions = {
      explore: ['Read the Path page and pick the step that feels most interesting.', 'Email one attorney or organization with a short question.'],
      resume: ['Pick one class, one club, and one service activity you can commit to.', 'Document achievements and leadership.'],
      internship: ['Use the Emails page to contact 3 to 5 firms or organizations this week.', 'Follow up in 7 to 10 days if you hear nothing.'],
      college: ['Review colleges and programs that fit your goals.', 'Choose classes and activities that support a future pre-law application.']
    };

    startForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const grade = document.getElementById('grade').value;
      const interest = document.getElementById('interest').value;
      const goal = document.getElementById('goal').value;

      if (!grade || !interest || !goal) return;

      const nowAction = goal === 'internship'
        ? 'Today: open the Emails page, copy a template, personalize one line, and send it.'
        : 'Today: choose one page below and complete one concrete action before you leave the site.';

      planOutput.innerHTML = `
        <h2>Your VA Law plan</h2>
        <p class="lead">You’re in ${grade}th grade. Here’s a practical plan you can start right now.</p>
        <ul class="timeline compact-list">
          ${plansByGrade[grade].map(item => `<li><label><h3>Step</h3><p>${item}</p></label></li>`).join('')}
          ${focusByInterest[interest].map(item => `<li><label><h3>Focus</h3><p>${item}</p></label></li>`).join('')}
          ${goalActions[goal].map(item => `<li><label><h3>Action</h3><p>${item}</p></label></li>`).join('')}
          <li><label><h3>Do this now</h3><p>${nowAction}</p></label></li>
        </ul>
        <div class="cta">
          <a class="button" href="emails.html">Use email templates</a>
          <a class="button secondary" href="classes.html">See classes</a>
          <a class="button secondary" href="path.html">View the full path</a>
        </div>
      `;
    });
  }
});
