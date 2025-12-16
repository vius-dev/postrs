
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ReactionBar from '@/components/ReactionBar';
import RepostModal from '@/components/RepostModal';
import PollView from '@/components/PollView';
import QuotedPost from '@/components/QuotedPost';
import { api } from '@/lib/api';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const router = useRouter();
  const [reaction, setReaction] = useState(post.userReaction);
  const [isRepostModalVisible, setRepostModalVisible] = useState(false);

  const handleComment = () => {
    router.push(`/post/${post.id}`);
  };

  const handleShare = () => {
    // TODO: Implement share sheet
    console.log('Sharing...');
  };

  const handleReaction = async (action: 'LIKE' | 'DISLIKE') => {
    const currentReaction = reaction;
    const newReaction = currentReaction === action ? 'NONE' : action;
    setReaction(newReaction);
    try {
      await api.react(post.id, newReaction);
    } catch (error) {
      setReaction(currentReaction); // Revert on error
    }
  };

  const handleRepost = () => {
    api.repost(post.id);
    setRepostModalVisible(false);
  };

  const handleQuote = () => {
    router.push({ pathname: '/compose', params: { quotePostId: post.id } });
    setRepostModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: post.author.avatar }} style={styles.avatar} />
      <View style={styles.contentContainer}>
        {post.repostedBy && (
          <View style={styles.repostContainer}>
            <Ionicons name="repeat" size={16} color="#888" />
            <Text style={styles.repostText}>{post.repostedBy.name} reposted</Text>
          </View>
        )}
        <View style={styles.authorContainer}>
          <Text style={styles.authorName}>{post.author.name}</Text>
          <Text style={styles.timestamp}>{new Date(post.createdAt).toLocaleDateString()}</Text>
        </View>
        <Text style={styles.content}>{post.content}</Text>
        {post.poll && <PollView poll={post.poll} />}
        {post.quotedPost && <QuotedPost post={post.quotedPost} />}
        <ReactionBar
          onComment={handleComment}
          onRepost={() => setRepostModalVisible(true)}
          onShare={handleShare}
          onReaction={handleReaction}
          reaction={reaction}
          counts={{
            likes: post.likeCount,
            dislikes: post.dislikeCount,
            reposts: post.repostCount,
            comments: post.commentCount,
          }}
        />
      </View>
      <RepostModal
        visible={isRepostModalVisible}
        onClose={() => setRepostModalVisible(false)}
        onRepost={handleRepost}
        onQuote={handleQuote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
  },
  repostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  repostText: {
    color: '#888',
    marginLeft: 5,
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authorName: {
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#888',
  },
  content: {
    marginTop: 5,
  },
});
