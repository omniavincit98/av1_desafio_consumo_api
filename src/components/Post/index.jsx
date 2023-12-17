import { Container } from './styles';

export function Post(props) {
    return (
        <Container onClick={props.onClick}>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <span>{props.date}</span>
        </Container>
    );
}