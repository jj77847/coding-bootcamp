const deleteBtn = $("#delete-btn");

const handleDeleteProject = async (event) => {
  const currentTarget = $(event.currentTarget);
  const projectId = currentTarget.attr("data-id");

  const response = await fetch(`/api/projects/${projectId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace("/profile");
  } else {
    alert("Failed to delete project");
  }
};

deleteBtn.on("click", handleDeleteProject);
