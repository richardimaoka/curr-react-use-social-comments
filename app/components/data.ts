export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

const mockComments: Comment[] = [
  { id: '1', author: 'Alice', content: 'Great video!', timestamp: '2026-03-08T10:00:00Z' },
  { id: '2', author: 'Bob', content: 'Very informative.', timestamp: '2026-03-08T10:05:00Z' },
  { id: '3', author: 'Charlie', content: 'I learned a lot.', timestamp: '2026-03-08T10:10:00Z' },
];

export async function fetchComments(videoId: string): Promise<Comment[]> {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 1500)); 
  console.log(`Fetching comments for video: ${videoId}`);
  return mockComments;
}
