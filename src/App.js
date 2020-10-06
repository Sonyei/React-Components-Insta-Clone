/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from 'react';
import Post from './components/Posts/Post';
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData)
  const [value, setValue] = useState('')
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**. x 
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore. x 
  // To make the search bar work (which is stretch) we'd need another state to hold the search term. x 

  function likePost(postId) {
    setPosts(posts.map(postObj => {
return postObj.id === postId ? 
{...postObj, likes: postObj.likes + 1}: postObj
}))
 };
    
    /*

      This function serves the purpose of increasing the number of likes by one, of the post with a given id.x

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.x

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.x
     */
 

  return (
    <div className='App'>
    <SearchBar search={SearchBar}/>
    <Posts posts={posts} likeButton={likePost}/>
      {/* Add SearchBar and Posts here to render them */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
