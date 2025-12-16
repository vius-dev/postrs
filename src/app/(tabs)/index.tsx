
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { api } from '@/lib/api';
import FeedList from '@/components/FeedList';
import FAB from '@/components/FAB';
import { useRouter } from 'expo-router';

// Assuming a type definition for Post
type Post = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likeCount: number;
  dislikeCount: number;
  repostCount: number;
  commentCount: number;
  userReaction: 'LIKE' | 'DISLIKE' | 'NONE';
};

export default function FeedScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const router = useRouter();

  const fetchPosts = async (refresh = false) => {
    if (loading && !refresh) return;
    setLoading(true);

    const newCursor = refresh ? undefined : cursor;
    const res = await api.fetchFeed(newCursor);

    if (res.posts) {
      setPosts(prevPosts => refresh ? res.posts : [...prevPosts, ...res.posts]);
      setCursor(res.nextCursor);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(true); // Initial fetch
  }, []);

  const handleRefresh = () => {
    fetchPosts(true);
  };

  const handleLoadMore = () => {
    if (cursor) {
      fetchPosts();
    }
  };

  const handleCompose = () => {
    router.push('/compose');
  };

  if (loading && posts.length === 0) {
    return <ActivityIndicator style={styles.centered} size="large" />;
  }

  return (
    <View style={styles.container}>
      <FeedList
        posts={posts}
        onRefresh={handleRefresh}
        onLoadMore={handleLoadMore}
        refreshing={loading}
      />
      <FAB onPress={handleCompose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
