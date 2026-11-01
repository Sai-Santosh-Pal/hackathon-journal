function changeTheme() {
    if (document.getElementById('body').classList.contains('inverted')) {
        document.getElementById('body').classList.remove('inverted')
    }
    else {
        document.getElementById('body').classList.add('inverted')
    }
}