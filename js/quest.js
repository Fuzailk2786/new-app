function getToday() {
  return new Date().toDateString();
}

function loadQuest() {
  const user = JSON.parse(localStorage.getItem("islamicQuestz_user"));

  if (!user.quest) {
    user.quest = {
      daysCompleted: [],
      lastCompleted: null
    };
  }

  const today = getToday();

  const dayCount = user.quest.daysCompleted.length + 1;
  document.getElementById("dayCount").innerText = dayCount;

  // Task Status
  if (user.lastQuranDate === today) {
    document.querySelector("#quranTask .task-status").innerText = "✅";
  }

  if (user.quizCompletedDate === today) {
    document.querySelector("#quizTask .task-status").innerText = "✅";
  }

  localStorage.setItem("islamicQuestz_user", JSON.stringify(user));
}

function completeToday() {
  const user = JSON.parse(localStorage.getItem("islamicQuestz_user"));
  const today = getToday();

  // Prevent duplicate
  if (user.quest && user.quest.lastCompleted === today) {
    alert("✅ You already completed today!");
    return;
  }

  user.quest.daysCompleted.push(today);
  user.quest.lastCompleted = today;

  // Add XP
  user.xp += 10;

  localStorage.setItem("islamicQuestz_user", JSON.stringify(user));

  alert("🎉 Day Completed! +10 XP");
  location.reload();
}

window.onload = loadQuest;
