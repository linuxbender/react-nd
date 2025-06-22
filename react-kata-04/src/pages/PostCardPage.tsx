import {type Post, PostCardCompound} from "@/components/post/PostCompound.tsx";

export const PostCardPage = () => {

    const post: Post = {
        id: '1',
        title: 'Sample Post Title',
        content: 'This is a sample post content.',
        user: {
            id: '1',
            name: 'John Doe'
        }
    };

    return (
        <div>
            <PostCardCompound post={post}>
                <PostCardCompound.Title/>
                <PostCardCompound.Content/>
                <PostCardCompound.User/>
            </PostCardCompound>
        </div>
    );
}

export default PostCardPage;