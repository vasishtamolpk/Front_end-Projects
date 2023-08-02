// Function to filter job listings based on location and category
function filterJobs() {
    const locationFilter = document.getElementById("location").value;
    const categoryFilter = document.getElementById("category").value;
  
    const jobItems = document.querySelectorAll(".job-item");
  
    jobItems.forEach(item => {
      const location = item.getAttribute("data-location");
      const category = item.getAttribute("data-category");
  
      if (
        (locationFilter === "all" || locationFilter === location) &&
        (categoryFilter === "all" || categoryFilter === category)
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  
  // Add event listeners to the filter dropdowns
  const locationFilter = document.getElementById("location");
  const categoryFilter = document.getElementById("category");
  
  locationFilter.addEventListener("change", filterJobs);
  categoryFilter.addEventListener("change", filterJobs);
  