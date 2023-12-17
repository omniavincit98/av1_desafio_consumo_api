async function loadSearch(search, listPosts, setShowPosts) {
    if (search != undefined && search != '') {
        const showPosts = listPosts.filter(el => el.body.includes(search) || el.title.includes(search))
        setShowPosts(showPosts)
    } else {
        setShowPosts(listPosts)
    }

}

export default loadSearch