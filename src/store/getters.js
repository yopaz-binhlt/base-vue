const getters = {
  count: (state) => state.countStore.count,
  test: (state) => state.testStore.count,
  auth: (state) => state.authStore.isLogin,
  category: (state) => state.categoryStore.category,
};
export default getters;
