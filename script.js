document.getElementById('no').addEventListener('mouseover', function(event) {
    const x = Math.random() * (window.innerWidth - this.clientWidth);
    const y = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.position = 'absolute';
    this.style.left = x + 'px';
    this.style.top = y + 'px';
});

document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('envelope').innerHTML = `
    <img src="https://pa1.aminoapps.com/7029/8e2ebb45adef598816e2cda77f543887fa80e093r1-320-251_00.gif" alt="Любов gif">
    <p style="margin-top: 20px; font-size: 24px; color: rgb(255, 138, 186);">Ураа!! хепі хепі хеепі</p>
    `;
});
