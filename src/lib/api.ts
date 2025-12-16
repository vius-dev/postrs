
// This file will abstract all Supabase calls.
// It will be extended with function stubs for now.
import { Post, ReactionAction } from "@/types/post";
import { PollChoice } from "@/types/poll";

// TODO: Phase-3 - Implement actual Supabase calls

type PendingReaction = {
  postId: string;
  action: ReactionAction;
};

const allPosts: Post[] = [
  {
    id: '7',
    repostedBy: { name: 'Emily', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704g' },
    author: { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    content: 'This is the first post! So excited to be here. #newbeginnings',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(), // Repost time
    likeCount: 10,
    dislikeCount: 1,
    repostCount: 5,
    commentCount: 2,
    userReaction: 'NONE',
    comments: [
      {
        id: 'c1',
        author: { name: 'Grace', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704i' },
        content: 'Welcome! Great to have you here.',
        createdAt: new Date(Date.now() - 1000 * 60 * 55).toISOString(),
        replies: [
          {
            id: 'r1',
            author: { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
            content: 'Thanks, Grace!',
            createdAt: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
          },
        ],
      },
      {
        id: 'c2',
        author: { name: 'Heidi', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704j' },
        content: 'Looking forward to your posts!',
        createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
        replies: [],
      },
    ],
  },
  {
    id: '8',
    author: { name: 'Frank', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704h' },
    content: 'This is a great point. I would also add...',
    quotedPost: {
      id: '1',
      author: { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
      content: 'This is the first post! So excited to be here. #newbeginnings',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      likeCount: 10,
      dislikeCount: 1,
      repostCount: 5,
      commentCount: 2,
      userReaction: 'NONE',
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    likeCount: 15,
    dislikeCount: 0,
    repostCount: 3,
    commentCount: 4,
    userReaction: 'LIKE',
  },
  {
    id: '1',
    author: { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    content: 'This is the first post! So excited to be here. #newbeginnings',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    likeCount: 10,
    dislikeCount: 1,
    repostCount: 5,
    commentCount: 2,
    userReaction: 'NONE',
  },
  {
    id: '2',
    author: { name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e' },
    content: 'Hello world! This is a great day. Just enjoying the weather.',
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    likeCount: 25,
    dislikeCount: 0,
    repostCount: 12,
    commentCount: 8,
    userReaction: 'LIKE',
  },
  {
    id: '3',
    author: { name: 'Alice', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f' },
    content: 'Just had the best coffee ever. Highly recommend the new cafe downtown.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    likeCount: 50,
    dislikeCount: 2,
    repostCount: 20,
    commentCount: 15,
    userReaction: 'NONE',
  },
  {
    id: '4',
    author: { name: 'Bob', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a' },
    content: 'Working on a new project. It is going to be amazing! #coding #developer',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    likeCount: 150,
    dislikeCount: 5,
    repostCount: 75,
    commentCount: 30,
    userReaction: 'DISLIKE',
  },
  {
    id: '5',
    author: { name: 'Charlie', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704b' },
    content: 'Is anyone else watching the new season of that show? No spoilers!',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    likeCount: 80,
    dislikeCount: 3,
    repostCount: 10,
    commentCount: 25,
    userReaction: 'NONE',
  },
  {
    id: '6',
    author: { name: 'David', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704c' },
    content: 'Just finished a marathon. Feeling tired but accomplished. #running',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    likeCount: 200,
    dislikeCount: 10,
    repostCount: 50,
    commentCount: 40,
    userReaction: 'LIKE',
  },
];

export const api = {
  /**
   * Creates a new post.
   * @param post - The post to create.
   * @returns A promise that resolves to the created post.
   */
  createPost: async (post: { content: string }): Promise<Post> => {
    console.log(`Creating post with content: ${post.content}`);
    const newPost: Post = {
      id: (allPosts.length + 1).toString(),
      author: { name: 'Current User', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }, // Replace with actual user
      content: post.content,
      createdAt: new Date().toISOString(),
      likeCount: 0,
      dislikeCount: 0,
      repostCount: 0,
      commentCount: 0,
      userReaction: 'NONE',
    };
    allPosts.unshift(newPost);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return newPost;
  },

    /**
   * Creates a new poll.
   * @param poll - The poll to create.
   * @returns A promise that resolves to the created poll.
   */
     createPoll: async (poll: { question: string, choices: PollChoice[] }): Promise<Post> => {
      console.log(`Creating poll with question: ${poll.question} and choices: ${poll.choices.map(c => c.text).join(', ')}`)
      const newPost: Post = {
        id: (allPosts.length + 1).toString(),
        author: { name: 'Current User', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }, // Replace with actual user
        content: poll.question,
        poll: {
          choices: poll.choices.map(choice => ({ ...choice, vote_count: 0 })),
          question: ""
        },
        createdAt: new Date().toISOString(),
        likeCount: 0,
        dislikeCount: 0,
        repostCount: 0,
        commentCount: 0,
        userReaction: 'NONE',
      };
      allPosts.unshift(newPost);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      return newPost;
    },

  /**
   * Fetches the main feed.
   * @param cursor - The pagination cursor.
   * @returns A promise that resolves to a list of posts.
   */
  fetchFeed: async (cursor?: string): Promise<{ posts: Post[], nextCursor: string | undefined }> => {
    console.log(`Fetching feed with cursor: ${cursor}`);
    const pageSize = 4;
    const startIndex = cursor ? parseInt(cursor, 10) : 0;
    
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

    const posts = allPosts.slice(startIndex, startIndex + pageSize);
    const nextCursor = startIndex + pageSize < allPosts.length ? (startIndex + pageSize).toString() : undefined;

    return {
      posts,
      nextCursor,
    };
  },

  fetchPost: async (postId: string): Promise<Post | undefined> => {
    console.log(`Fetching post with id: ${postId}`);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    const post = allPosts.find(p => p.id === postId);
    return post;
  },

  /**
   * Submits a reaction to a post.
   * @param postId - The ID of the post to react to.
   * @param action - The reaction action (LIKE, DISLIKE).
   * @returns A promise that resolves when the action is complete.
   */
  react: async (postId: string, action: ReactionAction): Promise<void> => {
    console.log(`Reacting to post ${postId} with ${action}`);
    // No-op for now
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return;
  },
  
  /**
   * Batches a series of reactions.
   * @param reactions - The reactions to batch.
   * @returns A promise that resolves when the batch is complete.
   */
  batchReact: async (reactions: PendingReaction[]): Promise<void> => {
    console.log('Batching reactions:', reactions);
    // In a real app, you'd send this to your backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    return;
  },

  /**
   * Reposts a post.
   * @param postId - The ID of the post to repost.
   * @returns A promise that resolves when the action is complete.
   */
  repost: async (postId: string): Promise<void> => {
    console.log(`Reposting post ${postId}`);
    await new Promise(resolve => setTimeout(resolve, 500));
    return;
  },

  /**
   * Quotes a post.
   * @param postId - The ID of the post to quote.
   * @param text - The quote text.
   * @returns A promise that resolves when the action is complete.
   */
  quote: async (postId: string, text: string): Promise<void> => {
    console.log(`Quoting post ${postId} with text: "${text}"`);
    await new Promise(resolve => setTimeout(resolve, 500));
    return;
  },

  /**
   * Bookmarks a post.
   * @param postId - The ID of the post to bookmark.
   * @returns A promise that resolves when the action is complete.
   */
  bookmark: async (postId: string): Promise<void> => {
    console.log(`Bookmarking post ${postId}`);
    await new Promise(resolve => setTimeout(resolve, 500));
    return;
  },

  /**
   * Sends a password reset link to the user's email.
   * @param email - The user's email address.
   * @returns A promise that resolves when the action is complete.
   */
  forgotPassword: async (email: string): Promise<void> => {
    console.log(`Sending password reset link to ${email}`);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return;
  },
};
