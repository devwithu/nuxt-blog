<template>
    <section class="post-list">
      <PostPreview 
        id="1"
        thumbnail="https://static.coindesk.com/wp-content/uploads/2018/11/shutterstock_1098423464.jpg"
        title="Hello there!"
        previewText="This my first post!" /> 
      <PostPreview 
        id="2"
        thumbnail="https://static.coindesk.com/wp-content/uploads/2018/11/shutterstock_1098423464.jpg"
        title="Hello there!"
        previewText="This my first post!" /> 
      <PostPreview 
        id="3"
        thumbnail="https://static.coindesk.com/wp-content/uploads/2018/11/shutterstock_1098423464.jpg"
        title="Hello there!"
        previewText="This my first post!" /> 
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

