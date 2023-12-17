async function loadCountPost(setCountPost) {
    const response = await fetch(`https://api.github.com/repos/omniavincit98/av1_desafio_consumo_api/issues`).then(response => response.json())
    response.length == 1 ? setCountPost(`${response.length} publicação`) : setCountPost(`${response.length} publicações`)
}

export default loadCountPost