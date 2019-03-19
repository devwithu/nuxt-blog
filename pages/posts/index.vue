<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
 </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    console.log('asyncData is executed')
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          { id: '1', title: 'First Post', previewText: 'This tis our first psot!',
            thumbnail: 'https://static.coindesk.com/wp-content/uploads/2018/11/shutterstock_1098423464.jpg' },
          { id: '2', title: 'First2 Post', previewText: 'This tis our first psot!',
            thumbnail: 'https://static.coindesk.com/wp-content/uploads/2018/11/shutterstock_1098423464.jpg' },
          { id: '3', title: 'First3 Post', previewText: 'This tis our first psot!',
            thumbnail: 'https://static.coindesk.com/wp-content/uploads/2018/11/shutterstock_1098423464.jpg' }
        ]
      })
    },1500)
  },  
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
