
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Comment } from '@/types/post';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: comment.author.avatar }} style={styles.avatar} />
      <View style={styles.contentContainer}>
        <View style={styles.authorContainer}>
          <Text style={styles.authorName}>{comment.author.name}</Text>
          <Text style={styles.timestamp}>{new Date(comment.createdAt).toLocaleDateString()}</Text>
        </View>
        <Text style={styles.content}>{comment.content}</Text>
        {comment.replies && comment.replies.length > 0 && (
          <View style={styles.repliesContainer}>
            {comment.replies.map(reply => (
              <CommentCard key={reply.id} comment={reply} />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
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
  repliesContainer: {
    marginTop: 10,
    marginLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
    paddingLeft: 10,
  },
});

export default CommentCard;
