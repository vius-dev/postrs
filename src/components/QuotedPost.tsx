
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface QuotedPostProps {
    post: {
      author: {
        name: string;
      };
      content: string;
      createdAt: string;
    };
  }

const QuotedPost = ({ post }: QuotedPostProps) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.author}>{post.author.name}</Text>
      <Text style={styles.timestamp}>{new Date(post.createdAt).toLocaleDateString()}</Text>
    </View>
    <Text>{post.content}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  author: {
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#888',
  },
});

export default QuotedPost;
