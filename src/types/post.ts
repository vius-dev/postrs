
import { Poll } from "@/types/poll";

export type ReactionAction = 'LIKE' | 'DISLIKE' | 'NONE';

export type Author = {
    name: string;
    avatar: string;
};

export type Comment = {
    id: string;
    author: Author;
    content: string;
    createdAt: string;
    replies?: Comment[];
};

export type Post = {
  id: string;
  author: Author;
  content: string;
  createdAt: string;
  likeCount: number;
  dislikeCount: number;
  repostCount: number;
  commentCount: number;
  userReaction: ReactionAction;
  repostedBy?: Author;
  quotedPost?: Post;
  poll?: Poll;
  comments?: Comment[];
};
