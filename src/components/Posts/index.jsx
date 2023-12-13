import { Post } from '../Post/index'
import { Container } from "./styles"

export function Posts() {
    return (
        <Container>
            <Post />
            <Post />
            <Post />
            <Post />
        </Container>
    )
}