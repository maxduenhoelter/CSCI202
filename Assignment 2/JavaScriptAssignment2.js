document.querySelectorAll('th').forEach(cell => {
    cell.addEventListener('mouseover', () => {
        const descriptionDiv = cell.querySelector('.description');
        let descriptionText;
        const imageAlt = cell.querySelector('img').alt;
        switch (imageAlt) { 
            case 'Dynamic Rope':
                descriptionText = 'A stretchable rope used to protect climbers during falls, ensuring safety while climbing and rappelling.';
                break;
            case 'Climbing Harness':
                descriptionText = 'Wraps around your waist and legs to securely attach you to the rope or belay system.';
                break;
            case 'Quickdraws':
                descriptionText = 'Pairs of carabiners connected by a sling, used to clip the rope to protection points during sport climbing.';
                break;
            case 'Locking Carabiners':
                descriptionText = 'Secure clips with locking mechanisms for critical connections like belaying or anchoring.';
                break;
            case 'Personal Anchor System (PAS)':
                descriptionText = 'A webbing chain used to safely clip yourself into the anchor point at the top of a route.';
                break;
            case 'Chalk':
                descriptionText = 'Powder or blocks to keep your hands dry and improve grip on the rock or climbing holds.';
                break;
            case 'Helmet':
                descriptionText = 'Protective headgear to shield you from falling debris and impacts during climbing activities.';
                break;
            case 'Climbing Shoes':
                descriptionText = 'Specialized footwear designed for grip and precision on rock faces and climbing holds.';
                break;
            default:
                descriptionText = 'No description available.';
        }
        descriptionDiv.textContent = descriptionText;
    });

    cell.addEventListener('mouseout', () => {
        const descriptionDiv = cell.querySelector('.description');
        descriptionDiv.textContent = ''; 
    });
});

document.addEventListener('keydown', (event) => {
    const imageDisplayDiv = document.getElementById('image-display'); 
    let imageSrc, altText;

    switch (event.key) {
        case 'ArrowUp':
            imageSrc = 'images/belayimage.jpg';
            altText = 'Up Arrow Image';
            break;
        case 'ArrowDown': 
            imageSrc = 'images/climbingimage.png'; 
            altText = 'Down Arrow Image';
            break;
        case 'ArrowLeft': 
            imageSrc = 'images/topropeimage.png';
            altText = 'Left Arrow Image';
            break;
        case 'ArrowRight':
            imageSrc = 'images/anchorimage.png';
            altText = 'Right Arrow Image';
            break;
        default:
            imageSrc = ''; 
            altText = '';
    }

    if (imageSrc) {
        imageDisplayDiv.innerHTML = `<img src="${imageSrc}" alt="${altText}">`;
    } else {
        imageDisplayDiv.innerHTML = ''; 
    }
});