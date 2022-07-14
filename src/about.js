function about() {
    const about = document.createElement('div');
    about.setAttribute('id', 'about');

    const title = document.createElement('h1');
    title.textContent = 'ABOUT US';

    about.appendChild(title);

    const story = document.createElement('p');
    story.setAttribute('id', 'story');
    story.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet dapibus ante. 
                        Proin volutpat sem quis libero rhoncus, et ultricies arcu iaculis. Ut pharetra vehicula tempus. 
                        Fusce nec metus est. Cras et risus vel massa volutpat ultrices. Pellentesque in volutpat mi. Donec nec ex elit. 
                        Fusce vel lectus ac magna blandit vestibulum. Etiam sollicitudin volutpat quam, 
                        sit amet venenatis lectus condimentum et. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Fusce commodo quam ac neque ultricies, eu consectetur tellus commodo. Mauris felis massa, cursus id odio non, 
                        rhoncus pellentesque tortor. `;

    about.appendChild(story);

    return about;
}

export {
    about
};