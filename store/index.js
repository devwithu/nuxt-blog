import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                // if (!process.client) {
                //     console.log(context.req)
                // }
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    vuexContext.commit("setPosts", [
                        { id: '1', title: 'First Post', previewText: 'This tis our first psot!',
                          thumbnail: 'https://static.coindesk.com/wp-content/uploads/2018/11/shutterstock_1098423464.jpg' },
                        { id: '2', title: 'First2 Post', previewText: 'This tis our first psot!',
                          thumbnail: 'https://static.coindesk.com/wp-content/uploads/2018/11/shutterstock_1098423464.jpg' },
                        { id: '3', title: 'First3 Post', previewText: 'This tis our first psot!',
                          thumbnail: 'https://static.coindesk.com/wp-content/uploads/2018/11/shutterstock_1098423464.jpg' }
                      ]);
                    resolve();
                  }, 1000);
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore