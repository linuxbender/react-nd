import {createContext, type PropsWithChildren, useContext} from "react";

export type Post = {
    id: string;
    title: string;
    content: string;
    user: {
        id: string;
        name: string;
    }
}

type PostCardContext = {
    post: Post;
}

export type PostCard = PropsWithChildren & {
    post: Post;
}

const PostCardContext = createContext<PostCardContext | null>(null);
const usePostCardContext = () => {
    const context = useContext(PostCardContext);
    if (!context) {
        throw new Error("usePostCardContext must be used within a PostCardContext.Provider");
    }
    return context;
}


export const PostCardCompound = ({children, post}: PostCard) => {
    return (
        <PostCardContext.Provider value={{post}}>
            {children}
        </PostCardContext.Provider>
    );
}

PostCardCompound.Title = function PostCardTitle() {
    const {post} = usePostCardContext();
    return <h2>{post.title}</h2>;
}

PostCardCompound.Content = function PostCardContent() {
    const {post} = usePostCardContext();
    return <p>{post.content}</p>;
}

PostCardCompound.User = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {post} = usePostCardContext();
    return (<div key={post.user.id}>
        <p>Author: {post.user.name}</p>
    </div>);
}

export default PostCardCompound;