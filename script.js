let employees = [];
let isCounter = 1;

const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const addBtn = document.getElementById("add-btn");
const messsageArea = document.getElementById("message-area");
const employeeList = document.getElementById("employee-list");

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const age = ageInput.value.trim();

  // Part 1: Error Message validation
  if (!name || !profession || !age) {
    showMessage(
      "Error: Please make sure all the fields are filled before adding an employee!",
      "red",
    );
    return;
  }

  // Part 2: Appending Object & Unique ID
  const newEmployee = {
    id: isCounter++,
    name: name,
    profession: profession,
    age: age,
  };

  employees.push(newEmployee);

  // Part 3: Success Message
  showMessage("Success: Employee Added!", "green");

  // Clear input fields after adding an employee
  nameInput.value = "";
  professionInput.value = "";
  ageInput.value = "";

  // Re-render the employee list
  renderEmployeeList();
});

// Part 4: Message Display Function
function showMessage(text, type) {
  messsageArea.textContent = text; // Set the message text
  if (type === "error") {
    messsageArea.className = "error"; // Apply error styling
  } else if (type === "success") {
    messsageArea.className = "success"; // Apply success styling
  }
}

// Part 6: Deleting Users function
function deleteEmployee(id) {
  employees = employees.filter((employee) => employee.id !== id);
  renderEmployeeList(); // Re-render the employee list after deletion
}

// Part 5: Mapping of Added Employees
function renderEmployeeList() {
  employeeList.innerHTML = ""; // Clear the existing list

  if (employees.length === 0) {
    employeeList.innerHTML = '<p id="empty-state">No employees added yet.</p>';
    return;
  }

  // Map through the array and create UI elements for each employee
  employees.forEach((employee) => {
    const card = document.createElement("div");
    card.className = "employee-card";

    // Set the inner HTML matching the required UI structure
    card.innerHTML = `
            <div class="employee-details">
                <span>${employee.id}.</span>
                <span>Name : ${employee.name}</span>
                <span>Profession : ${employee.profession}</span>
                <span>Age : ${employee.age}</span>
            </div>
            <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete User</button>
        `;
        employeeList.appendChild(card); // Append the card to the employee list
  });
}
