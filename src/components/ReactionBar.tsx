
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ReactionAction = 'LIKE' | 'DISLIKE' | 'NONE';

interface ReactionBarProps {
  onComment: () => void;
  onRepost: () => void;
  onShare: () => void;
  onReaction: (action: 'LIKE' | 'DISLIKE') => void;
  reaction: ReactionAction;
  counts: {
    likes: number;
    dislikes: number;
    reposts: number;
    comments: number;
  };
}

export default function ReactionBar({ onComment, onRepost, onShare, onReaction, reaction, counts }: ReactionBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onComment} style={styles.button}>
        <Ionicons name="chatbubble-outline" size={20} color="#888" />
        <Text style={styles.count}>{counts.comments}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRepost} style={styles.button}>
        <Ionicons name="repeat-outline" size={20} color="#888" />
        <Text style={styles.count}>{counts.reposts}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onReaction('LIKE')} style={styles.button}>
        <Ionicons name={reaction === 'LIKE' ? 'heart' : 'heart-outline'} size={20} color={reaction === 'LIKE' ? 'red' : '#888'} />
        <Text style={styles.count}>{counts.likes}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onReaction('DISLIKE')} style={styles.button}>
        <Ionicons name={reaction === 'DISLIKE' ? 'heart-dislike' : 'heart-dislike-outline'} size={20} color={reaction === 'DISLIKE' ? 'blue' : '#888'} />
        <Text style={styles.count}>{counts.dislikes}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onShare} style={styles.button}>
        <Ionicons name="share-social-outline" size={20} color="#888" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    marginLeft: 5,
    color: '#888',
  },
});
