async function loadPosts(setListPosts, setShowPosts) {
    const response = await fetch(`https://api.github.com/repos/omniavincit98/av1_desafio_consumo_api/issues`).then(response => response.json())
    response.forEach(element => {
        element.entireBody = element.body
        element.body = element.body.substr(0, 300) + '...'
        const date = new Date(element.created_at)
        const today = new Date()
        const year = today.getFullYear() - date.getFullYear()
        const month = today.getMonth() - date.getMonth()
        const day = today.getDate() - date.getDate()
        if (year > 1) {
            element.created_at = `Há ${year} anos`
        } else if (year == 1) {
            element.created_at = `Há ${year} ano`
        } else if (month > 1) {
            element.created_at = `Há ${month} meses`
        } else if (month == 1) {
            element.created_at = `Há ${month} mês`
        } else if (day > 1) {
            element.created_at = `Há ${day} dias`
        } else if (day == 1) {
            element.created_at = `Há ${day} dia`
        } else {
            element.created_at = `Hoje`
        }
    })
    setListPosts(response)
    setShowPosts(response)
}

export default loadPosts