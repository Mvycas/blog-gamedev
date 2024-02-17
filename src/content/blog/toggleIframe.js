
    export function toggleIframe() 
	{
        var iframe = document.getElementById('gameFrame');
        var button = document.getElementById('toggleButton');
        if (iframe.style.display === 'none' || iframe.style.display === '') {
            iframe.style.display = 'block';
            button.textContent = 'Stop Game';
        } else {
            iframe.style.display = 'none';
            button.textContent = 'Play Game';
        }
    }
