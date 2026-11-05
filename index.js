function changeTheme() {
    if (document.getElementById('body').classList.contains('inverted')) {
        document.getElementById('body').classList.remove('inverted')
        document.querySelectorAll('.box').forEach(e => {
            e.classList.replace('hover:bg-white/80', 'hover:bg-slate-900/90')
        })
    }
    else {
        document.getElementById('body').classList.add('inverted')
        document.querySelectorAll('.box').forEach(e => {
            e.classList.add('hover:bg-white/80')
            e.classList.remove('hover:bg-slate-900/80')
        })

    }
}

function changeFont() {
    console.log('font changed')
    if (document.getElementById('body').classList.contains('serif')) {
        document.getElementById('body').classList.remove('serif')
        document.getElementById('body').classList.add('geist')
    }
    else if (document.getElementById('body').classList.contains('geist')) {
        document.getElementById('body').classList.remove('geist')
        document.getElementById('body').classList.add('geist-mono')
    }
    else if (document.getElementById('body').classList.contains('geist-mono')) {
        document.getElementById('body').classList.remove('geist-mono')
        document.getElementById('body').classList.add('vt323')
    }
    else if (document.getElementById('body').classList.contains('vt323')) {
        document.getElementById('body').classList.remove('vt323')
        document.getElementById('body').classList.add('serif')
    }
}