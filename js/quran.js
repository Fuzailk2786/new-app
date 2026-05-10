const today = new Date().toDateString();

user.lastQuranDate = today;
addXP(5);
updateStreak();
saveUser(user);
function getToday() {
  return new Date().toDateString();
}
