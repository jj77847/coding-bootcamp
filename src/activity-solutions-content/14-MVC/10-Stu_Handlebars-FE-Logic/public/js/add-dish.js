const formElement = document.querySelector(".new-dish-form");

const handleSubmit = async (event) => {
  event.preventDefault();

  const dish_name = document.querySelector("#dish_name").value;
  const description = document.querySelector("#description").value;
  const guest_name = document.querySelector("#guest_name").value;
  const has_nuts = document.querySelector("#has_nuts:checked") ? true : false;

  const response = await fetch(`/api/dishes`, {
    method: "POST",
    body: JSON.stringify({
      dish_name,
      description,
      guest_name,
      has_nuts,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dishes");
  } else {
    alert("Failed to add dish");
  }
};

formElement.addEventListener("submit", handleSubmit);
