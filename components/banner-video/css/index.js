import { css } from 'lit';

const styles = css`
.full .lazy-iframe,
.left .lazy-iframe,
.left-cut .lazy-iframe,
.right .lazy-iframe,
.right-cut .lazy-iframe {
    max-width: 100%;
    object-fit: cover;
    width: 100%;
}

.full iframe,
.left iframe,
.left-cut iframe,
.right iframe,
.right-cut iframe {
    max-width: 100%;
    object-fit: cover;
    width: 100%;
}

@media screen and (min-width: 768px) {
    .left-cut iframe {
        clip-path: polygon(0 0, 0 100%, 90% 100%, 100% 0);
    }
    .right-cut iframe {
        clip-path: polygon(0 0, 10% 100%, 100% 100%, 100% 0);
    }
}`;

export { styles };