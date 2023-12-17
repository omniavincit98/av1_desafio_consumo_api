import { useEffect, useState } from 'react'
import { Post } from '../Post'
import { ListPosts } from './posts.js'
import { Search } from './search'
import loadCountPost from '../../services/loadCountPost.js'
import loadPosts from '../../services/loadPosts.js'
import loadSearch from '../../services/loadSearch.js'
import { Modal } from '../Modal/index.jsx'

export function Posts() {
    const [listPosts, setListPosts] = useState()
    const [showPosts, setShowPosts] = useState()
    const [search, setSearch] = useState()
    const [countPost, setCountPost] = useState()
    const [selectedPost, setSelectedPost] = useState(null)

    useEffect(() => {
        loadCountPost(setCountPost)
        loadPosts(setListPosts, setShowPosts)
    }, [])

    useEffect(() => {
        loadSearch(search, listPosts, setShowPosts)
    }, [search])

    const openPost = (post) => {
        setSelectedPost(post)
    }

    const closePost = () => {
        setSelectedPost(null)
    }

    return (
        <>
            <Search>
                <h1>Publicações</h1>
                <input
                    type="search"
                    name="issues"
                    id="issues"
                    placeholder="Buscar conteúdo"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div id="countPost">{countPost}</div>
            </Search>
            <ListPosts>
                {showPosts &&
                    showPosts.map((issue) => (
                        <Post
                            key={issue.id}
                            body={issue.body}
                            title={issue.title}
                            date={issue.created_at}
                            onClick={() => openPost(issue)}
                        />
                    ))}
            </ListPosts>
            {selectedPost && (
                <Modal onClose={closePost}>
                    <h1>{selectedPost.title}</h1>
                    <p>{selectedPost.entireBody}</p>
                    <span>{selectedPost.date}</span>
                </Modal>
            )}
        </>
    )
}