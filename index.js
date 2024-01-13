// Implementing function expression
const divide = function (num1, num2) {
    return num1 / num2;
  };
  
  // Implementing arrow function
  const square = num => num ** 2;
  
  // Example usage of .map() with arrow function
  const nums = [1, 2, 3];
  const squares = nums.map(x => x ** 2);
  
  // Example usage of arrow function with .map() in a different scenario
  const overdueTodoItems = [
    { className: "pending", task: "Task 1" },
    { className: "pending", task: "Task 2" },
    { className: "pending", task: "Task 3" }
  ];
  
  const finishedItems = overdueTodoItems.map(item => {
    item.className = "complete";
    return item;
  });
  
  const header = document.getElementById("header");
  header.innerText = `You finished ${finishedItems.length} items!`;
  
  // Example usage of arrow function with .map() in billing software scenario
  const lapsedUserAccounts = [
    { address: "123 Main St", username: "user1" },
    { address: "456 Oak St", username: "user2" },
    { address: "789 Elm St", username: "user3" }
  ];
  
  lapsedUserAccounts.map(user => sendBillTo(user.address));
  