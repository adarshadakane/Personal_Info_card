function toggleHobbies() {
  const row = document.getElementById('hobbiesRow');
  row.classList.toggle('show');
}

function toggleDropdown() {
  const dropdown = document.getElementById('dropdownWrapper');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function changeBGFromDropdown(value) {
  if (value) {
    document.getElementById('profileCard').style.backgroundColor = value;
  }
}
