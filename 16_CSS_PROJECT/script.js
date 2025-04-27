document.addEventListener('DOMContentLoaded', function() {
    const gridCells = document.getElementById('gridCells');
    const weeks = 7;
    const days = 30;
    
    // Generate grid cells (7 rows x 30 columns)
    for (let row = 0; row < weeks; row++) {
        for (let col = 0; col < days; col++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            
            // Random activity level (0-5)
            let level = Math.floor(Math.random() * 6);
            
            // Make weekends less active
            if (row >= 5 && Math.random() > 0.7) {
                level = 0;
            }
            
            cell.classList.add(`level-${level}`);
            cell.setAttribute('data-count', level);
            cell.setAttribute('title', `${level} contributions`);
            
            gridCells.appendChild(cell);
        }
    }
});