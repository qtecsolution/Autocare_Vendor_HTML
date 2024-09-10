document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const mainCategoryList = document.getElementById("mainCategoryList");
  const subCategoryList = document.getElementById("subCategoryList");
  const subSubCategoryList = document.getElementById("subSubCategoryList");
  const selectedCategory = document.getElementById("selectedCategory");
  const confirmBtn = document.getElementById("confirmBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const searchSuggestions = document.getElementById("searchSuggestions");

  const categories = {
    "Engine & Transmission": {
      "Steering Columns": ["Steering Components", "Gearboxes"],
      "Gears and Linkages": ["Manual Gear", "Automatic Gear"],
    },
    "Electrical & Electronics": {
      Batteries: ["Lead Acid", "Lithium Ion"],
      Lights: ["LED", "Halogen"],
    },
    Steering: {
      "Steering Columns": ["Rack and Pinion", "Hydraulic Steering"],
      "Gears and Linkages": ["Universal Joints", "Tie Rods"],
    },
  };

  // Load main categories
  for (let category in categories) {
    let li = document.createElement("li");
    li.textContent = category;
    li.dataset.category = category;
    mainCategoryList.appendChild(li);
  }

  mainCategoryList.addEventListener("click", function (e) {
    const category = e.target.dataset.category;
    if (category) {
      populateSubCategories(category);
      subSubCategoryList.innerHTML = ""; // Clear sub-subcategories
      selectedCategory.textContent = `Selected: ${category}`;
    }
  });

  subCategoryList.addEventListener("click", function (e) {
    const subcategory = e.target.textContent;
    if (subcategory) {
      populateSubSubCategories(subcategory);
      selectedCategory.textContent = `Selected: ${subcategory}`;
    }
  });

  subSubCategoryList.addEventListener("click", function (e) {
    const subSubCategory = e.target.textContent;
    if (subSubCategory) {
      selectedCategory.textContent = `Selected: ${subSubCategory}`;
    }
  });

  searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();
    searchSuggestions.innerHTML = ""; // Clear previous suggestions

    if (searchValue.trim() !== "") {
      const suggestions = getSearchSuggestions(searchValue);
      if (suggestions.length > 0) {
        searchSuggestions.style.display = "block";
        suggestions.forEach((suggestion) => {
          let li = document.createElement("li");
          li.textContent = suggestion;
          li.addEventListener("click", function () {
            searchInput.value = suggestion;
            searchSuggestions.style.display = "none"; // Hide suggestions
            filterCategories(suggestion);
          });
          searchSuggestions.appendChild(li);
        });
      } else {
        searchSuggestions.style.display = "none"; // Hide if no suggestions
      }
    } else {
      searchSuggestions.style.display = "none"; // Hide if input is empty
    }
  });

  confirmBtn.addEventListener("click", function () {
    alert(selectedCategory.textContent);
  });

  cancelBtn.addEventListener("click", function () {
    selectedCategory.textContent = "Selected: None";
    subCategoryList.innerHTML = "";
    subSubCategoryList.innerHTML = "";
    searchInput.value = "";
    searchSuggestions.style.display = "none"; // Hide suggestions
  });

  function populateSubCategories(category) {
    subCategoryList.innerHTML = "";
    const subcategories = categories[category] || {};
    for (let subcategory in subcategories) {
      let li = document.createElement("li");
      li.textContent = subcategory;
      subCategoryList.appendChild(li);
    }
  }

  function populateSubSubCategories(subcategory) {
    subSubCategoryList.innerHTML = "";
    const mainCategory = mainCategoryList.querySelector("li[data-category]").dataset.category;
    const subSubCategories = categories[mainCategory][subcategory] || [];
    subSubCategories.forEach((subSub) => {
      let li = document.createElement("li");
      li.textContent = subSub;
      subSubCategoryList.appendChild(li);
    });
  }

  function getSearchSuggestions(input) {
    const suggestions = [];
    for (let category in categories) {
      if (category.toLowerCase().includes(input)) {
        suggestions.push(category);
      }
      for (let subcategory in categories[category]) {
        if (subcategory.toLowerCase().includes(input)) {
          suggestions.push(subcategory);
        }
        categories[category][subcategory].forEach((subSub) => {
          if (subSub.toLowerCase().includes(input)) {
            suggestions.push(subSub);
          }
        });
      }
    }
    return suggestions;
  }

  function filterCategories(searchValue) {
    Array.from(mainCategoryList.children).forEach((li) => {
      const text = li.textContent.toLowerCase();
      li.style.display = text.includes(searchValue.toLowerCase()) ? "" : "none";
    });
  }
});
