
const contentArea = document.getElementById("content-area");
const editableSection = document.getElementById("editable-section");
const nonEditableSection = document.getElementById("non-editable-section");

function setEditable(editable = true) {
    if (editable) {
        editableSection.style.visibility = "visible"
        nonEditableSection.style.visibility = "hidden"
    } else {
        editableSection.style.visibility = "hidden"
        nonEditableSection.style.visibility = "visible"
    }
}

document.querySelector("#editable-section").height = ""
document.querySelector("#editable-section").height = this.scrollHeight + "px";
document.querySelector("#editable-section").addEventListener("input", function () {
    this.style.height = "";
    this.style.height = this.scrollHeight + "px";
});
$(document).ready(function () {
    sampleMarkdown = `# Headline

This is a paragraph of text.

## Subhead

- This is a bullet point.
- Another bullet point.

1. This is a numbered list item.
2. Another numbered list item.

**This text is bold.**
`
        $("#editable-section").val(sampleMarkdown)
    $("#non-editable-section").html(marked($("#editable-section").val()));

    $("#editable-section").on("input", function () {
        var markdown = $(this).val();
        var html = marked(markdown);
        $("#non-editable-section").html(html);
    });

});