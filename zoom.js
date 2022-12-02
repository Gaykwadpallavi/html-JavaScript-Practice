function zoomIn()
{
    let photos = document.getElementById('image');
    photos.width += 50;
    photos.height += 50;;
}
function zoomOut()
{
    let photos = document.getElementById('image');
    photos.width -= 50;
    photos.height -= 50;;
}