const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    completed: true
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    completed: false
  }
];


function renderCourses(courseList) {
  const container = document.getElementById('courses-container');
  const creditCounter = document.getElementById('total-credits');

  container.innerHTML = '';

  let totalCredits = 0;

  courseList.forEach(course => {
    const btn = document.createElement('button');
    btn.classList.add('course-pill');
    btn.textContent = `${course.subject} ${course.number}`;
    container.appendChild(btn);
    totalCredits += course.credits;
  });

  creditCounter.textContent = totalCredits;
}

// Event listeners for filtering
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filters button');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove .active from all
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const id = btn.id.toUpperCase(); // all, wdd, cse

      if (id === 'ALL') {
        renderCourses(courses);
      } else {
        const filtered = courses.filter(course => course.subject === id);
        renderCourses(filtered);
      }
    });
  });

  renderCourses(courses); // Initial display
});
