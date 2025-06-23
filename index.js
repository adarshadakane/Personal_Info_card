function toggleHobbies() {
  const row = document.getElementById('hobbiesRow');
  row.classList.toggle('show');
}

function changeBGFromDropdown(value) {
  if (value) {
    document.getElementById('profileCard').style.backgroundColor = value;
  }
}

