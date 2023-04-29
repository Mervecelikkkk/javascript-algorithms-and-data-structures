
function urlSlug(title) {
    return title.trim().split(/\s+/).join("-").toLowerCase();
}