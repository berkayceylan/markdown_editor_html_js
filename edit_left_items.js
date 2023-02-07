

const sortableElement = document.getElementById("sortable");
Sortable.create(sortableElement);

const addButton = document.getElementById("add-button");
let counter = 5;

addButton.addEventListener("click", function () {
    const newSection = document.createElement("span");
    newSection.classList.add("nav-link", "d-flex", "justify-content-between", "left-section-item");
    newSection.innerHTML = '<span class="item-text">Section ' + counter + '</span><button id="" class="btn btn-info mr-2 edit-btn">E</button><button class="btn btn-danger delete-button">X</button>';
    
    sortableElement.appendChild(newSection);
    counter++;
});

sortableElement.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        event.target.closest(".nav-link").remove();
    }
});

$(document).on("click", ".edit-btn", function () {
    let index = $(this).parent().index();
    var $list = $("#sortable");
    var $li = $list.children().eq(index).children(".item-text");
    var item = prompt("Enter the new name:", $li.text());
    $li.html(item);
    $("#edit-btn").click(function () {
        editItem(index);
    });
});